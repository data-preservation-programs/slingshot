# <fBook>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

**Our project name is fBook, I'm Joe, Allen in Slack.**

## (1) Brief Project Description

- Share online novels for free
- Everyone can download and view

## (2) Link to Project UI

- [ui](https://github.com/Thchoonlophon/fbook/tree/master/ui)


## (3) What does your application/UI do?

- Provide downloads of novels
- search with cid

## (4) If your project is using a curated dataset, which one are you using?

**txt**

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

**some Public Domain books**
**Or which Copyright Expiration**

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

**We have probably 1T data planning  store to the Filecoin Network**

## (7) How are you structuring the data?

**json struct**

## (8) What pre-processing are you doing before ingesting the data?

- Import via PushPath, additional upload interface for `texture hub/bucket` technology
- Each file is between 1Mib-10Mib
- File data information directory path data or table partition information will be stored in ipfs to retrieve specific data by cid, name and time

## (9)  What tech stack will you use to store the data?

- ipfs and lotus

## (10) How will you retrieve the data?

- The file size read each time is between 1Mib-10Mib
- Store index in mongodb to read data and use IPFS caching layer

## (11) Who is the intended user for your application/UI?

**Everyone who likes to share your voice**

## (12) Do you have any users already or plans to acquire users soon?

**not now**

## (13) What challenges do you anticipate with this project?

- working around the grpc apis for Developer
- Does users understand and believe Filecoin
- File loss due to miners' strike

