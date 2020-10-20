# Blockchain Thread Explorer

## (0) Registration Submission, Project Name, and Team Slack Handles

Submission ID: 675063899
Project Name: Blockchain Thread Explorer
Slack Handle: Dominique

## (1) Brief Project Description

A blockchain thread explorer allows a user to explore threads of blockchain data like a database explorer, they can list threads, collections and instances, Add or Remove them and Query them. Explore the schema of the collection, and query the data in the instances. It will also allow a user to archive and restore a set of instances into filecoin.

## (2) Link to Project UI

https://slingshot.blockbits.com

## (3) What does your application/UI do?

It allows a user to create threads, collections and instances. Define the schema for the instances and to query the instances using filter criteria. It will also allow a user to archive and restore a set of instances in filecoin.

## (4) If your project is using a curated dataset, which one are you using?

Public Blockchain Datasets

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

It is using the curated dataset.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

10TB

## (7) How are you structuring the data?

The data is structured in plain text files with one line per instance (JSON Object). typically there will be 100000 lines per text with each file being ~1GB in size. files can be split to dynamically adjust the size of the file to meet the storage requirements.

## (8) What pre-processing are you doing before ingesting the data?

I have the data in compressed tar files of plain text files with one line per json object. I will extract the tar files, split the text files by line number to get the right size files. Pin the appropriately sized files using an IPFS client, create storage deals for all the files and create an index of all the files in a textile thread.

## (9)  What tech stack will you use to store the data?

Hosted Powergate, Textile Hub/Buckets and a Hosted Ubuntu Server with a nginx reverse proxy hosting a nodejs backend and Angular frontend.

## (10) How will you retrieve the data?

The user will be present with a list of files to restore from, once one is selected to restore from, it will try to fetch it from IPFS, if it's not found in IPFS it will create a restore it from filecoin using the hosted powergate instance. Once data is available in IPFS the data will be downloaded to the server and inserted into the Textile Thread's collection. The user will be notified and the data is available and can view the thread's collection to query the data.

## (11) Who is the intended user for your application/UI?

- Web application developers using Textile threads to store data for their application will need a way to backup and restore their thread data.
- Blockchain researchers who need access to a public blockchain data to do analytics

## (12) Do you have any users already or plans to acquire users soon?

Yes we have many users, this is a first step POC to see if the technology is viable to develop further into a set of public block explorers for various crypto currencies.

## (13) What challenges do you anticipate with this project?

The biggest challenge I have had so far has been creating storage deals, the process is slow and difficult to parallelize, high error rates and difficult to confirm storage deals. I'm worried about storage retrieval as well and automating the whole process. I'm doing it manually right now but there are too many conditions to account for to write scripts to do it automatically.