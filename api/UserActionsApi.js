import axios from 'axios';
import React,{Component} from 'react';

class UserActionsApi extends Component{
   
    static loginUser(userData){
        return new Promise((resolve,reject) =>{
            axios.post('http://localhost:3001/users/rest/login',userData).then(function (response){
            resolve(response);
        }).catch(function (error){
            reject({status: error.response.status, message: error.message});
        });
        })
    }
}

export default UserActionsApi;