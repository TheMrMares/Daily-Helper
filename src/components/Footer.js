import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from './../Constants';

const WrappedFooter = styled.footer`
    border-top: 1px solid ${Constants.cssSmoothDark};
    text-align: center;
    padding: 10px;
    background: ${Constants.cssDark}
    color: ${Constants.cssFair}
`;
const FooterTitle = styled.h1`
    font-size: 1.2em;
`;
const FooterDesc = styled.p`
    margin: 0;
    padding: 0;
`;
export default class Footer extends Component {
    render(){
        return(
            <WrappedFooter>
                <FooterTitle>
                    That is our Footer!
                </FooterTitle>
                <FooterDesc>
                    Be glad you meet us! We are best company in the world!
                </FooterDesc>
            </WrappedFooter>
        );
    }
}