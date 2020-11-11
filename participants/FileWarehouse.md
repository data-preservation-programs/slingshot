# <FileWareHouse>

## (0) Project Name and Team Slack Handles

- Project Name : FileWareHouse
- Slack Handles : LeoCheung

## (1) Brief Project Description

FileWareHouse is a AI dataSet storage platform，(Store many kinds of machine learning dataset, including text, image and vedio etc). Based on the filecoin network. And many kinds of public AI training dataset will be stored to the filecoin Network. 
For a long run, we want to build a big cloud computing platform own many AI training dataset.

## (2) Link to Project UI

Link : http://filewarehouse.wenzhouteck.net/

## (3) What does your application/UI do?

It is a AI training dataset wareHouse，and it will be a big cloud computing platform: 
- Storage & Retrieval Function: FileWarehouse will storage the AI training data to the Filecoin network, include imageNet, stock data and . 
-  Function: user can search the files that they wanted by the file name or dataCID.

## (4) If your project is using a curated dataset, which one are you using?

It will storage the data from "curated" dataset, include：
- COVID-19 Open Research Dataset
- Chest X-Ray Images (Pneumonia)
- Huge Stock Market Dataset
- Open Images Dataset
- video training data: A large-scale, high-quality dataset of URL links to approximately 650,000 video clips that covers 700 human action classes
  https://deepmind.com/research/open-source/kinetics
  
 https://storage.googleapis.com/deepmind-media/Datasets/countix.tar.gz
 https://research.google.com/ava/
 https://storage.googleapis.com/deepmind-media/Datasets/kinetics700.tar.gz
 https://storage.googleapis.com/deepmind-media/Datasets/kinetics600.tar.gz
 https://storage.googleapis.com/deepmind-media/Datasets/kinetics400.tar.gz
 https://console.cloud.google.com/storage/slim-dataset
 https://storage.googleapis.com/deepmind-com-v3-datasets/alphafold-covid19/structures_v3_4_8_2020.zip

Necessary :
- Filecoin Proofs 

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We will use the curated dataset and 
video training data: A large-scale, high-quality dataset of URL links to approximately 650,000 video clips that covers 700 human action classes (https://deepmind.com/research/open-source/kinetics), this data will be included.


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We will store these dataset about 6TiB during the slingshot competition.

## (7) How are you structuring the data?

we will download the curated dataset and AI training datset to our local machine, and storage the data to the filecoin network by different miners.

## (8) What pre-processing are you doing before ingesting the data?

During the slingshot, we will store curated dataset and AI training dataset(later I will issue a PR with this data). Considered the miner sealing process and network stablelity，we consider that we cut the files into a piece of about 250M and 1GiB，One piece will be avialiable to one deal.

## (9)  What tech stack will you use to store the data?

Consider the time, we develop the application - FileWareHouse based on lotus, and at the phrase 2, we want to use Powergate to interact with Filecoin client(Lotus) and IPFS.

## (10) How will you retrieve the data?

We will store the data in my local server, so firstly user can retrieval the data from the my server storage, if the file is destroyed or lost, FileWareHouse will try to get it from IPFS (if can). Finally, we will send a retrieval deal to the miner of Filecoin network(this process maybe take a long time, but it is robust).

## (11) Who is the intended user for your application/UI?

"FileWareHouse" is a decentralized and stable  AI training data storage and retrieval platform, everyone can storage data to the filecoin network by it, and it will be built many data warehouse, such as imageHouse, videoHouse, StockHouse, FilecoinHouse etc. so I think the potentical users are AI(machine learning or deep learning) researcher and engineer, including students and some competiton platform. 

## (12) Do you have any users already or plans to acquire users soon?

No, for now, I juest start develop it, I will storage some different kinds of AI Training data to the filecoin network, such as imageNet dataset, vedio dataset and stock dataset, I will recommend my teachers students and friends to use it, and I have a research community and competition platform to cooperate together.
For now, I have a readding-meeting community from many Chinese university students and different industry engineers .
 
## (13) What challenges do you anticipate with this project?

- The time and cost is biggest challenge for me, we need more time to download data and send it to miners.
- I need some Fil to send data to miners, and some stable miners to accept my data order, many miners in that list do not accept my deal.
- A beautiful web need some to design. 









