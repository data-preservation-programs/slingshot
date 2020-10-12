# <FileZoo>

## (0) Project Name and Team Slack Handles

- Project Name : FileZoo
- Slack Handles : LeoCheung

## (1) Brief Project Description

We develop a interesting software - FileZoo(Store for all kinds of files, special for elephant level files and documents) based on the filecoin network. And many kinds of real data will be stored to the filecoin Network, sunch as AI train dataset, imageNet data, COVID-19 Open Research Dataset, stock dateset and so on. We hope it can more and more useful data for our world

## (2) Link to Project UI

Link : http://filezoo.wenzhouteck.net/

## (3) What does your application/UI do?

It is a interesting data storage and retrieval platform，which possess two functions for now: 
- Storage Function: FileZoo can help users storage the real data to the Filecoin network, for now they just need to upload the files to the website. 
- Retrieval Function: user can search the files that they wanted by the file name or dataCID.

## (4) If your project is using a curated dataset, which one are you using?

It will storage the data from "curated" dataset, include：
- COVID-19 Open Research Dataset
- Chest X-Ray Images (Pneumonia)
- Huge Stock Market Dataset
- Open Images Dataset
- Filecoin Proofs 

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We will use the curated dataset

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We will store these dataset about 6TiB ~ 10TiB during the slingshot competition.

## (7) How are you structuring the data?

we will download the curated dataset to our local machine, and sort them into different types.

## (8) What pre-processing are you doing before ingesting the data?

During the slingshot, we just store curated dataset. Considered the miner sealing process and network stablelity，we uniformly cut the file into a piece of about 250M， one piece will be used for one deal.

## (9)  What tech stack will you use to store the data?

For now, we develop the application-FileZoo based on lotus, and after some time, we plan to use Powergate to interact with Filecoin client(Lotus) and IPFS.

## (10) How will you retrieve the data?

We will store the data in my local machine, so firstly I will retrieval the data from the local storage, if the file is destroyed, we will try to get it from IPFS (if can). Finally, we will send a retrieval deal to the miner of Filecoin network(this process maybe take a long time).

## (11) Who is the intended user for your application/UI?

"FileZoo" is a decentralized and stable storage and retrieval platform, everyone who want to storage some files can use it, and somebody want to get the information about related topic can search something use it.

## (12) Do you have any users already or plans to acquire users soon?

No, for now, I juest start develop it, I will storage some different kinds of data belong to different industry, such as AI training data, imageNet dataset and stock dataset, it can attract some different researchers to use it.
For a long-term considering, I will develop download function for the storage data to help users more conveniently use it.
 
## (13) What challenges do you anticipate with this project?

- The time and cost is big challenge for me, we need more time to download data and send it to miners.
- I need more time to develop more functions.
- I need some testFil to send data to miners, and some stable miners to accept my data order, many miners in that list do not accept my deal. 