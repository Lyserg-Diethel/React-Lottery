import React from "react";
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Lottery from "./Lottery.js";
import Final from "./Final.js";
import AppHeader from "./AppHeader.js";
import AppFooter from "./AppFooter.js";
import AboutUs from "./AboutUs.js"

import { generateRandomNumber } from "./Helpers/utils";
import { createTicket } from "./Helpers/actions";
import { deleteTicket } from "./Helpers/actions";
import { endLottery } from "./Helpers/actions";
import { resetLottery } from "./Helpers/actions";

import './App.css'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      winningNumber: generateRandomNumber(1, 10),
      remainingTickets: 5,
      purchasedTickets: [],
      final: false
    };
    this.createTicket = createTicket.bind(this);
    this.deleteTicket = deleteTicket.bind(this);
    this.endLottery = endLottery.bind(this);
    this.resetLottery = resetLottery.bind(this);
    this.renderApp = this.renderApp.bind(this);
  }

  renderApp = () => {
    const actions = {};
    actions.createTicket = this.createTicket;
    actions.deleteTicket = this.deleteTicket;
    actions.endLottery = this.endLottery;

    if (this.state.final === false) {
      return (
        <Lottery
          actions={actions}
          remainingTickets={this.state.remainingTickets}
          purchasedTickets={this.state.purchasedTickets}
        />
      );
    } else {
      actions.resetLottery = this.resetLottery
      return (
        <Final
          winningNumber={this.state.winningNumber}
          purchasedTickets={this.state.purchasedTickets}
          actions={actions}
        />
      );
    }
  };
  render() {
    return (
              <BrowserRouter>
                <Layout className="layout">
                  <AppHeader/>
                  <Content>
                    <div className="site-layout-content App">
                      
                      <Switch>
                        <Route path="/" exact component={this.renderApp}/>
                        <Route path="/about" component={AboutUs}/>
                        <Redirect from="*" to="/about"/>
                      </Switch>
                      
                    </div>
                  </Content>
                  <AppFooter/>
              </Layout>
            </BrowserRouter>
    )  
}
}

export default App;
