import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./share/Navbar/Navbar";
import { routes } from "./router/router";
function App() {
  console.log(routes);
  return (
    <div className="App">
      <Navbar />

      {routes.map((route) => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </div>
  );
}

export default App;
