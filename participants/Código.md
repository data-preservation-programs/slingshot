# Código

## (0) Project Name and Team Slack Handles

- Project Name: Código
- Filecoin Slack handles: @Mahbub, @Alex Shand, @Michael Michaelides, @Stephen Waddell

## (1) Brief Project Description

Código is a firmware distribution service built on top of the Ethereum blockchain and Filecoin. It natively allows developers to upload firmware for different devices and provides rudimentary search capabilities for users. Users can download available firmware or put a bounty on a missing feature / bugfix. Also, it allows users to manage their IoT devices directly through Código, to see their active status and location and finally to deploy firmware over-the-air

## (2) Link to Project UI

Link to our deployed Dapp: https://codigo-hub.com/
Link to github repo: https://github.com/ZeroSum24/Codigo-Hub

## (3) What does your application/UI do?

A user can search / download / deploy firmware and also visualize their devices' location along with their active status. A developer can upload firmware, see their earnings, manage their contributions and search for available bounties. Each user can check their user profile and stats

## (4) If your project is using a curated dataset, which one are you using?

We're not using a dataset.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We collect source code and binaries of IoT device firmware. We only upload what we've personally written or open source contributions. We expect no sensitive or illegal information to be contained in the data we collect.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We're hoping to introduce video tutorials soon so in that case it might be up to ~1TB. If this doesn't happen, then it will be along the lines of ~10Gb.

## (7) How are you structuring the data?

The data is unstructured

## (8) What pre-processing are you doing before ingesting the data?

We're tracking Filecoin data through an Ethereum smart contract repository that keeps a record of uploaded firmware contributions. Eventually we'll attempt compression first but currently we don't process the data. 

## (9)  What tech stack will you use to store the data?

We're using a hosted powergate provided by Textile

## (10) How will you retrieve the data?

We expect that firmware contributions won't take more than a few MBs so they will be fetched on demand from the users and high popularity ones cached.
When we have video tutorials available we might consider using an intermediate caching layer such as IPFS to improve the performance
The retrieved source code and tutorials will be displayed directly on the UI, while binaries will be available for download as a file.

## (11) Who is the intended user for your application/UI?

Each IoT developer or user, no matter how small or large their deployment is. From a hobbyist who is looking for some code for their Arduino to open their garage door remotely to anyone with a deployed IoT network who is looking for a centralized way to monitor and manage their devices.

## (12) Do you have any users already or plans to acquire users soon?

Not yet, we're planning to deploy and look for a user base as soon as we have some content and a stable platform, hopefully soon after Slingshot

## (13) What challenges do you anticipate with this project?

We're looking into how we can verify developer's contributions. Ideally we'd like to tell users that the source code compiles correctly for the targetted platform and eventually add more heuristics.
