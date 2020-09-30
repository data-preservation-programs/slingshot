#<Starry sky in Yunnan>

Before submitting a PR containing your team's project information:
-Make sure you rename this file to contain your project's name
-Respond to add your response in each section below

##(0) Project Name and Team Slack Handles

Our project name is Starry sky in Yunnan, Slack Handles:Patrick-li、grandhelmsman, chenzhijie@grandhelmsman.com 

##(1) Brief Project Description

This is the meteorological and astronomical data of Yunnan University. These data include charts, analysis data and pictures. The project is divided into two stages. First, Yunnan University uploads its own meteorological and astronomical data; secondly, we store these meteorological and astronomical data directly on the Filecoin network, and all data can only be viewed by the data owner or users authorized by the owner.

##(2) Link to Project UI

This is our project UI link http://ui.file123.pro:9002
This is our project code link https://github.com/IPFS-grandhelmsman/hlmxy-filecoin.git
This is our website link http://hlmxy.file123.pro:9006

##(3) What does your application/UI do?

Users can save these meteorological and astronomical data for a long time, and at the same time can obtain these meteorological and astronomical data at any time.

##(4) If your project is using a curated dataset, which one are you using?

No official data set is used.

##(5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

Astronomical data of Yunnan University: including graphs, analysis data and pictures, etc. All meteorological and astronomical data are uploaded by users, and only the data owner and users authorized by the data owner can view the data.

##(6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We plan to store 200T of data on the Filecoin network.

##(7) How are you structuring the data?

We only store data set files.

##(8) What pre-processing are you doing before ingesting the data?

A single file is less than 500MB, we will directly store the data to the filecoin network through miner transactions.

##(9) What tech stack will you use to store the data?

lotus,We have developed a simple storage client program by ourselves. First, we store the client data in IPFS. The IPFS network provides hot data storage, and at the same time stores the data in the FILECOIN network (cold data), and processes IPFS and Filecoin through the program. For data consistency issues, we have also developed a separate UI interface to retrieve IPFS data through the UI to achieve the effect of hot retrieval.

##(10) How will you retrieve the data?

When the user starts the application, we will verify the user's permissions, and then retrieve the data for the user through the file library API.

##(11) Who is the intended user for your application/UI?

Research institutes, universities, students and hobbyists.

##(12) Do you have any users already or plans to acquire users soon?

Yes, we obtain it from Yunnan University on the one hand, and on the other hand from an organization that has the owner of astronomical and meteorological data, to provide services to the data owner and users authorized by the owner.

##(13) What challenges do you anticipate with this project?

Storage efficiency and data authorization.
