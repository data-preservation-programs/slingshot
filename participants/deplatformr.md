# Deplatformr

## (0) Registration Submission, Project Name, and Team Slack Handles

SubmissionID: 676315492  
Project name: Deplatformr  
Slack handle: peterVG   

## (1) Brief Project Description

For Slingshot, we are pursuing a sub-project to repurpose Google Open Images to explore relationships between machine learning annotations and geotag information on a large photograph dataset.

The broader goal of the Deplatformr project is to liberate user data from social media and cloud platforms like Facebook, Instagram, Google Photos, iCloud, etc. and store it on decentralized Filecoin (see https://deplatformr.substack.com). We will give users owernship of their own machine learning models for face recognition and image classification on their personal collecctions. Downloading and re-structuring the Google Open Image dataset to use for model training on decentralized infrastructure is an important step in in this process.

## (2) Link to Project UI

https://open-images.deplatformr.com/map

## (3) What does your application/UI do?

The application will let users browse geotagged Open Image photographs via a map interface.

This is an experimental R&D project intended to glean new insights into the combination of extracted photograph metadata with machine learning annotations. The application will provide a map interface with pin points for Open Image photographs that have embedded latitude and longitude properties (about 3% of the total dataset of 9 million images). The photographs will include their annotation labels, segmentations and bounded boxes. The hypothesis is that new information will emerge about a give geolocation as a result of this overlay.

## (4) If your project is using a curated dataset, which one are you using?

Yes, Google Open Images.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

n/a

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

We'd like to upload the full 18TB+ dataset. However, given our late start and the time taken to build a robust download, extraction and packaging pipeline, we now hope to upload 1TB worth of the dataset before the competition deadline.

## (7) How are you structuring the data?

Currently the Open Images "dataset" consists of photographs hosted on Flickr servers and a mixture of CSV files describing the dataset and its annotations which are hosted on Google Cloud. Our Deplatformr Open Images project is concerned about the long-term digital preservation of this important dataset, the largest ever assembled for image recognition machine learning. Over 5% of the photographs on Flickr are no longer available for download (400 and 410 responses). A Google representative from the project has told us that they expected this number to be even higher and that it will grow over the years as they have no control over users taking down their photographs, despite their Creative Commons licensing. Furthermore, the photographs are not inextricably linked to their content and context metadata, an important consideration for maintaining long-term accesibility. Therefore, we have bundled each photograph with linked data using a schema.org based JSON-LD format. We've also re-united the segmentation PNG files with the JPG originals. All the image files and JSON-LD medata files are bundled into Library of Congress standard Bagit containers for packaging and archival storage of digital information. We batch each subset of the Open Images dataset into 1 GiB tarballs for upload to Filecoin.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*
