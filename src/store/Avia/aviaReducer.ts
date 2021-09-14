/* eslint-disable complexity */
import {
  SET_ALL_TICKETS,
  GET_SEARCH_ID,
  SET_STOP_REQUEST,
  SET_FILTERED_TICKETS,
  SET_FILTER_FOR_TICKETS,
} from './../Types/aviaTypes';

const initialState = {
  isFilterSetted: false,
  filter: null,
  filteredTickets: [],
  tickets: [],
  searchId: null,
  stopRequest: false,
};

export const aviaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TICKETS:
      return { ...state, tickets: [...state.tickets, action.payload].flat() };
    case GET_SEARCH_ID:
      return { ...state, searchId: action.payload };
    case SET_STOP_REQUEST:
      return { ...state, stopRequest: action.payload };

    case SET_FILTERED_TICKETS: {
      const filterTransfers = state.filter?.transfers ?? null;

      const filterTab = state.filter?.tabs;

      const tickets = action.payload;

      let resultTickets = [];
      debugger;

      if (filterTransfers) {
        filterTransfers.forEach(value => {
          if (value === 'all') {
            return;
          } else {
            let filteredTicketsByValue = tickets.filter(ticket => {
              return ticket.segments[0].stops.length === value;
            });
            resultTickets = [...resultTickets, ...filteredTicketsByValue];
          }
        });
      }
      if (filterTab) {
        let filteredTickets = [];
        let ticketsOrResultTickets = resultTickets.length > 0 ? resultTickets : tickets;
        switch (filterTab) {
          case 'cheap':
            filteredTickets = [...ticketsOrResultTickets].sort((a, b) => {
              return a.price - b.price;
            });
            break;
          case 'fast':
            filteredTickets = [...ticketsOrResultTickets].sort((a, b) => {
              return a.segments[0].duration - b.segments[0].duration;
            });
            break;
          case 'optimal':
            break;
          default:
            break;
        }
        resultTickets = [...filteredTickets];
      }
      return { ...state, filteredTickets: resultTickets, isTicketsFiltered: true };
    }
    case SET_FILTER_FOR_TICKETS: {
      const { tabs = null, transfers = [] } = action.payload;
      return {
        ...state,
        filter: { tabs, transfers },
        isFilterSetted: tabs || transfers.length > 0 ? true : false,
      };
    }
    default:
      return state;
  }
};
