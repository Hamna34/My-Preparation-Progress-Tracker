import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AddQuestion from "./components/QuestionForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />
<Route
  path="/add-question"
  element={<AddQuestion />}
/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;