import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddCourses extends Component{
    constructor(props){
        super(props);
        this.state={
            addCourse:{
                courseName:'',
                courseTitle:'',
                link:'',
                topic:[]
             },
             notification:'',
             textValue:''
        }
    }
    handleChange=(event)=>{
        const {addCourse}=this.state;
        addCourse[event.target.name]=event.target.value;
        this.setState({addCourse});
    }
    addCourseEvent=(addCourse)=>{
     //   event.preventDefault();
        const global = this;
    //    const {addCourse}=this.state;
        console.log(this.state.addCourse);
        axios.post('http://localhost:3001/course/rest/addNewCourse ', addCourse)
            .then(function(response){
             console.log(response);
             global.setState({notification:response.data.message});
            })
            .catch(function(error){
            console.log(error);
            global.setState({notification:error.data.message});
            });
        }
        handle = (text) => {
            this.setState({
                textValue: text.target.value
            })
        }
        addTopics = (event) => {
            this.state.addCourse.topic.push({ topicName: this.state.textValue });
            this.setState(this.state)
            console.log(this.state.addCourse.topic)
        }
    render(){
        return(
            <div>
            <Link  className=" btn btn-info" to = "/Courses">Courses<br/></Link>
            <div>
                {this.state.notification ? <div className="alert alert-danger" >{this.state.notification}</div> : ''}
            </div>
            <div>
                <form className="container" onSubmit={this.addCourseEvent}>
                <h3>Add New Course</h3>
                    <table className="table table-hover">
                    <tbody>
                        <tr>
                        <td><label className="label">CourseName</label></td>
                        <td><input type="text" name="courseName" placeholder="Enter Course Name..." required 
                            onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                        <td><label className="label">CourseTitle</label></td>
                        <td><input type="text" name="courseTitle" placeholder="Enter Course Title..." required 
                            onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                        <td><label className="label">Link</label></td>
                        <td><input type="text" name="link" placeholder="Enter link..." required 
                            onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                        <td><label className="label">Topic</label></td>
                        <td><input type="text" name="textValue" placeholder="Enter Topic..." required 
                            onChange={this.handle}/>
                            <button className=" btn btn-primary" type="button" onClick={this.addTopics} ><span class="badge">+</span></button></td>
                        </tr>
                    </tbody>
                    </table>
                </form>
                {this.state.addCourse.topic.map((item) => {
                                return (
                                <div>
                                    {item.topicName}
                                </div>
                                )
                            })}
                <div>
                    <button className="btn btn-primary" onClick={() => this.addCourseEvent(this.state.addCourse)}>Add Course</button>
                </div>         
                
            </div>
            </div>
        )
    }
}
export default AddCourses;