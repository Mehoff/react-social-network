import React from 'react'
import User from '../userCard/user.js'
import './usersList.css'

class UsersList extends React.Component{
   
    constructor(props){
        super(props);

        this.state = {
            users: undefined
        }
    }
    async componentDidMount(){
        
        const res = await fetch('http://localhost:3001/users');
        const json = await res.json();

        //Render вызывается столько раз, сколько пользователей в json
        this.setState({users: json})
        
    }
    render(){        
        console.log('render()')
        let {users} = this.state;

        let component = null;

        if(!users){
            return <h1>Загрузка пользователей...</h1>
        }
        else{
            users = users.filter(user => user.Id !== this.props.user.Id)
            component = users.map((item) => {
                return <User key={item.Id} data={item}/>
            })
        }
        return (
            <div className="user-list">
                {component}
            </div>
        )
    }
}

export default UsersList;