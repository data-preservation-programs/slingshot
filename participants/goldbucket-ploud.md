# <gold bucket - pcloud>

## (0) Project Name and Team Slack Handles

- Project Name : pcloud
- Slack Handles : lhk522   腾盛科技

## (1) Brief Project Description

Based on the filecoin network, we have developed a general software personal network disk. In the first stage, we will continue to develop and optimize the related functions of personal network disk. In the second stage, we will develop enterprise network disk and other applications.

## (2) Link to Project UI

Link : http://pcloud.tsara-ipfs.com:8090/

## (3) What does your application/UI do?

Our back-end program uses Java to call filecoin, data management, business processing, and the front-end program uses Vue

## (4) If your project is using a curated dataset, which one are you using?

It will storage the data from "curated" dataset, include：
- COVID-19 Open Research Dataset
- Chest X-Ray Images (Pneumonia)
- Huge Stock Market Dataset
and some person data, include film,picture,document,game...

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We are used some person data, include film,picture,document,game

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We will store these dataset about 2TiB ~ 10TiB during the slingshot competition.

## (7) How are you structuring the data?

We use folder tree for classification, and we use our own business database to bind with data CID.

## (8) What pre-processing are you doing before ingesting the data?

Divide files over 32GB into less than 32GB.

## (9)  What tech stack will you use to store the data?

We develop applications based on Lotus client, and after some time, we plan to use Powergate to interact with Filecoin client(Lotus) and IPFS.

## (10) How will you retrieve the data?

We will store the data in my local machine, so firstly I will retrieval the data from the local storage, if the file is destroyed, we will try to get it from IPFS (if can). Finally, we will send a retrieval deal to the miner of Filecoin network(this process maybe take a long time).

## (11) Who is the intended user for your application/UI?

Now it is for individual users, and it will be targeted at enterprise users in the future.

## (12) Do you have any users already or plans to acquire users soon?

We are optimizing the program, will be in the program run more perfect, promote to the market.
 
## (13) What challenges do you anticipate with this project?

I think the storage and retrieval of filecoin are too slow.
