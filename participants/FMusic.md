## (0) Project Name and Team Slack Handles

- Our Project Name: FMusic
- Team Slack Handles: [FUNBLOCKS](https://funbloks.slack.com/join/shared_invite/zt-hy0c64sg-pGNuL92B~azTpyZz8M6jgg#/)

## (1) Brief Project Description
FMusic is a global music source shared system. 

Users can upload the music they like and the music they want to collect. After uploading to FMusic, they can download it at any time and share it with others. You can also enjoy shared music files uploaded by other users. 

We aim to establish an open music community to prevent centralized monopoly.

## (2) Link to Project UI
- [FMusic Demo](https://axhub.im/ax9/23d60b55baa41e75/#g=1)

## (3) What does your application/UI do?
FMusic is a music sharing platform. It provides users with an entrance to upload music files, after  user uploads their music files to FMusic, FMusic is responsible for the on-chain interaction with the Filecoin network and permanently stores the user’s files on the Filecoin network.

- When they needs to find the music resources they wants, Fmusic can also find all the music files that have been uploaded to the Filecoin network and provide users to download them.
- When users need to save important music files, we will charge the corresponding FIL as a handling fee based on the gas fee and duration of the transfer on the chain.

Similarly, users also need to pay a certain fee for downloading to get what they wants.

## (4) If your project is using a curated dataset, which one are you using?
We use [Free Music Archive](https://github.com/mdeff/fma).

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
We are the official data set used.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
We planing to upload about 300TB of data to the Filecoin network.

## (7) How are you structuring the data?
Our data is unstructured to data, and the data format is MP3.

## (8) What pre-processing are you doing before ingesting the data?
Import through PushPath, the upload interface of Texture Hub/Buckets technology stack. Each file is between 1Mib-100Mib. File data information directory path data or table field information will be stored in ThreadDB to retrieve specific data through cid, name and time.

## (9) What tech stack will you use to store the data?
Texture Hub/Buckets.

## (10) How will you retrieve the data?
The file size read each time is between 1Mib-100Mib. Store index in threaddb to read data and use IPFS cache layer.

## (11) Who is the intended user for your application/UI?
Our target users are music lovers.

## (12) Do you have any users already or plans to acquire users soon?
YES, we have 100 million potential blockchain users, we're very confident that we can get people to like our products. And our acquisition of users will be divided into three stages.

Promote within a limited range, invite our music-loving friends to use our products, we are currently at this stage. Small-scale promotion, to promote our products in more music lovers' communities. Large-scale promotion, placing ads on TikTok, Twitter and other platforms to attract music enthusiast.

## (13) What challenges do you anticipate with this project?
The main challenges are as follows: 
- Will storage costs exceed user expectations.
- Whether music lovers are willing to wait a long time to store files.
- What is the probability of the uploaded file being damaged.

