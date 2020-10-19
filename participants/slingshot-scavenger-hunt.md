# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

**Slingshot Scavenger Hunt**

Slack: @jimpick

## (1) Brief Project Description

Slingshot Scavenger Hunt will be a game where participants will 
complete quests that involve finding bits of information and media
from around the world and uploading it to the Filecoin network,
collaboratively building hyper-local knowledge graphs.

## (2) Link to Project UI

* [https://sssh.v6z.me/](https://sssh.v6z.me/)

## (3) What does your application/UI do?

The inner gameplay loop will revolve around virtually navigating to specific
geographic locations, and finding "wanted" information which is then
submitted and uploaded to Filecoin. Additionally, players will
participate in curation and retrieval tasks. As time permits, gamification
techniques will be added to improve gameplay (leaderboards, levels, etc.)

## (4) If your project is using a curated dataset, which one are you using?

As a base for our knowledge graph, we have already uploaded a 3.1GB Kiwix
dump of the simple English Wikipedia (originally prepared for Datpedia).

Potentially quests might involve finding and linking data from other curated
datasets.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We may ask our users to register using GitHub accounts as we want to restrict
access to the Lotus nodes we provide to authorized users. Apart from a small
amount of data for things such as leaderboards, most data collected will be
woven into a master IPLD-based knowledge graph. We will focus on public domain
or creative commons licensed content as much as possible.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

Probably about 7 replicas of the Kiwix dump for redundancy. Players will find and
upload content as well, but it is unlikely that there will be so many players that
it will amount to a huge amount of data. Our focus is going to be on building a
quality knowledge graph. The "gameboard" is global in scale, so data usage could grow
significantly over a longer time frame.

## (7) How are you structuring the data?

Data will be primarily stored using IPLD + binary blobs for media files. There
will be a heavy emphasis on geolocating content - we plan to index the data
using Uber’s H3 spatial index (as well as miner locations).

## (8) What pre-processing are you doing before ingesting the data?

We are going to try to build a lot of indexes and links in order to knit the
player submitted data into the pre-existing Wikipedia-based knowledge graph.

## (9)  What tech stack will you use to store the data?

Primarily client-side, using a bespoke WebRTC hot layer, and we'll host some
Lotus nodes with authenticated access.

## (10) How will you retrieve the data?

Data retrieval will be a core part of the gameplay. Players will interact
directly with cold storage. Players will co-operatively build their own
hot layers with WebRTC. Data will be collected and woven into the graph
with geography in mind, and the gameplay will encourage storing the data
on miners that are geographically closest to the topics.

## (11) Who is the intended user for your application/UI?

It's intended to be a fun introduction to Filecoin and DWeb/Web3 concepts,
so it should be accessible to most people, even non-technical gamers.

## (12) Do you have any users already or plans to acquire users soon?

Once a bit of the game play is ready, we will enable players to invite
new players into the game.

## (13) What challenges do you anticipate with this project?

I want to push the limits of what is possible with decentralized technology,
and see how much can be done client-side in the web browser vs. server side.
It will be interesting to see how players interact with the Filecoin network
when it is fully exposed in the UI.

