# <BabyStories>



Before submitting a PR containing your team's project information:

- Make sure you rename this file to contain your project's name

- Respond to add your response in each section below



## (0) Project Name and Team Slack Handles



My Slingshot registration ID is 673379405.



Our project name is BabyStories, We'are BabyStories team is one of filecoin miner and also we're developing IPFS applications



Slack is https://app.slack.com/client/T01B4QHHR47/C01BRNGKN5A



## (1) Brief Project Description



This application is mainly to provide users with rich stories and nursery rhymes. Users will automatically download files when reading and playing, and will directly obtain files from the local next time.



## (2) Link to Project UI



Here is our project download link, it is an Android application.Need to download according to requirements of the open web tips.



https://www.xrkapp.com/z9lC



## (3) What does your application/UI do?



Search: Smart search, you can quickly find what users want.

Release: Support the release of text stories or audio stories. Classification: Scientific classification, allowing users to clarify what kind of content to listen to children.



## (4) If your project is using a curated dataset, which one are you using?



We didn't use the official data set, data from the user authorization upload store.



## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.



Data from the user authorization upload store.



## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?



We have probably 10P data planning store to the Filecoin Network



## (7) How are you structuring the data?



Unstructured data, these data can be text files, audio(mp3), etc. We will upload the data to IPFS first, and then import it into filecoin through IPFS. We use mysql to maintain the catalog index.



## (8) What pre-processing are you doing before ingesting the data?



We will upload the data to IPFS first, and then import it into filecoin through IPFS. We use mysql to maintain the catalog index.



## (9)  What tech stack will you use to store the data?



Lotus



## (10) How will you retrieve the data?



First, we will store the data in IPFS, save the CID of the file in IPFS to the Mysql database, and then import the data in IPFS to Filecoin. When the miner successfully completes the storage transaction, we will also save the CID of Filecoin to Mysql. IPFS serves as a write cache from it and also serves as a hot data cache.



## (11) Who is the intended user for your application/UI?



Mom, dad and all Android users



## (12) Do you have any users already or plans to acquire users soon?



(1) App promotion (online and offline)

Online: Promote on some maternal and child platforms

Offline: through planning activities to pull new

(2) Entering major application platforms and stores



## (13) What challenges do you anticipate with this project?



1. Permanently store user data.

2. Large amount of data storage.
3. The storage speed is improved.
