# EarthData

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Project Name: EarthData
Email verification code: snarl-throat-alarm
Slack: Meije Sibbel

## (1) Brief Project Description

EarthData is a free and public repository of Earth Observation data including satellite and other remote sensing imagery (e.g. UAV data). Instead of data being hosted on AWS, it will be stored on Filecoin.

Earth observation data is used in a myriad of use cases from tracking forest fires to monitoring climate change. Currently most of this data, although accessible, is siloed by a few large companies. Since most of the earth observation data has been funded with taxpayer money, this data belongs in the public domain and should be archived on a decentralized storage layer to guarantee its continuity.

## (2) Link to Project UI

http://earthdata.tech/ (WIP)

## (3) What does your application/UI do?

Enables the search and download of earth observation data.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

Landsat 8 dataset and other datasets from ESA, NASA and NOAA (Sentinel etc).

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

Open access Earth observation and remote sensing data.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

100 TB - 1 PB. Depending on the amount of time and how miner pricing evolves.

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

Structured, folder structure. Formats are generally .zips, .png and .tiff's. Structure is going to be stored in a simple SQL DB.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

Some data will be have to be zipped although we intend to preserve the original data structure as much as possible.

## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*

lotus, we're going t build a simple Go library that allows us to fetch data from a remote source and upload it to Filecoin. Same library will have a retrieval function as well.

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

The data only needs to be retrieved from Filecoin when requested by the user. Initially this will be through the web-browser but later through some CLI client as well. Individual files can be quite large (few GBs).

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

Researchers, NGO's, students and other institutions.

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

No. We are in the early stages of building on on Filecoin. In the future users that need large datasets will be able to use us for high-speed dataset retrieval. Fully open source.

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

1. Finding good miners that are price competitive.
2. Building the back-end on Lotus.
3. The economic model.
