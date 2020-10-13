Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below
## (0) Project Name and Team Slack Handles

Our project name is **PictureOcean（图海）**, Filecoin Slack handle: **zhangchaofei**

## (1) Brief Project Description

With the continuous update of mobile phones and the continuous improvement of mobile phone shooting functions, it has long been the norm for people to record life and work operations with mobile phone shooting functions. The improvement of education makes "sharing" one of the "self-contained attributes" of young people. This platform scientifically and permanently stores data shared by users.

## (2) Link to Project UI

**Project website**

http://tuhai.gctech.xin

## (3) What does your application/UI do?

View: View the pictures on the whole network at will, optimize the adaptation according to different screen display requirements, and show the best rendering effect of the pictures. One-click upload: simplify the upload operation, "dumb" operation allows everyone to use the upload function. Speedy download: Optimize the download function to download pictures quickly without affecting the pixels.


## (4) If your project is using a curated dataset, which one are you using?

We plan to build a Databank for storing public data from open source platforms. It contains 3 parts as below:

- Data from user

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
**What sorts of data will you collect?** 
- Private resource from user who want to build a catalog

**Do you own or have exclusive rights to the data you plan to use?**

Yes.

**Is the data license available online?** 

Yes, Only the open source and data authorized by the user could be retrieved on PictureOcean.

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


## (11) Who is the intended user for your application/UI?

All users who need to store data

## (12) Do you have any users already or plans to acquire users soon?

Yes. Online: Promote on the search platform; Offline: Pull new through planning activities;


## (13) What challenges do you anticipate with this project?

1. The storage capacity far exceeds user expectations.
2. Permanent storage users don't have to worry about expiration.
3. Zero-cost storage for users.
