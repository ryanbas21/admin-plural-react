 import React, { Component, PropTypes} from 'react'
 import { connect } from 'react-redux'
 import { bindActionCreators } from 'redux'
 import * as courseActions from '../../actions/courseActions'
 class ManageCoursePage extends Component {
   constructor(props, context){
     super(props)
   }
   render(){
      return (
         <div><h1>Manage Courses</h1></div>
      )
   }
 }

 ManageCoursePage.Proptypes = {

 }

 function mapStateToProps (state,ownProps) {
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
