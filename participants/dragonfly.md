# Dragonfly

## (0) Project Name and Team Slack Handles

- Project Name: Dragonfly
- Slack Handle: hexcola

Our team name is Diancun Tech, which is one of miners of Spacerace.

## (1) Brief Project Description

Dragonfly is a self-hosted private distributed Docker repository based on Filecoin and IPFS network. The core concept is:

- **Simple**: user-friendly interface;
- **Efficient**: low latency and low cost;
- **Specification**: fully comply with the Docker specification;

## (2) Link to Project UI

https://dragonfly.diancun.net

## (3) What does your application/UI do?

Dragonfly is a self-host private distributed Docker repository. It includes three parts:

- Back-end service: save Docker information and CIDs.
- CLI: push and pull Docker images to and from the Filecoin network.
- WebUI: show saved Docker images' information.

## (4) If your project is using a curated dataset, which one are you using?

Docker images from public Docker repo.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

The user also can upload their own Docker images.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

At least 10TB data, maybe more than 50TB if everything goes well.

## (7) How are you structuring the data?

`.tar` files.

## (8) What pre-processing are you doing before ingesting the data?

Every Docker image file has a CID. When the user pulls a docker image, it pulls `.tar` file from the IPFS network using the CID.

## (9) What tech stack will you use to store the data?

Mostly using Powergate, maybe using MySQL and Elasticsearch.

## (10) How will you retrieve the data?

Use Powergate to retrieve Docker images.

## (11) Who is the intended user for your application/UI?

Open-source developers, enterprises, everyone who has needs to host their own Docker repository.

## (12) Do you have any users already or plans to acquire users soon?

The first user will be ourselves. In the future, we will open-source it to who is interested in building their own private Docker repository.

## (13) What challenges do you anticipate with this project?

1. the retrieval big image from the cold layer.
2. the stability of service.
3. the economic model.
