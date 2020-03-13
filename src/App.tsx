import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import LendingPoolABI from "./ABI/LendingPoolABI";
import ERC20ABI from "./ABI/ERC20ABI";
import { DataGrid } from './DataGrid';
import css from 'styled-jsx/css';

const staticStyles = css`
  .App {
    display: flex;
    flex-direction: column;
    flex: auto;
    height: 1px;
    &__content {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
      position: relative;
    }
  }
`;


let web3: Web3;
let coreAddress: string;

const connectWallet = async () => {
  const currWindow = window as any;

  if (currWindow.ethereum) {
    web3 = new Web3(currWindow.ethereum);
    try {
      await currWindow.ethereum.enable();
      const poolContract = new web3.eth.Contract(
        LendingPoolABI,
        "0x398eC7346DcD622eDc5ae82352F02bE94C62d119"
      );

      coreAddress = await poolContract.methods.core().call();
    } catch (e) {}
  } else if (currWindow.web3) {
    web3 = new Web3(web3.currentProvider);
  } else {
    alert("You have to install MetaMask !");
  }
};

const approveTransfer = async(currency: string) => {


}

const liquidationCall = async () => {};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet}>Connect to wallet</button>
        <DataGrid/>
      </header>
      <style jsx={true}>{staticStyles}</style>
    </div>
  );
}

export default App;
