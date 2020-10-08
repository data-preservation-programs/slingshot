# Kapsel
## (0) Registration Submission, Project Name, and Team Slack Handles
- Project Name: Kapsel
- Slack Handles: @Konstantin
- Submission ID: 675192140
## (1) Brief Project Description
We provide a simple way for people to send large amounts of data over the internet. Upload your file, get a link and share it with others to view, download or keep. 

## (2) Link to Project UI
https://kapsel.link

## (3) What does your application/UI do?
Our UI allows users to upload a file to our website and get a link which they can share with anyone to view, download or keep.

## (4) If your project is using a curated dataset, which one are you using?
N/A

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
All data is user generated data, our users have mentioned that they're excited about sharing videos, datasets, models, images and more. We don't knowingly store any illegal information, to respect privacy we plan to implement end-to-end encryption so users can be sure that we can't see their data.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
Initially, ~100 TiB. We plan to onboard new users and migrate our existing user data to the Filecoin network over the next week.


## (7) How are you structuring the data?
We are storing data in an unstructured manner. Everytime a user uploads a file we store a mapping of the user account to the file as well as a link that can be used to retrieve the data.

## (8) What pre-processing are you doing before ingesting the data?
Files will be encrypted on the client side (comming soon). After the user has chosen a lifetime for their files, they are uploaded to our server and directly into IPFS for caching and Filecoin for cold storage. There we store a mapping between their user ID and the CID of their file. The CID is returned to the user which they can then use to retrieve the data again.   

## (9)  What tech stack will you use to store the data?
We are using Powergate.

## (10) How will you retrieve the data?
We use IPFS as the primary caching layer. Users that want to make their download available for more than 30min will store their data on Filecoin. Data is retrieved through a link that we generate and that points to their data on the Filecoin network. 

## (11) Who is the intended user for your application/UI?
Everyone that wants to share large files in a fast, secure and cost effective way.

## (12) Do you have any users already or plans to acquire users soon?
Yes, we’re trying to fill the gap the Mozilla Send’s shutdown has left in the market. We’ve initially been targeting previous users of Firefox Send.

## (13) What challenges do you anticipate with this project?
- Manage the lifetime of user files and optimize the distribution of files between hot and cold storage. 
- Spam and malware
