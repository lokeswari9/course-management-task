import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserAction from '../Actions/UserAction';
import {Link} from 'react-router-dom';
//import Button from 'react-bootstrap-button-loader';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            loginData:{
                userName:'',
                password:''
            },
            notification:''
   }
}  
    handleChange=(event)=>{
        const {loginData}=this.state;
        loginData[event.target.name]=event.target.value;
        this.setState({loginData});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
      //  const {loginData}=this.state;
        this.props.actions.loginUser(this.state.loginData);//action
        console.log(this.state.loginData);//printing
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.status === 'success'){
            this.props.history.push('./courses');
            alert("login Successful");
        }else{
            this.setState({notification: nextProps.user.message})
        }
    }
    render(){
        return(
            <div>
                <div>
                    {this.state.notification ? <div className="alert alert-danger" >{this.state.notification}</div> : ''}
                </div>
                <form className="container" onSubmit={this.handleSubmit}>
            <span>    <h3 className="panel-heading">Login</h3></span>
                    <table align="center"  className="table table-hover">
                        <tbody>
                        <tr>
                            <td><label className="label">UserName</label></td>
                            <td><input type="text" name="userName" placeholder="Enter Name..." required 
                            onChange={this.handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label className="label">Password</label></td>
                            <td><input type="password" name="password" placeholder="Enter Password..." required
                            onChange={this.handleChange}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <button loading={this.state.loading} className="btn btn-primary" type="submit">Login</button>
                    </div>
                    <div>
                          <i> if your a new user please. <Link to = "/Register">Register<br/></Link></i>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        actions: bindActionCreators(UserAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);