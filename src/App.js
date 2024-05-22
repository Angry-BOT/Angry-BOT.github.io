import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PortfolioWebsite from "components/PortfolioWebsite";
import AOS from "aos";
import Sticky from "sticky-js";
import { isMobile } from "react-device-detect";

import "aos/dist/aos.css";
import "./fonts.css";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });

      this.sticky = new Sticky(".sticky-effect");
    }, 1500);
  }

  componentDidUpdate() {
    AOS.refresh();
    if (this.sticky) {
      this.sticky.destroy(); // Corrected typo from 'destory' to 'destroy'
      this.sticky = new Sticky(".sticky-effect");
    }
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/PortfolioWebsite" component={PortfolioWebsite} />
          <Redirect from="/" to="/PortfolioWebsite" />
        </Switch>
      </Router>
    );
  }
}

export default App;
