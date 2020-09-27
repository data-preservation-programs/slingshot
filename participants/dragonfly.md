# Dragonfly

## (0) Project Name and Team Slack Handles

- Project Name: Dragonfly
- Slack Handle: hexcola

Our team name is Diancun Tech, which is one of miners of Spacerace.

## (1) Brief Project Description

Dragonfly is a distributed docker registry based on Filecoin and IPFS network. The core concept is:

- **Simple**: user friendly interface;
- **Effecient**: low latency and low cost;
- **Specification**: fully comply with the Docker specification;

## (2) Link to Project UI

https://www.figma.com/file/oF8lnO0ClJmNzFb2HgfNeZ/docker?node-id=0%3A1

## (3) What does your application/UI do?

It can be used as a docker registry mirror. User can search and using the registry to fetch public images through cli. And we will offer private docker registry later on.

## (4) If your project is using a curated dataset, which one are you using?

Public docker images.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

User also can upload their own docker image.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

At least 10TB data, maybe more than 50TB if everything goes well.

## (7) How are you structuring the data?

Image layer.

## (8) What pre-processing are you doing before ingesting the data?

Every image layer has a CID. When user pull a docker image, it actually pull image layers using CIDs from IPFS network.

## (9) What tech stack will you use to store the data?

Mostly using powergate, maybe using MySQL and Elasticsearch.

## (10) How will you retrieve the data?

Use powergate to retrieve Docker images.

## (11) Who is the intended user for your application/UI?

Open source developers, enterprises, everyone who has trouble access DockerHub.

## (12) Do you have any users already or plans to acquire users soon?

The first user will be ourself, we will promote it to who is interested to build a private docker registry. Also, everyone can use the public registry.

## (13) What challenges do you anticipate with this project?

1. the main challenges is to sync the docker image from docker hub.
2. the stability of service with high throughput and high concerrency.
3. the economic model.
