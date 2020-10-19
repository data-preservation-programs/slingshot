Before submitting a PR containing your team's project information:

Make sure you rename this file to contain your project's name
Respond to add your response in each section below
(0) Project Name and Team Slack Handles
Project Name: Anyswap

Submission ID: 667127225

Team Slack Handles: https://filecoinproject.slack.com/team/U01BP0RR3EY

(1) Brief Project Description
Launched on 20/Jul/2020, Anyswap is a decentralized exchange based in BVI. Anyswap is a fully decentralized cross chain swap protocol, based on Fusion DCRM technology, with automated pricing and liquidity system. Anyswap DEX enables swaps between any assets on any blockchain which uses ECDSA or EdDSA as signature algorithm, including BTC, ETH, USDT, XRP, LTC, FSN, etc.

(2) Link to Project UI
https://anyswap.exchange/

(3) What does your application/UI do?
Anyswap is a decentralized exchange based in BVI. Anyswap is a fully decentralized cross chain swap protocol, based on Fusion DCRM technology, with automated pricing and liquidity system. Anyswap DEX enables swaps between any assets on any blockchain which uses ECDSA or EdDSA as signature algorithm, including BTC, ETH, USDT, XRP, LTC, FSN, etc.

In our project, in order to achieve cross-chain, we will synchronize the block data of all the target block chains we support. And parse these block data, restore transaction data and record in the database.

(4) If your project is using a curated dataset, which one are you using?
Transaction data parsed from synchronous blocks of BTC, ETH, XRP, LTC, FSN, BSC, etc.

(5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
Block data for each block chain.

(6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
About 100 TB to 300 TB.

(7) How are you structuring the data?
The data parsed from the synchronization block will be structured and saved.

(8) What pre-processing are you doing before ingesting the data?
Synchronize the blocks of each block chain. Parse blocks to obtain data. The data is stored and threaddb by texture hub /buckets. retrieve data by address, transaction hash, etc.

(9) What tech stack will you use to store the data?
Texture Hub/Buckets.

(10) How will you retrieve the data?
Programs that provide cross-chain transaction validation for users will retrieve and use this data and have completed cross-chain transactions for end users. In our project, each transaction involving a cross-chain triggers the retrieval and use of data on the relevant target chain.

At the same time, the constructed indexes and data will be used by third party applications in api ways, such as block explorer, crypto-currency wallet project, etc.

(11) Who is the intended user for your application/UI?
Programs that provide cross-chain transaction validation for users will retrieve and use this data and have completed cross-chain transactions for end users.

And block explorer, crypto-currency wallet etc projects will provide information retrieval services.

(12) Do you have any users already or plans to acquire users soon?
Yes.

Anyswap is already a running project, with over USD 5 million trading volume per day. And supports a variety of tokens, and deployment on multiple block chains. In the future will also support more chains, more crypto assets swap by decentralized exchange method.

(13) What challenges do you anticipate with this project?
The timeliness of data storage, data security and the cost of future data storage.
