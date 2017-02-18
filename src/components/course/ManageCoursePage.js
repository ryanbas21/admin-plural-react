 import React, { Component, PropTypes} from 'react'
 import { connect } from 'react-redux'
 import { bindActionCreators } from 'redux'
 import * as courseActions from '../../actions/courseActions'
 import CourseForm from './courseForm'
 class ManageCoursePage extends Component {
   constructor(props, context){
     super(props);
     this.state = {
        course:Object.assign({}, this.props.course),
        errors: {}
     };
     this.updateCourseState = this.updateCourseState.bind(this)
   }
   updateCourseState(e) {
     const field = e.target.name;
     let course = this.state.course;
     course[field] = e.target.value;
     return this.setState({course: course})
   }
   render(){
      return (
            <CourseForm
              onChange={this.updateCourseState}
               allAuthors={this.props.authors}
               course={this.state.course}
               errors={this.state.errors}
            />
      );
   }
 }

 ManageCoursePage.propTypes = {
   course: PropTypes.object.isRequired,
   authors: PropTypes.array.isRequired
};

 function mapStateToProps (state,ownProps) {
   let course = {id: '', watchHref: '', title:'', authorId: '', length: '', category: '' };
   console.log(state, 'this is state')
   const authorsFormattedForDropDown = state.authors.map( author => {
      return {
         value: author.id,
         text: author.firstName + ' ' + author.lastName
      };
   });

   return {
     course,
     authors: authorsFormattedForDropDown
   };
 }

 function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(courseActions, dispatch)
  };
 }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
