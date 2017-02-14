import React,{ Component, PropTypes } from 'react'

class CoursesPage extends Component {
  constructor(props,context){
    super(props)
    this.state= {
      course : {
        title: ''
      }
    }
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onTitleChange (event) {
    event.preventDefault()
    const course = this.state.course;
    this.setState({course:course});
  }

  onClickSave() {

  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave} />

      </div>
    )
  }
}

export default CoursesPage;
