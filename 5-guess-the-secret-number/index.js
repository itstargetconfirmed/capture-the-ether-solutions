require('dotenv').config()
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const secretNumber = require('./abis/secret-number.json');

const provider = new HDWalletProvider({
    privateKeys: [process.env.WALLET_PRIVATE_KEY],
    providerOrUrl: process.env.ROPSTEN_INFURA_URL
  });


const web3 = new Web3(provider);

const hash = "0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365";

let answer = null; 

const init = async () => {

    // determine uint8 value of hash.
    for(let i = 0; i < 256; i++) {

        const value = web3.utils.soliditySha3({
            'type': 'uint8',
            'value': String(i)
        });
    
        console.log(`The number ${i} hashed is ${value}.`);
    
        if (value === hash) {
            console.log(`The answer is ${i}.`);
            answer = i; 
            break;
        }

    }

    if(answer !== null) {
        // deploy contract on testnet.
        let contract = await new web3.eth.Contract(
            secretNumber.abi,
            process.env.CHALLENGE_CONTRACT_ADDRESS
        );

        // send transaction to guess number.
        const tx = await contract.methods.guess(answer).send({
            from: process.env.WALLET_PUBLIC_KEY,
            value: '1000000000000000000' // 1 ether.
        });
        
        console.log(`Your transaction receipt is printed below.`);
        console.log(tx);
    } else {
        console.log(`The answer was not found.`);
    }

}

init();