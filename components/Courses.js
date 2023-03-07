import React,{Component} from 'react';
import AllCourses from './AllCourses';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Courses extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
   
    componentDidMount() {
        this.getData().then(response => {
        this.setState({ list: response.data });
        console.log(this.state.list)
        });
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/course/rest/getAllCourse').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    render(){
        return(
        <div>
            <div  class="btn-group btn-group-justified pager">
            <Link  class="btn btn-info"  to = "/addCourses">AddCourses<br/></Link>
           <Link  class="btn btn-info" to="/myEnrolledCourseHoc">MyEnrolledCourses<br/></Link>
           <Link  class="btn btn-info" to="/recommendedCoursesHoc">RecommendedCourses<br/></Link>
            <Link  class="btn btn-info" to = "/login">Logout<br/></Link>
           </div>
            <div>
               <AllCourses list={this.state.list}/>
               </div>
        </div>
        )
    }
}

export default Courses;