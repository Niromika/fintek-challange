import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  height: 100px;

  .company-title {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    font-weight: 500;
  }
  
  @media (max-width: 961px) {
    justify-content: center;
  }
`

const Header = () => {
    return (
      <HeaderStyled>
        <a href="http://Fintek.co.il" target="_blank" className="company-title">Fintek.co.il</a>
      </HeaderStyled>
    )
}

export default Header;