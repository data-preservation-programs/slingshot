# Anwen Web3 Content Community

## (0) Project Name and Team Slack Handles

- project's name: Anwen Web3 Content Community
- Slack handle: askender

## (1) Brief Project Description

A decentralized content platform/community which rewards article authors and sharers with FileCoin. We store valuable articles/datasets on IPFS/Filecoin to avoid 404.

## (2) Link to Project UI

https://anwen.cc/explore

## (3) What does your application/UI do?

- Allow users to write articles, share links and share datasets on the site and store them in Filecoin/IPFS.
- Allow users to send Filecoin as gift to the author/creator/sharer they like.

## (4) If your project is using a curated dataset, which one are you using?

Common Crawl, Free Music Archive, USENET (2005-2011)

I will nominate datasets which are under Creative Commons License, I will PR soon.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? *
- NLP(Natural language processing) datasets (under Creative Commons License).
- Articles written by users on our site. Users can choose to store by themselves.
- Articles on https://matters.news which are already on IPFS.

the data doesn't contain any sensitive or illegal information.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

10TiB

## (7) How are you structuring the data?

- Data formats for dataset: tar, tar.gz etc.
- Data formats for articles: markdown, HTML. (metadata using json/IPLD)

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin?*
Download the link by wget or allow user to upload

*What size storage deals will you be making?*
Deals may vary from 10KB to 30GB

If this is a directory structure, I will use IPLD/json to maintain indices into the data.

## (9)  What tech stack will you use to store the data?

I use many tools: lotus(command-line), Powergate(command-line), Powergate(with pygate SDK)

## (10) How will you retrieve the data?

- Method 1: Let user use IPFS. Give them the links on UI.
- Method 2: Give user the command-line (on UI) to retrieve with lotus client.
- Method 3: Retrieve the data(as data-backup) by the site owner.

## (11) Who is the intended user for your application/UI?

- Authors who want to store their articles longer and to avoid 404 pages.
- NLP researchers who want to download datasets.

## (12) Do you have any users already or plans to acquire users soon?

- Not now, but I have plans to acquire users later.

Future plans:
- I am cooperating with https://matters.news team and Likecoin team.
- I will find more people who can write quality articles.
- Let people store videos made by themselves.

## (13) What challenges do you anticipate with this project?

To find 10TiB research datasets can be a challenge for me.
