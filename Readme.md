# ethLondon Hackathon Project

## mETH - Multichain Staked Ethereum Index Token

This is the open source repository for mETH which is submitted to the ethLondon hackathon competition.

mETH is a multichain index fund of liquid staking tokens.

Deposit stETH and rETH (others to follow) and mint mETH tokens on Ethereum mainnet. The mETH token can be bridged using  the Wormhole messaging service to multiple alternate layer 1 and layer 2 blockchains.

## Proof of Concept

In the proof of concept we created a cross-chain token on Near's Aurora EVM blockchain but in theory the token could be ported to any network that wormhole supports including:

- Ethereum
- Solana
- Arbitrum
- Avalanche
- Optimism
- Base
- BNBchain
- Algorand
- Near
- Aptos
- Sui
- Polygon

The code is not audited or production ready and suitable for financial transactions.

Contracts are deployed to Goerli and Aurora testnets.

https://github.com/jamesbachini/ethLondon-Hackathon/blob/main/contracts/mETH.sol

## Near BOS fronted

The frontend is built on ethers.js and the intention was to keep the code as simple as possible. This enabled us to migrate it to JSX and deploy to a NEAR BOS component.

Code: https://github.com/jamesbachini/ethLondon-Hackathon/blob/main/frontend/bos2.jsx

https://near.org/jamesbachini.near/widget/mETH

## Installation Instructions

```
npm install
npx hardhat deploy
npx http-server ./frontend
chrome http://127.0.0.1:8080/
```