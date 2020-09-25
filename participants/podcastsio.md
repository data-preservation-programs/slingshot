# Pod.casts.io


## (0) Project Name and Team Slack Handles

Project name: Pod.casts.io
Filecoin slack handle: @andrew

## (1) Brief Project Description

Discover your perfect podcast, updated daily with millions of episodes and filtered to highlight the best podcasts on the web.

## (2) Link to Project UI

https://pod.casts.io/

## (3) What does your application/UI do?

Users can browse for podcasts and then listen to and share episodes. Creative commons licensed podcasts are also available via IPFS and will be archived onto filecoin.

## (4) If your project is using a curated dataset, which one are you using?

N/A

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

Only podcast episodes that are available under a creative commons license will be uploaded to IPFS+filecoin

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

Approx 1TB - 13TB of audio and video files

## (7) How are you structuring the data?

A textile bucket for each podcast, containing individual files for each episode

## (8) What pre-processing are you doing before ingesting the data?

Data is collected via podcast rss feeds and first downloaded and added to IPFS before uploading to filecoin

## (9)  What tech stack will you use to store the data?

Textile Hub/Buckets via CLI

## (10) How will you retrieve the data?

Episodes available for streaming via IPFS in gateway and textile hub hot storage, podcast archives details will be listed for each filecoin deal on the site for users to do their own retrievals 

## (11) Who is the intended user for your application/UI?

Podcast consumers

## (12) Do you have any users already or plans to acquire users soon?

Many users already visiting the website and listening to podcasts

## (13) What challenges do you anticipate with this project?

- Working out how to slice large podcasts across multiple filecoin deals and effectively map them back to individual podcasts
- working around the grpc apis of powergate (would love a REST api)
