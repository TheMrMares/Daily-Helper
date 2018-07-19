import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from './../Constants';
import logotypeURL from './../images/logotype.png';

const WrappedHeader = styled.header`
    border-bottom: 1px solid ${Constants.cssSmoothDark};
    text-align: center;
    padding: 10px;
    background: ${Constants.cssDark}
    color: ${Constants.cssFair}
`;
const Logotype = styled.img`
    width: 30%;
`;
const HeaderTitle = styled.h1`
    font-size: 2em;
`;

export default class Header extends Component {
    render(){
        return(
            <WrappedHeader>
                <Logotype src={logotypeURL}/>
                <HeaderTitle>Welcome on our website!</HeaderTitle>
            </WrappedHeader>
        );
    }
}