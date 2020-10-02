# DLSBFS - Database log shippinig based on FileCoin

## (0) Registration Submission, Project Name, and Team Slack Handles
Submission ID: 672216541
https://filecoinproject.slack.com/team/U01B1KKC62E

## (1) Brief Project Description

The project aims to help in database replication logs distribution regardless of database type and network connection between main and replica databases.

## (2) Link to Project UI
https://dlsbfs.rshell.net/

## (3) What does your application/UI do?
Ship database binary logs from main database to n+1 replicas using filecoin network.

## (4) If your project is using a curated dataset, which one are you using?
No, it is not.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
These are database binary replication logs (raw binary data). There is no need a license since the data is private information of project's users. The data is sensitive. The data is legal.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
Around 18-20 TiB

## (7) How are you structuring the data?
Only initial database dump is structured. The log are structured also, but the data is accessible only via specific tools.

## (8) What pre-processing are you doing before ingesting the data?
There are no preparaions, the logs will be uploaded as-is. The size of storage deal is depend on the user and may be vay (from 2 MiB till 2 TiB). In general the index is table that contains log filenames based on timestamp and sequence number.

## (9)  What tech stack will you use to store the data?
Textile bucket, since it supports encryption, access control and IPNS.

## (10) How will you retrieve the data?
Data will be retrieved by schedule based on user needs. Regarding retrieval source we will provide initial data from FileCoin and "hot" data from cache layer. The UI will provide initial data to the user and some addtional details of database server configuration.

## (11) Who is the intended user for your application/UI?
Database administrators or system administrators that needs to establish database replicas with minimum intervention/setup into current infrastructure.

## (12) Do you have any users already or plans to acquire users soon?
Yes, this will be proposed to database servers users.

## (13) What challenges do you anticipate with this project?
Have no idea what to say now :-)
