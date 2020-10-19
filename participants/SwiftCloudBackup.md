# Swift Cloud Backup System

## (0) Project Name and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Project name: **SwiftCloudBackup**
Filecoin Slack handle: **coder-lb**

## (1) Brief Project Description

Enterprises generate large amounts of data every day. Valuable data have become important assets of enterprises. In order to make these data available and security, reliable data backup services in remote locations must be used. StorSwift is an enterprise data storage provider and helps many enterprises to design their backup system. traditional backup methods have many defects, i.e., costs, privacy, availability, and so on.   
So we are trying to find better solution for enterprise cloud backup system. Filecoin is a brand new storage technology based on zk-SNARKs and block chain, and we think it can give enterprises more choices. It may reduces the costs because of sunk costs. It can build a better solution for privacy since it is decentralized. It will improve the performance and availability because people can choose the best miner nodes if there are thousands of miners continue to provide storage & retrieval services in the network. So we develop and design an enterprise cloud backup system based on the Filecoin network, and believe it will be one of our most important storage businesses in the future.

## (2) Link to Project UI

https://cloudbackup.storswift.com/

It is under development, and we already have an internal web application for testing. It will be online very soon!

## (3) What does your application/UI do?


People can upload their archive files to the specific miner nodes via this application. They can view their files with the corresponding CIDs and download them easily. It can also record the backup history.  

## (4) If your project is using a curated dataset, which one are you using?

Our project use the archive data of enterprises or non-profit organizations. Of course we can use the curated datasets to test, but we prefer to the archive datasets from our partners.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We will use the archive data with public license for this project. These data include private and public ones. Private data can only be accessed by the owners. Some of data are public, and we ask each user to add the corresponding license in the archive package (a text file in the root folder before compressing). We also have provided some public docker & VM images to many customers, and they are public data but very useful for enterprise IT managers.


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

500 TiB ~ 1 PiB. Of course we want to send more data to Filecoin network.

## (7) How are you structuring the data?

Most of the data are unstructured data. But we will use the compressed file format to make transfer more efficient. Considering various of requirements, we will use several format, including zip, 7-zip, tar.gz and tar.bz2.

## (8) What pre-processing are you doing before ingesting the data?

We use these steps to pre-precoess data:
* All backup files are copied to a local folder.
* Add a text based file to introduce the archive data. We recommend the file name is BACKUP.README.
* Compress all the files in the folder. If the compressed file size is not more than $SINGLE_FILE_SIZE, then one file is OK. If not, then we will use a tool to split the file to several files. Each file will be sent as a separated deal. Currently, $SINGLE_FILE_SIZE is set to 16 GiB. We will set it to a larger one (not more than the sector size) or smaller one according to the feedback.


## (9)  What tech stack will you use to store the data?

We use lotus and IPFS. And we may use our own framework based on lotus and IPFS.

## (10) How will you retrieve the data?

Metadata of the backup data can be viewed via application/UI, and the selected data will be retrieved easily. In the future, we will add more tools for enterprise customers to make this process much easier. Usually cache layer is not needed. But we will still use it because some data will be accessed frequently at a certain moment. We will use IPFS as the cache layer.

## (11) Who is the intended user for your application/UI?

Some enterprises or non-profit organizations will be our intended users.

## (12) Do you have any users already or plans to acquire users soon?

Yes. Some of our customers want to use this solution to store their data. We will ask more customers to have a try, and we think that many of them will store data into Filecoin if it is easy to use with low cost.

## (13) What challenges do you anticipate with this project?

There are two big challenges.
1. Many customers are using traditional backup methods and think that they are relatively stable. How to make them willing to migrate more data to the Filecoin network?
2. Much data will be transferred to Filecoin miner nodes, and the network bandwidth will be a big issue. So the offline data migration technology will be very important and probably it will directly affect whether this solution can be promoted on a large scale.
