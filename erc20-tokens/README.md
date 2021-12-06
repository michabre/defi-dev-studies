# ERC20 Tokens Example

## Description

A dApp that allows a user to purchase ERC20 tokens.

There are 2 smart contracts -  one that defines the ERC20 token and the other that uses it. Once the ERC20 token has been deployed, its address is passed into the store smart contract where it can be made available for purchase with ETH.

## Commands

### Getting Things Running

The following will load the front end. It will be running on: http://localhost:9000/

```bash
# Start Development Server
npm run start

# Run Webpack - convert TS files and build package
npm webpack
```

### Run Smart Contracts Locally

```bash
# deploy to Ganache
truffle migrate --network ganache
```

### Testing

Using Chai and Mocha for testing the smart contract.

Solidity Coverage is being used to verify how much the tests are covering. It will run all the tests, but will be much more thorough and return a nice table of how much of the tests have been covered. Seeing all green is very satisfying.

```bash
# start develop mode - deploys contract and creates dummy accounts
truffle develop

# once in develop mode
test

# run solidity-coverage
truffle run coverage
```

## Further Reading

- [Contract method: Error: Provider not set or invalid](https://ethereum.stackexchange.com/questions/36125/contract-method-error-provider-not-set-or-invalid)

- [HOW TO MOCK SOLIDITY SMART CONTRACTS FOR TESTING](https://ethereum.org/pl/developers/tutorials/how-to-mock-solidity-contracts-for-testing/)

- [How to implement ERC20 supply mechanisms](https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226)
