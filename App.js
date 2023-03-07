import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Courses from './components/Courses';
import NewMyEnrolledCourse from './components/MyEnrolledCourseHoc';
import AddCourses from './components/AddCourses';
import CourseTracker from './components/CourseTracker';
import NewRecommendedCoursesHoc from './components/RecommendedCoursesHoc';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
                    <div>
                        <div>
                          <i><h2  className="page-header">  Welcome to Course Management System </h2></i>
                        </div>
                        <Switch>
                        <Route path="/" component={Login} exact/>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/courses" component={Courses} />
                        <Route path="/myEnrolledCourseHoc" component={NewMyEnrolledCourse} />
                        <Route path="/addCourses" component={AddCourses} />
                        <Route path="/courseTracker/:courseIdParam" component={CourseTracker} />
                        <Route path="/recommendedCoursesHoc" component={NewRecommendedCoursesHoc}/>
                        </Switch>
                    </div>
                </BrowserRouter>
      </div>
    );
  }
}

export default App;
