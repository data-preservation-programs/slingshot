# We Rave You

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

Submission ID: 666378347
Project Name: We Rave You (WRY)
Slack Handle: Blotocol, obbie-one

## (1) Brief Project Description

We Rave You is an Israeli-based community that connects DJs and other music artists from around the world. WRY provides a platform for artists to share their live broadcasts and music video archives with the public via the Internet. The main difference between this platform and YouTube or other video sharing application is that video clips uploaded by the artists will be available on Filecoin by archiving on the network. We aim to protect the copyrights of the artists by storing the hash values of the files on the blockchain.

## (2) Link to Project UI

https://weraveyou.ipfssys.info/

## (3) What does your application/UI do?

We Rave You is a video sharing platform where users can share videos using the Filecoin network. The UI is similar to YouTube but our app is anchored by anti-forgery features to uphold the highest level of security that blockchain technology offers. Another unique feature is that users or ‘fans’ can show their appreciation of their favorite artists by  giving tips using their WRY points or Bitcoin. 

## (4) If your project is using a curated dataset, which one are you using?

We don’t use curated dataset. We will upload original data to the Filecoin network.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We will archive video files of music and live performances which are originally made by artists belonging to our WRY community. Therefore, copyright infringement is eliminated and the ownership and copyright belongs to the artist alone.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

The average duration of video files are approximately 10 minutes (1GB). We are expecting to upload 1,000 video files during Phase 1 which is roughly 1,000 GB. 

Then during Phase 2, we expect a rise in artists and user upload to 2,000 videos per month.
So, it will be 12,000Gb for 6 months.

## (7) How are you structuring the data?

Each video file is independent. There is no relation between each files. All video files are uploaded on our We Rave You application wherein we use MySQL for relational database management.

## (8) What pre-processing are you doing before ingesting the data?

We use MySQL database to manage video files uploaded through our We Rave You app. The artist will provide his/her name, file name, category, notes and other basic information into MySQL database. A unique hash will be generated for each video file and will also be managed using MySQL. 

## (9)  What tech stack will you use to store the data?

We will build Powergate server and through this server we will upload video files.

## (10) How will you retrieve the data?

In a typical scenario, when an artist or a fan uploads a video file to our system, this is pushed to AWS Cloud Front (CDN) for watching or streaming. We will demonstrate retrieval functions through the Filecoin network in cases where the user wishes to download the entire video file. The hash are generated via IPFS and saved onto the network via Powergate.

## (11) Who is the intended user for your application/UI?

The artists and fans that belongs to our already established We Rave You community.

## (12) Do you have any users already or plans to acquire users soon?

Yes, we already have an established community of artists and fans will be interacting with out app immediately after launch.

## (13) What challenges do you anticipate with this project?

We need to provide a smooth and stable experience to our users when uploading and downloading video files in order to provide our users what they expect, which is a YouTube like user experience. 
