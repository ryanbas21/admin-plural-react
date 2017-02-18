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
   }
   render(){
      return (
            <CourseForm
               allAuthors={[]}
               course={this.state.course}
               errors={this.state.errors}
            />
      );
   }
 }

 ManageCoursePage.Proptypes = {
   course: PropTypes.object.isRequired
};

 function mapStateToProps (state,ownProps) {
    let course = {id: '', watchHref: '', title:'', authorId: '', length: '', category: '' };
   return {
     state
   };
 }

 function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(courseActions, dispatch)
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
