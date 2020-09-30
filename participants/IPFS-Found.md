# <Project Name>

Before submitting a PR containing your team's project information:

- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

- Project Name : IPFS Found
- Slack Handles : IPFSUnion.cn

## (1) Brief Project Description

Based on Filecoin network, we develop an application platform for storage and retrieval to help users store various types of files, including text, picture, audio, video, etc. IPFS-Found supports storage of multiple data sizes. We aim to build more decentralized, stable and robust data storage platform.

## (2) Link to Project UI

Link : https://filecoin.in

## (3) What does your application/UI do?

This is a completely data storage and retrieval platform，which supports the following features: 
- Storage Client: user can easily storage the real data to the Filecoin network by "IPFS Found", including different types of data.
- Retrieval Client: user can query the desired files by the file name or file CID.

## (4) If your project is using a curated dataset, which one are you using?

It will use many kinds of data from "curated" dataset.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We will use the curated dataset

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We will store these dataset to the Filecoin network as much as possible to build a large data storage and retrieval platform, which is our long-term goal.

## (7) How are you structuring the data?

Firstly, we will download the curated dataset to our local machine, and we sort them by type and size. Considering the time limit, we may only deal one type of files，such as video data.

## (8) What pre-processing are you doing before ingesting the data?

During the slingshot, we just store curated dataset. Considered the miner sealing process, we will divide it to multiple files that are smaller than 32G when the file is larger than 32G, so that they are suitable for data sealing process.

## (9)  What tech stack will you use to store the data?

We use Powergate to interact with Filecoin client(Lotus).

## (10) How will you retrieve the data?

We the data firstly will be retrieved from the local storage, if cannot, we will try to get it from the intermediate cache layer (such as IPFS). Finally, If it still doesn't work，we will take some time to have a retrieval deal from the Filecoin network.

## (11) Who is the intended user for your application/UI?

"IPFS Found" aim to support stable and robust storage and retrieval platform to everyone, but we will build it for individual users who need to store small amounts of data, and in the future enterprise clients will be considered.

## (12) Do you have any users already or plans to acquire users soon?

Yes. Our user-base is growing, and for now we have some clients from business partner. Besides, we are planning a strategy to attract some individual users.

## (13) What challenges do you anticipate with this project?

- The retrieval speed of Filecoin network is a huge challenge for us.
- It need more time to develop a great application.
