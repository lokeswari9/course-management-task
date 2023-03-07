import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { hoc } from './HigherOrderComponent';

class MyEnrolledCourseHoc extends Component {
    constructor(props) {
        super();
        
    }
    update = (item) =>{
        console.log(item);
        this.props.history.push("/courseTracker/"+item.COURSE_ID);
    }

    
    render() {
        return (
            <div>
                <Link className=" btn btn-info" to = "/Courses">Courses<br/></Link>
                <div>length of enrolled courses {this.props.list.length} </div>
                <form className="container" >
                <table align="center" className="table table-hover">
                    <thead>
                        <tr>
                            <th>CourseID</th>
                            <th>CourseName</th>
                            <th>Status</th>
                            <th>Comments</th>
                            <th>Teach Others</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.list.map((item,i) =>{
                            return(
                                <tr key={i}>
                                <td><div>{item.COURSE_ID}</div></td>
                                <td>{item.COURSE_NAME}</td>
                                <td>{item.STATUS}</td>
                                <td>{item.COMMENTS}</td>
                                <td>{item.TEACHOTHERS}</td>
                                <td><button className=" btn btn-primary" onClick = {()=> this.update(item)}>Update</button></td>
                                </tr>
                        )
                        })}
                       
                    </tbody>
                </table>
           </form>
        </div>
        )
    }

}

const NewMyEnrolledCourse = hoc(MyEnrolledCourseHoc, { url: 'http://localhost:3001/course/rest/myEnrolledCourses' })

export default NewMyEnrolledCourse;
