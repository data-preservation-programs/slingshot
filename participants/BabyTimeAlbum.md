# <BabyTimeAlbum>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

My Slingshot registration ID is (Submission ID: 670257637)

Our project name is BabyTimeAlbum, We'are BabyTimeAlbum team is one of filecoin miner and also we're developing IPFS applications

Slack is https://app.slack.com/client/T01B4QHHR47/D01B4QKTET1

## (1) Brief Project Description

随着用户对储存空间需求的增大，手机自身的物理储存空间的局限性，云存储时代已经悄无声息的到来。本项目是针对父母对孩子生长、生活点滴记录的需求而设计云存储App。家有宝贝是一款宝宝成长记录，妈妈育儿助手，全称记录宝宝成长的一款App。

With the increase of users' demand for storage space and the limitations of the physical storage space of the mobile phone itself, the era of cloud storage has quietly arrived. This project is to design a cloud storage App in response to parents' needs for children's growth and life records. Jiayoubao is a baby growth record, a parenting assistant for mothers, the full name is an app that records baby growth.

## (2) Link to Project UI
下面是我们的项目下载链接，它是一个iPhone应用。需要按照打开的网页提示要求进行下载。

Here is our project download link, it is an iPhone application.Need to download according to requirements of the open web tips.

https://testflight.apple.com/join/R7YpIahY

## (3) What does your application/UI do?

本应用主要功能有登录注册账户，创建宝宝信息档案，上传宝宝日常生活照片或视频用于记录宝宝的珍贵瞬间。上传后的照片或视频能够长久的保存，不用担心手机内存小。生长记录表，记录宝宝的生长数据，为宝宝的科学成长提供有效的数据支持。疫苗接种表罗列出不同年龄段宝宝应该接种的疫苗，提醒父母接种及备注已接种的疫苗。宝宝管理可根据用户需要对宝宝档案进行管理

The main functions of this application include logging in to register an account, creating baby information files, uploading photos or videos of baby's daily life to record precious moments of baby. The uploaded photos or videos can be stored for a long time, so don't worry about the small memory of the phone. The growth record table records the baby's growth data and provides effective data support for the baby's scientific growth. The vaccination table lists the vaccinations that babies of different ages should get, remind parents to vaccinate and note the vaccinations that have been vaccinated. Baby management can manage baby files according to user needs

## (4) If your project is using a curated dataset, which one are you using?

我们没有使用官方数据集，数据来源于用户授权上传存储。

We didn't use the official data set, data from the user authorization upload store.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

数据来源于用户授权上传存储。

Data from the user authorization upload store.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We have probably 10P data planning store to the Filecoin Network

## (7) How are you structuring the data?

非结构化数据，这些数据可以是文本文件、图片、音视频等。
Unstructured data, these data can be text files, pictures, audio and video, etc. 

## (8) What pre-processing are you doing before ingesting the data?

我们会先将数据上传到IPFS中，然后通过IPFS导入到filecoin中。我们使用mysql来维护目录索引。
We will upload the data to IPFS first, and then import it into filecoin through IPFS. We use mysql to maintain the catalog index.

## (9)  What tech stack will you use to store the data?

Lotus

## (10) How will you retrieve the data?

首先我们会将数据存储到IPFS中，将IPFS中文件的CID保存到Mysql数据库中，然后将IPFS中的数据导入到Filecoin上，当矿工成功达成存储交易后，我们会将Filecoin的CID也保存到Mysql中。IPFS从中起到了写入缓存的作用，同时还作为热数据缓存。
First, we will store the data in IPFS, save the CID of the file in IPFS to the Mysql database, and then import the data in IPFS to Filecoin. When the miner successfully completes the storage transaction, we will also save the CID of Filecoin to Mysql. IPFS serves as a write cache from it and also serves as a hot data cache.

## (11) Who is the intended user for your application/UI?

初为父母或需要记录孩子成长的用户（更偏向女性）
New parents or users who need to record the growth of their children (preferably women)

## (12) Do you have any users already or plans to acquire users soon?

（1）APP活动推广（线上线下）
线上：在一些母婴平台上面进行推广
线下：通过策划活动去拉新
（2）入驻各大应用平台、商店
(1) App promotion (online and offline)
Online: Promote on some maternal and child platforms
Offline: through planning activities to pull new
(2) Entering major application platforms and stores

## (13) What challenges do you anticipate with this project?

1、存储量远远超过用户的预期。2、永久储存用户不用担心过期问题。3、用户零成本储存。4、为父母提供科学养育宝宝资料。
1. The storage capacity far exceeds user expectations. 2. Permanent storage users don't have to worry about expiration. 3. Zero-cost storage for users. 4. Provide parents with scientific data on raising babies.
