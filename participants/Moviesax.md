# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

*Please provide the Submission ID from your [Slingshot registration confirmation](https://slingshot.filecoin.io/register-now).  Also, confirm your project's name and the Filecoin Slack handles for your teammates.*
- Submission ID: 674031618
- Project Name : Movies.AX
- Team Slack Handles: https://filecoinproject.slack.com/team/U017A7VN2JZ
## (1) Brief Project Description

MoviesAX is a website  by that allows users to watch free public domain movies 

## (2) Link to Project UI

www.movies.ax

## (3) What does your application/UI do?
This simple project demonstrate using FileCoin and IPFS network to save and play video.


Front-end:

- Python Django as frontend
- Video.js to play video
- Video is stored in hot and cold storage. Once user choose to view video, it will check if the video is cached, then play immediately. Otherwise, it download the video to the cache location.


## (4) If your project is using a curated dataset, which one are you using?

Yes, a subset of Archive.org. More precisely, the url is:

    https://archive.org/details/publicmovies212

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

N/A

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

1 to 5 TB 

## (7) How are you structuring the data?

- A simple database that mapping video files and CID to able to retrieve data.
- A cache to store data so it does not need to download from hot/cold storage everytime playing video.

## (8) What pre-processing are you doing before ingesting the data?

No pre-processing need, send direct movies with its format (mp4, ogg, avi)

## (9)  What tech stack will you use to store the data?

- Using Powergate to push data to cold and hot storage
- PyGate to connect from Python script
- PostGresSQL to store database that mapping CID and movies
- PostGresSQL stores movie meta data (plot, review etc) (wip)
- IPFS Python client/pow to download file
- Source code: https://github.com/vht210/moviesax

## (10) How will you retrieve the data?

- When end user choose a movie, the application will check if movie is already in application static folder (cache), 
then will send directly to users.
- If not, it uses ipfs/pow client to fetch from hot storage and probably from cold storage.
- During that time, A webpage displays to show to end user some wait time expected.

## (11) Who is the intended user for your application/UI?

Everyone who loves old good movies (Charlie Chaplin etc)

## (12) Do you have any users already or plans to acquire users soon?

No, this is a sample application to learn about FileCoin and its technology stack.

## (13) What challenges do you anticipate with this project?

The reliable of the system. It includes:
 -  The difficult of uploading data to cold storage (due to high gas)
  - The ability to track which data is succeed upload.
  - The reliable of miners who store and accept data
  - The faucet is not working
  
  
