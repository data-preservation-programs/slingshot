# Geoguesser

## (0) Registration Submission, Project Name, and Team Slack Handles

Submission ID: 680486004

Geoguesser

eli.ae
jose.ae

## (1) Brief Project Description

Guess where the country of random landsat8 images are! Guess correctly and win a
prize.

## (2) Link to Project UI

https://geoguesser.vercel.app/

## (3) What does your application/UI do?

On landing on the home page, you're given a random image from the landsat8
dataset. A user then tries to guess the where on the world that image is
showing! It's a fun and educational game where you can also see random parts of
the planet.

## (4) If your project is using a curated dataset, which one are you using?

https://registry.opendata.aws/landsat-8/

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

N/A

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

1TB

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

The unique properties of Filecoin force us to create zips of data as single
images are too small to store on the network. To this end, we use a read through
cache locally that hits ipfs and eventually filecoin through powergate.

## (8) What pre-processing are you doing before ingesting the data?

We bundle together images and save an index locally so we know which bundle to
fetch for.

## (9)  What tech stack will you use to store the data?

Hosted Powergate

## (10) How will you retrieve the data?

The data is retrieved and cached. Each read will be around 1gb. Our hosted
powergate instance allows us easily to have an intermediary layer as well.

## (11) Who is the intended user for your application/UI?

Users of landsat as our biggest goal would be to store the full dataset in FIL

## (12) Do you have any users already or plans to acquire users soon?

No.

## (13) What challenges do you anticipate with this project?

We were looking to upload a subset of Landsat8 data to power an app that's going
to retrieve the latest satellite images for a particular place the user
inserted. However, that's a huge dataset, so the POC of that became creating a
game to return a random image and having you guess where it's from.
If this is actually more valuable than our first idea down the line there's
other cool things we could do, such as e.g. send them some FIL if they get it
right. If not, we just need to find a way to have them cover the costs of
retrieving images.
