import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import store from "./services/Store/Store";

import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Main from "./pages/Main/Main";

import "./App.css";

function disableZoomVideo() {
  const zoomEl = document.getElementById("zmmtg-root");
  if (zoomEl) {
    zoomEl.style.display = "none";
  }
}

function App() {
  disableZoomVideo();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <Box>
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/app" component={Main} />
              </Switch>
            </BrowserRouter>
          </Provider>
        </Box>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
