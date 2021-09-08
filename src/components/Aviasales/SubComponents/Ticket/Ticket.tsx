import React from 'react';
import styled from 'styled-components';
const Ticket = ({ tickets, isLoading }) => {
  if (isLoading) {
    return null;
  } else {
    return (
      <>
        {tickets?.length > 0 && !isLoading ? (
          tickets.map(ticket => <DivTicket key={ticket.carrier + ticket.price}>{ticket.carrier}</DivTicket>)
        ) : (
          <div>Empty</div>
        )}
      </>
    );
  }
};

export default Ticket;

const DivTicket = styled.div`
  width: 502px;
  height: 184px;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 25%);
  margin-top: 20px;
  background-color: white;
`;
