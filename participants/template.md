 <FortuneCode>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

Project Name: FortuneCode
Slack Handles: UU3MEAF8T,UUPC66KGV

## (1) Brief Project Description

We provide a financial data platform,that is market quote price data for people to view and download.

## (2) Link to Project UI

http://47.101.200.219/#/pair

## (3) What does your application/UI do?

Our UI allows qualified users to upload financial data to our website,other users can view or download these data.

## (4) If your project is using a curated dataset, which one are you using?

N/A

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.
1、What sorts of data will you collect?
   market quote price data,now is furtures market quote price.
2、 Do you own or have exclusive rights to the data you plan to use?
   Yes,those data are received by us from public financial market.
3、Is the data license available online?
   yes availiable online
4、Does the data contain any sensitive or illegal information?
   No,these data can be received from  public financial market.
## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

There are severial type of quote data,including raw data,tick price data,periodic price data and others. The raw data we receive everyday is about 15G,and about 2G~3G after processsing.We start this project since sep 19,2019,so we have about a total amount of 6.8T.  

## (7) How are you structuring the data?
1、They are structured data.
2、The raw data format is like this.This is a quote tick price for an instrument,zn2104 which is trading in shanghai furtures exchange.
I0507 08:59:12.390309 17713 EESQuoteDemo.cpp:678] marketdata,TradingDay=20200507;UpdateTime=09:02:46;BidPrice1=16035.0000;BidVolume1=5;AskPrice1=16355.0000;AskVolume1=6;InstrumentID=zn2104;ExchangeID=SHFE;LastPrice=16400.0000;PreSettlementPrice=16075.0000;HighestPrice=16400.0000;LowestPrice=16400.0000;PreOpenInterest=22;OpenPrice=16400.0000;Volume=1;Turnover=82000.0000;OpenInterest=23.0000;ClosePrice=0.0000;SettlementPrice=0.0000;UpperLimitPrice=17360.0000;LowerLimitPrice=14785.0000;UpdateMillisec=0;AveragePrice=16400.0000;
3、One of processed data is like this.
{
  "_id" : ObjectId("5cc5196e294ba28962d3b457"),
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
  "timegap" : 60
}

## (8) What pre-processing are you doing before ingesting the data?
After we receive financial data everyday,we will upload all data directly into IPFS for caching and Filecoin for cold storage by js-powergate-client. We store a mapping between the file name and the CID in ipfs,using this map, user can retrieve the data again.

## (9)  What tech stack will you use to store the data?
lotus,powergate,js-powergate-client,nodejs,express,vue,mongodb

## (10) How will you retrieve the data?

Because of the high frequency of data acquisition, we need to use IFPS as an intermediate data buffer layer.The UI accesses the data directly through the file name.

## (11) Who is the intended user for your application/UI?


Financial data provider, Hedge funds, financial institutions, traders, and other groups interested in financial markets

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*
Yes,we are traders ourselves.

## (13) What challenges do you anticipate with this project?

Because the project involvs a lot of technology stacks (maybe not so much, but we aren't professional programmers, so we don't have much choice), we have to spend a lot of time learning to program.
