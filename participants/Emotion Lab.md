# Emotion Lab

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Registration Submission, Project Name, and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Project Name: Emotion Lab
Submission ID: 674290046
Slack: Sheik (Member ID:UUMLXPVEG)

## (1) Brief Project Description

This is an ongoing project that has been working for five years, starting with a small app on filecoin to generate a stylized image based on your current emotions.

Users use the app in four steps:

1. Take a 20-30 second video

2. Analyzing the pixel vibration of characters in video

3. Compare with the vibration model library to determine current emotions (excitement, tension, restlessness, etc.)

4. Generate an emotional stylized picture (excitement corresponds to red gouache style picture)

It's a start. We're actually going to store millions of hours of video data in filecoin, but only if it's safe and cheap. We hope that this technology can benefit human beings, because it can analyze the physical vibration from the video, and it is easy to conduct remote non-contact preliminary diagnosis of depression, Parkinson's disease and other physical and mental diseases.

Behind this is that we are building an Emotional Intelligence Computing Center, which needs high-performance video computing and image storage.

## (2) Link to Project UI

https://emotion-lab.ipfsfactory.com/

## (3) What does your application/UI do?

1. Login
2. Take or upload a 30-second video
3. Generate an emotional stylized picture
4. Share stylized picture

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

N/A

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

We will save video and image files in Filecoin. These data are generated during user use and does not contain any sensitive or illegal information

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

1TB

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

Unstructured data

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

We will directly deposit Video & Image data into the network through miner transactions

## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*

lotus

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

Users will view their own historical Emotion Reports, so they need to retrieve video and image data. The public stylized images shared will be retrieved as long as they browse in social network.

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

Psychology experts, artificial intelligence experts, students, researchers, other interested users

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

Yes, we will plan to give free testing to 1 million users. We have contacted many schools and labour unions for mental health examination of students and employees.

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

Emotional intelligence is the third generation of Artificial Intelligence technology, need to let more people know, looking for more application scenarios. 
