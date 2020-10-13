# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

*Please provide the Submission ID from your [Slingshot registration confirmation](https://slingshot.filecoin.io/register-now).  Also, confirm your project's name and the Filecoin Slack handles for your teammates.*

*Name: FILESPACE
Slack: Chris Zhou
MemberID: t03362


## (1) Brief Project Description

*A decentralized online database for Autopiloting data with AUTOWARE

## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*
*https://ddz4u9.axshare.com

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*
"Users can upload the test autopiloting data onto the app and share or retrieve them any time with car manufacturer.
New Users get 32GB storage for 3 month for free.
Users can pay fil to get more storage or longer service period.
"

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

N/A

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.


"Q: What sorts of data will you collect? 
A: Various collecting from sensor or simulation and upload to apps.

Q: Do you own or have exclusive rights to the data you plan to use? 
A:No, the rights belongs to the owner who uploads the file.

Q: Is the data license available online? 
A: License is only needed when user shares the file.

Q: Does the data contain any sensitive or illegal information?
A: The file will be reviewed by our staff at first place."

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

*1 PB*

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*
* Data set are mixed with structured and unstructured data. We cut the data into pieces and store it on the IPFS network.


## (8) What pre-processing are you doing before ingesting the data?


"Q: How will you prepare this data for ingestion into Filecoin?
A: File will be pre processed with proper cutting and indexing and fit into correspondong size of sector."
"Q: What size storage deals will you be making?
A: The size is up to user upload, we do not put any restriction"
"Q: If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application?
A: Index will be stored firstly in our server, when ever user request data, we will point them to correct sector to retrieve the file.
"


## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*
*lotus*

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

When users searches for a file, the server will response with the index and the sequences of the data pieces. User retrieve the data pieces with sequences and cached local, then regroup the original data pieces to the original file data structure.


## (11) Who is the intended user for your application/UI?
*Who wants to store or share auto piloting test file with a decentralized system and share quickly with car manufacturer.


## (12) Do you have any users already or plans to acquire users soon?
Yes, we have a strategic cooperation with AUTOWARE to start

## (13) What challenges do you anticipate with this project?
The speed of uploading or retrieving data across different continental and internet bandwidth
