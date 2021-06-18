import React from 'react'
import { Link } from 'react-router-dom';
import '../button/button.css'

class Login extends React.Component{
    render(){
        return (
            <div>
                <Link>{this.props.text}</Link>
            </div>
        )
    }
}
export default Login;