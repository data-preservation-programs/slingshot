# astralDAO

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

Team: astralDAO
Slack handles: 
- @John IV 
- @Jared Childers 
- @João Martins 

## (1) Brief Project Description

astralDAO aims to bring advanced spatial data technologies into the Web3 fold by enabling an ecosystem of location-based dApps to support our transition to a just, sustainable and resilient world. 

We are starting by designing a way to load and register satellite imagery and other raster data assets onto the Filecoin network. Data controllers will be self sovereign, and control their data assets with a private key, used to create a decentralized identifier for the data asset.

## (2) Link to Project UI

TBA

## (3) What does your application/UI do?

Our application allows a user to create and register a GeoDID, representing a spatial asset such as a raster satellite image, along with all the associated file metadata. The GeoDID is intended to be the primitive that enables us to build sophisticated decentralized applications that rely on raster and vector spatial data - location-based dApps ranging from spatial finance applications to mobility to supply chain management and so on. The GeoDID is then pinned to the filecoin network along with any spatial data assets linked to it.

These assets, as well as ownership information, can then be visualized in an interactive map in our application.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

We intend to upload Landsat 8, and have [submitted a PR](https://github.com/filecoin-project/slingshot/pull/42) to add the dataset to the curated list. 

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

We aim to create an archive of the world's spatial data on Filecoin. This includes a broad range of datasets from diverse sources including remote sensors, IoT devices, autonomous vehicles, wearable devices, LIDAR scanners etc. 

We are designing a flexible yet standardized way to represent these datasets and required metadata for easy creation, curation and consumption by Web3 users, based on the [STAC specification](https://stacspec.org/). Initially, we will focus on a single, open, well-catalogued dataset: Landsat 8. However, we aim to bring much more spatial data onto Filecoin, so we have a robust archive of these important measurements of the state of our planet - useful now, and we anticipate that future analytics capabilities will be able to extract much information from these datasets. 

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

Our initial aim is to design the building block of the archival process, the GeoDID - a decentralized identifier giving the data owner control over the spatial data asset. Once we have a functional prototype of this DID Document, we will develop batch upload scripts - we're hoping to store around 100 GB of spatial data and metadata on Filecoin during the Slingshot competition. 

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

The data is structured as a GeoDID which builds upon the DID and the STAC specs.

The GeoDID will contain several service endpoints, which will be valid [STAC Items](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md), each containing a reference to a  spatial asset file. These files are typically GeoTIFF, (Geo)JSON, XML, shapefiles, and other files one might typically find in a STAC Specification. These files are usually referenced by some sort of href url in the STAC Spec, but instead of using a location based identifier, we aim to represent them as CIDs on FFS.  

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

We are going to create a GeoDID Document that will have its own unique DID URI, for example, did:geo:1234567abcdefg. In order to prepare a Landsat "scene", containing both raster geospatial data and accompanying metadata files, we are going to scrape the endpoints from a given STAC Item and/or Catalog and pin them to FFS using Powergate. From there we will be able to use the CIDs in the STAC Item JSON objects composing the services array in the GeoDID Document. We are working out details of the most efficient and functional way of storing the data assets on Filecoin - deal sizes will rarely, if ever, exceed 512MiB. 

The end user will be able to retrieve specific data as needed by querying a service endpoint in a particular GeoDID Document, which will be pulled from FFS. 

## (9)  What tech stack will you use to store the data?

*Either: Powergate, Hosted Powergate, Textile Hub/Buckets, lotus, or some other solution. Tell us what you're planning to use and how.*

As of right now we are going to be using Powergate to pin the "assets" in the STAC Item, so we can use them as service endpoints. We will also use Powergate to pin our GeoDID Documents. We are working on setting up a Hosted Powergate Node on the Lotus Testnet, but we want to test our application locally first. We are also looking into building Chainlink adapters for consumption of the GeoDIDs (which might include aggregated metrics about the spatial data asset), and into extending GeoDIDs to also identify spatial datasets representing vector geometries.  

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

We are using The Graph to maintain a subgraph of all the registered geoDIDs. Once a user wants to load and view a geoDID, a DID resolver is called, resolving to the CID for the GeoDID document, stored on filecoin. This retrieves the GeoDID document object, including relevant metadata and links to raw assets, into our UI. 

As of right now, the requesting party has to get verification from the GeoDID controller in order to view and/or query the GeoDID, the verification will happen on chain for now (ex. signed transaction). The GeoDIDs + their respective "assets" will be stored in cold storage on FFS. The requesting party will only need to retrieve the data once, in order to utilize the service endpoints within the GeoDID Document.  

In the future we hope to add transactional proofs for our GeoDIDs, so that the GeoDID controller can give access to certain service endpoints, and not reveal all the service endpoints within the whole GeoDID Document. We also want to utilize IPLD wo manage the GeoDID versions and the parent/child relationships between the STAC Collections, Catalogs, and Items. If a new version of the GeoDID Document is appended to the DAG, then the requesting party will have to seek verification from the DID Controller again to gain access to the new document. This is only the tip of the iceberg, as we still have many more ideas that we want to test.

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

The users of our decentralized app will be:
- Spatial asset providers, who register the spatial assets in our platform
- Spatial asset curators, who validate and assess the quality of spatial data assets
- Eventually, spatial asset traders, which can trade data tokens: fungible fractions (ERC 20) of spatial assets (ERC 721 NFT)
- Spatial asset consumers from centralized and decentralized apps developed to consume GeoDIDs using our open source libraries

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

We have developed two prototype decentralized applications that are designed to create and consume spatial data: [Hyperaware](https://hyperaware.io), a spatial governance protocol for connected devices (congestion zones running on smart contracts), and a sustainability-linked bond in Solidity that adjusts the interest payments required by the borrower based on air quality measurements derived from spatial data. 

We have been engaging with potential users across the spatial data industry, as well as in insurance, financial institutions, mobility providers and military users. We understand that driving adoption in these communities is a long process, but we also understand that the integrity and immutability guarantees afforded by blockchain and IPFS, as well as users' self sovereignty, make a compelling use case to many of our prospective early adopters. 

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

We anticipate challenges understanding the complexities of data licensing - this is a reason we chose Landsat 8, which is available on Amazon's Opendata portal. However, we will need to confirm that we are allowed to copy and store the data. We are also very keen to replicate the functionality of [cloud-optimized geotiffs (COGs)](https://www.cogeo.org/) on IPFS, but believe that the time required to unseal a deal will make this infeasible at this point - STAC(Spatio Temporal Asset Catalog) Spec and COGs(Cloud Optimized GeoTiffs) are designed specifically for cloud services like AWS S3. We're a bit worried we will be pushed to upload lots of data before our GeoDIDs have been tested properly due to the deadline. We're also interested to understand economic factors: will incumbent spatial data archivists be interested in storing their data on Filecoin due to cost savings? Also, we understand that some of the Landsat 8 data has been archived on the Filecoin Climate Data drive. We're wondering if we could speak with someone on the team to be sure to prioritize archiving data they haven't already onboarded, and to build on their learnings while we standardize our GeoDID spec. 
