# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

*Our project is webcam-monitor, which stores the monitoring data disclosed by users in filecoin. Our team studies how to help the user store his camera data.*

## (1) Brief Project Description

*You can push the stream to our server and store the data in filecoin as a backup.*

## (2) Link to Project UI

*https://github.com/zwilliam999/WebcamMonitor-client.*

## (3) What does your application/UI do?

*You can see the data we have stored and play it. If you have a live stream, you can also push it.*

## (4) If your project is using a curated dataset, which one are you using?

*We don't apply.*

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*We collect a large amount of monitoring data from users. They must make statistics and disclose the data for everyone to access. We will check the data content regularly. If there is sensitive or illegal data, we will block and destroy it.*

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*5-10TB.*

## (7) How are you structuring the data?

*We use relational databases such as mysql to store structured data.*

## (8) What pre-processing are you doing before ingesting the data?

*The user pushes the data stream, we will slice it, each slice is about 200-500MB in size, and then store it in ipfs and filecoin, and associate the user and cid.*

## (9)  What tech stack will you use to store the data?

*lotus*

## (10) How will you retrieve the data?

*We will use ifps as the hot data retrieval. The user opens a monitoring data and gets the cid to retrieve the data from ipfs. If not, it will retrieve the data from filecoin and synchronize to ipfs again.*

## (11) Who is the intended user for your application/UI?

*People who want to back up their monitoring data.*

## (12) Do you have any users already or plans to acquire users soon?

*Yes. Now we have some users who want to back up their monitoring data (monitoring in front of the door), but the storage cost is very expensive. We can provide services.*

## (13) What challenges do you anticipate with this project?

*Maintain the stability of streaming services and ensure that data is quickly stored in filecoin.*