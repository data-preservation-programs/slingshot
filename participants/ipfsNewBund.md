# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

Our project name is **ipfsNB** which is short for **ipfsNewBund**  
Our slack handle is **UR0Q6FKJ4**

## (1) Brief Project Description

The **ipfsNB** is a video site build on IPFS and Filecoin network.  
In current stage, users can browsing and download videos on our site.  
In the long term, we plan to support the following functionality:  
- Users to upload contents.  
- A payment system for users to pay their Filecoin network fees for uploading and downloading.  
- An incentive mechanism to reward uploader for providing valuable contents.  
- We would like to have streaming video if the Filecoin network can support. 

## (2) Link to Project UI

http://ipfs.newbund.top/filecoin_index/

## (3) What does your application/UI do?

The website will allow users to browse and download contents.  
In the long term, users will be able to upload contents, and they will be able to manage their profiles and balances.

## (4) If your project is using a curated dataset, which one are you using?

We'd like to use our own data first. However, if we managed to upload all our own data we may choose some video from the curated datasets for uploading. If we went that far, we my select from *Condensed Movies*, *Free Music Archive* and *Internet Archive*.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect?*  
Video and Audio.  
*Do you own or have exclusive rights to the data you plan to use?*  
We own over 800TB VR videos filmed by ourselves. We will figure out a way to audit data uploaded by users.  
*Is the data license available online?*  
No.  
*Does the data contain any sensitive or illegal information?*  
For our own data: No. For user data: we will figure out a way to audit data uploaded by users.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We have over 800TB VR videos at hand. We are not sure how much we can upload in this short duration. Let's target to upload at least 100TB for now.

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*  

It's structured data. Formats are mp3, mp4, mov, etc.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*  

At the prototype stage we will only support browse and download.  
We will try to store the whole video file if the size is smaller than the 4GB limit. Otherwise we will slice the video file. Or if there are transmission issues we will consider to slice the video files. We will figure out a way to manage the CIDs for a sliced file.  
Later on when we need to support streaming we will slice the video into many TS files and an index file. We will then propagate those TS files and the index file to the Filecoin network and record the CIDs.  

*Will data be encrypted or available to the public? Since it is your data, want to be explicit on whether this is being made available to the public and if so via what usage rights structure?*  
We plan to have around 200TB of videos free for users to download. For the rest 600TB we were considering to give a description or preview and user can pay for the full contents.  
We may control the premium contents by slice the videos and hide the CIDs. We were not planning to encrypted our data at the current stage.  
The 200TB free videos are free for everyone to use. For the 600TB premium we will reserve the copyright.


## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*  

We aimed to use the Textile Hub as it's easy to start. We are not sure whether it will become a bottleneck as the node is hosted elsewhere. We may switch to Powergate and host our own node if needed.

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*  

At the prototype stage the UI will try to retrieve the whole file from Filecoin. Later on we many investigate how to utilize the caching layer for streaming and broadcasting.

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*  

People who would like to browse video/audio and people who would like to upload valuable contents to make profits.

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*  

No. Users who upload valuable contents will get rewarded. This incentive will bring valuable contents to our site. Those contents will bring more users to browse and download.

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*  

The challenges comes from the Filecoin network side. This is a brand new and exciting technology. We are not sure how well we can adapt to it. The data transferring could be an issue. We many consider the offline transfer solution. And we are not sure about the retrieving speed.

