import PropTypes from 'prop-types';

export const CourseDetailsPropTypes = {
    courseData: PropTypes.shape({
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        instructor: PropTypes.string.isRequired,
        instructorImage: PropTypes.string,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};
