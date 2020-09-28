# Chain Snapshot

## (0) Project Name and Team Slack Handles

- Project Name: Chain Snapshot
- Slack Handle: hexcola, Like

Our team name is Diancun Tech, which is one of the miners of Spacerace.

## (1) Brief Project Description

Chain Snapshot is a repository where backup blockchain data from cryptocurrencies. Include but not limited to Filecoin, Bitcoin, Ethereum, Dogecoin, ZCash, Litecoin, Dash, Bitcoin Cash, Ethereum Classic, etc.

## (2) Link to Project UI

https://www.figma.com/file/A2N9xGd6PO4GXGpHxr10lE/chain-snapshot?node-id=0%3A1

## (3) What does your application/UI do?

It categories snapshots by cryptocurrencies. Users can download snapshots by navigating to specific categories. Each category will have a list of snapshots order by time.

## (4) If your project is using a curated dataset, which one are you using?

Public Blockchain Datasets.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

Data from the certain blockchain.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

At least 300 TB data for the Filecoin blockchain, maybe more than 800 TB if other blockchains includes in the repository.

## (7) How are you structuring the data?

Structed `.tar` file.

## (8) What pre-processing are you doing before ingesting the data?

The blockchain data will be packed every hour and stored in ThreadDB.

## (9) What tech stack will you use to store the data?

ThreadDB

## (10) How will you retrieve the data?

Use CIDs stored in ThreadDB to retrieve data using P2P.

## (11) Who is the intended user for your application/UI?

Every developer who lose the blockchain data or need to make a new blockchain node.

## (12) Do you have any users already or plans to acquire users soon?

The first user will be ourselves, we need the backups to ensure we have lasted data. It also can empower anyone who needs the data.

## (13) What challenges do you anticipate with this project?

Keep every blockchain sync and high availability will be the main challenge.
