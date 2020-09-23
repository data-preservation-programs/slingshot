# pServer

## (0) Project Name and Team Slack Handles

- Project Name: **pServer**
- Filecoin Slack handles:  **arsyun team**, Contact: waynewyang

## (1) Brief Project Description

**pServer is both a demander of ipfs/filecoin and a storage provider of ipfs/filecoin**

pServer is a new product centered on storage service, with expansive function.  pServer is equivalent to a computer without screen, the APP client is equivalent to the remote desktop of the computer without screen, the user will access the pServer through APP client.
the users of pServer can store and retrieve three types of data.

- 1 Private Data 
- 2 Sharing data in a small area
- 3 Sharing data globally(Slingshot), Which store and retrieve in IPFS and filecoin

- Here are some reference information about pserver
	- [Lightning Demos - pServer in Developers Meetings Berlin July 2018](https://www.youtube.com/watch?v=DGCyGv_1VB8)
	- [pServer Brief Description](https://arsyun.com/index/enindex.html)
	- [arsyun github link](https://github.com/arsyun/ARS)


## (2) Link to Project UI

- https://arsyun.com/index/endownload.html

## (3) What does your application/UI do?

the users of pServer can store and retrieve three types of data through pServer APP.
- Store and retrieve private Data
- Store and retrieve sharing data in a small area
- Store and retrieve Sharing data globally(Slingshot), Which store and retrieve in IPFS and filecoin

## (4) If your project is using a curated dataset, which one are you using?

- We will give priority to the data in the  [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md) for some store and retrieval tests, but if it is slow to obtain the data in the datasets due to network reasons, we will consider switching the test source. Of course, we will submit  PR to the datasets.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

- We will give priority to the data in the  [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md) for some store and retrieval tests

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

- More than 1PB of data I guess, of course we hope to store more data into filecoin.

## (7) How are you structuring the data?

We use raw data, use json format to encapsulate files, and generate user directories according to user operations and habits

## (8) What pre-processing are you doing before ingesting the data?

There are two types of data that need to be processed: 1. User private data: we are currently searching from the pServer database, 2. Shared data: (datasets or other data), by pre-importing the arscloud server(our filecoin storage clients), Call powergate to import. At this time, our role is more like a data center, providing users with services such as data retrieval. It is expected that the scale will be PB level.

## (9)  What tech stack will you use to store the data?

- Powergate

## (10) How will you retrieve the data?

We have set up different user roles to resolve the contradiction between the security of private data and the openness of shared data. Retrieval is determined according to the needs of users. For example: private data will be retrieved directly through pServer database; shared data will be prioritized Obtained from the ipfs node, if it is multimedia data, users can directly play or display them through the app.

## (11) Who is the intended user for your application/UI?

Our existing pserver users and potential new users who may join, and most of them are nas users.

## (12) Do you have any users already or plans to acquire users soon?

Yes, pServer already has some certain users, and we hope to increase our user stickiness through richer functions, such as sharing data information of the entire IPFS/filecoin network.

## (13) What challenges do you anticipate with this project?

- It is slow to obtain the data in the datasets due to network reasons in China.
