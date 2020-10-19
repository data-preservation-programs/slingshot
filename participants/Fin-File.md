# <Project Name>

Fin-File

## (0) Project Name and Team Slack Handles

Name: Fin-File, Team Slack channel: https://filecoinproject.slack.com/archives/G01AARKRXPF or 'hfs-fin-file', Team Slack handles: @John_Mc and @Daniel Kurzweil

## (1) Brief Project Description

Fin-File is a Python Flask app that allows the user to generate a 5-year weekly price chart of any U.S. listed stock or top 100 cryptocurrency and a spreadsheet of that same historical data. Our medium term goal is to create a digital asset data store that allows the user to research crypto token issues to guide investment decisions.  We also plan to have an instructional video repo available for beginners to educate themselves about the crypto space (i.e. how to download and install a Metamask wallet).

## (2) Link to Project UI

https://fin-file.herokuapp.com/

## (3) What does your application/UI do?

 Fin-File is a Python Flask app that allows the user to generate a 5-year weekly price chart of any U.S. listed stock or top 100 cryptocurrency and a spreadsheet of that same historical data. Once the files are downloaded, they are pushed to IPFS for hot storage or Filecoin cold storage via a Hosted Powergate instance.  

 Improvements for the future will include focusing on the top 100 crypto tokens, technical analysis data such as moving averages, MACD, Bollinger Bands and stochastics and fundamental analysis data such as news developments, project team updates and new business contracts or partners.

## (4) If your project is using a curated dataset, which one are you using?

Not currently using a curated dataset, but researching sources and APIs to create one that does not infringe on copyright agreements.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

1) Fin-File collects price data on U.S. stocks, mutual funds, ETFs and top 100 cryptocurrencies.
2) At this time, Fin-File uses the finance.yahoo.com API for its data feed which allows unrestricted use of its API.
3) Terms of usage of the finance.yahoo.com API and website can be found at https://www.verizonmedia.com/policies/us/en/verizonmedia/terms/otos/index.html
4) After considerable research and due diligence, to the best of our knowledge this data feed does not contain sensitive or illegal information.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

10 TBs for starters.

## (7) How are you structuring the data?

The data is currently unstructured, but will become structured based on the crypto token issue the data will cover (i.e. t31..... address will be dedicated to all technical, fundamental and news related to bitcoin).

## (8) What pre-processing are you doing before ingesting the data?
a) How will you prepare this data for ingestion into Filecoin?

    Token specific data will be packed in tar.gz or .zip packages and sent to Powergate via a hosted Powergate instance.

b) What size storage deals will you be making?

    Not sure. Need more info of what we will need. A tutorial might be helpful in determining this.

c) If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application?

    It should be a directory structure, but need guidance on how to write the python gRPC client which will allow the Fin-File app to push and retrieve specific data.


## (9)  What tech stack will you use to store the data?

      Hosted Powergate

## (10) How will you retrieve the data?

a) How often does the data need to be retrieved? What is the size of each individual read?

    Depending upon user needs, the casual user looking for a chart or data spreadsheet may be using the app several times per day, but only retrieving MB's of data on each visit. Whereas an institutional user researching data to build an investment portfolio, medium to long term investment strategy or trading bot, may retrieve or push 100's of GBs to complete their project needs.

b) Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS?

    Casual user will mostly retrieve from the hot IPFS layer, where the institutional user will pull from the cold storage Filecoin layer since they need older, more historical data.

c) How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?

    Pushing and pulling of data will utilize the Textile.io Buckets or Hub through the `buckd` or `hubd` gRPC client. We need to build a Python gRPC client for this purpose and could use some help to develop it.


## (11) Who is the intended user for your application/UI?

    Casual users looking for a quick data pull for short-term decision making and institutional users looking for historical data to build medium to long-term investment strategies.

## (12) Do you have any users already or plans to acquire users soon?

     Several casual users, but no institutional following yet.

     Future plans after resolving the gRPC client issue and adding new data variations to the app as well as access to new APIs, possibly Chainlink oracles, we plan to market aggressively using social media, then seek paid marketing assistance, if we are able to secure grants or other financing.

## (13) What challenges do you anticipate with this project?

      We are most concerned about resolving the issue surrounding the development of the Python gRPC client to allow us/users to push and pull through Textile.io Buckets or Hub.
