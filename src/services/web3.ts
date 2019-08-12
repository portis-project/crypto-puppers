import Portis from "@portis/web3";
import Web3 from "web3";

export const portis = new Portis(
  "df2102d7-74a4-48fa-a6be-dd03848202d1",
  "ropsten",
  { gasRelay: true }
);
export const web3 = new Web3(portis.provider);

export const web3networks: {
  [key: string]: { name: string; explorerTx: string; explorerAddress: string };
} = {
  "1": {
    name: "Ethereum",
    explorerTx: "https://etherscan.io/tx",
    explorerAddress: "https://etherscan.io/address"
  },
  "3": {
    name: "Ethereum (ropsten)",
    explorerTx: "https://ropsten.etherscan.io/tx",
    explorerAddress: "https://ropsten.etherscan.io/address"
  },
  "4": {
    name: "Ethereum (rinkeby)",
    explorerTx: "https://blockscout.com/eth/rinkeby/tx",
    explorerAddress: "https://blockscout.com/eth/rinkeby/address"
  },
  "5": {
    name: "Ethereum (goerli)",
    explorerTx: "https://blockscout.com/eth/goerli/tx",
    explorerAddress: "https://blockscout.com/eth/goerli/address"
  },
  "42": {
    name: "Ethereum (kovan)",
    explorerTx: "https://blockscout.com/eth/kovan/tx",
    explorerAddress: "https://blockscout.com/eth/kovan/address"
  }
};
