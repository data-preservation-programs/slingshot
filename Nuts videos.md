# <Nuts Videos>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

**Our project name is Nust-videos, We'are simon, jonneyhu and Joe in Slack. Our team is one of filecoin miner and also we're developing IPFS applications**

## (1) Brief Project Description

- Nuts videos is a video website with massive, high-quality and high-definition resources.
-  Users can watch and download videos and videos through nuts videos.
- Nuts videos aims to build an open video community and eliminate monopoly and centralization.

## (2) Link to Project UI

- [ui](https://github.com/jonneyhu/nuts_videos/tree/master/ui)

## (3) What does your application/UI do?

Nuts videos is a video online viewing and downloading website. It provides users with high-quality and authentic video resources. It interacts with the filecoin network and stores the video data by the filecoin network.
When users need video resources, they can search through nuts videos according to the file hash, find the files uploaded to the filecoin network, and provide them for users to watch and download.

## (4) If your project is using a curated dataset, which one are you using?

**Video**

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

**We do not collect user information data, user privacy data encryption, users sharing data need to comply with local laws and regulations, review illegal public data.**

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

**Currently we have 180tb of real video data, which is being uploaded to the filecoin network**

## (7) How are you structuring the data?

**Our data is through cooperation with film and television institutions, acquisition and supply, as well as user original video.**

## (8) What pre-processing are you doing before ingesting the data?

**We will store video files directly in the filecoin and IPFS network through Powergate and maintain the video metadata in relation database.**

## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*

## (10) How will you retrieve the data?

- When user watch video , Powergate will try to fetch date from cache layer (IPFS for hot storage),
if can't get it, it will try to fetch from Filecoin (for cold storage) to user and store it in IPFS simultaneously

## (11) Who is the intended user for your application/UI?

**Everyone who likes to watch video**

## (12) Do you have any users already or plans to acquire users soon?

**we have about 3,000 users now**

## (13) What challenges do you anticipate with this project?

- working around the grpc apis for Developer
- Does users understand and believe Filecoin
- File loss due to miners' strike