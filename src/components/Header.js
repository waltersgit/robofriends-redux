import React, { Component } from 'react';
import CounterButton from './CounterButton';
class Header extends Component {
    shouldComponentUpdate(nexpProps, nextState){
        return false;
    }
    render() {
        console.log('Header')
        return (
            <div>
                <CounterButton color={'red'}/>
                <h1 className='f1'>RoboFriends</h1>
            </div>
        )
    }
}

export default Header;