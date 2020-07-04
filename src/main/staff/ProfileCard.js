import React, {useEffect} from 'react';
import styled from 'styled-components';

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  align-items: center;

  .image {
    width: 220px;
    height: 235px;
  }

  .name {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 0;
  }

  .job {
    margin: 4px 0 36px 0;
    font-size: 12px;
    color: #888;
  }

  @media (max-width: 480px) {
    max-width: 420px;

    .image {
      width: 420px;
      height: 460px;
    }

    .name {
      font-size: 28px;
    }

    .job {
      font-size: 20px;
    }
  }
`

const ProfileCard = props => {
  const { firstname, lastname, job, avatar} = props.data;
  return (
    <ProfileStyled>
      <img src={avatar} className="image"/>
      <h2 className="name">{`${firstname} ${lastname}`}</h2>
      <p className="job">{job}</p>
    </ProfileStyled>
  );
}

export default ProfileCard;