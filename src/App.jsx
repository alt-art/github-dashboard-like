import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Router from './Router';

const Content = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 50px;
`;

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Content>
        <Router />
      </Content>
    </div>
  );
}

export default App;
