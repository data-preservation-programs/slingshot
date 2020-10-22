# <fs pic>


Before submitting a PR containing your team's project information:




## (0) Project Name and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

- Project Name:  fs pic
- the Filecoin Slack handles:  https://app.slack.com/client/TEHTVS1L6/DLH4K20RZ/user_profile/ULN63MDR7

## (1) Brief Project Description

*Add your project's description here.*

- fs pic provides a platform for image storage and retrieval
- Later we will develop the material library to provide users with more choices


## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*

- [fs pic UI](https://github.com/ytQiao/fs-pic/tree/master/UI)

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*

- Our ultimate goal is to provide an open source photo application platform where all photo enthusiasts and users can edit and share photos


## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

Not curated dataset 


## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

- From photography enthusiasts and pictures, Part of it comes from paid purchases

- The data is legally available

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

- 500 GiB


## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

- Unstructured


## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

- At present, we store and obtain the directory and file CID through IPFs, and then store the CID through lotus interface, and lotus is used as backup storage

## (9)  What tech stack will you use to store the data?

*Either:*

- ipfs
- lotus

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

- The client gets the picture according to the input CID


## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

- Photo enthusiasts and photo editors


## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

- no


## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

- We plan to have a lot of data in the future, and the cost of storage is a problem