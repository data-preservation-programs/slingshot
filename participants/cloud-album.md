# <Cloud-Album>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

**Our project name is Cloud-Album, We'are simon, Allen and Joe in Slack. Our team is one of filecoin miner and also we're developing IPFS applications**

## (1) Brief Project Description

- a personal photo and video storage platform.
- Users can upload personal photos and videos.
- After uploading to the StarCraft Album, you can download and share at any time.
- Users can create albums or albums, generate a pair of public and private keys, share the public key address, and share the album with others.

## (2) Link to Project UI

- [ui](https://github.com/guowenshuai/szxjyt/tree/master/cloud-album)
- [try it](https://github.com/guowenshuai/szxjyt/tree/master/cloud-album/QRcode.png)

only android version now


## (3) What does your application/UI do?

Users can upload photos and videos. Also can share to others in a safe way.

## (4) If your project is using a curated dataset, which one are you using?

**Video**

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

**All video data is uploaded by the user, and only the owner and users authorized by the owner can view it**

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

**We have probably 10T data planning  store to the Filecoin Network**

## (7) How are you structuring the data?

**We only store picture or video files**

## (8) What pre-processing are you doing before ingesting the data?

- Import via PushPath, additional upload interface for `texture hub/bucket` technology
- Each file is between 1Mib-100Mib
- File data information directory path data or table partition information will be stored in ThreadDB to retrieve specific data by cid, name and time

## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*

## (10) How will you retrieve the data?

- The file size read each time is between 1Mib-100Mib
- Store index in threaddb to read data and use IPFS caching layer

## (11) Who is the intended user for your application/UI?

**Everyone who likes to share your life**

## (12) Do you have any users already or plans to acquire users soon?

**we have about 3,000 users now**

## (13) What challenges do you anticipate with this project?

- working around the grpc apis for Developer
- Does users understand and believe Filecoin
- File loss due to miners' strike

