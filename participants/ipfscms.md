# ipfsCMS

- Official Site: https://ipfscms.com/

## (0) Project Name and Team Slack Handles

- @Ryane Liu
   - the team leader of ipfscms.com

## (1) Brief Project Description

The IPFSCMS collaborative creation platform was born in May 2019. The main members have a senior blockchain background. We hope to create a collaborative creation and content management platform for the 5G era through the characteristics of blockchain distributed storage and data deposit.

## (2) Link to Project UI
### Our Official Site
   - https://ipfscms.com/
### ShowCase: VR Data Stroage & Distribute
- http://vr.fmode.cn/tour/cc1e5cdb0824ba42/

![vr data](http://cloud.file.futurestack.cn/vr1.png)
![vr data2](http://cloud.file.futurestack.cn/vr2.png)

### ShowCase: Company Static HTML Page
- http://www.ipfsapp.io/
### ShowCase: Collaborative Writing Platform
- http://note.futurestack.cn/
![vr data2](http://cloud.file.futurestack.cn/note1.png)


   
## (3) What does your application/UI do?

Mainly for content creators to provide social creation, copyright protection, data asset quantification services. Original incentive model for blockchain with full process coverage: asset quantification in the creative process, real-time incentives in the distribution process, and copyright IP value-added benefits.

At the same time, it provides content managers with various forms of content management solutions, such as: VR panoramic platform, county family tree, cultural and creative crowdfunding, government information disclosure.

## (4) If your project is using a curated dataset, which one are you using?

Supported：
- Condensed Movies - Video
- USENET (2005-2011) - Text
- Chest X-Ray Images (Pneumonia) - JPEG

Not Supported but required:
- https://www.babylonjs.com/ - .babylon 3D Model
- https://threejs.org/ - 3D Model

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

- sorts of data
   - Text(tiny)
   - Image(small)
   - Video(middle)
   - 3DModel(large)
   - VR Scene(largest)
- Available online
- We have Content review mechanism


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

- **For Closed Beta: about 100GB （slingshot）**
- For Public Beta: about 10TB
- For Future: Depends on the user


## (7) How are you structuring the data?

- we have status database to store data hash, for optimize http network transmit.(Some Use Case still need http)
- we have account system to store in different buckets for every customer.(Space and cost calculation)

Single File is easy to manage. But a set of Date such as, Web files, VR Scene Sections, which need more flexible dir manage method.

## (8) What pre-processing are you doing before ingesting the data?

- We want to simply buying storage services with Filcoin.
- **For Closed Beta: about 100GB （slingshot）**
- we have status database to store data hash, for indexing, for optimizing http network transmit.(Some Use Case still need http)
   - We mainly use **Buckets**
   - We will test the use of **ThreadDB**


## (9)  What tech stack will you use to store the data?

- mainly **Textile Hub/Buckets**
- other **lotus**

## (10) How will you retrieve the data?
- High frequency to visit.
- We will use **caching layer with ipfs**
- We will build status databases for indexing optimize.
- And also we have Central Server to redirect http request.

## (11) Who is the intended user for your application/UI?

- Company
- Writers
- Photo studio

## (12) Do you have any users already or plans to acquire users soon?

Yes:

- We already have 100GB data stored in our **IPFS Node**
   - least 10 Company Account
   - least 100 Persons Account
- We will figure out what's the difference between **IPFS Node** with **Buckets**


Plans:
- We will continue to develop management editing modules that support multiple content, that will **Stimulate users to upload data to Filecoin Network Conveniently**

## (13) What challenges do you anticipate with this project?

- We already have a lot of seed users.
- We have no worried about this product itself.

- The Only Biggest Problem is about mining: "lotus sync, never reach the latest
   - **already import snap.car.** I'm already imported with snap.car, after that,  sync is also too slow to reach latest tipset height.
   - **lotus net scores, looks fine, negtive and positive both exists.** network status is good for wget .car file, but lotus sync is slow.

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*
