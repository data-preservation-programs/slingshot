# FilVideo

## (0) Project Name and Team Slack Handles

*Name: FilVideo
Slack: jackoelv
MemberID:U015EBVV92S*

## (1) Brief Project Description

*A decentralized video site*

## (2) Link to Project UI

*[FilVideo Github Repo](https://github.com/jackoelv/FilVideo.git)*

## (3) What does your application/UI do?

*Users can upload video to the network, if others watch the video , they pay Fil to the author.*

## (4) If your project is using a curated dataset, which one are you using?

*[Condensed Movies](https://www.robots.ox.ac.uk/~vgg/research/condensed-movies/)*

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*N/A*

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*1 PB*

## (7) How are you structuring the data?

*Structured of Movies pieces list dataset and movies data*

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin?
Users share and upload the video to server, the videos will be divided to pieces.

What size storage deals will you be making?
Not sure, maybe 1MiB or 10MiB every piece.

If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application?
in the first stage, the pieces DataCID will stored in mysql database. then clients can search the movies by name etc. the server will response with DataCID. then clients can retrieve the movies pieces.
in the future, the movies indexes list will stored as deals in the Filecoin network.

This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

## (9)  What tech stack will you use to store the data?

*lotus*

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*
*When users open a video to watch, the server will response with DataCIDs and the sequences of the data pieces. Clients retrieve the data pieces with sequences and cached local. Video player regroup the original data pieces to a movies data structure. Playing with retrieving.
For those hot videos need to retrieve from an intermediate caching layer, like IPFS. others retrieve from Filecoin (colder storage).*

## (11) Who is the intended user for your application/UI?

*who want to sell their specific valued video for others in freedom. Who want save their videos permanent. Who what watch these videos. Who do not like such as youtube Baiduyun etc. *

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

*Yes, we have a large community with million users. but I am not sure whether they will love this project. :-)*

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

*I just learned and tried to write some codes with the lotus project month ago, so ,there are lots of tech problems with Filecoin project because of lack and imperfection of dev documents.
I have to read the code to find the exact usage of functions but not with documents. :-P*
