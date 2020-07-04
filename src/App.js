import React from 'react';
import styled from 'styled-components';
import Staff from './components/Staff';
import About from './components/About';
import Header from './components/Header';

const AppStyled = styled.div`
  padding-left: 8%;

  .main {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width:961px) {
    padding-left: 0;

    .main {
      flex-direction: column;
      align-items: center;
    }  
  }
`;

const App = () => {
  return (
    <AppStyled>
      <Header />
      <div className="main">
        <About />
        <Staff />
      </div>
    </AppStyled>
  );
}

export default App;