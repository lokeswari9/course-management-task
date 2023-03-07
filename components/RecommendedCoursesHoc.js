import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {hoc} from './HigherOrderComponent';

class RecommendedCoursesHoc extends Component {
    constructor(props) {
        super(props);
        this.state={
            list:[],
            notification:''
        }
    }
  
    addToMyEnrolledCourses = (itemAdded) => {
        const courseList = {
               courseId: itemAdded.courseId,
               courseName: itemAdded.courseName,
               emailId : this.props.user.data[0].EMAILID
           }
          const global = this;
       axios.post('http://localhost:3001/course/rest/enroleUser', courseList)
           .then(function(response){
            console.log(response);
           global.setState({notification: response.data.message});
           })
           .catch(function(error){
           console.log(error);
          global.setState({notification: error.data.message});
           });
       }

    render() {
        return (
            <div>
            <div>
            <Link className=" btn btn-info" to = "/Courses">Courses<br/></Link>
            </div>
                <table align="center" className="container" className="table table-hover">
                    <thead>
                        <tr>
                            <th>CourseName</th>
                            <th>CourseId</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.list.map((item,i) =>{
                        return(
                             <tr key={i}>
                             <td><div>{item.courseName}</div></td>
                             <td>{item.courseId}</td>
                             <td><button className=" btn btn-primary" onClick ={()=>this.addToMyEnrolledCourses(item)} >Enroll</button></td>
                             </tr>
                    )
                    })}
                </tbody>
            </table>
    </div>
        )
    }
}
/*const mapStateToProps = (state,nextProps) =>{
    return{
        user :state.user
    }
}
export default connect(mapStateToProps) (RecommendedCoursesHoc);*/
const NewRecommendedCoursesHoc = hoc(RecommendedCoursesHoc,{url : 'http://localhost:3001/course/rest/recomendedCourses',isUser : true})
export default NewRecommendedCoursesHoc;

