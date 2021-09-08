import React from 'react';
import styled from 'styled-components';

const TicketInfo = () => {
  return (
    <DivFlightInformation>
      <DivFlightInfoColumn>
        <SpanTitle>MOW-HKT</SpanTitle>
        <SpanDescription>10:00-11:45</SpanDescription>
      </DivFlightInfoColumn>
      <DivFlightInfoColumn>
        <SpanTitle>MOW-HKT</SpanTitle>
        <SpanDescription>10:00-11:45</SpanDescription>
      </DivFlightInfoColumn>
      <DivFlightInfoColumn>
        <SpanTitle>MOW-HKT</SpanTitle>
        <SpanDescription>10:00-11:45</SpanDescription>
      </DivFlightInfoColumn>
    </DivFlightInformation>
  );
};

export default TicketInfo;

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
`;

const DivFlightInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px 10px 20px;
`;
