import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

export const hoc = (Wrapper, input) => {
    class hocClass extends Component {
        constructor(props) {
            console.log("iiiiiiiiiiiii")
            super(props);
            this.state = {
                dataHoc: []
            }
        }
        getData = () => {
            console.log(this.props.user);
            const data = this.props.user.data[0].EMAILID;
            return new Promise((resolve, reject) => {
                axios.post(input.url,{"emailId" : data}).then(function (response) {
                    console.log(response)
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
        componentDidMount() {
            this.getData().then(response => {
                let dataHoc = input.isUser ? response.data : response.data;
                this.setState({ dataHoc });
            });
        }
       
        render() {
            return (
                <Wrapper list={this.state.dataHoc} history={this.props.history} user={this.props.user}/>
            )
        };
    }
const mapStateToProps = (state, nextProps) => {
        console.log(state)
        return {
            user: state.user
        }
}
return connect(mapStateToProps)(hocClass);
}


