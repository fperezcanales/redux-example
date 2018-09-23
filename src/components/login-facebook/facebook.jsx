
import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import './Facebook.css';

export default class Facebook extends Component {

    componentClicked = () => {
        console.log('Clieked')
    }

    responseFacebook = (response) => {
        console.log(response)
        this.setState({
            isLoggedIn : true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    state = {
        isLoggedIn :false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    };
    render(){

        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div className='login-person'>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <label> {this.state.name}</label>
                </div>
            );
        }else{
            fbContent = (<FacebookLogin
                appId="545502569255840"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }

        return(
            <div>
                {fbContent}
            </div>
        );
    }
}
