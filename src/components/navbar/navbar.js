import React from 'react'
// import {NavLink} from 'react-router-dom'
import './navbar.css'


class Navbar extends React.Component{

    // constructor(){
    //     super()
    //     this.state = {

    //     };
    // }


    render(){
        return (
            <nav>
                <ul>
                    {/* <li><NavLink to='/'>{this.props.user ? this.props.user.Firstname : "Login"}</NavLink></li>  
                    <li><NavLink to="/usersList">Users</NavLink></li> */}
                    <li onClick={() => this.props.updateLogin(undefined)}>Log Out</li>
                    <li onClick={() => alert('Todo: Navigate to Profile Page')}>{this.props.user.Firstname}</li>
                </ul>
            </nav>
        )
    }
}
export default Navbar;