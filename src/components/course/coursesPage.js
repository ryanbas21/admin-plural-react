import React,{ Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList'


class CoursePage extends Component {
  constructor(props,context){
    super(props);
}


  courseRow(course, index) {
    return <div key={index}> {course.title} </div>
  }


  render() {
    const { courses } = this.props;
    console.log(courses);
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    )
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
