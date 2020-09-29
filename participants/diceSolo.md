Before submitting a PR containing your team's project information:

Make sure you rename this file to contain your project's name
Respond to add your response in each section below

(0) Registration Submission, Project Name, and Team Slack Handles

#Submission ID: 	670013554
#Project Name:		diceSolo
#Slack Handles:		Brian Nguyen (U012YF2AB4K)

(1) Brief Project Description

#diceSolo is the Gateway to decentralized Creative Commons Data. We collect datasets from different sources and indexed the data on OrbitDB (an IPFS Database).
#Users will be able to search for Creative Commons data includes: music, videos, documents, etc.

(2) Link to Project UI

#https://diceSolo.com

(3) What does your application/UI do?

#The UI includes:
## Search box in the homepage, allows users to search for CC data
## Search results displayed in pagination
## Download any content freely
## Share the content to social media
## Embedded link and html code
## Watch video contents
## Listen to music contents
## View text contents


(4) If your project is using a curated dataset, which one are you using?

#We are using below curated dataset for Slingshot but will expand afterward
## Free Music Archive
## Open Images Dataset

(5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

#NA

(6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

#We are trying to store 10TiB minimum.

(7) How are you structuring the data?

#We structured the data in a very basic format:
#################
#CID
#Title
#Descriptions
#Created Date
#Data Type
#File extension
#################

(8) What pre-processing are you doing before ingesting the data?

#So we planned to use OrbitDB to keep the index of our database. We are writing a script using Powergate API and OrbitDB API to push data to Filecoin and IPFS Database at the same time.
#The search engine will have to deal with large amount so in the future, we might implement an Elastic Server to support the speed of the seach engine.

(9) What tech stack will you use to store the data?


#We already installed Powergate on our server with fully synced Lotus Daemon. Fortunately We are also a miner on Filecoin, so data can be transfer to our Filecoin miner quicker to store. It also helps us to debug and test the system quicker.

(10) How will you retrieve the data?

#To be honest, we are not very sure about this yet. We need time to have experience and gain knowledge about retrieval process before we can make a proper plan. This is currently under brain storming and testing.

(11) Who is the intended user for your application/UI?

#Youtube video makers and many other content creators use Creative Commons Data daily and they are our targeted users in the first phrase.

(12) Do you have any users already or plans to acquire users soon?

#We are not sure we have enough resources and time to start user acquisition during Slingshot
#However with some fundings or rewards, we are certainly can expand our team and start some marketing campaigns to get some real users after Slingshot.

(13) What challenges do you anticipate with this project?

#We have a very small team (2 devOps, 1 assistant), operating Filecoin mining and application development. It is very tough with 2 brains and 4 hands. We need more human resources and capital.

