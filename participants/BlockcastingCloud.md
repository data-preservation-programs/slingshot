# Blockcasting Cloud

## (0) Registration Submission, Project Name, and Team Slack Handles

* Slingshot registration ID: 676715867.
* project name: Blockcasting Cloud.
* Slack Handles: litianc (UMG8LFSJC), alison (U012QD3GWSG)

## (1) Brief Project Description

Blockcasting Cloud is a decentralized network disk which allows users to store publicly accessible data (such as public web sites, blogs, files) and private personal data. We plan to use IPFS and Filecoin as data storage, and will support AWS S3 and Aliyun OSS in the future.

## (2) Link to Project UI

http://slingshot.litianc.cn

*The [link](http://slingshot.blockcasting.io) used when applying for Slingshot Dashborad has expired*

## (3) What does your application/UI do?

* combine, package, and upload the public files to IPFS and Filecoin
* store the index of the data to local database
* display Filecoin transaction information and IPFS download links for data, making it easy for users to access public data.

## (4) If your project is using a curated dataset, which one are you using?

* COVID-19 Open Research Dataset Challenge
* Chest X-Ray Images (Pneumonia)
* USENET (2005-2011)

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

N/A

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

~1TiB

## (7) How are you structuring the data?

Unstructured data. We took part of the files from the dataset, packaged them through the tar tool, and sent them up.

## (8) What pre-processing are you doing before ingesting the data?

Since the dataset is too large to store on filecoin/IPFS, we selected some part of files in the folder for packaging, and each compressed packet size is about 256MiB. We plan to store file directories to facilitate individual file lookups.

## (9)  What tech stack will you use to store the data?

For RAW data
* Lotus
* IPFS
For indices of data
* local database like MYSQL.

## (10) How will you retrieve the data?

The data is retrieved from the IPFS first, and if not, it can be retrieved from the Lotus Client. We will set up a Web service to help users retrieve data that has disappeared in IPFS.

## (11) Who is the intended user for your application/UI?

Users with public and personal data storage needs will use our application.

## (12) Do you have any users already or plans to acquire users soon?

We plan to use filecoin/ipfs as cloud disk, first for cooperative enterprises and their employees.

## (13) What challenges do you anticipate with this project?

The delays with Filecoin and the fact that the IPFS data structure is not exactly the same as the common file system structure were major challenges for us.