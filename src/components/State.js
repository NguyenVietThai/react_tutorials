import React from 'react';

class State extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name :' ',
        };
        this.changeToHanh = this.changeToHanh.bind(this);
    }

    changeToHanh(){
        if(this.state.name === 'THAI'){
            this.setState({
                name : 'HANH',
            });
        }else{
            this.setState({
                name : 'THAI',
            });
        }
        
    }

    render(){
        return(
            <div>
                <h3>Username:{this.state.name}</h3>
                <button onClick={this.changeToHanh}>Click to change - HANH</button>
            </div>
        );
    }
}
export default State;