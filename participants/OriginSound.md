## (0) Project Name and Team Slack Handles

- Project Name: OriginSound(Akustyczna)
- Team Slack Handles: [huanghua](https://filecoinproject.slack.com/team/U01882RD9NE)

## (1) Brief Project Description
- The copyright blockchain system developed by the Original Sound adopts the form of alliance chain, which can efficiently handle the copyright business of various digital works categories (text, pictures, video, etc.). 
  It has more efficient business data throughput ability to realize real-time business processing. It becomes possible to have a large number of Internet creation righted timely with low cost, 
  to achieve rapid transaction circulation.Now we are ready to migrate our existing user data to IPFS.

## (2) Link to Project UI

- [OriginSound Beta](https://www.beijingyy.net/)

## (3) What does your application/UI do?

- Users can view, search and upload their various digital works.

## (4) If your project is using a curated dataset, which one are you using?

- No，Data from user uploads.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

- Text, Pictures and  Music.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

- About 20Tib.Migration of our current data to IPFS.

## (7) How are you structuring the data?

- Our data contains structured and unstructured,we will Migration unstructured to IPFS,and the data format contains png、gpg、text、mp3 etc.

## (8) What pre-processing are you doing before ingesting the data?

- In the first phase, the existing data will be migrated to filecoin, storage orders will be sent to the miners and the corresponding CID is to be stored in Mysql.
- In the second stage, after uploading the user's data to our server, we directly initiate the corresponding storage order and deposit the data into filecoin.

## (9)  What tech stack will you use to store the data?

- Powergate、Mysql.

## (10) How will you retrieve the data?

- Retrieve data directly from IPFS or from Filecoin miners.

## (11) Who is the intended user for your application/UI?

- Artist
- Original Author
- Cryptocurrency investor

## (12) Do you have any users already or plans to acquire users soon?

- Yes,We've got over 1,000 users.

## (13) What challenges do you anticipate with this project?
- Perhaps on docking powergate's API for the first time. 
- How to Handle Failed Orders.
- Ability to handle high concurrent requests?
