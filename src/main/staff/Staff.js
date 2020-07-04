import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import { people } from '../../people';

const StaffStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 55px;
  margin-left: 35px;

  @media (max-width: 961px) {
    justify-content: space-evenly;
    margin: 0 150px 0 150px;
  }
`

const Staff = () => {
  const [selectedPeople, setPeople] = useState([]);

  const selectEmployees = () => {
    let sixRandomEmployees = [];
    for (let i = 0; i < 6; i++) {
      const selectedPerson = people[Math.floor(Math.random() * people.length)];
      sixRandomEmployees.push(selectedPerson);
      people.pop(selectedPerson);
    }
    return sixRandomEmployees;
  };

  useEffect(() => {
    setPeople(selectEmployees());
  }, []);

  return (
    <StaffStyled>
        {selectedPeople.map(person => {
          return (
            <ProfileCard key={person.id} data={person} />
          )
        })}
    </StaffStyled>
  );
}

export default Staff;
