# PAYPAL DAPP

# what is dapps 

A decentralized application (DApp) is a type of distributed, open source software application that runs on a peer-to-peer (P2P) blockchain network rather than on a single computer. DApps are similar to other software applications that are supported on a website or mobile device, but they're P2P supported. DApps are considered part of Web3, the present evolution of the World Wide Web.

The decentralized nature of DApps means that, once a developer has released a DApp's codebase, others can build on top of it. The app is not controlled by a single authority. DApp development creates a variety of applications, including those for decentralized finance, web browsing, gaming and social media.

DApps are built on a decentralized network supported by a blockchain distributed ledger. The use of blockchain means a DApp can process data through distributed networks and execute transactions. DApps are often built using the Ethereum platform.

Distributed ledger technologies, such as the Ethereum blockchain, have helped popularize DApps. The major advantages of DApps are that they're always accessible and have no single point of failure.

# wallets 

![Screenshot 2024-05-14 140334](https://github.com/Riyatomar14/Cpp--college-PRACTICAL/assets/143107173/85572319-570c-40b0-a559-eb88323feaa4)


## RPC providers:

OnFinality

Pocket Network

Infura

Alchemy

Blockdaemon

Ankr

Quicknode

Chainstack

Blast API

GetBlock

## flowchart-

![Screenshot 2024-05-14 134041](https://github.com/Riyatomar14/Cpp--college-PRACTICAL/assets/143107173/d6ffd467-cf72-4bd3-ada4-73a0abd0f571)

## dapp arhitecture 

![image](https://github.com/Riyatomar14/Cpp--college-PRACTICAL/assets/143107173/10653bfc-eae0-4406-a777-d4ca57a6b1d4)

# tools required for dapp

![image](https://github.com/Riyatomar14/Cpp--college-PRACTICAL/assets/143107173/67cebeeb-b19c-4062-bcb3-4aea34d8dd2a)

# Prerequisites-

Ubuntu install in your machine.

Node.js (version 18 and above) installed on your machine

Hardhat for Ethereum smart contract development

Account on Alchemy or Infura for API

Metamask account and their browser extension installed on your browser


* on vscode
  
* 1. first install hardhat

```
npm i -D hardhat
```

* 2. then intialize the project by running

```
npx hardhat
```

* then you see folders and files like this-

![Screenshot 2024-04-20 082543](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/4f5a1b5e-9584-421a-bc42-e8e53439f217)

* 3. install all dependencies

```
npm install --save-dev hardhat
```

```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

* 4. now set up the paypal.sol in contracts folder
  
[folder2/payPalStarter/smartcontract](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/blob/main/folder2/payPalStarter/smartcontract/paypal.sol)

* 5. now we have to set up the harder.config.js file
 
https://github.com/Riyatomar14/Paypal-clone-project-hardhat/blob/main/hardhat.config.js

note : also signup with alchemy

![Screenshot 2024-04-22 145946](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/ba7d312d-9c15-4ebd-bc5f-1f7f6f2018bf)
![Screenshot 2024-04-22 145929](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/560a968d-6cf6-496a-bdac-d6b9f45d090f)

* 6. now you are ready to depoly live on network testnet

```
npx hardhat clean
```

```
npx hardhat compile
```

then it will look like this 

![Screenshot 2024-04-20 082624](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/653f30f1-e438-4fc2-84fd-d1ad1aafe698)

* 7. now you connect it with netork to live depoly actually
 
```
npx hardhat run contracts/deploy.js --network sepolia
```

![Screenshot 2024-04-20 082528](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/ca46c654-4030-4023-b3ea-777399b12468)

```
npx hardhat verify your address --network sepolia
```

![Screenshot 2024-04-20 083520](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/9b9c825b-e95a-4767-88b1-5d2bd841f2a8)

* 8. you can also see it on etherscan by address
 
![Screenshot 2024-04-20 085431](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/94ce1d28-eabf-4bef-ae06-1cef14d6e939)

* you can seee the contract you deploy

![Screenshot 2024-04-20 084700](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/e73bba57-5166-4878-8d98-ca532a201c30)
![Screenshot 2024-04-20 084729](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/c2e274af-ef6c-4611-b2d7-80b6971e5196)

* 9. now we try our contract is it work or not

 * make two account on metamask named as Account1 and Account2 and Account1 send request to pay something bill to Account2

* a) first connect to web3(metamask account2) and add username as the address of the account2 in "read contract" like this

![Screenshot 2024-04-20 112156](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/34c6ff2c-cd5e-4199-a91d-1a44ac443164)

* b) now in "write contract" connect the Account1 and add username as your wish(in my case it is Riya) 

![Screenshot 2024-04-20 112528](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/8b26c32f-7f79-491e-8879-b627956e0b01)

* c) now see in read contract in the request section

![Screenshot 2024-04-20 112617](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/ed7ae06a-0f62-4a37-8aac-933084cb2ccc)
  
* d) now connect"write contract to account to pay like this

![Screenshot 2024-04-20 114725](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/9a6f92f0-7d88-4eca-9515-04fffce19947)

  
* e) now to see it transfer

![Screenshot 2024-04-20 114831](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/2ba2210d-dad0-469b-b717-40be7525e97a)
![Screenshot 2024-04-20 114819](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/20fb98f4-0897-436c-83d5-95865031552c)
![Screenshot 2024-04-20 114902](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/cbc1686c-2db3-47b2-8976-1a687f517e9b)

* f) now can also also check the history in "read contracts"

![Screenshot 2024-04-20 115048](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/9cc934c0-899c-4888-a866-a0d1bae04037)
![Screenshot 2024-04-22 145634](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/882b3efe-a0bc-4565-902f-50186f2a46d9)


# now for backend 

https://github.com/Riyatomar14/Paypal-clone-project-hardhat/blob/main/folder2/payPalStarter/backend/index.js

* a) by react
  
```
npx create-react-app paypal
```
  

* b) run the command to host locally

```
npm start
```

![Screenshot 2024-04-21 153042](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/b9efd5f3-a76e-42d3-be44-0fb64f9f095b)

![Screenshot 2024-04-21 153057](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/97c9882f-343d-41c8-85ff-9473cea7530e)

![Screenshot 2024-04-21 153241](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/62831848-16c6-4cc5-9577-382a23ef2626)

![Screenshot 2024-04-21 161615](https://github.com/Riyatomar14/Cpp/assets/143107173/a12bb486-ad51-4afe-8fab-ba4d3033d2a5)

b) you see like this-

![Screenshot 2024-04-21 111221](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/f5f7ca56-455e-4ff8-949e-330e4353b70a)

# now for frontend

first you have set the folder in vs code like this https://github.com/Riyatomar14/Paypal-clone-project-hardhat/tree/main/riyatomar/web3-paypal

* a) then you have connect the paypal to metamask on react

![Screenshot 2024-04-21 161829](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/2754a978-8e16-423b-a1ac-fd525661cce8)

![Screenshot 2024-04-21 161911](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/c833a30a-5938-4fb8-a189-01058aa9c29b)


* b) now you have to put Account1 address and sender adress(in my case Account2)
  
![Screenshot 2024-04-21 162515](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/ac53690c-f6b1-4cf5-b8ac-34bdece04b59)

![Screenshot 2024-04-21 162225](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/db324008-7890-4632-8ce6-04de22b450cc)


* c) after transaction get successful it will look like this
  
![Screenshot 2024-04-21 162654](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/36a63d7b-dece-4d4f-8101-52e2e710d616)

* d) you can also add the recipient like this way
  
![Screenshot 2024-04-21 162751](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/980ae81b-1845-4f9b-8b0c-f7d9272f8002)

![Screenshot 2024-04-21 162828](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/b1b33e44-975b-47e1-935a-6b8d2ad11b44)
  
  





 

  
