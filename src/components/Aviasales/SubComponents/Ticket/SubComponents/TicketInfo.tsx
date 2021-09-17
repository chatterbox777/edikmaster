import React from 'react';

import styled from 'styled-components';

import { getCommaAndValue, getTimeInterval, timeConvert } from '../../../../../helpers/ticketHelpers';

const TicketInfo = ({ info: { origin, destination, date, stops, duration } }) => {
  return (
    <DivFlightInformation>
      <DivFlightInfoColumn>
        <SpanTitle>
          {origin}-{destination}
        </SpanTitle>
        <SpanDescription>{getTimeInterval(date, duration)}</SpanDescription>
      </DivFlightInfoColumn>
      <DivFlightInfoColumn>
        <SpanTitle>В пути</SpanTitle>
        <SpanDescription>{timeConvert(duration)}</SpanDescription>
      </DivFlightInfoColumn>
      <DivFlightInfoColumn>
        <SpanTitle>Пересадки {stops.length > 0 ? stops.length : null}</SpanTitle>
        <DivFlexRow>
          {stops.length > 0 ? (
            stops.map((stop, i) => <SpanDescription key={stop}>{getCommaAndValue(stop, stops, i)}</SpanDescription>)
          ) : (
            <SpanDescription>Нет</SpanDescription>
          )}
        </DivFlexRow>
      </DivFlightInfoColumn>
    </DivFlightInformation>
  );
};

export default TicketInfo;

const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100px;
`;

const SpanTitle = styled.span`
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #a0b0b9;
`;
const SpanDescription = styled.span`
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  color: #4a4a4a;
`;
const DivFlightInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

const DivFlightInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px 10px 20px;
`;
