import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from './../Constants';

const WrappedTodo = styled.div`
    background: ${Constants.cssSmoothDark};
`;

export default class Todo extends Component {
    constructor(){
        super()
    }
    letRemove(evt){
        this.props.parentCallback(this);
    }
    render(){
        return(
            <WrappedTodo className={this.props.className}>
                <h2>Task {this.props.itemId}</h2>
                <p>{this.props.text}</p>
                <button onClick={(evt) => {
                    this.letRemove(evt)
                }}>Remove</button>
            </WrappedTodo>
        );
    }
}