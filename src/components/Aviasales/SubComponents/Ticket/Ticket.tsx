import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../../../../helpers/formatAviaPrice';

const Ticket = ({ tickets, isLoading }) => {
  if (isLoading) {
    return null;
  } else {
    return (
      <>
        {tickets?.length > 0 && !isLoading ? (
          tickets.map(ticket => (
            <DivTicket key={ticket.carrier + ticket.price}>
              <DivPriceAndLabel>
                <Price>{formatPrice(ticket.price)}</Price>
                <div>S7</div>
              </DivPriceAndLabel>
            </DivTicket>
          ))
        ) : (
          <div>Empty</div>
        )}
      </>
    );
  }
};

export default Ticket;

const DivPriceAndLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
const Price = styled.h3`
  color: #2196f3;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  margin: 0;
`;
const DivTicket = styled.div`
  width: 502px;
  height: 184px;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 25%);
  margin-top: 20px;
  background-color: white;
`;
