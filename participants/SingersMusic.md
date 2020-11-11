# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below


 ## (0) Registration Submission, Project Name, and Team Slack Handles

*Please provide the Submission ID from your [Slingshot registration confirmation](https://slingshot.filecoin.io/register-now).  Also, confirm your project's name and the Filecoin Slack handles for your teammates.*

Slack is https://app.slack.com/client/T01B4QHHR47/D01C990MFK3
## (1) Brief Project Description

*Add your project's description here.*
一款创造属于自己的音乐网页
Create your own music page

## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*
网页链接 :http://singersmusic.gctech.xin/
Website link :http://singersmusic.gctech.xin/

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*
随着会出现自己常常听的音乐在网上被下架,下载之后会没有地方整理,会非常的乱,导致用户体验贼差.有了这个网页可以创造一个属于自己的音乐网站,记录喜欢的歌手丶歌曲.对此处理相关分类.
As the music that I often listen to is taken off the Internet, there will be no place to organize it after downloading, which will be very messy, resulting in poor user experience. With this webpage, you can create your own music website and record favorite singers. Dian Songs. Processing related classifications.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*
暂且无使用官网数据,数据来源用户上传.
There is no official website data for the time being, and the data source is uploaded by the user.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

数据来源于用户授权上传存储。

Data from the user authorization upload store.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

We have probably 5P data planning store to the Filecoin Network

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*
非结构化数据，这些数据可以是文本文件、图片、音视频等。 Unstructured data, these data can be text files, pictures, audio and video, etc.
## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*
我们会先将数据上传到IPFS中，然后通过IPFS导入到filecoin中。我们使用mysql来维护目录索引。 We will upload the data to IPFS first, and then import it into filecoin through IPFS. We use mysql to maintain the catalog index.
## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*
Lotus
## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*
首先我们会将数据存储到IPFS中，将IPFS中文件的CID保存到Mysql数据库中，然后将IPFS中的数据导入到Filecoin上，当矿工成功达成存储交易后，我们会将Filecoin的CID也保存到Mysql中。IPFS从中起到了写入缓存的作用，同时还作为热数据缓存。 First, we will store the data in IPFS, save the CID of the file in IPFS to the Mysql database, and then import the data in IPFS to Filecoin. When the miner successfully completes the storage transaction, we will also save the CID of Filecoin to Mysql. IPFS serves as a write cache from it and also serves as a hot data cache.
## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*
使用人群偏向青少年丶工作的人员,记录属于自己的音乐
Use people who are biased towards young people and work to record their own music
## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*
网站提供活动提高人气
在网上推广网页
Website provides activities to increase popularity
Promote pages online

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

存储量超出预期
存储永久性让不在担心过期问题
Storage volume exceeds expectations
Storage is permanent so you don’t worry about expiration
