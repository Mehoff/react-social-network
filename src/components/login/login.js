import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './login.css'

class Login extends React.Component {

    state = { isLogInSelected: true }

    toggle() {
        this.setState((prevState, props) => {
            return { isLogInSelected: !this.state.isLogInSelected }
        })
    }

    validateLoginCredentials(credentials){

        if(credentials.email.length <= 0 || credentials.password.length <= 0){
            alert('Не все поля заполнены');
            return false;
        }

        return true;
    }

    validateRegisterCredentials(credentials){
        return true;
    }

    render() {
        return (

            <div className="form">
                <center>
                    <b><span>Welcome to <span className="color-pink font-size-28">Trinder</span></span></b><br/><br/><br/>

                    {this.state.isLogInSelected ?
                        <div>
                            <label className="login-label" htmlFor="email">
                                {<FontAwesomeIcon icon={faSignInAlt} />}
                            </label>
                            <input className="login-input" name="email" id="email"/><br/><br/>

                            <label className="login-label" htmlFor="password">
                                {<FontAwesomeIcon icon={faLock} />}
                            </label>
                            <input className="login-input" name="password" id="password"/><br/><br/>
                        </div>
                        :
                        <div>
                            <span className="reg-header">Tell us about yourself! 😊</span><br/><br/>

                            <label className="reg-label" htmlFor="reg-firstname">First name</label><br/>
                            <input className="reg-input" name="reg-firstname" id="reg-firstname"/><br/><br/>

                            <label className="reg-label" htmlFor="reg-secondname">Second name</label><br/>
                            <input className="reg-input" name="reg-secondname" id="reg-secondname"/><br/><br/>

                            <label className="reg-label" htmlFor="reg-email">Email</label><br/>
                            <input className="reg-input" name="reg-email" id="reg-email"/><br/><br/>

                            <label className="reg-label" htmlFor="reg-password">Password</label><br/>
                            <input className="reg-input" name="reg-password" id="reg-password"/><br/><br/>

                            <label className="reg-label" htmlFor="reg-phone">Phone</label><br/>
                            <input className="reg-input" name="reg-phone" id="reg-phone"/><br/><br/>

                            <label className="reg-label" htmlFor="reg-gender">Gender</label><br/>
                            <select className="reg-select" name="reg-gender" id="reg-gender">
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select><br/><br/>

                            <label className="reg-label" htmlFor="reg-age">Age</label><br/>
                            <input className="reg-input" name="reg-age" id="reg-age"/><br/><br/>

                        </div>
                    }

                    <button id="btn-login" className="login-action-button" href="/" onClick={() => {
                        
                        if(this.state.isLogInSelected){
                            const email = document.getElementById('email').value.trim();
                            const password = document.getElementById('password').value.trim();
                            const credentials = {email, password};

                            if(!this.validateLoginCredentials(credentials)){
                                return;
                            }

                            fetch('http://localhost:3001/login', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json; charset=utf-8'
                                },
                                body: JSON.stringify(credentials)
                            }).then((res) => res.json().then((user) => {
                                
                                if(user.error){
                                    alert(user.error);
                                    return;
                                }
                                
                                this.props.updateLogin(user);

                            }))
                        }
                        else{
                            const firstname = document.getElementById('reg-firstname').value.trim();
                            const secondname = document.getElementById('reg-secondname').value.trim();
                            const email = document.getElementById('reg-email').value.trim();
                            const password = document.getElementById('reg-password').value.trim();
                            const phone = document.getElementById('reg-phone').value.trim();
                            const gender = document.getElementById('reg-gender').value.trim();
                            const age = document.getElementById('reg-age').value.trim();
                            
                            const credentials = {
                                firstname,
                                secondname,
                                email,
                                password,
                                phone,
                                gender,
                                age
                            }
                            
                            if(!this.validateRegisterCredentials(credentials)){
                                return;
                            }

                            fetch('http://localhost:3001/register', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json; charset=utf-8'
                                },
                                body: JSON.stringify(credentials)
                            }).then((res) => res.json().then((user) => {
                                
                                if(user.error){
                                    alert(user.error);
                                    return;
                                }

                                this.props.updateLogin(user)
                            }))
                        }
                    }}>
                        {this.state.isLogInSelected ? "Sign in" : "Sign up"}
                    </button>

                    <p className="login-selection-text" onClick={() => this.toggle()}>
                        {this.state.isLogInSelected ? "Sign up?" : "Sign in?"}
                    </p>
                </center>

            </div>
        )
    }
}
export default Login;