import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            registerData:{
                name:'',
                sapId:'',
                emailId:'',
                primarySkill:'',
                band:'',
                password:''
            },
            notification:''
   }
}  

handleChange=(event)=>{
    const {registerData}=this.state;
    registerData[event.target.name]=event.target.value;
    this.setState({registerData});
}
handleSubmit=(event)=>{
    event.preventDefault();
    const global = this;
    const {registerData}=this.state;
    console.log(this.state.registerData);
    axios.post('http://localhost:3001/users/rest/registerUser', registerData)
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
            <form className="container" onSubmit={this.handleSubmit}>
            <span><h3 className="panel-heading">Register</h3> </span>
                    <table align="center"  className="table table-hover">
                        <tbody>
                        <tr>
                            <td><label className="label">Name</label></td>
                            <td><input type="text" name="name" placeholder="Enter Name..." required 
                            onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label className="label">SAP Id</label></td>
                            <td><input type="number" name="sapId" placeholder="Enter SAP iD..." required
                            onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label className="label">Email Id</label></td>
                            <td><input type="email" name="emailId" placeholder="Enter Email Id..." required
                            onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label className="label">PrimarySkill</label></td>
                            <td><input type="text" name="primarySkill" placeholder="Enter Primary Skill..." required
                            onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label className="label">Band</label></td>
                            <td><input type="text" name="band" placeholder="Enter Band..." required
                            onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label className="label">Password</label></td>
                            <td><input type="password" name="password" placeholder="Enter Password..." required
                            onChange={this.handleChange}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </form>
                <div>
                    {this.state.notification ? <div className="alert alert-success" >{this.state.notification}</div> : ''}
                </div>
            <Link to = "/Login">Please Login<br/></Link>
            </div>
        )
    }
};

export default Register;
