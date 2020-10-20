# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

*Please provide the Submission ID from your [Slingshot registration confirmation](https://slingshot.filecoin.io/register-now).  Also, confirm your project's name and the Filecoin Slack handles for your teammates.*

Submission ID: 681825246
Project's Name: MOLeMART
https://filecoinproject.slack.com/team/U01AB5B0LJX

## (1) Brief Project Description

*Add your project's description here.*

MOLeMART is a chemical e-Commerce platform and search engine.

## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*

www.MOLeMART.com

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*

In the big data era, we make it easy to research and do business in chemical, pharmaceutical, biomedical, and related industries. We do this by bringing structure search engine and real time analytics 1st time in the industry. Users would search our database for chemical related information and suppliers. We have over 130 million products identified and stored in our database. We have a 4pb dataset created over the past 10 years, due to the cost limitation. We were looking for cost-efficient way to store our data, which could be as large as 800pb and inceasing 20% each year.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

Not curated dataset

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

All data in chemical, pharmaceutical, biomedical, and related industries; including structures, bio, pictures, videos, papers, and etc. 
We have exclusive rights to the data you plan to use.
The data does not contain any sensitive or illegal information.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

Will try and see. less than 1TB if we still have time

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

unstructured data

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

We will try what kind of our data would fit for filecoin. 
128mb likely
sql map for data and deal

## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*

Can try Powergate or Lotus

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

Totally depends on what data we store into filecoin. Although we have data that users will need on weekly basis, we might not store those into filecoin. 

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

Chemists, biologists, and etc from pharmaceutical companies, universities, CROs, and etc

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

We have been operating for many years. We do have users.

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

If we only use filecoin as pure backup, then it wouldn't save us any cost. But what portion of our data can be transfered to filecoin?
