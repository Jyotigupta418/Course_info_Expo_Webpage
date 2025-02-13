import React, { memo, useState } from 'react';
import {
    View,
    Text,
    Image,
    // Button
} from 'react-native';
import { Card, Button, Chip, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { colors, stylesCourseDetails as styles } from '../utils/styles';
import { defaultCourseData } from '../utils/data';
import { CourseDetailsPropTypes } from '../utils/protoTypes';
import { courses } from '../utils/data';

const CourseDetails = ({ courseData = defaultCourseData }) => {
    const { category, title, instructorName, instructorImage, price, description } = courseData;

    const [expandedWeek, setExpandedWeek] = useState(1);

    const WeekItem = ({ week, title, topics, isExpanded }) => (
        <TouchableOpacity
            style={styles.weekItem}
            onPress={() => setExpandedWeek(isExpanded ? null : week)}
        >
            <View style={styles.weekHeader}>
                <Text style={styles.weekTitle}>{`Week ${week}: ${title}`}</Text>
                <MaterialIcons
                    name={isExpanded ? 'remove' : 'add'}
                    size={24}
                    color="#000"
                />
            </View>
            {isExpanded && topics.map((topic, index) => (
                <Text key={index} style={styles.topicItem}>• {topic}</Text>
            ))}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.category}>{category}</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.instructor}>Instructor name: {instructorName}</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            labelStyle={styles.startClassButtonLabel}
                            onPress={() => { }}
                            style={styles.startClassButton}
                        >
                            {`Start Class (INR ${price}/-)`}
                        </Button>
                        <Button
                            mode="outlined"
                            labelStyle={styles.viewPreviewButtonLabel}
                            onPress={() => { }}
                            style={styles.viewPreviewButton}
                        >
                            View Preview
                        </Button>
                    </View>
                    <Text style={styles.description}>{description}</Text>
                </View>

                <View style={styles.headerImageContainer}>
                    <Image
                        source={instructorImage ? { uri: instructorImage } : require('../../assets/images/instructor.png')}
                        style={styles.headerImage}
                    />
                </View>
            </View>

            {/* Course Overview */}
            <Card style={[styles.section, { borderWidth: 2, borderColor: colors._maroon, borderRadius: 0 }]}>
                <Card.Content>
                    <Text style={styles.sectionTitle}>Course Overview</Text>
                    <View style={styles.overviewContent}>
                        <View style={styles.overviewLeft}>
                            <Text style={styles.overviewSubtitle}>What You Will Learn</Text>
                            <Text style={styles.overviewText}>
                                In our beginner salsa dance classes, you will learn the fundamental steps, {'\n'}rhythms, and techniques of salsa dancing. By the end of the course, you will {'\n'}be able to confidently dance salsa in social settings.
                            </Text>
                            <Text style={styles.overviewSubtitle}>Course Format</Text>
                            <Text style={styles.overviewText}>
                                Our classes are conducted live online via Zoom, allowing you to
                                interact with instructors and follow students in real-time. Each
                                session includes warm-up exercises, step-by-step instruction, and
                                practice time.
                            </Text>
                        </View>
                        <View style={styles.overviewRight}>
                            <Text style={styles.overviewSubtitle}>Duration and Schedule</Text>
                            <Text style={styles.durationItem}>• Duration: 6 weeks</Text>
                            <Text style={styles.durationItem}>• Class Length: 1 hour per week</Text>
                            <Text style={styles.durationItem}>• Schedule: Every Wednesday at 7 PM EST</Text>
                            <Text style={styles.durationItem}>• 3 trainers included</Text>
                            <View style={styles.riseContainer}>
                                <Text style={styles.durationItem}>• </Text>
                                <Image source={require('../../assets/images/rise.png')} style={styles.riseIcon} />
                                <Text style={styles.durationItem}> Filling up fast</Text>
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>

            {/* About the Mentor */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About the mentor</Text>
                <View style={styles.mentorSection}>
                    <View style={styles.mentorImageContainer}>
                        <Image
                            source={require('../../assets/images/mentor.jpg')}
                            style={styles.mentorImage}
                        />
                        <View style={styles.playButton}>
                            <MaterialIcons name="play-arrow" size={40} color="#fff" />
                        </View>
                    </View>
                    <View style={styles.mentorInfo}>
                        <Text style={styles.mentorText}>
                            Welcome, everyone! I'm thrilled to introduce our salsa master for today's class,
                            Martha Stewart. With over +10 of experience in the world of salsa, she has danced on stages
                            across the globe. captivating audiences with her electrifying performances. Martha believes that salsa
                            is not just about the steps: it's about expressing your soul and connecting with others through rhythm.
                            Get ready to learn from one of the best as we dive into the vibrant world of salsa.
                        </Text>
                    </View>
                </View>
                <Text style={styles.mentorDetail}>Instructor name: <Text style={{ fontWeight: '600' }}>Martha Stewart</Text></Text>
                <Text style={styles.mentorDetail}>Class length: <Text style={{ fontWeight: '600' }}>24 video lessons (4 hrs 50 mins)</Text></Text>
                <Text style={styles.mentorDetail}>Category: <Text style={{ fontWeight: '600' }}>Salsa</Text></Text>
                <View style={styles.topicsContainer}>
                    <Text style={styles.mentorDetail}>Topics covered: </Text>
                    <View style={styles.chipContainer}>
                        <Chip style={styles.chip} textStyle={{ color: colors._white, fontSize: 12 }}>Fundamental moves</Chip>
                        <Chip style={styles.chip} textStyle={{ color: colors._white, fontSize: 12 }}>Technique and style</Chip>
                        <Chip style={styles.chip} textStyle={{ color: colors._white, fontSize: 12 }}>Musicality</Chip>
                        <Chip style={styles.chip} textStyle={{ color: colors._white, fontSize: 12 }}>Advanced techniques</Chip>
                    </View>
                </View>
            </View>

            {/* Course Curriculum */}
            <View style={[styles.section, { padding: 0 }]}>
                <Text style={styles.sectionTitle}>Course Curriculum</Text>
                {courseData.curriculum.map((week) => (
                    <WeekItem
                        key={week.week}
                        week={week.week}
                        title={week.title}
                        topics={week.topics}
                        isExpanded={expandedWeek === week.week}
                    />
                ))}
            </View>

            {/* Our Courses */}
            <View style={[styles.section, { padding: 0 }]}>
                {/* Course Section */}
                {/* <Title style={{ fontSize: 22, fontWeight: "bold" }}>Our Courses</Title> */}
                <Text style={styles.sectionTitle}>Our Courses</Text>
                <Paragraph>Description of the course comes here...</Paragraph>

                <View style={{ marginVertical: 10, flexDirection: 'row', gap: 10 }}>
                    {courses.map((course, index) => (
                        <Card key={index} style={styles.courseCard}>
                            <Card.Content>
                                <Text style={{ ...styles.sectionTitle, fontSize: 18 }}>{course.title}</Text>
                                <Text style={styles.courseCardDescription}>
                                    See why leading organizations are relying on edshaala for upskilling and training.
                                </Text>
                            </Card.Content>
                            <Card.Actions style={{ alignSelf: 'flex-start' }}>
                                <Button mode="contained" style={styles.courseCardButton}>
                                    {`$${course.price}/-`}
                                </Button>
                            </Card.Actions>
                        </Card>
                    ))}
                </View>

                {/* Large Image Section */}
                <View style={styles.largeImageContainer}>
                    <Image
                        source={require('../../assets/images/team.jpg')}
                        style={{ width: '50%', height: 400, borderRadius: 8, resizeMode: 'cover' }}
                    />
                    <Card style={styles.largeImageCard}>
                        <Text style={{ ...styles.sectionTitle, fontSize: 18 }}>Level up your teams</Text>
                        <Text style={{ ...styles.courseCardDescription, marginBottom: 0 }}>
                            See why leading organizations are relying on edshaala for upskilling and training.
                        </Text>
                        <Card.Actions style={{ alignSelf: 'flex-start', marginLeft: -15 }}>
                            <Button mode="contained" style={styles.courseCardButton}>
                                Learn more
                            </Button>
                        </Card.Actions>
                    </Card>
                </View>
            </View>


            {/* FAQs Section */}
            <View style={[styles.section, { padding: 0 }]}>
                <Text style={{ ...styles.sectionTitle, marginVertical: 10 }}>FAQs</Text>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>What do I need to participate?</Text>
                    <Text style={styles.faqAnswer}>
                        You will need a stable internet connection, a device with video capability (computer, tablet, or smartphone), comfortable
                        clothing, and a clear space to dance.
                    </Text>
                </View>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Do I need a partner?</Text>
                    <Text style={styles.faqAnswer}>
                        No partner? No problem! Our classes are designed for solo dancers, but you can practice with a friend or family member if
                        you'd like.
                    </Text>
                </View>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>How much experience do I need?</Text>
                    <Text style={styles.faqAnswer}>
                        No prior dance experience is necessary! Our classes are tailored for complete beginners.
                    </Text>
                </View>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>What if I miss a class?</Text>
                    <Text style={styles.faqAnswer}>
                        All sessions are recorded so you catch up at your convinience. We encourage consistent attendance for the best learning experience.
                    </Text>
                </View>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Is there a refund policy?</Text>
                    <Text style={styles.faqAnswer}>
                        No prior dance experience is necessary! Our classes are tailored for complete beginners.
                    </Text>
                </View>
            </View>

            {/* Testimonials */}
            <View style={[styles.section, { padding: 0 }]}>
                <Text style={styles.sectionTitle}>Testimonials</Text>
                <Text style={{ ...styles.faqAnswer }}> Student Experiences</Text>
                <Text style={{ ...styles.faqAnswer }}> "I never thought I could learn salsa onlinel The instructors are fantastic and make it so easy to follow along. I've gained confidence Ki my dancing-Sarah M.S"</Text>
                <Text style={{ ...styles.faqAnswer, marginTop: 10, marginBottom: 20 }}> After just six weeks, I was able to join my friends at a salsa night out! The course was fun and engaging. Highly recommend-James 7.</Text>
            </View>
        </View>
    );
};

CourseDetails.propTypes = CourseDetailsPropTypes;

export default memo(CourseDetails);
