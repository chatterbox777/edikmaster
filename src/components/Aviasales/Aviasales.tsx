import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Loader from '../../Shared/Loader/Loader';
import { asyncGetAllTicketsAction, asyncGetSearchIdAction } from '../../store/asyncActions';
import { isLoadingSelector, searchIdAviaSelector, ticketsAviaSelector } from '../../store/selectors/selectors';
import AviaLogo from '../../ui/images/logo.svg';
import AviaFilter from './SubComponents/AviaFilter/AviaFilter';
import Tabulation from './SubComponents/Tabulation/Tabulation';
import Ticket from './SubComponents/Ticket/Ticket';

const Aviasales = () => {
  const searchId = useSelector(searchIdAviaSelector);
  const tickets = useSelector(ticketsAviaSelector);
  const isLoading = useSelector(isLoadingSelector);

  console.log(searchId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetSearchIdAction());
  }, [dispatch]);

  useEffect(() => {
    if (!searchId) {
      return;
    }
    dispatch(asyncGetAllTicketsAction({ searchId }));
  }, [dispatch, searchId]);

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
          <Ticket isLoading={isLoading} tickets={tickets} />
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
