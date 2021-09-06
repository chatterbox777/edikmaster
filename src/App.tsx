import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './share/Navbar/Navbar';
import { routes } from './router/router';

function App() {
  console.log(routes);
  return (
    <div className="App">
      <Navbar />

      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        ))}
      </Switch>
    </div>
  );
}

export default App;
