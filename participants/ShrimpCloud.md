Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below
## (0) Project Name and Team Slack Handles

Our project name is **ShrimpCloud（虾云）**, Filecoin Slack handle: **zhangchaofei**

## (1) Brief Project Description

With the increasing demand for file storage, the inconvenience of hardware storage and the limitation of storage space, the emergence of cloud storage has fundamentally solved the problem of user needs. Shrimp Cloud Network Disk supports the scientific and long-term storage of user data in the form of pictures, videos, audios, and files. Just log in to your account to upload and download data that needs to be stored or used anytime and anywhere.

（随着人们对文件储存量需求的增大，硬件存储的不便性和存储空间的局限性，云存储的出现从根本上解决了用户需求问题。虾云网盘支持图片、视频、音频、文件等形式科学长久的存储用户数据。只要登录账户随时随地上传、下载需要存储或使用的数据。）

## (2) Link to Project UI

**Project website**

http://xiayun.gctech.xin

## (3) What does your application/UI do?

The main functions are as follows: register an account, log in to the account to upload data. The network disk permanently stores user data. The network disk supports uploading of pictures, videos, audios, files and other formats. Users can download data at any time as needed.

（主要功能如下：注册账户，登录账户进行数据上传。网盘永久性存储用户数据。网盘支持图片、视频、音频、文件等格式上传。用户可根据需要随时下载数据。）



## (4) If your project is using a curated dataset, which one are you using?

We plan to build a Databank for storing public data from open source platforms. It contains 3 parts as below:

- Data from user

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
**What sorts of data will you collect?** 
- Private resource from user who want to build a catalog

**Do you own or have exclusive rights to the data you plan to use?**

Yes.

**Is the data license available online?** 

Yes, Only the open source and data authorized by the user could be retrieved on ShrimpCloud.

**Does the data contain any sensitive or illegal information?**

No, We will do content review.


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
2Pib.

## (7) How are you structuring the data?
Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?

Raw data is unstructured data, and data formats is document, compressed package, image, audio, video.

We will add the tag to the file for the data index, and it will be stored in MySQl.

## (8) What pre-processing are you doing before ingesting the data?

The files will be uploaded to the IPFS nodes through the application, and then updated into Filecoin via Market deal by provider.

The file will be divided into many pieces if it is big enough, which will be stored in the FileDrive.

Structured data will be updated (File name,tag,piece cid, deal id,provider).


## (9) What tech stack will you use to store the data?

Lotus,IPFS


## (10) How will you retrieve the data?

First, we will store the data in IPFS, save the CID of the file in IPFS to the Mysql database, and then import the data in IPFS to Filecoin. When the miner successfully completes the storage transaction, we will also save the CID of Filecoin to Mysql. IPFS serves as a write cache and also serves as a hot data cache.

(首先我们会将数据存储到IPFS中，将IPFS中文件的CID保存到Mysql数据库中，然后将IPFS中的数据导入到Filecoin上，当矿工成功达成存储交易后，我们会将Filecoin的CID也保存到Mysql中。IPFS从中起到了写入缓存的作用，同时还作为热数据缓存。)


## (11) Who is the intended user for your application/UI?

All users who need to store data

## (12) Do you have any users already or plans to acquire users soon?

Yes. Online: Promote on the search platform; Offline: Pull new through planning activities;


## (13) What challenges do you anticipate with this project?

1. The storage capacity far exceeds user expectations.
2. Permanent storage users don't have to worry about expiration.
3. Zero-cost storage for users.
