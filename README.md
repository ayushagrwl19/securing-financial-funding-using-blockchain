HelpingHands : Crowdfunding Platform Powered by Ethereum Blockchain


## Problem Statement and Necessity 
Crowdfunding has emerged as a popular method for raising funds for projects, causes, and individuals in need. The advent of the Covid pandemic has witnessed a surge in global crowdfunding activities, ranging from small-scale campaigns assisting individuals with medical aid to large-scale funds like PM Cares.

There are several key issues with current crowdfunding platforms that we aimed to address:

Security: As the funds involved increase, it becomes crucial to ensure robust security measures. While existing platforms employ measures like symmetric encryption to safeguard e-payments, there remains a risk of hacking. By leveraging blockchain technology, which has remained uncompromised thus far, we can attain a higher level of security.

Transparency and Anti-Fraud: Instances of crowdfunding scams have been prevalent and continue to pose a challenge. Currently, there is no effective way to track the utilization of funds, leading to concerns about misuse. Our objective is to establish complete transparency throughout the fund flow, ensuring that every stage can be traced, thus eliminating the possibility of fund misappropriation.

Global Contribution: Existing platforms often cater to specific countries, limiting the ability of people from other nations to contribute to various campaigns. Leveraging blockchain technology, we enable individuals worldwide to contribute to campaigns seamlessly. Transactions are expedient and convenient, fostering global participation.

In summary, our aim is to utilize blockchain technology to enhance security, transparency, and global accessibility in crowdfunding, mitigating risks and empowering people to make a meaningful impact through their contributions.


## Detailed Report and PPT
- A Detailed Report of the Project can be [found here](https://drive.google.com/file/d/1hio_CHveM8L2uHOKoymNfj8HjtZ5rvGs/view?usp=sharing)
- A Presentation on the Application can be [found here](https://docs.google.com/presentation/d/1EDYWwnn6CZ8-KwBKfxec-CqBeTkgpQnx/edit?usp=sharing&ouid=112414014077945909772&rtpof=true&sd=true)


## Tech Stack 
- Next JS
- Chakra UI
- Solidity
- Web3.js

## To run the application locally
- Fork the Project 
- run `yarn install` to install all the dependencies
- run `yarn dev` to run the application locally

## Prerequisites to create Campaign and Contribute
1. Install **Metamask** as Google Chrome Extension .
2. Create an account on Geurli chain and request ether using geurli faucet.

## To Deploy your own Contract 
1. Create an account in [https://infura.io](https://infura.io/)
2. Create .env file in Ethereum directory and add these line to it.
	> mnemonic = 'Your mnemonic code of metamask account' <br>
	link = 'Your infura end point link '
3. Do the Changes that you want to do inside the Solidity File
4. Compile the Contract 
  `node compile.js`
5. Deploy Contract by going into smart-contract Directory and run.
	`node deploy.js`
	
   Copy the contract deploy address and replace it in factory.js file.
  
  
6. Replace your "infura end point link" in web3.js and app.js file
