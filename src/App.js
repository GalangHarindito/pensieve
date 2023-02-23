import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./config";
import PageBase from "./component/layout/pageBase";
import ToasterContainer from "./component/base/toaster";
import Login from "./pages/login";
import Register from "./pages/register";

function App({ history, store }) {
  return (
    <Router history={history}>
      <ToasterContainer />
      <Routes>
      <Route path={'/'} element={<Login />} key={'/'} />
      <Route path={'/register'} element={<Register />} key={'/register'} />
        {/* {publicRoutes.map(({ path, component: Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))} */}
      </Routes>
      <PageBase>
        <Routes>
          {privateRoutes.map(({ path, component: Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
        </Routes>
      </PageBase>
    </Router>
  );
}

export default App;
