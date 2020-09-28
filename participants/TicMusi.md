# TicMusi

## (0) Project Name and Team Slack Handles

- Project name: TicMusi
- Slack handle: vonhenry

## (1) Brief Project Description

In the past, people used to find their favorite music in various apps, now, we let music find people who like it, 
through continuous learning of users' behavior, the background recommends music content each user may like.

## (2) Link to Project UI

- Website: https://ticmusi.filmipool.com
- Github: https://github.com/FILmiPool-Team/TicMusi

## (3) What does your application/UI do?

UI functions:
- listen to music online, support sequence, disorder and single loop play mode.
- show and play recommended music tracks
- upload(share) and download music tracks
- search for music tracks
- create your own song sheet

## (4) If your project is using a curated dataset, which one are you using?

Dataset: [Free Music Archive](https://github.com/mdeff/fma)

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*N/A*

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

Approximately 1 TB: 106,574 untrimmed tracks, 161 unbalanced genres and other related data.

## (7) How are you structuring the data?

The project needs both structured data and unstructured data. 
The [dateset](https://github.com/mdeff/fma) provides relevant data, which meets the requirements.

## (8) What pre-processing are you doing before ingesting the data?

We will store music files directly in the filecoin and IPFS network through Powergate and maintain the music metadata in relation database.

## (9)  What tech stack will you use to store the data?

Powergate, lotus and IPFS

## (10) How will you retrieve the data?

When user listen music, hosted Powergate will try to fetch date from cache layer (IPFS for hot storage),
if can't get it, it will try to fetch from Filecoin (for cold storage) to user and store it in IPFS simultaneously

## (11) Who is the intended user for your application/UI?

Anyone who love music, and especially for users who want access to a wider range of their favorite music.

## (12) Do you have any users already or plans to acquire users soon?

Planning to acquire users soon

## (13) What challenges do you anticipate with this project?
- Quickly familiar with Powergate and related data reading and writing functions
- Make a smooth play music app
- How to attract users and establish positive capital flow
