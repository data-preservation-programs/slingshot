- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

# Binghe Cloud

## (0) Project Name and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Project Name：Binghe Cloud

Team Slack Handles ：AthenaPool

memberID：U018H0G5W5U

## (1) Brief Project Description

Binghe Cloud is a file storage application that allows users to easily upload files (pictures, videos, text, compressed packages, etc.) to  the distributed network IPFS. At the present stage, we will select a reasonable miner node for users to complete file upload;in the next stage, Binghe Cloud will open storage miner selection to users, so that users can choose the storage miners they want based on  the actual demand and price expectations.

## (2) Link to Project UI

https://bhcloud.atpool.com

## (3) What does your application/UI do?

Binghe Cloud is a cloud disk product that provides users with file upload and download functions. File types can be diverse, including files, videos, music, or any other legal files. After the files are uploaded to Binghe Cloud, we will store the user files on the Filecoin network.

- When a user uploads a file, a corresponding fee (Fil) will be charged according to the file size and expected storage time. Binghe Cloud will pay storage fees to the corresponding storage miners.
- When users download files, we will also charge the corresponding Fil as a handling fee based on the file size.
- We will check the uploaded files and prompt users to deal with them to avoid illegal and sensitive information contained in the files.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the* [*list of curated datasets in this repo*](https://github.com/filecoin-project/slingshot/blob/master/datasets.md)*. If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

We will not use the recommended dataset. 

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

<u>What sorts of data will you collect?</u>

Our data comes from the data uploaded by users, supporting various file types such as pictures, videos, texts, compressed packages, etc.

<u>Do you own or have exclusive rights to the data you plan to use? Is the data license available online?</u>

User data belongs to users. We have no rights to use or share them.

<u>Does the data contain any sensitive or illegal information?</u>

We will check sensitive or illegal information and prompt users to handle it, so such information will not be included in the data; if it is in violation of local regulations, we may take measures to delete it.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

1T - 10T

## (7) How are you structuring the data?

The raw data we get is unstructured data. Data formats include files, compressed packets, images, audio, video, etc. We will mark the file type of the uploaded file and store it in MySQL.

## (8) What pre-processing are you doing before ingesting the data?

1. The data uploaded by the user will be uploaded to the server through the API interface, and then uploaded to the IPFS node. When the file size exceeds a certain specification, it will be split into multiple pieces before storage.
2. We will use a database to store data. The data table includes file name, file ID, file size, file type, file CID list (when a file is split into multiple pieces).

## (9) What tech stack will you use to store the data?

Lotus.

## (10) How will you retrieve the data?

Users can retrieve data directly from IPFS or Filecoin miners.

## (11) Who is the intended user for your application/UI?

Users who want to use Filecoin distributed storage and users who care about data privacy and longevity. 

## (12) Do you have any users already or plans to acquire users soon?

Yes, we already have a group of users interested in Filecoin on major media platforms such as WeChat, Weibo and Twitter. We will promote this cloud storage product to these users.

## (13) What challenges do you anticipate with this project?

The time consumption of file transfer and the success rate of file storage are the two most worrying points in technology.

