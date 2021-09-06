import CarsFilter from '../components/CarsFilter/CarsFilter';
import Main from '../components/Main/Main';
import User from '../components/User/User';

export const routes = [
  { path: '/', component: Main, exact: true },
  { path: '/user/:id', component: User, exact: true },
  { path: '/carsFilter', component: CarsFilter, exact: true },
];
