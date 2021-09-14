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
      const tickets = action.payload;

      let resultTickets = [];

      if (filterTransfers) {
        filterTransfers.forEach(value => {
          if (value === 'all') {
            resultTickets = tickets;
          } else {
            let filteredTicketsByValue = tickets.filter(ticket => {
              return ticket.segments[0].stops.length === value;
            });
            resultTickets = [...resultTickets, ...filteredTicketsByValue];
          }
        });
      }

      return { ...state, filteredTickets: resultTickets, isTicketsFiltered: true };
    }
    case SET_FILTER_FOR_TICKETS: {
      const { tabs = [], transfers = [] } = action.payload;
      return {
        ...state,
        filter: { tabs, transfers },
        isFilterSetted: tabs.length > 0 || transfers.length > 0 ? true : false,
      };
    }
    default:
      return state;
  }
};
