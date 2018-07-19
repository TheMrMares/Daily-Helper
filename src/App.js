import React, { Component } from 'react';
import styled, {injectGlobal} from 'styled-components';
import Constants from './Constants';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

const StyledHeader = styled(Header)``;
const StyledFooter = styled(Footer)``;
const RouterHolder = styled.div``;
injectGlobal`
  body, html {
    background: ${Constants.cssDark};
  }
  img {
    max-width: 100%;
    position: relative;
  }
`;
const WrappedApp = styled.div`
  color: ${Constants.cssDark}
  ${StyledHeader}, ${StyledFooter}, ${RouterHolder} {
    float: left;
    width: 100%;
  }
`;

class App extends Component {
  render() {
    return (
      <WrappedApp>
        <Router>
          <RouterHolder>
            <StyledHeader/>
              <Route exact path="/" component={Welcome} />
            <StyledFooter/>
          </RouterHolder>
        </Router>
      </WrappedApp>
    );
  }
}

export default App;
