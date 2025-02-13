import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Portal, Modal, IconButton, FAB } from 'react-native-paper';
import CourseDetails from './src/screens/CourseDetails';
import CourseForm from './src/components/CourseForm';
import { defaultCourseData } from './src/utils/data';
import { colors } from './src/utils/styles';

const theme = DefaultTheme;

export default function App() {
    const [isEditing, setIsEditing] = useState(false);
    const [isPreviewMode, setIsPreviewMode] = useState(false);
    const [editingData, setEditingData] = useState(null);

    const [courseData, setCourseData] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem('courseData');
            return savedData ? JSON.parse(savedData) : defaultCourseData;
        }
        return defaultCourseData;
    });

    const handleUpdateCourse = (newData) => {
        setEditingData(newData);
    };

    const handlePublish = (newData) => {
        setCourseData(newData);
        setEditingData(null);
        if (typeof window !== 'undefined') {
            localStorage.setItem('courseData', JSON.stringify(newData));
        }
        setIsEditing(false);
    };

    const handleCloseEditor = () => {
        setIsEditing(false);
        setEditingData(null); // Reset editing data
    };

    const handlePreview = () => {
        setIsPreviewMode(true);
    };

    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                {/* <ScrollView style={{ flex: 1 }}> */}
                {isEditing ? (
                    <CourseForm
                        onUpdate={handleUpdateCourse}
                        onPublish={handlePublish}
                        initialData={courseData}
                        onClose={handleCloseEditor}
                        onPreview={handlePreview}
                        editingData={editingData}
                    />
                ) : (
                    <View style={styles.mainContainer}>
                        <CourseDetails courseData={courseData} />
                        <FAB
                            icon="pencil"
                            size={10}
                            color={colors._maroon}
                            style={styles.fab}
                            onPress={() => setIsEditing(true)}
                        // label="Edit Course"
                        />
                    </View>
                )}
                {/* </ScrollView> */}

                <Portal>
                    <Modal
                        visible={isPreviewMode}
                        contentContainerStyle={styles.modalContent}
                    >
                        <View style={styles.modalHeader}>
                            <IconButton
                                icon="close"
                                size={24}
                                onPress={() => setIsPreviewMode(false)}
                            />
                        </View>
                        <CourseDetails courseData={editingData || courseData} />
                    </Modal>
                </Portal>
            </View>
        </PaperProvider>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainContainer: {
        flex: 1,
        position: 'relative',
    },
    modalContent: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        margin: 0,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 0,
        top: 0,
        backgroundColor: colors._white,
        zIndex: 1000,

    },
}); 