# FMA (Free Music Archive) Browser

## (0) Registration Submission, Project Name, and Team Slack Handles

Submission ID: 672210057
Project name: FMA (Free Music Archive) Browser
Slack: feiya200

## (1) Brief Project Description

A simple browser to retrieve a partial dataset of the FMA (Free Music Archive) stored in Filecoin.

Also allow authenticated users to upload their own audio file to Filecoin.

## (2) Link to Project UI

http://slingshot.kernelogic.ca/  (Not yet functional)

## (3) What does your application/UI do?

A simple browser to retrieve a partial dataset of the FMA (Free Music Archive) stored in Filecoin.

Also allow authenticated users to upload their own audio file to Filecoin.

## (4) If your project is using a curated dataset, which one are you using?

Free Music Archive https://github.com/mdeff/fma

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

N/A

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

100GB

## (7) How are you structuring the data?

Will structure the data around music genre provided by FMA (Free Music Archive).

## (8) What pre-processing are you doing before ingesting the data?

Will zip the audio files to a certain size (for example 500MB) then store to Filecoin. Will use local database to maintain data indices to track deal status.

## (9)  What tech stack will you use to store the data?

Self hosted powergate

## (10) How will you retrieve the data?

Web server local disk will be used as cache. If cache hit missed, application will retrieve data from filecoin according to the indices stored in local database and unzip/serve.

## (11) Who is the intended user for your application/UI?

Anyone interested in browsing the FMA (Free Music Archive)

## (12) Do you have any users already or plans to acquire users soon?

No.

## (13) What challenges do you anticipate with this project?

Nothing yet.