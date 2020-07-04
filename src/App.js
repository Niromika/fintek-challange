import React from 'react';
import styled from 'styled-components';
import Staff from './main/staff/Staff';
import About from './main/About';

const AppStyled = styled.div`
  border: 1px solid	#E8E8E8;
  border-top: 0;
  display: flex;
  padding-top: 45px;

  @media (max-width:961px) {
    flex-direction: column;
  }
`

const App = () => {
  return (
    <AppStyled>
      <About />
      <Staff />
    </AppStyled>
  );
}

export default App;