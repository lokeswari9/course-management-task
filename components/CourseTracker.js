import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class CourseTracker extends Component{
    constructor(props){
        super(props);
        this.state={
            updateCourse:{
                comments:'',
                status:'',
                teachOthers:'',
                courseId: props.match.params.courseIdParam,
                emailId: this.props.user.data[0].EMAILID
             },
             notification:''
        }
    }
    handleChange=(event)=>{
        const {updateCourse}=this.state;
        updateCourse[event.target.name]=event.target.value;
        this.setState({updateCourse});
    }
    updateCourseEvent=(updateCourse, event)=>{
        event.preventDefault();
        const global=this;
       // const {updateCourse}=this.state;
        console.log(this.state.updateCourse);
        axios.post('http://localhost:3001/course/rest/updateStatus', updateCourse)
            .then(function(response){
             console.log(response);
             global.setState({notification:response.data.message});
            })
            .catch(function(error){
            console.log(error);
            global.setState({notification:error.data.message});
            });
        }

    render(){
        return(
            <div>
                 <Link  className=" btn btn-info" to = "/Courses">Courses<br/></Link>
                 <div>
                {this.state.notification ? <div className="alert alert-danger" >{this.state.notification}</div> : ''}
                </div>
               <form className="container">
                <h3>CourseTracker</h3>
                    <table align="center"  className="table table-hover">
                        <tbody>
                        <tr>
                            <td><label className="label">Comments</label></td>
                            <td><textarea name="comments" placeholder="Enter Comments..." required 
                            onChange={this.handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label className="label">Status</label></td>
                            <td><select className="btn btn-primary dropdown-toggle">
                                <option value="status" onChange={this.handleChange} >status</option>
                                <option value="Yet To Start" onChange={this.handleChange} >Yet To Start</option>
                                <option value="In Progress" onChange={this.handleChange} >In Progress</option>
                                <option value="Completed" onChange={this.handleChange} >Completed</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td><label className="label">TeachOthers</label></td>
                            <td><input type="radio" name="teachOthers" value="yes" onChange={this.handleChange}/>
                                <label>Yes</label>
                                <input type="radio" name="teachOthers" value="No" onChange={this.handleChange}/>
                                <label>No</label>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <div>
                    <button className="btn btn-primary" onClick={(event) => this.updateCourseEvent(this.state.updateCourse, event)}>Update</button>
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state)
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(CourseTracker);