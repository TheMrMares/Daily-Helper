import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from './../Constants';

const WrappedWelcome = styled.section`
    padding: 15px;
`;

export default class Welcome extends Component {
    render(){
        return(
            <WrappedWelcome>
                Welcome
            </WrappedWelcome>
        );
    }
}