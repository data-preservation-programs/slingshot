# vbank (Volunteer Time Bank)

- Official Site: http://www.fmode.cn/blog/case-medical-vbank/
    - Powered by ipfscms.com
    - Powered by ipfsapp.io


## (0) Project Name and Team Slack Handles

- @Ryane Liu
   - the CTO of fmode.cn

## (1) Brief Project Description

The Vbank Platform, using ipfs storage, to build a time bank for medical care workers, medical social workers and medical volunteers, improve the performance indicator system of medical services, and form a new mode of integration of medical health and public welfare by matching service resources with big data of patients' needs.

## (2) Link to Project UI
### Our Project Blog Site
- http://www.fmode.cn/blog/case-medical-vbank/

### ShowCase: PC & App.

![stucture](http://www.fmode.cn/blog/case-medical-vbank/4.png)

### ShowCase: App Page
![app home](http://www.fmode.cn/blog/case-medical-vbank/5.png)

### ShowCase: Practice
![practice](http://www.fmode.cn/blog/case-medical-vbank/6.png)

### ShowCase: Wechat App QrCode
- <span style="color:red">**NOTICE: YOU SHOULD SCAN WITH WeChat App**</span>
![qrcode](http://cloud.file.futurestack.cn/gh_2a8291112437_1280.jpg)

   
## (3) What does your application/UI do?


## **Traditional industry problems**:

Traditional paper accounting is difficult to meet the cross-regional, long-term management needs; Volunteers also have a threshold, want to "save time" to train first. Traditional time bank, stranded hundreds of thousands of time currency, unable to check Validation.

## **Technical features：**
- **We Storage multiple type of data to prove the authenticity of an hour of volunteering**
    - [image] pictures of Service process.
    - [json] iBeacon positioning report data from iot.
    - [video] Monitor snapshot & records.
    - [audio] Wearable smart terminal records.
- **We provide a data browser to check for authenticity using hashes**
    - [person] Who did
    - [process] what did
    - [review] Who reviewed
- **We provide a Trading center using time currency**
    - one hour, which be proved, equals, one unit of time currency


## (4) If your project is using a curated dataset, which one are you using?

Supported：
- Condensed Movies - Video
- USENET (2005-2011) - Text
- Chest X-Ray Images (Pneumonia) - JPEG

Not Supported but required:
- https://www.babylonjs.com/ - .babylon 3D Model
- https://threejs.org/ - 3D Model

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

- Sorts of data
   - Text(The words of description)
   - Image(small)
   - Video(middle)
   - Audio(middle)
   - Json(from iot devices)
- Not available online, Only System AI or Inspector user can review data.
- We have Content review mechanism.


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

- **For Closed Beta: about 10GB （slingshot）**
- For Public Beta: about 1TB
- For Future: Depends on the user

- The size of data is not the core requirement for this project. **We need flexible dir management mechanism and traceability proof mechanism**

## (7) How are you structuring the data?

- Both
    - structured: records every one hour data sets relations.
    - unstructured: store data, produced every one hour.

## (8) What pre-processing are you doing before ingesting the data?

- We need **Correlate all data generated within an hour for one time of volunteer service**.
- For Closed Beta: about 10GB （slingshot）
- we have status database to store data hash, for indexing, for optimizing http network transmit.(Some Use Case still need http)
   - We mainly use **ThreadDB**


## (9)  What tech stack will you use to store the data?

- **ThreadDB**, records every one hour data sets relations.
- **Textile Hub/Buckets**, store data of every one hour.

## (10) How will you retrieve the data?
- We will build status databases for indexing optimize.
    - **Correlate all data generated within an hour for one time of volunteer service**
- Slow frequency to visit. 

## (11) Who is the intended user for your application/UI?

### **Value of User:**
- **For One Volunteer:** 
    - Retired doctor, in the field of medical interns, Pearson, could, through our Vbank Platform involved in the medical volunteer work after registration certification, we will use multiple data format for fellow volunteers,to set up evaluation system and incentive system time Banks, let everybody more worry, more meaningful volunteer work. This calls for and encourages more people to participate in voluntary medical work.
- **For Medical Institution**
    - More medical volunteer human resources can be obtained through VBank to relieve the pressure of medical work. At the same time, the hospital needs to donate part of the vouchers or services used for encouragement to Happiness V Bank, such as meal vouchers, medical examination vouchers, souvenirs and so on.
- **For Health Problem Groups**
    - Offline can enjoy accompanying, guiding and health consulting services like family members, while online can participate in health consulting, popular science lectures and other health-related public services during the epidemic.

## (12) Do you have any users already or plans to acquire users soon?

Yes:

-  We already have a lot of seed users.
    - 6000+ Registered volunteer
    - 10 Medical Volunteer Project
    - 3 top three hospitals


Plans:
- This project is to provide technical solutions for public welfare platforms, which has great social value and enables more people to know about IPFS, and accept and love Filecoin

## (13) What challenges do you anticipate with this project?

### Biggest Challenges
- The size of data is not the core requirement for this project. 
- **We need flexible dir management mechanism and traceability proof mechanism**

