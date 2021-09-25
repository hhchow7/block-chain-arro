import React from "react";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import testService from "./services/testService";

import NavBar from "./containers/NavBar";
import Test from "./containers/Test";
import EthereumKeypair from "./containers/pages/EthereumKeypair";
import SmartContract from "./containers/pages/SmartContract";

import "./App.css";

function App() {
  useEffect(async () => {
    // const res = await testService.getTest();
    // console.log(res)
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Test} />
        <Route path="/gen-eth-keypair" exact component={EthereumKeypair} />
        <Route path="/smart-contract" exact component={SmartContract} />
      </Switch>
    </div>
  );
}

export default App;