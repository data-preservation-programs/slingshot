#  Zangshell virtual reality and Augmented reality system 

Before submitting a PR containing your team's project information:

- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Project Name: Zangshell virtual reality and Augmented reality system

Slack user: Yulin578873638

## (1) Brief Project Description

*Add your project's description here.* 

Zangshell is a kind of virtual reality(VR) and Augmented reality(AR) system, in the past,  it mainly served the real estate industry and municipal engineering. the orginal data was stored in an Internet Data Ceter(IDC) before. Due to higher costs, the company ower is intended to migrate the data to IPFS. 


## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*

The link to project UI is: https://vr.justeasy.cn/micro/14801.html

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*

The users are able to watch VR/AR image or videos on PC browsers or smartphone browsers.people can not only zoom in or zoom out a scene,but also can view virtual reality from different angles by using a PC mouse or gestures on a mobile screen.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

Not curated dataset.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

We will collect orginal video data from a kind of dedicated cameras. and these video files are uploaded to IPFS after VR processing.We are authorized to have exclusive rights to the data we plan to use.the data license is availabe online. No license required, No sensitive and illegal information. 


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

about 50TB.

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

Those video data is Unstructured data, the common data formats are Universal Scene Description（USDZ）or MP4 or jpg etc.usually We will convert most video files in MP4 file format.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

just download the video files from cameras, after processing by VR tools,the data files could be coded in MP4 or USDZ format.usually,each video file size is less than 500MB.so each file could be sealed into the IPFS sectors smoothly.

Not tabular dataset or directory structure.

## (9) What tech stack will you use to store the data?

*Either:* lotus

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

once the VR/AR video files are stored on IPFS, need no change in the future(could be seen as cold data). when Users would like to watched the videos, usually retrieve data by web browsers or APP,some video data will be accessed a little often, less than thousand inquery a day. the size of each individual read is about several megabytes,less than 1 GB. We need to cache the whole file in RAMs of computers when users access it and cut into smaller video flow on demand. browsers. 
We stored the orginal data or intermediate data directly into IPFS,inqury each file by its CID,an IPFS name service is design to map shorter file name to CID.

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

The intended users are potential real estate developers or other technicians in the same industry.

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

Yes, We have some users now. and plan to build a sales team and  develop more users .

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

We don't know when the IPFS will be reliable、robust and high performance.hopefully,IPFS would be as strong as the other similar infrastructers.
1.User experience：The data retrieval speed from IPFS should not be too slow comparing with other technologies.

2.Robustness：How many backups should be saved to ensure that data would not be lost and can be obtained immediately

3.Development：We need more developing guide documents and program libraries to improve programming efficiencies based on IPFS.

4.Economic benefits：How much money can filecoin save for us  comparing with traditional IDC.
