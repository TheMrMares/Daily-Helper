import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from './../Constants';
import Item from './Item';

import Todo from './Todo';

const TodoManagerHolder = styled.div`
    margin: 5px 0px;
`;
const TodoArea = styled.textarea`
    resize: none;
    display: block;
    width: 500px;
    height: 200px;
    color: ${Constants.cssDark};
`;
const TodoAdd = styled.button`
    margin-top: 10px;
`;
const TodoItemsHolder = styled.div`
    margin: 5px 0px;
`;
const WrappedTodoList = styled.div`
    border: 1px solid ${Constants.cssFair}
    padding: 10px;
    ${TodoItemsHolder}, ${TodoManagerHolder} {
        width: 90%;
        margin-left: 5%;
    }
`;

export default class TodoList extends Component{
    constructor(){
        super()
        this.state = {
            list: [],
            value: ''
        }
        this.counter = 0;
        
    }
    addNew(){
        this.setState((prevState) => {
            this.counter++;
            return {
                value: '',
                list: [...prevState.list, {
                    key: this.counter,
                    text: prevState.value
                }]
            }
        });
        console.log(this.state.list);
    }
    handleChange(event){
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        })
    }
    handleCallback(data){
        this.setState({
            list: this.state.list.filter((item, index) => {
                if(item.key != data.props.itemId){
                    return {item};
                }
            })
        });
    }
    renderItem(id,text){
        return <Todo itemId={id} text={text} key={id} parentCallback={this.handleCallback.bind(this)}/>
    }
    render(){
        return(
            <WrappedTodoList className={this.props.className}>
                <h1>New task</h1>
                <TodoManagerHolder>
                    <TodoArea onChange={(evt)=>{
                        this.handleChange(evt)
                    }} value={this.state.value}/>
                    <TodoAdd onClick={(evt) => {
                        this.addNew(evt)
                    }}>Add task</TodoAdd>
                </TodoManagerHolder>
                <h1>Active tasks</h1>
                <TodoItemsHolder>
                    {this.state.list.map((item,index)=>{
                        return this.renderItem(item.key, item.text);
                    })}
                </TodoItemsHolder>
            </WrappedTodoList>
        );
    }
}