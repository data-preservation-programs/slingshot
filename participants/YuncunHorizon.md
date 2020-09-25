# 耘存视界（Yuncun Horizon）


## (0) Project Name and Team Slack Handles

Yuncun Horizon ：ystalex0905@gmail.com

## (1) Brief Project Description
Through our app, it is convenient for you to retrieve valuable files of any type (such as pictures, videos, text files, etc.) and encourage you to upload your own valuable files.(PS: We will carry out background screening for illegal files and you may be in danger of being blocked，and this feature will be developed later)


## (2) Link to Project UI
http://binleo.com


## (3) What does your application/UI do?
The main purpose of video storage is to create a convenient and practical multi-function app. 
More importantly, we will use the official data set for downloading。we give you the cli and api to use。
Maybe you can upload text documents, videos, music and other things on the Internet according to the file format  later.
Our background will check the legitimacy of your uploaded files. If copyright and violation are involved, we may block your account.Of course, you can retrieve all the data you need to query on our app, and our app can display some of the most searched files according to your preferences.


## (4) If your project is using a curated dataset, which one are you using?

For now, we will use your data set for data uploading.But for our clients, we want the user to upload the user's data set, and there is no way to specify this data set.But we will check in the background and allow uploads if possible.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
We will use the official‘data  now 。 But we will  collect customer’ data  later and we don't have any data set at the moment.We may use free data, the rest if our customers upload data, but will add license if after our investigation of illegal data.We will not allow uploads.We will not have any sensitive or illegal information.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
 5T-50T may be, I guess.

## (7) How are you structuring the data?

We will watch related  instructions，brands，series and so on。

## (8) What pre-processing are you doing before ingesting the data?
1.  We will collect official'data and Sort them out to various types。
2. There will be an download interface for our app. For customers and ourselves, we will download file data through this interface.The IPFS node and the Lotus node are connected through Powergate.Cold and hot storage of data.It is then uploaded to the Filecoin network for trading.
3. We don't have an estimate, but we may have to make a 5TB-50TB storage transaction.
4. We will have a database to store data index, and the data uploaded against us will be transferred to the database.The table contains the following fields: for example, the file name, the cid of the file, the cost of the file, the type of file, and so on.


## (9)  What tech stack will you use to store the data?

Powergate

## (10) How will you retrieve the data?

1.Index information is cached to the client and backed up to our database.
2.We do not estimate the size of the user's reading. According to our research on the website and our self-developed app, we preliminarily estimate that each customer will not exceed 5G search volume.
3.We plan to use the IPFS cache layer.

## (11) Who is the intended user for your application/UI?

People interested in distributed storage with Filecoin, people concerned about privacy, and our original customers and people who want to quickly retrieve all kinds of files.

## (12) Do you have any users already or plans to acquire users soon?

Yes.  
1. We will build groups to promote apps
2. We will promote it on all major media platforms, such as WeChat, twitter, weibo, etc.
3. We will promote it in some groups interested in blockchain and Filecoin

## (13) What challenges do you anticipate with this project?
1. Familiar with the development of distributed APP.
2. Quick understanding and use of powergate APIS
3. Verification process for files.
4. Guarantee the success rate of filecoin's order storage.
