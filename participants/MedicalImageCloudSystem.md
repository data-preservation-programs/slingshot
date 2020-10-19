# Medical Image Cloud System

Before submitting a PR containing your team's project information:

- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Project Name: Medical Image Cloud System

Slack user: anyi

## (1) Brief Project Description

*Add your project's description here.* 

The Medical image cloud system (MICS)is to store medical images and support image data retrieval for Web service.these images stored on IPFS are from many local alliance hospitals, and serval data copies are saved in multiple IPFS nodes to ensure data security in case of data lost. Access is restricted by permission contronl. only authorized doctors have rights to search and share image data,they can view the image data and other information by web browsers. 

## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*

http://125.65.44.171:8888/

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*

The original image data sources are stored in IDC for months, and now move those data to IPFS to save cost and improve security. every image data file uploaded to IPFS needs to map its traditional file name to CID,so that Web pages need no change to access image files stored in IPFS. Our team had to design a query interface running on IPFS node to send the image files from IPFS to the remote browser, So users can view the medical images by the Web browser as usual.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

Not curated dataset.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

We collected these Medical image data and We have Management rights and use rights. No license required, No sensitive and illegal information.  

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

about 10TB~50TB.

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

Those medical images are Unstructured data, each file is coded in DCM data formats.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

first, We need to download those data from the remote end to the local server.then encrypt data as needed, and then store the encrypted data to IPFs.

usually,each image file size is about 512kB or a little more.so each file could be sealed into the IPFS sectors smoothly.

Not tabular dataset or directory structure.

## (9) What tech stack will you use to store the data?

*Either:* lotus

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

The medical images are stored on IPFS once, no need to change often(could be seen as colder data). but image retrievals happened very often. each work day, more than hundreds of thousands retrive requsets will sent by the alliance hosiptal doctors and reachers. usually the size fo each individual read is about 512KB.this retrieved data is directly from IPFS. 
Users usually retrieve medical image data by web browsers when necessary, We develop an application interface running on lotus nodes which provide name service to map CID to filename.so the Web application developer could design their applications as before.

There is a complete data index in the web server. At the same time, the mapping between data and CID will be maintained. Accessing the corresponding data will get the corresponding CID data

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

To be the “amazon cloud” of the Filecoin network.

Hosptitals、doctors and Medical researchers are potential users.

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

Yes, we have users already, Our company has established a cooperative relationship with some local hospitals, but our data was previously stored on a cloud computing service Center. Due to the high cost, we want to try  filecoin/IPFS to match our requirements.

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

1.User experience：The data retrieval speed from IPFS should not be too slow，Whether it is a single user or multiple users at the same time.

2.Robustness：How many backups should be saved to ensure that data would not be lost and can be obtained at any time

3.Development：We need more developing guide documents and program libraries to improve programming efficiencies based on IPFS.

4.Economic benefits：How much money can filecoin save for us  comparing with traditional IDC.