# GammaCloud

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

Our Project Name is GammaCloud. Our Team Slack Handles is `UK64776JJ`, and with Display name `RockYang`.

## (1) Brief Project Description

GammaCloud is a cloud file system baseed on Filecoin and IPFS.

Any enterprise users and individual users can back up their data to GammaCloud. Usually users can only see the data uploaded by themselves. 

We will also upload some open datasets to allow user to download publicly.

## (2) Link to Project UI

1. [GammaCloud Demo](https://gfs.xjxh.pro)
2. [GammaCloud repository](https://github.com/xjxh/gamma-cloud)

## (3) What does your application/UI do?

1. If users want to upload theirs file, they must register first.
2. User login the system to upload and download theirs files. For public data sets, anyone can access without login.
3. For enterprise users, we also provider APIs for push and pull files.

## (4) If your project is using a curated dataset, which one are you using?

We do not use any curated dataset. Our data comes from 2 chanels:

1. Users upload theirs data to our file system.
2. Some Software mirrors like: linux kernel, linux release iso file, opensource database mirrors, k8s eg...

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We don't need to aquire the data's rights, user voluntarily upload their files.

The mirrors data we can download from the public mirror repository.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We are planning to store at least 5TB software mirror data to the Filecoin network. With the data uploaded by users is expected to exceed 10TB.

## (7) How are you structuring the data?

We will stores all the file and order info into MySQL with a basic structure like:
```
filename: string
bytes: data bytes
mimetype: mimetype of the data
updated_at: data upload timestamp
miner: string like, t09620
epoch: data alive epoch count
price: deal price in FIL/GiB/epoch
cid: string
imported_at: data import timestamp
deal_id: string
confirm_at: deal confirm timestamp
state: string like StorageSealing, StorageActive
```

## (8) What pre-processing are you doing before ingesting the data?


The max storage deals size is 4GB. We use MySQL to keep the relationships of file dirs.

The upload process is:

1. User upload theirs files to our server through browser or API.
2. Server create a storage deal with specified miner use Powergate's JSON RPC API and push the file and order info into MySQL. Then return the order message CID to user.
3. Server update the order's state by calling the lotus daemon's API or subscribing Powergate's JSON RPC API, and synchronously update to MySQL.

## (9)  What tech stack will you use to store the data?

Powergate, lotus, IPFS, Ceph, MySQL, ElasticSearch.

## (10) How will you retrieve the data?

If user just want to view his file infos, we only need to get data from MySQL or ElasticSearch.

When the user want to download theirs data, We check the cache hits first, the caching layer may be IPFS or Ceph. 

If the cache is missing, we create a retrival order and pull the data from  Filecoin, then add data to cache and return data to user.

## (11) Who is the intended user for your application/UI?

1 Arch, 2 Devs， 1 UI Designer.

## (12) Do you have any users already or plans to acquire users soon?

Yes， we have some customers who planning to use our dataset.
There are 7 hospitals want to back up their CT image data on our GammaCloud, and a video App(just like TikTok) planing to back up their videos(about 10TB) to our file system.

## (13) What challenges do you anticipate with this project?

We are worried that Powergate can not provider all the APIs that we need, so we have to develop it ourselves, which will take longer.

