# <Fildown>

## (0) Project Name and Team Slack Handles

- Project Name : Panfil
- Slack Handles : jerseyjerry

## (1) Brief Project Description

We want to supply storage for IDC log data. We may have expected lots of  log data since IDC data center must produce huge data everyday. We can afford the good price for storing .


## (2) Link to Project UI

Link : http://www.panfil.io/
Submission ID: 680687157

## (3) What does your application/UI do?

Our application is mainly upload and search based. It will be a Filcoin user admin panel. Users can use it easily to upload and retrieve kinds of files in the future.

## (4) If your project is using a curated dataset, which one are you using?

No using curated dataset.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We provide the data from our IDC switch log Now. 

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We will store these dataset about 10TiB during the slingshot competition.

## (7) How are you structuring the data?

We use MongoDB to structure these datasets

## (8) What pre-processing are you doing before ingesting the data?

Not yet

## (9)  What tech stack will you use to store the data?

We use Powergate to interact with Filecoin client(Lotus) and IPFS.

## (10) How will you retrieve the data?

We will store the data in my local machine, so firstly I will retrieval the data from the local storage, if the file is destroyed, we will try to get it from IPFS (if can). Finally, we will send a retrieval deal to the miner of Filecoin network(this process maybe take a long time).

## (11) Who is the intended user for your application/UI?

For the IDC users needs of users can use our application, regardless of their operating system is windows, MacOS and so on.


## (12) Do you have any users already or plans to acquire users soon?

Yes, I have IDC users
 
## (13) What challenges do you anticipate with this project?

- The time and cost is big challenge for me, we need more time to download data and send it to miners.
- I need more time to develop more functions.
- I need some testFil to send data to miners, and some stable miners to accept my data order, many miners in that list do not accept my deal. 
