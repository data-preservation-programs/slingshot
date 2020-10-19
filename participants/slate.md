## (0) Project Name and Team Slack Handles

![TEAM](https://user-images.githubusercontent.com/310223/94218232-d4fc2580-fe98-11ea-898c-727cb54133f9.png)

#### Slate

Slack Channels

- #fil-slate
- #fil-slate-code
- #fil-slate-design
- #fil-slate-mood
- #fil-slate-social

Core team Slack handles

- cake
- haris
- Tara Lin
- Martina Long
- jason leyser - Filecoin Team
- Will Felker

## (1) Brief Project Description

![Slate](https://user-images.githubusercontent.com/310223/92346209-e368d580-f080-11ea-8693-0fb64f8d3b97.jpg)

Slate is the first open source file storage application designed to encourage collaboration and research across a distributed network. It is a first step towards enabling a thriving network for data storage and transactions powered by IPFS, Filecoin and Textile that is open and usable for everyone. Our goal is to provide a meaningful story for every feature the protocol provides today and in the future. The Slate Project is the byproduct of a growing community of contributors from around the world.

Slate is tightly scoped for the present and more broadly thought out for the future. Our primary objective is to create a best-in-class experience for uploading, collecting, and sharing media. Additional filetypes will be supported, but our focus is to start with the pieces that apply to everyone and then dial into more specific formats.

## (2) Link to Project UI

- https://slate.host
- https://www.producthunt.com/posts/slate-f195dcdd-18e2-4dc2-8c70-45208ccbb862

## (3) What does your application/UI do?

- A new home for your images, video, audio, ePUBs, PDFs, and so much more.
- Upload files from anywhere.
- Organize and publish with public URLs.
- Make Filecoin archive deals to back up your data, or store anything arbitrarily with the network.
- Organize research and share presentations.
- Collaborate and connect.
- Subscribe to other slates, make friends.

## (4) If your project is using a curated dataset, which one are you using?

We currently have 800+ users and they may use a curated data set or something else!

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

The only thing we know about our data is that its important enough to our user to upload and share with other people.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

N users [TIMES] 4 GB buckets [TIMES] 5x Replication = ~ (Probably around a Terabyte to 100 Terabytes).

## (7) How are you structuring the data?

Flat textile buckets (no folders) for one click `bucket.archive` calls.

## (8) What pre-processing are you doing before ingesting the data?

None, plain and simple.

## (9) What tech stack will you use to store the data?

All of our code is open source and available here at https://github.com/filecoin-project/slate

## (10) How will you retrieve the data?

In this view:

![Filecoin](https://user-images.githubusercontent.com/310223/94217147-20610480-fe96-11ea-8722-0d09475c49b8.png)

- We will add a way to get the data CID from all successful deals.
- We will add a way to fill a new Textile Bucket. This new Textile bucket will have all of your files unpacked and ready to download however you like.

## (11) Who is the intended user for your application/UI?

- Anyone who does research of things in the world. Like in this screenshot

![Researcher](https://user-images.githubusercontent.com/310223/94217292-83529b80-fe96-11ea-8e8c-2150023f9c79.png)

- Slate is a product for everyone who uses the internet as their method of research.

## (12) Do you have any users already or plans to acquire users soon?

- We are growing at the rate of a 100 accounts a day since launch. But we are aiming for 1000 Meaningful MAUs by the end of Q1 of 2021. We will have some rigor around this.
- I can share the Q1 2021 plan per request.

## (13) What challenges do you anticipate with this project?

- Miners may go down and not accept deals.
- Users with slow internet connections may struggle with bandwidth.
- User accounts may break due to Textile buckets bug with fail upload and some users will be forced to create another account.
- Deal success rate may be low.
- Retrieval may be slow.
- Accounts may run out of Filecoin from making too many deals.
