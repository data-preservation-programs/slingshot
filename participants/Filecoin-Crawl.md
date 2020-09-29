# <Filecoin-Crawl>

Before submitting a PR containing your team's project information:
-Make sure you rename this file to contain your project's name
-Respond to add your response in each section below

##(0) Project Name and Team Slack Handles

Our project name is Filecoin-Crawl, Slack Handles:Patrick-li、grandhelmsman, Emails:desupport@grandhelmsman.com.

##(1) Brief Project Description

This is a non-profit organization project that provides available high-quality crawling data for small startups and even individuals. It can help us analyze the world in pursuit of outstanding ideas, which was previously only possible by large search engine companies.

##(2) Link to Project UI

This is our project UI link http://ui.filecoin123.pro:9008   
This is our project code link https://github.com/IPFS-grandhelmsman/Filecoin-Crawl.git

##(3) What does your application/UI do?

Users can download a variety of high-quality crawling data, users can learn how to use these data, new high-quality crawling data is continuously uploaded for users to use, and users can support the development of the project in the form of donations.

##(4) If your project is using a curated dataset, which one are you using?

Yes,The official data set is used, Name：Common Crawl, Descriptions：An open repository of web crawl data, Size：235 TB,Format：WARC, URL:https://commoncrawl.org/

##(5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

Common Crawl provides an open web crawling data repository that all users can access for free. In this process, Common Crawl Corpus contains more than 2PB of web crawling data that has been continuously collected for eight years.

##(6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We plan to store 2PB of data on the Filecoin network.

##(7) How are you structuring the data?

We only store web crawl data set files.

##(8) What pre-processing are you doing before ingesting the data?

A single file is less than 500MB, we will directly store the data to the filecoin network through miner transactions.

##(9) What tech stack will you use to store the data?

 lotus, We have developed a simple storage client program by ourselves. First, we store the client data in IPFS. The IPFS network provides hot data storage, and at the same time stores the data in the FILECOIN network (cold data), and processes IPFS and Filecoin through the program. For data consistency issues, we have also developed a separate UI interface to retrieve IPFS data through the UI to achieve the effect of hot retrieval.

##(10) How will you retrieve the data?

When the user starts the application, we will verify the user's permissions, and then retrieve the data for the user through the file library API.

##(11)Who is the intended user for your application/UI? 

Research institutions, universities, students and hobbyists.

##(12) Do you have any users already or plans to acquire users soon?

Yes, on the one hand we get it ourselves, on the other hand we are contacting contributors.
The data owner organization provides services to the data owner and users authorized by the owner.

##(13) What challenges do you anticipate with this project?

Storage efficiency and data authorization.

