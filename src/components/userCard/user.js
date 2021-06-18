import React from 'react'
import Like from '../like/like.js'
import './user.css'
import '../../users.json'


class User extends React.Component{
    render(){
        return (
            <div className="user-card" onClick={() => console.log(`Route to user with id ${this.props.data.Id}`)}>
                {<center>
                <img alt="User avatar" src={this.props.data.ImageUri}/>
                <h1>{this.props.data.Firstname} {this.props.data.Secondname}</h1>
                <h2>{this.props.data.Email}</h2>
                <p className="about">{this.props.data.about}</p>
                <Like/>
                </center>}
            </div>
        )
    }
}
export default User;