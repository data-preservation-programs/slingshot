# <TukuWallpaper>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

My Slingshot registration ID is huhuiyao.

Our project name is TukuWallpaper, We'are TukuWallpaper team is one of filecoin miner and also we're developing IPFS applications

Slack is https://app.slack.com/client/T01B4QHHR47/D01B4QKTET1

## (1) Brief Project Description

完全免费的海量高清壁纸，动态壁纸让你的屏幕鲜活起来！情侣壁纸，只属于你们专属壁纸。喜欢分享的朋友可将相册中的照片上传至平台，分享你的快乐。

Massive high-definition wallpapers totally free, live wallpapers make your screen come alive! Couple wallpapers, only your exclusive wallpapers. Friends who like to share can upload photos in the album to the platform to share your happiness.

## (2) Link to Project UI

下面是我们的项目下载链接，它是一个iPhone应用。需要按照打开的网页提示要求进行下载。

Here is our project download link, it is an iPhone application.Need to download according to requirements of the open web tips.

https://testflight.apple.com/join/GpGS4uNu

## (3) What does your application/UI do?

分类：详细分类，快速定位你的偏好壁纸。搜索：智能搜索，轻松找到你最爱的壁纸。预览：左右划屏快速切换预览，享受全屏无死角视觉盛宴。发布你的照片让更多的人用它作为壁纸。

Classification: Detailed classification, quickly locate your favorite wallpaper. Search: Smart search, easily find your favorite wallpaper. Preview: Swipe left and right to quickly switch previews, and enjoy a full-screen visual feast without dead ends. Publish your photo to let more people use it as wallpaper.

## (4) If your project is using a curated dataset, which one are you using?

我们没有使用官方数据集，数据来源于用户授权上传存储。

We didn't use the official data set, data from the user authorization upload store.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

数据来源于用户授权上传存储。

Data from the user authorization upload store.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We have probably 10P data planning store to the Filecoin Network

## (7) How are you structuring the data?

非结构化数据，这些数据可以是文本文件、图片、音视频等。我们会先将数据上传到IPFS中，然后通过IPFS导入到filecoin中。我们使用mysql来维护目录索引。

Unstructured data, these data can be text files, pictures, audio and video, etc. We will upload the data to IPFS first, and then import it into filecoin through IPFS. We use mysql to maintain the catalog index.

## (8) What pre-processing are you doing before ingesting the data?

我们会先将数据上传到IPFS中，然后通过IPFS导入到filecoin中。我们使用mysql来维护目录索引。

We will upload the data to IPFS first, and then import it into filecoin through IPFS. We use mysql to maintain the catalog index.

## (9)  What tech stack will you use to store the data?

Lotus

## (10) How will you retrieve the data?

首先我们会将数据存储到IPFS中，将IPFS中文件的CID保存到Mysql数据库中，然后将IPFS中的数据导入到Filecoin上，当矿工成功达成存储交易后，我们会将Filecoin的CID也保存到Mysql中。IPFS从中起到了写入缓存的作用，同时还作为热数据缓存。

First, we will store the data in IPFS, save the CID of the file in IPFS to the Mysql database, and then import the data in IPFS to Filecoin. When the miner successfully completes the storage transaction, we will also save the CID of Filecoin to Mysql. IPFS serves as a write cache from it and also serves as a hot data cache.

## (11) Who is the intended user for your application/UI?

摄影爱好者及所有iPhone用户

Photographers and all iPhone users

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

1、预览共功能让用户无需下载即可体验壁纸效果。
2、永久储存用户不用担心过期问题。
3、图片滤镜处理。
1. The preview function allows users to experience wallpaper effects without downloading. 
2. Permanent storage users don't have to worry about expiration. 
3. Image filter processing.
