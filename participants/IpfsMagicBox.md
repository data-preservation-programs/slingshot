# IpfsGenPic

## (0) Project Name and Team Slack Handles

*Our project Name:* **IpfsMagicBox**

*Team Slack Handles:* **Simon4545**

## (1) Brief Project Description

**IpfsMagicBox** *is an ecological project integrating video on demand, live broadcast and personal cloud disk. It is an operational project, whose functions are always being updated iteratively, and meaningful ecological functions such as mall will be added later.*

## (2) Link to Project UI

*Preview of the key interface of IpfsMagicBox shown below:*

<img src="https://gateway.originprotocol.com/ipfs/QmP9UU68h4cikWJQBBA8av6oePzYnNAvf6mkRrghE89khg" align="center"  width="375">
<img src="https://gateway.originprotocol.com/ipfs/QmQbNGXVoLCrPBcwwV3Y9kUQiKsFkc5MwFFHkkJcxXtSJm" align="center"  width="375">
<img src="https://gateway.originprotocol.com/ipfs/QmeAtnQpMj4TMBKJHTavHpkTsfbm3bBYqvA1baQ27iUqSL" align="center"  width="375">
<img src="https://gateway.originprotocol.com/ipfs/QmSv4t4FSRPGD2HL2nigz898FNj9Vk9Sw3g5L3ynGyg16M" align="center"  width="375">

*Project's github link: [IpfsMagicBox](https://github.com/simonandhe/IpfsMagicBox)*


## (3) What does your application/UI do?

*IpfsMagicBox is a platform where users can watch TV and watch live broadcast.It is also a tool that can be used as the user's private cloud disk, IpfsMagicBox can easily and quickly establish private storage and sharing space. A family of N mobile phones can share private cloud, build their own social group, freely control private cloud space, upload and view photos, videos and documents anytime and anywhere, and instantly release the memory space of mobile phones, computers and tablets for the whole family. It also has the ability to link smart hardware to monitor the current state of the device.*

## (4) If your project is using a curated dataset, which one are you using?

*Various*

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*Video on demand requires us to store the video data on demand into the IPFS network, every 256M a small segment.The live streaming function requires us to code the live streaming of HLS into TS format and store it in THE IPFS network.Private cloud disk uploads are currently limited to pictures, audio, video, and documents.*

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*We plan to store more than 10,000 vod videos, live streams from 50 live radio stations, and private cloud disk data, a total of at least 100T, and possibly more.*

## (7) How are you structuring the data?

*Our on-demand video only supports H264 encoding in MP4 format, while live streaming is slice data in TS format. The image format saved in cloud disk only supports PNG, JPG, GIF, MP4 video format, MP3 audio format, doc, PPT, PDF, XLS document format.*

## (8) What pre-processing are you doing before ingesting the data?

*According to the video size, the video data will be segmented into small segments every 256M and uploaded to filecoin network.The live stream is also sliced into TS slices per 512KB and uploaded to the Filecoin network.The private cloud disk will add the user's uploaded data to the user's own fingerprint, and finally the data containing the user's fingerprint information will be saved in the filecoin network.The uploaded returned CID is stored in the centralized database.*

## (9)  What tech stack will you use to store the data?

*Powergate*

## (10) How will you retrieve the data?

*We will find the real address in filecoin network according to the FID array of files stored in the centralized database, and finally realize the data display of clients through the assembly of the system.The data of private cloud disk needs to obtain the access right of the current user according to the authentication mechanism, and the authorized user can obtain the real file storage address according to the fingerprint information.*

## (11) Who is the intended user for your application/UI?

*All users who need the functionality of this product.*

## (12) Do you have any users already or plans to acquire users soon?

*We already have a group of users, and the daily life is more than 3000. At present, this project is a continuous operation project, and we plan to launch more meaningful functions to get more users, such as monitoring machines for mining.*

## (13) What challenges do you anticipate with this project?

*Operational projects need constant update and iteration. We need to find the functional requirements that users urgently need. On the other hand, we need to make a deeper application with the existing Filecoin network, which is our plan to be implemented gradually in the future.*
