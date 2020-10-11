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

After we download a photograph from the Flickr servers, we verify its fixity against its MD5 checksum, then we extract EXIF metadata from the JPG files, giving us additional context not provided by the Open Image CSV data. Then we query the CSVs for all the disparate training, validation and testing annotation data for the image labels, bounded boxes and segmentations. We then combine all this metadata in a linked data [JSON-LD](https://json-ld.org/) format based on the [schema.org/ImageObject](https://schema.org/ImageObject) profile. This is bunlded with the segmentation PNG files into a [Bagit](https://schema.org/ImageObject) container. We cap each batch at 1 GiB and create a single tarball from it that is uploaded to Filecoin.

## (9)  What tech stack will you use to store the data?

We are using our own hosted Powergate server that we access via the [Pygate](https://github.com/pygate/pygate-gRPC) gRPC Python client that our team developed as part of the [HackFS](https://hackfs.com/) event. Pygate was one of the 10 finalists. We've built a basic Python micro-services [pipeline](https://github.com/deplatformr/open-images) to automate the download, packaging and Filecoin upload. 

## (10) How will you retrieve the data?

The photographs used for the map application will be cached on IPFS since they are a small subset of the total dataset. An index mapping photographs to their tarball packages and the Filecion CIDs for those pacakges will be maintained in replicated SQLite files that will also be cached on IPFS. Rebuilding the entire Open Images dataaset will require retrieval of these packages from Filecoin. 

## (11) Who is the intended user for your application/UI?

The intended users of the Slingshot application will be machine learning researchers who might be looking for a new approach to working with the Open Images dataset, namely by cross-referencing geodata with machine learning annotations. 

We are also applying industry standard archival practices for the long-term preservation of Open Images dataset so that this invaluable dataset remains accessible and usable to future machine learning researchers. Additionally, the Deplatformr project will be a consumer of this dataset as we embark on a process to train and secure personal machine learning models. 

## (12) Do you have any users already or plans to acquire users soon?

We have undergone a first round of [user testing](https://deplatformr.substack.com/p/help-us-test-our-prototype) of the Deplatformr prototype as part of the [Gitcoin Apollo](https://gitcoin.co/hackathon/filecoin/) program. Our project is only a month old so we expect to remain in early stage R&D for the immediate future.

## (13) What challenges do you anticipate with this project?

We entered the Slingshot competition late so the time it takes to seal storage deals is a concern as is high network gas fees and unpredictable storage prices. For ourselves, a challenge will be rebuilding the entire 18TB dataset from the packages stored on Filecoin. We are not certain yet about the cost and performance requirements to accomplish this. 
