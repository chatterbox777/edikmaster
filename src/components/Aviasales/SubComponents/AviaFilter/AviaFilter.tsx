import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../../../../Shared/Checkbox/Checkbox';

const AviaFilter = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 'all', label: 'Все', checkboxValue: false },
    { id: 'transfersOff', label: 'Без пересадок', checkboxValue: false },
    { id: '1transfer', label: '1 пересадка', checkboxValue: false },
    { id: '2transfer', label: '2 пересадки', checkboxValue: false },
    { id: '3transfer', label: '3 пересадки', checkboxValue: false },
  ]);

  const handleCheckbox = id => {
    setCheckboxes(checkboxes.map(el => (el.id === id ? { ...el, checkboxValue: !el.checkboxValue } : el)));
  };

  return (
    <FilterMain>
      <Span>Количество пересадок</Span>
      <Ul>
        {checkboxes.map(checkboxObj => {
          return (
            <Li onClick={() => handleCheckbox(checkboxObj.id)} key={checkboxObj.id}>
              <Checkbox checkboxValue={checkboxObj.checkboxValue} id={checkboxObj.id} label={checkboxObj.label} />
            </Li>
          );
        })}
      </Ul>
    </FilterMain>
  );
};

export default AviaFilter;

const Ul = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  &:hover {
    background-color: #f1fcff;
    cursor: pointer;
  }
`;
const Span = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  display: block;
  text-align: left;
  padding: 20px;
`;

const FilterMain = styled.div`
  height: 252px;
  width: 232px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;
  margin-right: 20px;
`;
