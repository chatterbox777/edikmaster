import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setFilteredTicketsActionCreator, setFilterForTicketsActionCreator } from '../../../../store/actionCreators';
import { filterAviaSelector, ticketsAviaSelector } from '../../../../store/selectors/selectors';

const Tabulation = () => {
  const filter = useSelector(filterAviaSelector);
  const tickets = useSelector(ticketsAviaSelector);

  const dispatch = useDispatch();
  const [buttonsData, setButtonsData] = useState([
    { id: 'cheap', name: 'Самый дешевый', position: 'left', active: false },
    { id: 'fast', name: 'Самый быстрый', position: 'middle', active: false },
    { id: 'optimal', name: 'Оптимальный', position: 'right', active: false },
  ]);
  const handleBtnClick = btnObj => {
    setButtonsData(
      buttonsData.map(btn => {
        if (btn.id === btnObj.id) {
          return { ...btn, active: true };
        }
        return { ...btn, active: false };
      }),
    );
  };

  useEffect(() => {
    dispatch(
      setFilterForTicketsActionCreator({
        tabs: buttonsData.find(btn => btn.active)?.id,
        transfers: filter?.transfers ?? [],
      }),
    );
  }, [buttonsData]);

  useEffect(() => {
    dispatch(setFilteredTicketsActionCreator(tickets));
  }, [filter]);

  return (
    <DivFlexRow>
      {buttonsData.map(btn => (
        <Button onClick={() => handleBtnClick(btn)} key={btn.position} position={btn.position} active={btn.active}>
          {' '}
          {btn.name}{' '}
        </Button>
      ))}
    </DivFlexRow>
  );
};

export default Tabulation;

const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width: 168px;
  height: 50px;
  border: 1px solid #dfe5ec;
  box-sizing: border-box;
  background: ${props => (props.active ? '#2196F3' : 'white')};
  color: ${props => (props.active ? 'white' : 'black')};

  border-radius: ${props => {
    switch (props.position) {
      case 'left':
        return '6px 0px 0px 6px';

      case 'middle':
        return 'none';

      case 'right':
        return '0px 6px 6px 0px';

      default:
        break;
    }
  }};
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

// const ButtonLeft = styled(Button)`

//   border-radius: 6px 0px 0px 6px;
// `;
// const ButtonMiddle = styled(Button)`
//   background: ${props => (props.active ? '#2196F3' : 'white')};
//   color: ${props => (props.active ? 'black' : 'white')};
//   border: 1px solid #dfe5ec;
// `;
// const ButtonRight = styled(Button)`
//   background: ${props => (props.active ? '#2196F3' : 'white')};
//   color: ${props => (props.active ? 'black' : 'white')};
//   border-radius: 0px 6px 6px 0px;
// `;
