# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

Our Project name is HuoShanYun(HSY). Filecoin slack handle is Jerry(UQQ0H2FQQ).

## (1) Brief Project Description

HSY is a file storage client. Users can upload files, pictures, musics, and video data from their computers or mobiles to Filecoin. The functions supported by this application are as follows: 

Version 1.0: user registration and login; upload and download(breakpoint continuation); display of personal storage space usage
; personal file retrieval.

Version 2.0: create folder; move file ; batch management(upload, move, download, etc); setting time period stored on filecoin;
Support online preview.

Version 3.0: users can share their data, but the data must be validated by AI; create groups, share documents and work together;
replace our own cache file system with IPFS.

## (2) Link to Project UI

H5: http://111.19.254.147/
App and desktop will be developed in the future

## (3) What does your application/UI do?

Users can upload all kinds of private and shared data through UI interface. At the same time, it supports simple online collaborative office

## (4) If your project is using a curated dataset, which one are you using?

No. Our users will upload their own data.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

The application will collect Pictures, Videos, Audio, Text, and so on. We have privacy agreements and data hosting agreements. Data ownership belongs to the user. We will use AI and manual methods to verify the validity of the data.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We plan at least 500TB of storage space and as much effective user data as possible. And in the subsequent version update, the storage service space is gradually expanded according to the growth rate of users.

## (7) How are you structuring the data?

The format of the data is Pictures, Videos, Audio, Text, etc.

We store user information and data index through MySQL database. Valid data is cached in our own storage system. Users can choose to delete the cache or delete it automatically after the cache expires, which can be selected by users themselves.

## (8) What pre-processing are you doing before ingesting the data?

We will support Ai recognition function to verify the legality of data in real time. 
We will also compress the data before it is uploaded to filecoin. Client encrypted data or server encrypted data can be configured by users themselves in the application

## (9)  What tech stack will you use to store the data?

Our own storage service acts as a cache layer, then upload the data to filecoin using the lotus api. 
We will consider using Powergate and IPFS later, but at present, we are more familiar with the API interface of filecoin and understand its mechanism, so that we can do some customized functions.

## (10) How will you retrieve the data?

Users first get data from our cache layer. If the cache is out of date or deleted by user, it is retrieved from filecoin. 

## (11) Who is the intended user for your application/UI?

Users who want to store their data or need to work with colleagues

## (12) Do you have any users already or plans to acquire users soon?

Yes, we will have about 5000 seed users participating in this file storage project in the early stage.

## (13) What challenges do you anticipate with this project?

The difficulties of the challenge mainly come from the response of the network, the speed of storage, the load degree of bandwidth, and the read-write pressure of the server.