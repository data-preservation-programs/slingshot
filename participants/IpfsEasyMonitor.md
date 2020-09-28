# IpfsEasyMonitor

## (0) Project Name and Team Slack Handles

*Our project Name is* **IpfsEasyMonitor.** 

*Our Team is a Internet company, some of whom are filecoin enthusiasts. We want to make some valuable Internet applications based on IPFS.*

*Team Slack Handles:* **Alinger**

## (1) Brief Project Description

**IpfsEasyMonitor** *is a video monitoring system based on IPFS. It provides unified and open video streaming access, processing and distribution services for monitoring devices.The video content is connected to IPFS for storage, recording, viewing and distribution throughout the network.Can be integrated with intelligent vision, video computing systems, machine learning platforms, and eco-partner capabilities to rapidly build applications and intelligent monitoring solutions that leverage computer vision and video analysis.*

![Working principle diagram](https://gateway.originprotocol.com/ipfs/QmUQ9eCCkLLXYK2oQ9JVQHWCxKJZuDenre9NYvvbyRxBzZ "IpfsEasyMonitor")

## (2) Link to Project UI

*A preview of the key interface of IpfsEasyMonitor shown below:*

![IpfsEasyMonitor](https://gateway.originprotocol.com/ipfs/QmZ8VfwJC7RszGNqJC9wJbp5ixR1DhtcH7NRqAfen1Mh31 "IpfsEasyMonitor")

*Project link address is [IpfsEasyMonitor](https://github.com/alinger/IpfsEasyMonitor), We will gradually open source, And synchronize the updates in real time.*


## (3) What does your application/UI do?

*Monitoring camera access, screenshot, code transfer, cloud control, camera image quality detection and distribution, and central cloud big data analysis are realized. Combined with the unique advantages of Ipfs, monitoring data will never be lost, data integrity will be guaranteed and user cost will be saved to a certain extent.*

## (4) If your project is using a curated dataset, which one are you using?

*Video*

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*The video collected by the surveillance camera can be saved on the IPFS network after being authorized by the user. Only users with access rights of the system can access the data.*

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*We plan to upload at least 100T of video data to the IPFS network, possibly more, depending on the number of users used by the system.*

## (7) How are you structuring the data?

*The data we store is video and only supports MP4 format H264 encoding.*

## (8) What pre-processing are you doing before ingesting the data?

*It supports data collected by RTMP, GB/T28181 standard protocol camera and intelligent device, which is assembled and uploaded through cloud transcoding. Every video over 256M will be automatically cut into multiple videos, and the associated index address will be saved in the database for retrieval.*

## (9)  What tech stack will you use to store the data?

*Powergate*

## (10) How will you retrieve the data?

*We store the CID of the user uploaded to the IPFS network in the centralized database, and obtain the CID through the user authorization information, so as to obtain the real upload address of the video.*

## (11) Who is the intended user for your application/UI?

*Small and Medium enterprises.*

## (12) Do you have any users already or plans to acquire users soon?

*We already have a group of enterprise users, but based on a centralized storage solution, and we are planning to gradually import this group of users into the IPFS network, which is what we expect.*

## (13) What challenges do you anticipate with this project?

*At present, we are breaking large videos into small pieces every 128M and then assembling them through the cloud. This speed is not ideal, which directly affects the user experience. However, I believe this problem will be solved in the near future.*
