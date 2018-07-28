import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from './../Constants';

const WrappedWelcome = styled.section`
    padding: 15px;
    color: white;
    text-align: center;
`;

export default class Welcome extends Component {
    render(){
        return(
            <WrappedWelcome>
                <h1>Welcome</h1>
                <h2>What can you do here?</h2>
                <p>This website is made to give user possibility to make his own "To do" list and manage all his tasks.</p>
                <h2>Is it for free?</h2>
                <p>Of course all works for free.</p>
            </WrappedWelcome>
        );
    }
}