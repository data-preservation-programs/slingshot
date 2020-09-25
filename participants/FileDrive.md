Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below
## (0) Project Name and Team Slack Handles
Our project name is **FileDrive**, Filecoin Slack handle: **flytosky**

## (1) Brief Project Description
FileDrive is a databank powered by IPFS & Filecoin, you can retrieve any documents by filename and content hash. 

And a databank will be built to store useful public data from all busness. However, It may start with a reliable application at early stage of this project.

All the data in FileDrive will be synchronized to Filecoin nodes for the purpose of safety and stability, and it will be retrieved from IPFS nodes for efficiency and convenient user experience.

## (2) Link to Project UI

**MockUp**

https://org.modao.cc/app/c53a08b3b63d09e7792043facdf2dc737b698a42?simulator_type=device&sticky

**Project website**

http://filedrive.io  （deploying）   
https://filedrive.io   （in plan）

Application need to transfer data directly with IPFS nodes, it is not easy to deploy SSL certificates.   
So it will take a little time to deploy SSL certificate.


## (3) What does your application/UI do?

The application designed to follow the principle of minimizing verifiable products.

The functions of upload, search, download and database will be implemented in the first version.



## (4) If your project is using a curated dataset, which one are you using?

We plan to build a Databank for storing public data from open source platforms. It contains 3 parts as below:

- All the curated dataset
- Data from Open Source Platform
- Data from user

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
**What sorts of data will you collect?** 
- Software mirror for developer
- Game installation package for Game enthusiasts
- CryptoCurrency Market Dataset for CryptoCurrency trader
- Public resource from user who want to build a catalog
- and so on ......

**Do you own or have exclusive rights to the data you plan to use?**

Yes.

**Is the data license available online?** 

Yes, Only the open source and data authorized by the user could be retrieved on FileDrive.

**Does the data contain any sensitive or illegal information?**

No, We will do content review.


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
500T.

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

Filedrive is created for open data and can be stored and retrieved for all.

The file will be extracted from IPFS nodes when the users retrieve.

Users could get the information search by keywords or content Hash.
While, they could also find the information  from Databank's catalog.


## (11) Who is the intended user for your application/UI?

People who own public data and want to keep it for a long time.



## (12) Do you have any users already or plans to acquire users soon?

Yes. We are working with data download service providers, such as gaming and software distribution channels who want to store data into Filecoin.


## (13) What challenges do you anticipate with this project?
We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!

Massive file migration.


ROI. 

Will some proportion of the storage power can be transferred to the Mainnet like Orbital Burn?

