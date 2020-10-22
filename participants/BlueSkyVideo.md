# <Project Name>

Blue Sky Video

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

*Please provide the Submission ID from your [Slingshot registration confirmation](https://slingshot.filecoin.io/register-now).  Also, confirm your project's name and the Filecoin Slack handles for your teammates.*
- Submission ID: 675741135
- Project Name : Blue Sky Video
- Team Slack Handles: 
- https://app.slack.com/client/TEHTVS1L6/C019UFEACBT/user_profile/URMFRHG1J
- https://app.slack.com/client/TEHTVS1L6/CEHTVSEG6/user_profile/U010EBT1TQC
## (1) Brief Project Description

Blue Sky Video can share free short videos with audienc

## (2) Link to Project UI

Home page:http://3z4683d052.qicp.vip
Admin page::http://3z4683d052.qicp.vip/admin
Code: https://github.com/HelloMySugar/blue_sky_video

## (3) What does your application/UI do?
The project shares free videos stored in filecoin network.

All long-term data stored in filecon network,the videos used by UI are from local hot storage.


## (4) If your project is using a curated dataset, which one are you using?

Condensed Movies
https://www.robots.ox.ac.uk/~vgg/research/condensed-movies/

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

N/A

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

1 to 2 TB 

## (7) How are you structuring the data?

- Use a table of a database creating a link in bettwen the video id and long-term stored data CID
- Use a table which keeps a record of local stored vidoes

## (8) What pre-processing are you doing before ingesting the data?

Since the front-end needs the mp4 fromated videos, so need transform mkv  to mp4 before send to front-end.
Besides, also need to extract some frames of a video which shall be displayed on UI.

## (9)  What tech stack will you use to store the data?

- Using Powergate to push data to cold and hot storage
- Using java back-end to download original data if local is absent

## (10) How will you retrieve the data?

- The back-end service shall scan the database table and check the local cache if the video exist
- if not exit, it then pulls down the archive containing the video using Powergate, and move it's content to the cache.
- The back-end update the showing list of video, when user fresh the UI, he/she can view the latest one.

## (11) Who is the intended user for your application/UI?

Whoever loves movies.

## (12) Do you have any users already or plans to acquire users soon?

No, at present, we just build a demo used to practice using skills to store and retrive data in filecoin network.

## (13) What challenges do you anticipate with this project?

-  It's very difficult for us to download data from the curated dataset.
- There is no enough funds to push data to filecoin network.
- Since we're in the China, the network issue make us hard to build a powergate project
- The gasfee is very high
  
  
