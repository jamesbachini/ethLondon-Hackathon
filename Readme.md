# ethLondon Hackathon Project

## mETH - Multichain Staked Ethereum Index Token

This is the open source repository for mETH which is submitted to the ethLondon hackathon competition.

mETH is a multichain index fund of liquid staking tokens.

Deposit stETH and rETH (others to follow) and mint mETH tokens on Ethereum mainnet. The mETH token can be bridged using  the Wormhole messaging service to multiple alternate layer 1 and layer 2 blockchains.

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

## Installation Instructions

```
npm install
npx hardhat deploy
npx http-server ./frontend
```