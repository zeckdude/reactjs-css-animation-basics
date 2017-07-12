import {render} from "react-dom";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import {Main} from "./components/Main";

render(
  <Router>
  <Main/>
</Router>, window.document.getElementById('app'));
