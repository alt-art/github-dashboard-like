import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Router from './Router';

const Content = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  padding-left: 50px;
`;

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Content>
        <Router />
      </Content>
    </>
  );
}

export default App;
