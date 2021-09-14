import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Checkbox from '../../../../Shared/Checkbox/Checkbox';
import { setFilteredTicketsActionCreator, setFilterForTicketsActionCreator } from '../../../../store/actionCreators';
import {
  filterAviaSelector,
  isTicketFilterSettedSelector,
  ticketsAviaSelector,
} from '../../../../store/selectors/selectors';

const AviaFilter = () => {
  const dispatch = useDispatch();
  const isFilterSetted = useSelector(isTicketFilterSettedSelector);
  const filter = useSelector(filterAviaSelector);

  const tickets = useSelector(ticketsAviaSelector);

  const [checkboxes, setCheckboxes] = useState([
    { id: 'all', label: 'Все', checkboxValue: false },
    { id: '0', label: 'Без пересадок', checkboxValue: false },
    { id: '1', label: '1 пересадка', checkboxValue: false },
    { id: '2', label: '2 пересадки', checkboxValue: false },
    { id: '3', label: '3 пересадки', checkboxValue: false },
  ]);

  const handleCheckbox = id => {
    const newCheckboxesArr = checkboxes.map(el => (el.id === id ? { ...el, checkboxValue: !el.checkboxValue } : el));
    const filteredCheckboxes = newCheckboxesArr.filter(checkbox => checkbox.checkboxValue);

    setCheckboxes(newCheckboxesArr);
    dispatch(
      setFilterForTicketsActionCreator({
        transfers: filteredCheckboxes.map(el => (el.id !== 'all' ? +el.id : el.id)),
      }),
    );
  };
  useEffect(() => {
    dispatch(setFilteredTicketsActionCreator(tickets));
  }, [filter]);
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
const MemoizedAviaFilter = React.memo(AviaFilter);

export default MemoizedAviaFilter;

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
