import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;pro