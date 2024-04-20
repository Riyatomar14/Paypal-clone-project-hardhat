# how to start making PAYPAL PROJECT 

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



  



  






 

  
