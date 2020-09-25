# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles
Quant AI
Slack: @Charles Cao - NBFS 

## (1) Brief Project Description

Quant AI is a App build by Nebula AI team on the space race testnet which predicts the crypto currency trading price. This tool analyzes time series and trains deep learning models based on AI algorithm with sentimental analysis to forecast real-time trends. The sentiment analysis engine is a natural language processing developed by NBAI. This tool helps users classify the polarity of a given text and extract the attitude of the writer. It is currently used as a price prediction model for trading, evaluation of consumer inclination, online conversations positioning and content inclinations.

## (2) Link to Project UI

https://github.com/nebulaai/qaunt-ai/blob/master/README.md

Demo Video https://youtu.be/tLx2tE1YaMY


## (3) What does your application/UI do?
Use can upload their customized data set though the UI or using data source link for deep learning, after make a payment to the system, he can overview the result of the forecasting and download the result for future analysis. User need to pay for the permanent storage fees on the Filecoin blockchain

## (4) If your project is using a curated dataset, which one are you using?
https://www.kaggle.com/crowdflower/first-gop-debate-twitter-sentiment
https://www.kaggle.com/shashank1558/preprocessed-twitter-tweets 
can be used for training purpose. 
blockchain dataset https://github.com/blockchain-etl/public-datasets used for transaction analysis 

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We also implemented a data engine to collect twitter data real time,

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
50Tb

## (7) How are you structuring the data?
structured data with timestamps and tags with CSV format.

## (8) What pre-processing are you doing before ingesting the data?

The data is pre- processing in memory and then add to the SSD in a streaming way, the data will then add to the local ipfs node for uploading to filecoin cold storage system. The data will be file based as CSV file, and trunked to 2GB file each for saving in filecoin network. A time based index will be used for retriveing data.

## (9)  What tech stack will you use to store the data?
 Powergate

## (10) How will you retrieve the data?
When retrieve the data, we cached the most used data of past 24 hours data in local strage system.The 7 days data will be cached in IPFS.  The data size usually around 10GB. On the UI it will shows the data source from which miner and the CID of data.

## (11) Who is the intended user for your application/UI?

Institution/ Individule user who is intrested in trading.

## (12) Do you have any users already or plans to acquire users soon?

Yes, we have developed the system over one year, and want to put it in usage after the integration filecoin.

## (13) What challenges do you anticipate with this project?

Chunke the data and cache it in the IPFS.
