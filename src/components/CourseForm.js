import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert, Platform, TextInput as RNTextInput } from 'react-native';
import { TextInput, Button, Text, IconButton, Card } from 'react-native-paper';
import CourseDetails from '../screens/CourseDetails';
import { colors } from '../utils/styles';
import { stylesCourseForm as styles } from '../utils/styles';

const CourseForm = ({ onUpdate, onPublish, initialData, onClose, onPreview, editingData }) => {
    const fileInputRef = useRef(null);
    const [courseDetails, setCourseDetails] = useState({ ...initialData });
    const [expandedSection, setExpandedSection] = useState('courseDetails');
    const [activeTab, setActiveTab] = useState('ELEMENTS');
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    const handleChange = (name, value) => {
        const updatedDetails = {
            ...courseDetails,
            [name]: value,
        };
        setCourseDetails(updatedDetails);
        setHasUnsavedChanges(true);
        onUpdate(updatedDetails);
    };

    const handleSave = () => {
        const requiredFields = ['title', 'description', 'price', 'instructorName', 'websiteUrl'];
        const missingFields = requiredFields.filter(field => !courseDetails[field]);

        if (missingFields.length > 0) {
            Alert.alert(
                'Required Fields Missing',
                `Please fill in the following fields: ${missingFields.join(', ')}`,
                [{ text: 'OK' }]
            );
            return;
        }

        onUpdate(courseDetails);
        setHasUnsavedChanges(false);

        Alert.alert('Success', 'Course details saved successfully!', [{ text: 'OK' }]);
    };

    const handleReset = () => {
        if (hasUnsavedChanges) {
            Alert.alert(
                'Confirm Reset',
                'Are you sure you want to reset all changes?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Reset',
                        onPress: () => {
                            setCourseDetails(initialData || {});
                            setHasUnsavedChanges(false);
                            onUpdate(initialData);
                        }
                    }
                ]
            );
        }
    };

    const handleClose = () => {
        if (hasUnsavedChanges) {
            if (Platform.OS === 'web') {
                const confirmClose = window.confirm('Are you sure you want to close? All unsaved changes will be lost.');
                if (confirmClose) {
                    onClose();
                }
            } else {
                Alert.alert(
                    'Unsaved Changes',
                    'Are you sure you want to close? All unsaved changes will be lost.',
                    [
                        { text: 'Cancel', style: 'cancel' },
                        {
                            text: 'Close',
                            style: 'destructive',
                            onPress: () => onClose()
                        }
                    ]
                );
            }
        } else {
            onClose();
        }
    };

    const handlePublish = () => {
        const requiredFields = ['title', 'description', 'price', 'instructorName', 'websiteUrl'];
        const missingFields = requiredFields.filter(field => !courseDetails[field]);

        if (missingFields.length > 0) {
            if (Platform.OS === 'web') {
                alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
            } else {
                Alert.alert(
                    'Required Fields Missing',
                    `Please fill in the following fields: ${missingFields.join(', ')}`,
                    [{ text: 'OK' }]
                );
            }
            return;
        }
        onPublish(courseDetails);
        setHasUnsavedChanges(false);

        if (Platform.OS === 'web') {
            alert('Course details published successfully!');
        } else {
            Alert.alert(
                'Success',
                'Course details published successfully!',
                [{ text: 'OK' }]
            );
        }
    };

    const handleImageUpload = () => {
        if (Platform.OS === 'web' && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const updatedDetails = {
                    ...courseDetails,
                    instructorImage: e.target.result
                };
                setCourseDetails(updatedDetails);
                setHasUnsavedChanges(true);
                onUpdate(updatedDetails);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const SectionHeader = ({ title, isExpanded, onToggle }) => (
        <TouchableOpacity onPress={onToggle} style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <IconButton
                icon={isExpanded ? 'minus' : 'plus'}
                size={20}
                iconColor="#666"
                onPress={onToggle}
            />
        </TouchableOpacity>
    );

    const renderSectionContent = (section) => {
        if (section === 'courseDetails') {
            return (
                <View style={styles.sectionContent}>
                    <Text style={styles.inputLabel}>Course title*</Text>
                    <TextInput
                        value={courseDetails.title}
                        onChangeText={(value) => handleChange('title', value)}
                        style={styles.input}
                        mode="outlined"
                        outlineColor="#ddd"
                        placeholder="Enter course title"
                    />

                    <Text style={styles.inputLabel}>Course description*</Text>
                    <TextInput
                        value={courseDetails.description}
                        onChangeText={(value) => handleChange('description', value)}
                        style={styles.textArea}
                        multiline
                        numberOfLines={4}
                        mode="outlined"
                        outlineColor="#ddd"
                        placeholder="Enter course description"
                    />

                    <Text style={styles.inputLabel}>Add price*</Text>
                    <TextInput
                        value={courseDetails.price}
                        onChangeText={(value) => handleChange('price', value)}
                        style={styles.input}
                        mode="outlined"
                        outlineColor="#ddd"
                        placeholder="Enter price"
                        keyboardType="numeric"
                    />

                    <Text style={styles.inputLabel}>Enter website URL*</Text>
                    <TextInput
                        value={courseDetails.websiteUrl}
                        onChangeText={(value) => handleChange('websiteUrl', value)}
                        style={styles.input}
                        mode="outlined"
                        outlineColor="#ddd"
                        placeholder="Enter website URL"
                    />

                    {/* Instructor details card */}
                    <Card style={styles.card}>
                        <View style={styles.sectionContent}>
                            <Text style={styles.inputLabel}>Name of the instructor<Text style={{ color: colors._maroon }}>*</Text></Text>
                            <RNTextInput
                                value={courseDetails.instructorName}
                                onChangeText={(value) => handleChange('instructorName', value)}
                                style={styles.input}
                                placeholder="Enter instructor name"
                            />

                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: Platform.OS === 'web' ? 'none' : 'block' }}
                                accept="image/*"
                                onChange={handleFileChange}
                            />

                            <TouchableOpacity onPress={handleImageUpload} style={styles.uploadButton}>
                                <Text style={styles.uploadText}>+ Upload instructor image</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.addInstructorButton}>
                                <Text style={{ ...styles.addInstructorText, alignSelf: 'flex-end' }}>+ Add another instructor</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            );
        } else {
            return (
                <View style={styles.emptySection}>
                    <Text style={styles.emptyText}>Form coming soon...</Text>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topNav}>
                <View style={styles.navLeft}>
                    <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>Close editor</Text>
                    </TouchableOpacity>
                    <Text style={styles.editorTitle}>EDSHAALA</Text>
                </View>
                <View style={styles.navRight}>
                    <Button
                        mode="outlined"
                        style={styles.previewButton}
                        labelStyle={styles.previewButtonLabel}
                        onPress={onPreview}
                    >
                        Preview
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.publishButton}
                        labelStyle={styles.publishButtonLabel}
                        onPress={handlePublish}
                        disabled={!hasUnsavedChanges}
                        icon='pen'
                    >
                        Publish
                    </Button>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ ...styles.formContainer, backgroundColor: '#f6f6f6' }}>
                        <View style={styles.tabContainer}>
                            <TouchableOpacity
                                style={[styles.tab, activeTab === 'STYLING & STRUCTURE' && styles.activeTab]}
                                onPress={() => setActiveTab('STYLING & STRUCTURE')}
                            >
                                <Text style={[styles.tabText, activeTab === 'STYLING & STRUCTURE' && styles.activeTabText]}>
                                    STYLING & STRUCTURE
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tab, activeTab === 'ELEMENTS' && styles.activeTab]}
                                onPress={() => setActiveTab('ELEMENTS')}
                            >
                                <Text style={[styles.tabText, activeTab === 'ELEMENTS' && styles.activeTabText]}>
                                    ELEMENTS
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.formContent}>
                            {['courseDetails', 'Banner details', 'Packages offered', 'Instructor details',
                                'Course curriculum', 'Packages', 'FAQs', 'Testimonials', 'Footer'].map((section) => (
                                    <View key={section} style={{
                                        ...styles.formSection,
                                        height: expandedSection === section ? 'auto' : 50,
                                        borderColor: expandedSection === section ? colors._maroon : colors._lightGray
                                    }}>
                                        <SectionHeader
                                            title={section === 'courseDetails' ? 'Course details' : section}
                                            isExpanded={expandedSection === section}
                                            onToggle={() => toggleSection(section)}
                                        />
                                        {expandedSection === section && renderSectionContent(section)}
                                    </View>
                                ))}

                            <TouchableOpacity style={styles.addCustomButton}>
                                <Text style={styles.addCustomText}>+ Add custom section</Text>
                            </TouchableOpacity>

                            <View style={styles.bottomButtons}>
                                <Button
                                    mode="outlined"
                                    style={styles.resetButton}
                                    labelStyle={styles.resetButtonLabel}
                                    onPress={handleReset}
                                    disabled={!hasUnsavedChanges}
                                >
                                    Reset
                                </Button>
                                <Button
                                    mode="contained"
                                    style={styles.saveButton}
                                    labelStyle={styles.saveButtonLabel}
                                    onPress={handleSave}
                                    disabled={!hasUnsavedChanges}
                                >
                                    Save
                                </Button>
                            </View>
                        </View>
                    </View>

                    <View style={styles.previewContainer}>
                        <CourseDetails courseData={editingData || initialData} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CourseForm; 