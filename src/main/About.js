import React from 'react';
import styled from 'styled-components';

const AboutStyled = styled.div`
  margin: 0 85px 0 65px;

  .company-title {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }

  .title { 
    font-size: 42px;
    font-weight: 400;
    margin-bottom: 70px;
    margin-top: 70px;
    line-height: 1;
  }

  .sub-title {
    font-size: 15px;
    margin-bottom: 3px;
  }

  .description {
    font-size: 12px;
    margin: 0 0 68px 0;
  }

  @media (max-width: 961px) {
    .company-title {
      text-align: center;
    }
    
    .company-Details {
      display: flex; 
      align-items: baseline;
      justify-content: space-evenly;
    }
  }

  @media (max-width: 480px) {
    .company-title {
      text-align: center;
    }

    .company-Details {
      display: flex; 
      flex-direction: column;
      align-items: center;

      .title { 
        font-size: 80px;
      }

      .company-about {
        display: flex;
        flex-direction: column;
        align-items: center;

        .sub-title {
          font-size: 40px;
        }

        .description {
          font-size: 28px;
        }
      }
    }
  }
`

const About = () => {
  return (
    <AboutStyled>
      <div className="company-title">Fintek.co.il</div>
      <div className="company-Details">
        <h1 className="title">Executing<br /> is<br /> everything</h1>
        <section className="company-about">
          <h2 className="sub-title">WHO ARE WE</h2>
          <p className="description">We are a team of creativly diverse,<br /> driven, and innovative individuals<br /> working to achieve the best we can.</p>
        </section>
        <section className="company-about">
          <h2 className="sub-title">OUR MISSION</h2>
          <p className="description">We want to give our clients the best<br /> and help their businesses succeed.<br /> Together we can makr oyu inspire<br /> to growth to even more than where<br /> you are today.</p>
        </section>
      </div>
    </AboutStyled>
  );
}

export default About;
