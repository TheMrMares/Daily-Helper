import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from './../Constants';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


const WrappedItem = styled.li`
    display: flex;
    margin: 0px 10px 0px 0px;
`;
const StyledLink = styled(Link)`
    padding: 5px 40px;
    color: ${Constants.cssFair};
    text-decoration: none;
    border: 2px solid ${Constants.cssFair};
    &:hover {
        background: ${Constants.cssFair};
        color: ${Constants.cssDark};
    }
`;

export default class Item extends Component{
    render(){
        return(
            <WrappedItem className={this.props.className}>
                <StyledLink to={this.props.url}>{this.props.name}</StyledLink>
            </WrappedItem>
        );
    }
}