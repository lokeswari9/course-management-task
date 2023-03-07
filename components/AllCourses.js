import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
//import React from 'react';


class AllCourses extends Component {
    state={
        notification:''
    }
    addToMyEnrolledCourses = (itemAdded) => {
     const courseList = {
            courseId: itemAdded.courseId,
            courseName: itemAdded.courseName,
            emailId : this.props.user.data[0].EMAILID
        }
        const global=this;
    axios.post('http://localhost:3001/course/rest/enroleUser', courseList)
        .then(function(response){
         console.log(response);
         global.setState({notification:response.data.message});
        })
        .catch(function(error){
        console.log(error);
        global.setState({notification:error.data.message});
        });
    }
    render() {
//const AllCourses = (props) => {
        return (
            <div>
                <div>
                {this.state.notification ? <div className="alert alert-success" >{this.state.notification}</div> : ''}
            </div>
                <table className="container" align="center" className="table table-hover">
                    <thead>
                        <tr>
                            <th>CourseName</th>
                            <th>CourseId</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((item,i) =>{
                            return(
                                <tr key={i}>
                                    <td><div className="collapse">{item.courseName}</div></td>
                                    <td>{item.courseId}</td>
                                    <td>
                                    <table className="container" align="center" className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>CourseTitleId</th>
                                                <th>CourseTitle</th>
                                                <th>link</th>
                                                <th>Topics</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.title.map((item1,j)=>{
                                                return(
                                                    <tr key={j}>
                                                        <td>{item1.courseTitleId}</td>
                                                        <td>{item1.courseTitle}</td>
                                                        <td>{item1.link}</td>
                                                        <td>
                                                        <table className="container" align="center" className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>TopicId</th>
                                                                    <th>TopicName</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {item1.topic.map((item2,k)=>{
                                                                    return(
                                                                        <tr key={k}>
                                                                        <td>{item2.topicId}</td>
                                                                        <td>{item2.topicName}</td>
                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </td>
                                <td><button className="btn btn-primary" onClick ={()=>this.addToMyEnrolledCourses(item)} >Enroll</button></td>
                                </tr>
                            )
                        })
                        }
                       
                    </tbody>
                </table>
           
            </div>
        );
   // };
    }
}
const mapStateToProps = (state,nextProps) =>{
    return{
        user :state.user
    }
}
export default connect(mapStateToProps)(AllCourses);

