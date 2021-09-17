import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Loader from '../../Shared/Loader/Loader';
import { asyncGetAllTicketsAction, asyncGetSearchIdAction } from '../../store/asyncActions';
import {
  filteredTicketsSelector,
  isLoadingSelector,
  isTicketFilterSettedSelector,
  searchIdAviaSelector,
  stopRequestValueAviaSelector,
  ticketsAviaSelector,
} from '../../store/selectors/selectors';
import AviaLogo from '../../ui/images/logo.svg';
import AviaFilter from './SubComponents/AviaFilter/AviaFilter';
import Tabulation from './SubComponents/Tabulation/Tabulation';
import Ticket from './SubComponents/Ticket/Ticket';

const Aviasales = () => {
  const [lastTicketId, setLastTicketId] = useState(4);
  const [ticketsToShow, setTicketsToShow] = useState([]);

  const searchId = useSelector(searchIdAviaSelector);
  const tickets = useSelector(ticketsAviaSelector);
  const isLoading = useSelector(isLoadingSelector);
  const isRequestStopped = useSelector(stopRequestValueAviaSelector);
  const dispatch = useDispatch();
  const filteredTickets = useSelector(filteredTicketsSelector);
  const isFilterSetted = useSelector(isTicketFilterSettedSelector);

  useEffect(() => {
    dispatch(asyncGetSearchIdAction());
  }, []);

  useEffect(() => {
    if (!searchId || isRequestStopped) {
      return;
    }
    dispatch(asyncGetAllTicketsAction({ searchId }));
  }, [dispatch, searchId, tickets]);

  useEffect(() => {
    let newArr;
    if (filteredTickets && filteredTickets.length > 0 && isFilterSetted) {
      newArr = [...filteredTickets];
    } else {
      newArr = [...tickets];
    }
    const result = newArr.filter((_, id) => id >= 0 && id <= lastTicketId);

    setTicketsToShow(result);
  }, [isRequestStopped, lastTicketId, filteredTickets]);

  const handleShowFiveMoreTickets = () => {
    setLastTicketId(prev => prev + 5);
  };

  return (
    <Main>
      <div>
        <AviaLogoImg src={AviaLogo} alt="aviaSales" />
      </div>
      <MainRow>
        <AviaFilter />
        <DivFlexColumn>
          <Tabulation />
          <Loader isLoading={isLoading} />
          <Ticket isLoading={isLoading} tickets={ticketsToShow} />
          {ticketsToShow.length > 0 && (
            <ButtonLoadMoreTickets onClick={handleShowFiveMoreTickets}>Показать еще 5 билетов!</ButtonLoadMoreTickets>
          )}
        </DivFlexColumn>
      </MainRow>
    </Main>
  );
};

export default Aviasales;

const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  padding: 103px;
`;

const AviaLogoImg = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 30px;
`;
const Main = styled.div`
  background-color: #f3f7fa;
`;
const ButtonLoadMoreTickets = styled.button`
  width: 502px;
  height: 50px;
  margin-top: 20px;
  background-color: #2196f3;
  color: white;
  border-radius: 4px;
  border: 0;

  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;
