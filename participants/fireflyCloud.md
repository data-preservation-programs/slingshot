# filStore

## (0) Registration Submission, Project Name, and Team Slack Handles

- Project Name: firefly cloud
- Slack Handle: urugang

Our team name is Firefly Block, which is one of miners of Spacerace.

## (1) Brief Project Description

Firefly cloud is a public distributed file storage and share provider based on Filecoin and iPFS network. Our target is 

- **Valueable**: provide more valueable storage to Filecoin storage network;
- **Simple**: user-friendly interface, bridge between centralized storage and discentralized storage;
- **Share**: share your information to world;

## (2) Link to Project UI

http://cloud.fireflyblock.com

## (3) What does your application/UI do?

Firefly cloud is a public distributed file storage and share provider based on Filecoin and iPFS network. It includes two parts:

- Backend service: integrated with filecoin lotus and ipfs.
- WebUI: upload and download any file for users

## (4) If your project is using a curated dataset, which one are you using?

ebooks from Project Gutenberg.


## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

User also can upload their own files like documents, data sheets, and photos.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

At least 10 TB data, maybe more than 50TB if everything goes well.

## (7) How are you structuring the data?

`.pdf` and `epub` files.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

Every files has a CID. When the user download books, first find CID according to name, then pulls books from IPFS network using CID.

## (9)  What tech stack will you use to store the data?

Powergate and  postgresql

## (10) How will you retrieve the data?

use Powergate to store and retrieve books.

## (11) Who is the intended user for your application/UI?

All people who love and share knowledge around world.

## (12) Do you have any users already or plans to acquire users soon?

We will use it to upload and share among company members. In the future, we will open to all user who want to use it, and pay for it.

## (13) What challenges do you anticipate with this project?

- upload/download speed which trouble us more than expected.
- economic model to encourage and train people to share. 

