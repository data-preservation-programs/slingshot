

(0) Registration Submission, Project Name, and Team Slack Handles
Please provide the Submission ID from your Slingshot registration confirmation. Also, confirm your project's name and the Filecoin Slack handles for your teammates.
Project Name: FortuneCode Slack Handles:https://filecoinproject.slack.com/team/UUPC66KGV;https://filecoinproject.slack.com/team/UU3MEAF8T

(1) Brief Project Description
Add your project's description here.

We provide a financial data platform,that is market quote price data for people to upload, view and download.

(2) Link to Project UI
Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.

http://47.101.200.219/#/pair

(3) What does your application/UI do?
Give us a brief description of what your application/UI does and how users are intended to interact with it.

Our UI allows qualified users to upload financial data to our website,other users can view or download these data.

(4) If your project is using a curated dataset, which one are you using?
You can reference the list of curated datasets in this repo. If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?

not curated datasets

(5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?

These are all market quote price data now,acturally is furtures market quote price.We collect them from public financial market and  other paid service.
The data is availiable online.These data is released by state-approved financial institutions,so there is no sensitivity and legal risk.

(6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!

Each country has each own financial market,and there are severial type of quote data in each market,including raw data,tick price data,periodic price data and others. Now we just collect chinese futures quote data,the raw data we receive everyday is about 15G,and about 2G~3G after processsing.We start this project since sep 19,2019,so we have about a total amount of 6.8T.
We estamate that there will be over 100T data all over the world each year in futures market,but there will be more over 1P data in stock market and options market,the data are even bigger in over-the-counter financial market.  
(7) How are you structuring the data?
Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?

They are structured data. The raw data format is like this which is a quote tick price for an instrument,zn2104 trading in shanghai furtures exchange. 
I0507 08:59:12.390309 17713 EESQuoteDemo.cpp:678] marketdata,TradingDay=20200507;UpdateTime=09:02:46;BidPrice1=16035.0000;BidVolume1=5;AskPrice1=16355.0000;AskVolume1=6;InstrumentID=zn2104;ExchangeID=SHFE;LastPrice=16400.0000;PreSettlementPrice=16075.0000;HighestPrice=16400.0000;LowestPrice=16400.0000;PreOpenInterest=22;OpenPrice=16400.0000;Volume=1;Turnover=82000.0000;OpenInterest=23.0000;ClosePrice=0.0000;SettlementPrice=0.0000;UpperLimitPrice=17360.0000;LowerLimitPrice=14785.0000;UpdateMillisec=0;AveragePrice=16400.0000; 
A data after processed is like this. { "_id" : ObjectId("5cc5196e294ba28962d3b457"), 
"dataType" : "ama", 
"instrumentID" : "RB1801", 
"systemID" : "6090zc100", 
"tradingDay" : "20170830", 
"updateTime" : "11:30:00", 
"lastPrice" : 3826.0, 
"askPrice" : 3827.0, 
"volume" : 9348, 
"bidPrice" : 3826.0, 
"timecount" : 4955, 
"amaPrice" : 3833.8499999999999, 
"RSI" : 36.84210526315789, 
"timegap" : 60 }

(8) What pre-processing are you doing before ingesting the data?
How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!

After we receive financial data everyday,we will upload all data directly into IPFS for caching and Filecoin for cold storage by js-powergate-client. We store a mapping between the file name and the CID in ipfs,using this map, we and our users can retrieve the data again.

(9) What tech stack will you use to store the data?
Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.

lotus,powergate,js-powergate-client,nodejs,express,vue,mongodb,c++

(10) How will you retrieve the data?
Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?

Because of the high frequency of data acquisition, we need to use IFPS as an intermediate data buffer layer.The UI accesses the data directly through the file name.

(11) Who is the intended user for your application/UI?
Who do you anticipate will use your project/dataset?

Financial data provider, Hedge funds, financial institutions, traders, and other groups interested in financial markets.

(12) Do you have any users already or plans to acquire users soon?
Yes/no. Also, please tell us a little bit about your future plans for user acquisition. 
Yes,we are traders ourselves.

(13) What challenges do you anticipate with this project?
We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!

Because the project involvs a lot of technology stacks, we have to spend a lot of time learning to program.
We are a smaller miner,so we don't have enough FIL to post storage deals.
