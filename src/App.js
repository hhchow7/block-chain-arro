import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./containers/NavBar";
import Home from "./containers/pages/Home";
import EthereumKeypair from "./containers/pages/EthereumKeypair";
import SmartContract from "./containers/pages/SmartContract";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gen-eth-keypair" exact component={EthereumKeypair} />
          <Route path="/smart-contract" exact component={SmartContract} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
