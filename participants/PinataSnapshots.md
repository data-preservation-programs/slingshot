# Pinata

## (0) Project Name and Team Slack Handles

*Our project Name:* **Pinata Snapshots**

*Team Slack Handles:* **Matt Ober**, **Justin Hunter**

## (1) Brief Project Description

"Snapshots" will provide Pinata users with a way to back up their pinsets to filecoin.

## (2) Link to Project UI

https://ipfs.io/ipfs/Qmebt4ZhKfZCxR3FVxnGtacwaioA72EVQ4Frzs5Wwhe7da

## (3) What does your application/UI do?

Pinata currently serves the decentralized storage ecosystem through our IPFS pinning service. 

With "Snapshots", we're allowing our users to back up their IPFS pinsets in a decentralized, cost effective way.

The "Snapshots" functionality will allow users to either create manual or scheduled snapshots of their pinsets that can be triggered either through our GUI interface (Documented API support likely coming soon).

## (4) If your project is using a curated dataset, which one are you using?

N/A

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

The data backed up will be the complete pin sets of Pinata users who choose to back up their data.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We plan to store a few Terabytes of data during the Slingshot competition

## (7) How are you structuring the data?

To create a snapshot we will shard users' pin sets into shards of less than 32GB in size (to fit sector limits) and create root dags for each shard. 

## (8) What pre-processing are you doing before ingesting the data?

To create a snapshot we will shard users' pin sets into shards of less than 32GB in size (to fit sector limits) and create root dags for each shard. 

## (9)  What tech stack will you use to store the data?

The dags created will be stored on filecoin via the Lotus Filecoin client

## (10) How will you retrieve the data?

The data will be retrieved from the Pinata IPFS nodes on which it is already pinned. 

For retrieval from filecoin itself, we want to give users the ability to retrieve from anywhere they please (instead of solely relying on Pinata), so we will be providing the respective deal information along with each snapshot.

## (11) Who is the intended user for your application/UI?

Pinata users

## (12) Do you have any users already or plans to acquire users soon?

We already have an existing userbase

## (13) What challenges do you anticipate with this project?

The biggest challenges we anticipate with htis project involve unforeseen errors related to the filecoin network / miners / clients. Our error handling will need to be fairly robust to accomodate potential failures.
