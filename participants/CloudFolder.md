# Cloud Folder

## (0) Project Name and Team Slack Handles

Project Name: Cloud Folder

Filecoin Slack handles: Nelson

## (1) Brief Project Description

This project aims to create a 'folder' on cloud (IPFS/Filecoin) for users, which supports uploading, downloading, editing, sharing, etc. We will add a permission system on it to enable users to specify different permissions when sharing, such as read-only, editable, etc. We will also provide a file sharing solution suitable for organizations.

## (2) Link to Project UI

https://github.com/filcloud/cloud-folder

## (3) What does your application/UI do?

Users can upload files to the cloud folder using our client, download the files anywhere and anytime, and share with others.

## (4) If your project is using a curated dataset, which one are you using?

We don't use a curated dataset.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

- What sorts of data will you collect? Data uploaded by users.
- Do you own or have exclusive rights to the data you plan to use? No.
- Is the data license available online? No.
- Does the data contain any sensitive or illegal information? No. We may review the data uploaded by users, but there is no specific plan yet.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

At least 1 TiB, there may be a lot more with the increase of users.

## (7) How are you structuring the data?

We will push the data to IPFS/Filecoin when users upload it.

## (8) What pre-processing are you doing before ingesting the data?

Encrypt, and then push to IPFS/Filecoin. We plan to associate indexes with users and store them in the database, if there is no better way.

## (9) What tech stack will you use to store the data?

Currently, we plan to use Powergate.

## (10) How will you retrieve the data?

Use Powergate to pull the data from IPFS/Filecoin. If necessary, we will use some caching schemes.

## (11) Who is the intended user for yout application/UI?

Personal user and company/organization

## (12) Do you have any users already or plans to acquire users soon?

We have some users now. We will promote this application when this project is completed. 

## (13) What challenges do you anticipate with this project?

- Check the legality of user data.
- Can Powergate provide sufficient support?
- Is the retrieval speed of Filecoin fast enough?
