import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

class Like extends React.Component{
    state = { liked: false };

    toggle() {
        this.setState((prevState, props) => {
            return {liked: !this.state.liked}
        })
    }

    render(){
        return (
            <div className="like-button">
                {this.state.liked ? 
                (<FontAwesomeIcon onClick={() => this.toggle()} icon={faHeart}/>) : 
                (<FontAwesomeIcon onClick={() => this.toggle()} icon={faHeartBroken}/>)
                }
            </div>
        )
    }
}

export default Like;