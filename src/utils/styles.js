import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const colors = {
    _blue: '#120759',
    _red: '#BF3636',
    _maroon: '#7D1414',
    _purple: '#E3DCF2',
    _purple_Light: '#f1f0f7',
    _white: '#FFFFFF',
    _black: '#000000',
    _gray: 'lightgray',
    _dark_gray: '#1c1c1c',
    _text_gray: '#232323',

}



export const stylesCourseDetails = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: colors._blue,
        paddingHorizontal: wp('5%'),
        paddingTop: wp('2%'),
        paddingBottom: wp('3%'),
        flexDirection: Platform.OS === 'web' ? 'row' : 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors._blue,
    },
    headerContent: {
        flex: 1,
        // marginRight: wp('8%'),
    },
    category: {
        color: colors._white,
        fontSize: wp('1%'),
        marginBottom: wp('3%'),
    },
    title: {
        color: colors._white,
        fontSize: wp('3%'),
        fontWeight: '600',
        marginBottom: wp('1%'),
        // width: wp('30%'),

    },
    instructor: {
        color: colors._white,
        fontSize: wp('1%'),
        marginBottom: wp('1%'),
    },
    headerImageContainer: {
        // flex: 1,
        width: '40%', // Full width of the container
        height: undefined, // Height will be determined by aspect ratio
        aspectRatio: 1, // Maintain a 1:1 aspect ratio (adjust as needed)
        overflow: 'hidden', // Hide overflow if needed
        borderRadius: 8, // Optional border radius
    },
    headerImage: {
        width: '100%', // Full width of the container
        height: '100%', // Full height of the container
        resizeMode: 'cover', // Cover the area while maintaining aspect ratio
    },
    // headerImage: {
    //     width: Platform.OS === 'web' ? 400 : '100%',
    //     height: 400,
    //     borderRadius: 8,
    //     objectFit: 'cover',
    // },
    buttonContainer: {
        width: wp('80%'),
        flexDirection: 'row',
        gap: wp('1%'),
    },
    startClassButton: {
        backgroundColor: colors._white,
        paddingHorizontal: wp('1%'),
        borderRadius: 8,
        borderColor: colors._blue,
        borderWidth: 1,
    },
    startClassButtonLabel: {
        fontSize: wp('1%'),
        fontWeight: '600',
        color: colors._black,
    },
    viewPreviewButton: {
        borderColor: colors._white,
        borderWidth: 1,
        paddingHorizontal: wp('1%'),
        backgroundColor: colors._blue,
        borderRadius: 8,
    },
    viewPreviewButtonLabel: {
        fontSize: wp('1%'),
        fontWeight: '600',
        color: colors._white,
    },
    description: {
        width: wp('35%'),
        marginTop: wp('2%'),
        color: colors._white,
        fontSize: wp('1.2%'),
        lineHeight: wp('2%'),
        opacity: 0.9,
    },
    section: {
        paddingHorizontal: wp('5%'),
        paddingVertical: wp('2%'),
        backgroundColor: colors._white,

        // borderRadius: 8,
        // ...Platform.select({
        //     web: {
        //         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        //     },
        //     default: {
        //         elevation: 2,
        //     },
        // }),
    },
    riseIcon: {
        width: wp('1.2%'),
        height: wp('1.2%'),

    },
    riseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp('0.5%'),
    },
    sectionTitle: {
        fontSize: wp('2.2%'),
        fontWeight: '700',
        marginBottom: 8,
        // lineHeight: wp('2%'),
    },
    overviewContent: {
        flexDirection: Platform.OS === 'web' ? 'row' : 'column',
        height: '100%',
        alignItems: 'center',
    },
    overviewLeft: {
        flex: 2,
        marginRight: Platform.OS === 'web' ? wp('2%') : 0,

    },
    overviewRight: {
        // flex: 1,
        width: '30%',
        height: '70%',
        backgroundColor: colors._purple_Light,
        paddingHorizontal: 15,
        // paddingVertical: 5,
        borderRadius: 8,
        marginTop: Platform.OS === 'web' ? 0 : 20,
    },
    overviewSubtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        // marginBottom: 10,
        marginTop: 25,
    },
    overviewText: {
        width: '75%',
        fontSize: wp('1.4%'),
        lineHeight: wp('2%'),
        color: colors._text_gray,
    },
    durationItem: {
        fontSize: 16,
        marginBottom: 8,
        color: colors._text_gray,
    },
    mentorSection: {
        flexDirection: Platform.OS === 'web' ? 'row' : 'column',
        gap: 20,
    },
    mentorImageContainer: {
        position: 'relative',
        width: Platform.OS === 'web' ? '75%' : '100%',
    },
    mentorImage: {
        width: '100%',
        height: 400,
        minWidth: 400, // Limits excessive stretching
        aspectRatio: 1.5, // Ensures a rectangle ratio
        borderRadius: 10,
        resizeMode: 'cover',
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -20 }, { translateY: -20 }],
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mentorInfo: {
        flex: 1,
    },
    mentorText: {
        fontSize: wp('1.4%'),
        lineHeight: wp('2%'),
        color: colors._text_gray,
        marginBottom: wp('1%'),
    },
    mentorDetail: {
        fontSize: wp('1.2%'),
        color: colors._text_gray,
    },
    topicsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 10,
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        // marginTop: 5,
    },
    chip: {
        backgroundColor: colors._dark_gray,
        borderRadius: 6,

    },
    weekItem: {
        // backgroundColor: colors._purple,
        // paddingBottom: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors._purple,
        overflow: 'hidden',
    },
    weekHeader: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors._purple,
    },
    weekTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors._black,
        // marginLeft: 10,
    },
    topicItem: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        color: colors._text_gray,
    },
    faqItem: {
        marginBottom: 20,
    },
    faqQuestion: {
        fontSize: 16,
        // fontWeight: 'bold',
        // marginBottom: 8,
    },
    faqAnswer: {
        fontSize: 14,
        color: colors._text_gray,
        lineHeight: 20,
    },
    courseCard: {
        flex: 1,
        height: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 0, // Removes shadow on Android
        shadowColor: "transparent", // Removes shadow on iOS
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        ...(Platform.OS === "web" && {
            boxShadow: "none", // Removes shadow on Web
            filter: "none", // Ensures no CSS filter shadow on Web
        }),
    },
    courseCardDescription: {
        fontSize: wp('1.2%'),
        color: colors._black,
        lineHeight: 20,
        marginBottom: wp('2%'),
    },
    courseCardButton: {
        backgroundColor: colors._red,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors._red,
    },
    largeImageContainer: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: colors._gray,
        padding: 20,
        marginTop: 10
    },
    largeImageCard: {
        // marginHorizontal: 10,
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0, // Removes shadow on Android
        shadowColor: "transparent", // Removes shadow on iOS
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        ...(Platform.OS === "web" && {
            boxShadow: "none", // Removes shadow on Web
            filter: "none", // Ensures no CSS filter shadow on Web
        }),
        padding: 16,
        alignSelf: 'center',
    },
    testimonialItem: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: colors._purple_Light,
        borderRadius: 8,
    },
    testimonialText: {
        fontSize: 14,
        color: colors._text_gray,
        fontStyle: 'italic',
        lineHeight: 20,
    },
});

export const stylesCourseForm = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
    },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5,
            },
            web: {
                boxShadow: '0 2px 4px rgba(189, 31, 31, 0.2)',
            },
        }),
    },
    navLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    closeButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    closeText: {
        color: colors._maroon,
        fontSize: 14,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    editorTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors._black,
        textTransform: 'uppercase',
    },
    navRight: {
        flexDirection: 'row',
        gap: 8,
    },
    previewButton: {
        borderColor: colors._maroon,
        borderWidth: 1,
        borderRadius: 8,
    },
    previewButtonLabel: {
        fontSize: 14,
        color: colors._maroon,
        fontWeight: '500',
    },
    publishButton: {
        backgroundColor: colors._maroon,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors._maroon,
    },
    publishButtonLabel: {
        fontSize: 14,
        color: colors._white,
    },
    tabContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 30,
    },
    tab: {
        paddingVertical: 16,
    },
    // activeTab: {
    //     borderBottomWidth: 2,
    //     borderBottomColor: colors._maroon,
    // },
    activeTabText: {
        color: '#000',
        fontWeight: '600',
        textDecorationLine: 'underline',
        textDecorationColor: '#000',
        textDecorationStyle: 'solid',
        textDecorationThickness: 1.5,
    },
    tabText: {
        fontSize: 12,
        color: '#666',
        fontWeight: '500',
    },
    formContainer: {
        width: '30%',
        borderRightWidth: 1,
        borderRightColor: colors._gray,
        backgroundColor: colors._white,
    },
    formContent: {
        backgroundColor: '#f6f6f6',
        padding: 16,
        borderWidth: 1,
        borderColor: colors._gray,
    },
    formSection: {
        backgroundColor: colors._white,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    sectionContent: {
        padding: 16,
        paddingTop: 0,
    },
    inputLabel: {
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
    },
    input: {
        backgroundColor: colors._white,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: colors._gray,
        padding: 10,
        borderRadius: 4,
        fontSize: 14,
    },
    textArea: {
        backgroundColor: colors._white,
        marginBottom: 16,
        height: 100,
        borderWidth: 1,
        borderColor: colors._gray,
        padding: 10,
        borderRadius: 4,
        fontSize: 14,
    },
    card: {
        backgroundColor: colors._purple_Light,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors._gray,
    },
    uploadButton: {
        backgroundColor: colors._white,
        width: '80%',
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors._gray,
        alignItems: "center",
        marginBottom: 8,
    },
    uploadText: {
        color: colors._maroon,
        fontSize: 14,
    },
    addInstructorButton: {
        marginTop: 8,
    },
    addInstructorText: {
        color: colors._maroon,
        fontSize: 14,
        textDecorationLine: "underline",
    },
    addCustomButton: {
        marginVertical: 16,
    },
    addCustomText: {
        color: colors._maroon,
        fontSize: 14,
        textDecorationLine: 'underline',
        textDecorationColor: colors._maroon,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
        marginTop: 24,
        marginBottom: 32,
    },
    resetButton: {
        borderColor: colors._maroon,
        borderWidth: 1,
        borderRadius: 8,
    },
    resetButtonLabel: {
        color: colors._maroon,
    },
    saveButton: {
        backgroundColor: colors._maroon,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors._maroon,
    },
    saveButtonLabel: {
        color: colors._white,
    },
    previewContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    emptySection: {
        // padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 4,
        margin: 5,
    },
    emptyText: {
        color: '#666',
        fontSize: 14,
        fontStyle: 'italic',
    }
});