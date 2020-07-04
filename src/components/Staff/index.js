import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileCard from '../ProfileCard';
import data from '../../../src/data/staff.json';

const StaffStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 660px;
`

const Staff = () => {
  const [selectedEmployees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(get6UniqueRandomIndexes(data));
  }, []);

  const get6UniqueRandomIndexes = array => {
    let counter = 0;
    let i = array.length;
    let j = 0;
    let temp;
    while (i-- && counter < 6) {
        counter++;
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.slice(Math.max(array.length - 6, 1));
}

  return (
    <StaffStyled>
        {selectedEmployees.map(employee => (
            <ProfileCard key={employee.id} data={employee} />
          )
        )}
    </StaffStyled>
  );
}

export default Staff;
