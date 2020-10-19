# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles
Our Project Name is Yolo.
Our Team Slack Handles is UNTPFH4HW, and with Display name Max.

## (1) Brief Project Description
Yolo is a decentralized images dataset to develop ML and AI models based on Filecoin and IPFS. We are planning to storage [Open Images Dataset](https://storage.googleapis.com/openimages/web/index.html) on Filecoin and IPFS network by Powergate, and continue to enrich and improve it to be a decentralized dataset.

## (2) Link to Project UI
- [Yolo demo](https://yolo.coinsummer.io)
- [Yolo front-end repository](https://github.com/CoinSummer/yolo)

## (3) What does your application/UI do?
Everyone can use Yolo dataset to train their own Machine-learning and AI models. Users who have images can also upload them to contribute the Yolo dataset together with us. There will be some token rewards (in the feature) for their contribution after these images been reviewed. The Yolo application works as following:
![Yolo Network](https://raw.githubusercontent.com/CoinSummer/yolo/master/docs/yolo-network.png)

## (4) If your project is using a curated dataset, which one are you using?
We use [Open Images Dataset](https://storage.googleapis.com/openimages/web/index.html).

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
We are using a curated dataset.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
We are planning to store at least 5TB data to the Filecoin network, maybe more than 10TB if everything goes well.

## (7) How are you structuring the data?
The images dataset are unstructured data with JPG or PNG format. However, we manage these dataset and our application data by database like MySQL.

## (8) What pre-processing are you doing before ingesting the data?
It is currently planned to package a series of images which have same type and category, and then store them to the Filecoin network by sending storage deals to miners. The size of storage deals will be 3GB to 5GB according to the network bandwidth when sending to miners.

Every image which has packaged will be saved as a record in our database also. There is a `storageDealId` field to record that each image is contained in which deal. We get the deal status by subscribing Powergate's JSON RPC API. After one storage deal has successfully be sealed on the Filecoin sector, we will send a retrieve deal, and then store all the images in the deal to IPFS network as cache. The Yolo application will fetch images and expose them to users from IPFS network.

There is some uncertainty about the API of Powergate, we have not yet completed the integration of Powergate's api, perhaps something will change our plan.

## (9)  What tech stack will you use to store the data?
We are planning to use Powergate and lotus.

## (10) How will you retrieve the data?
I think our application only need to retrieve data from Filecoin once. After the storage deal has successfully be sealed by miner, we will send a retrievel deal, and then store all the data in the deal to IPFS. IPFS is a intermediate caching layer for us to retrieve the necessary data and expose it to users.

## (11) Who is the intended user for your application/UI?
AI algorithm engineer, Computer vision researcher, Computer Science Students etc.

## (12) Do you have any users already or plans to acquire users soon?
Yes, we have some partners who planning to use our dataset, as well as some crowd users who want to contribute more images.

## (13) What challenges do you anticipate with this project?
We have not complete all the features of Yolo. I'm worried about if Powergate's API doesn't meet all the requirements to build Yolo, we have to implentment some features on IPFS and Filecoin by ourselves.

Another challenge is the size of storage deal, We don’t know whether the network bandwidth is fast enough to transfer 3GB - 5GB files to miner.
