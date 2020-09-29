# Filchive

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

*Project Name: Filchive*

*Slack Handles: Coalball Lee*

## (1) Brief Project Description

*A Filecoin version of the Internet Archive*

## (2) Link to Project UI

UI link: https://filchive.github.io/

project repository: https://github.com/filchive/filchive.git

## (3) What does your application/UI do?

People can browse, search and view the video data from archive.org which stored on the Filecoin network.

## (4) If your project is using a curated dataset, which one are you using?

We are using the Internet Archive (https://archive.org/).

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

N/A

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

At least 100GB

## (7) How are you structuring the data?

We structure the data by one cid per video and list the cids in the index.

The data format is mp4. The index format is JSON.



## (8) What pre-processing are you doing before ingesting the data?

We ues Crawler to collect video data from archive.org.

The storage deal size is about 1 MiB- 100 MiB.

The data index is stored on the Filecoin network and its cid is maintained on github.io.


## (9)  What tech stack will you use to store the data?

Lotus. We use Lotus for storing/retrieving/indexing data.

## (10) How will you retrieve the data?

We retrieve data index cid from github.io and retrieve the data index from the Filecoin network via the cid. The data index may be retrieved when it's been updated(about once per hour).

The index is about 100 KiB - 10 MiB and the video data is about 1MiB - 100MiB.

We retrieve the video data by the cid witch users select from the UI and play automatically when it's ready.





## (11) Who is the intended user for your application/UI?

archive.org users.

## (12) Do you have any users already or plans to acquire users soon?

No.

## (13) What challenges do you anticipate with this project?

Getting actual users.
