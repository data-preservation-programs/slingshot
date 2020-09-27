# <Project Name>

## (0) Project Name and Team Slack Handles
Our Project Name is CoinSummerTV.
Our Team Slack Handles is UNTPFH4HW, and with Display name Max.

## (1) Brief Project Description
[CoinSummerTV](https://coinsummer.tv) is a video site focus on cryptocurrency industry analysis, regulatory, trend prediction, trading strategy, fundamental analysis, industry technical analysis video, real-time tracking of the latest developments of crypto currency, and so on. We are planning to publish these videos to a decentralized network built on Filecoin and IPFS.

## (2) Link to Project UI
- [CoinSummerTV](https://coinsummer.tv)

## (3) What does your application/UI do?
Users can view, search, share all the videos on CoinSummerTV, and we are planning to support users upload their own videos. Authenticated users can also give a video some small tips using Lightning Network payment.

## (4) If your project is using a curated dataset, which one are you using?
This project will not use a curated dataset. All the videos on CoinSummerTV stored on our AWS S3 bucket. We are planning to store these videos to Filecoin and IPFS.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
All the videos on CoinSummerTV are MP4 format with three resolutions, 360P, 540P and 1080P. We have translated these videos, and added Chinese subtitles for them, we have noncommercial use rights of these data. These videos license available online, and don't contain any sensitive or illegal information.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
We are planning to store at least 10TB videos to the Filecoin network, maybe more than 20TB if our users can upload more.

## (7) How are you structuring the data?
These videos are structured data stored to PostgreSQL database.

## (8) What pre-processing are you doing before ingesting the data?
- We have to convert these videos to three resolutions, 360P, 540P and 1080P, to respond different device like desktop, mobile and touch pad firstly.
- Then send every video as a storage deal to store it to Filecoin. The size of storage deals will be 100MB to 500MB.
- After the storage deal has successfully sealed by miner, we will send a retrievel deal, and then store the video in the deal to IPFS.
- Then save the video info to PostgreSQL database, so we can easily retrieve data as needed for the application.

## (9)  What tech stack will you use to store the data?
We are planning to use Powergate, IPFS and lotus.

## (10) How will you retrieve the data?
- We will retrieve data from Filecoin once after the storage deals has successfully sealed by miner.
- Then we cached these videos to IPFS network as an intermediate caching layer.
- Both the colder storage (on Filecoin) and hot storage (on IPFS) information will be saved to PostgreSQL database.
- CoinSummerTV application will fetch and show these data from database.

## (11) Who is the intended user for your application/UI?
- Cryptocurrency investor
- Blockchain practitioners
- Blockchain developers
- People who interested in cryptocurrency

## (12) Do you have any users already or plans to acquire users soon?
Sure, we have many users who are interested in our videos, and we have some social meida group to distribute our application.

## (13) What challenges do you anticipate with this project?
If Powergate's API doesn't meet all the requirements to build, we have to implentment some features on IPFS and Filecoin by ourselves.