### Important Links 
I've written a [companion blog post](https://andersonsingh.com/capture-the-ether-guess-the-secret-number/) for this solution which explains the logic used to solve the challenge. 

### How to Run

I've written this solution as an npm project and the dependencies are included in the package.json file. You can run 'npm install' to install the required packages. 

1. Web3JS
2. HD Wallet Provider
3. Dot Env

I've used DotEnv to make the execution process simplier. You will need to rename the sample.env file to .env and complete the four (4) required variables as listed below. 

- WALLET_PUBLIC_KEY - Your wallet's public address. 
- WALLET_PRIVATE_KEY - Your wallet's private key.
- ROPSTEN_INFURA_URL - Your Infura Ropsten URL. 
- CHALLENGE_CONTRACT_ADDRESS - The contract address that Capture the Ether deployed. 

### Notes
To interact with the challenge smart contract we need its ABI, which I included in the 'abis' folder. On Etherscan, the ABI for the contract was not available, so I used remix IDE to create it based on the source code provided.  