# <CreativeFileCloud>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Submission ID: 672718967
Project name: CreativeFileCloud
Slack handles: https://filecoinproject.slack.com/team/U01BTSTHH7V

## (1) Brief Project Description

CreativeFileCloud combines the unlimited scale of public or private object stores with a fast, familiar NAS experience. Mainly for designers, video producers, and creative studios, they have a large number of file storage needs, and these files are cold storage, not often read, for backup purposes.

## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*

https://CreativeFileCloud.com

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*

Users can upload files to the Filecoin network using our web client, download the files anywhere and anytime, and share with others.

For users who are concerned with data privacy, we will allow them encrypt and decrypt private files.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

We will using official dataset (eg Flickr Commons), also some files uploaded by users that under Creative Commons License.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

We have some creative studios partners. They are willing to share the work, and all the files are under Creative Commons License. 

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

500TB-2PB

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

The data unstructured data. Data formats include files, compressed packets, images, audio, video, etc.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

Users upload data directly through our web client, and then we use Powergate transfer the data to the ipfs and filecoin network. Our server will record the data CID for users to search and download the data.

## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*

Use Powergate to store the data to IPFS/Filecoin.

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

We will cache some hot data with aws cloud and google cloud, also users can retrieve data from IPFS or Filecoin network.

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

Designers, Video producers, and Creative studios etc.

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

Yes, we are working with some creative designer community, they are willing to use CreativeFileCloud.

Future plans:
- Publish the website to the public.
- Let more people using it.

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

Hope the official team can give more guide for using Filecoin network. Also make more people know "Filecoin", it will help us promote our product.
