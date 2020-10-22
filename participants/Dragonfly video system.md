# Dragonfly video management and playing system 

Before submitting a PR containing your team's project information:

- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Project Name: Dragonfly video management and playing system

Slack user: yulin.chen

## (1) Brief Project Description

*Add your project's description here.* 
This is a kind of Video storage and playback sytem based on IPFS. We create an IPFS video sharing platform for video owners or creators.They are not only  operators but also creators or owners. They upload videos the shared film and television platform, and the video owner sets the sharing price. Consumers register as members. The member orders the video through the APP and pays the fee according to the share price corresponding to the video. The payment fee is expressed in digital encrypted currency, and FIL can be considered as a value medium for sharing in the future. some video files stored in IDC earlier are now being transferred to the IPFS file system.because IPFS is distributed storage system and distributed retrieval system,In theory, it can increase the download speed so that there can be more dispersed storage locations and more selectable retrieval services to obtain faster response time.


## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*

The link to project UI is: http://210.17.199.226:8080

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*

The membership users watch videos on PC browsers or dedicated APP.creators are able to upload videos or set sharing price by client tool. if owners don't like to share their videos,they can also take them off the shelf.the APP will show them the numbers of sharing time and the digital encrypted currency they have.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

Not curated dataset.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

We will collect video files. and these video files are uploaded to IPFS by owners.We are authorized to have exclusive rights to the data we plan to use.the data license is availabe online. No license required, No sensitive and illegal information. 


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

about 100TB.

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

Those video data is Unstructured data, the data formats are MP4, AVI,WMV,etc.usually We will convert most video files in MP4 file format.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

just download the video file from cameras or other storage systems.by file format  conversion,some files need to be compressed in advanced video compression algorithm.usually,each video file size is less than 1 GB.so each file could be sealed into the IPFS sectors smoothly.

Not tabular dataset or directory structure.

## (9) What tech stack will you use to store the data?

*Either:* lotus

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

The video files are stored on IPFS once, need no change in the future(could be seen as colder data). when Users would like to watched the videos, usually retrieve data by web browsers or APP,some video data will be accessed very often, how hot the video is how often the retrieve is.videos like films will only be popular in a period, won't lost too long. now only ten thousand time a day. the size of each individual read is about hundreds of megabytes,less than 1 GB. We need to cache the whole file in RAMs of computer when users access it and cut into smaller video flow to send to APP or PC browsers. 

There is a complete data index in the web server. At the same time, the mapping between data and CID will be maintained.

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

To be the “amazon cloud” of the Filecoin network.

The intended users are ordinary users who register in our sytem who can watch videos.

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

Yes, We are planning to absorb the video creators or owners all over the world to be operators or paying members.people have more freedom to watch videos from different channels and more channels to generate revenues.gradually more customers will gather on this platform.

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

We don't know when the IPFS will be reliable、robust and high performance.hopefully,IPFS would be as strong as the other similar infrastructers.
1.User experience：The data retrieval speed from IPFS should not be too slow comparing with other technologies.

2.Robustness：How many backups should be saved to ensure that data would not be lost and can be obtained immediately

3.Development：We need more developing guide documents and program libraries to improve programming efficiencies based on IPFS.

4.Economic benefits：How much money can filecoin save for us  comparing with traditional IDC.
