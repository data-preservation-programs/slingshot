# <File4Ever>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

*ID: 667253724*

*Project: File4Ever*

*Slack: Steve Tsou*

## (1) Brief Project Description

*A decentralized online personal file warehouse*

## (2) Link to Project UI

*https://fp46hg.axshare.com/#id=03nhrg&p=%E9%A6%96%E9%A1%B5*

## (3) What does your application/UI do?

*Users can upload their personal file onto the app and share or retrieve them any time any where when needed.
New Users get 32GB storage for 12 months for free.
Users can pay fil to get more storage or longer service period.*

## (4) If your project is using a curated dataset, which one are you using?

*N/A*

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect?*

*Various.*

*Do you own or have exclusive rights to the data you plan to use?* 

*No. The rights belongs to the owner who uploads the file.*

*Is the data license available online?* 

*License is only needed when user shares the file.*

*Does the data contain any sensitive or illegal information?*

*The file will be reviewed by our system & staff.*

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*1PB*

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

*We cut the data into pieces and store them on the IPFS network.*

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin?* 

*Files will be cut into small pieces with an index.*

*What size storage deals will you be making?*

*It depends on the size of the file user uploads.*

*If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application?*

*At the first phase of the program, the data index will be stored in our database. when user searchs for the file, our server will response with the index. Then the user can retrieve the file pieces. In the future, the file indexes list will stored as deals in the Filecoin network.*

## (9)  What tech stack will you use to store the data?

*lotus*

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

*When users searches for a file, the server will response with the index and the sequences of the data pieces. User retrieve the data pieces with sequences and cached local, then regroup the original data pieces to the original file data structure.*

## (11) Who is the intended user for your application/UI?

*Who wants to store or share their personal files with a decentralized system.*

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

*Yes, we have a small community with hundreds of users and we hope they can introduce this program to their friends.*

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

*The speed of uploading or retrieving data in the filecoin system matters a lot to the customer's experience.*
