import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from './../Constants';
import Item from './Item';

const WrappedNavigation = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    padding: 0px;
`;

const StyledItem = styled(Item)`

`;

export default class Navigation extends Component{
    constructor(){
        super();
        this.state = {
            items: [{
                name: 'Welcome',
                path: '/'
            },{
                name: '"To do" list',
                path: '/TodoList'
            }]
        }
    }
    render(){
        return(
            <WrappedNavigation className={this.props.className}>
                {this.state.items.map((item, index) => {
                    return <StyledItem name={item.name} url={item.path} />
                })}
            </WrappedNavigation>
        );
    }
}