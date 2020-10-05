# Smartcity Sensor-based network and data analysis system 

Before submitting a PR containing your team's project information:

- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

*Please tell us your project's name and the Filecoin Slack handles for your teammates.*

Project Name: Smartcity Sensor-based network and data analysis system 

Slack user: klsmlzm

## (1) Brief Project Description

*Add your project's description here.* 
Smartcity Sensor-based network and data analysis system  is a kind  of Urban Nervous System and Urban Brain.
It adopts the world's most advanced distributed linear sensor system, using the widely-laid communication optical fiber as the sensing element Continuously detect and collect the temperature, pressure, vibration, sound and other information around the optical fiber. these data acquired from optical fiber sensor netowrk will stored on IPFS.The artificial intelligence system is used to identify and classify signal types, which can be widely used in urban and tunnel construction monitoring, underground pipeline network, pipeline monitoring, track monitoring, cross-border monitoring, displacement monitoring, earthquake monitoring and other scenes, as the city’s nervous system, and The combination of artificial intelligence technology handles massive amounts of city data every day and provides leading technical services for smart cities.


## (2) Link to Project UI

*Please include a link to your project application or UI. It does not need to be super polished or completely functional. We will be reviewing this link periodically to verify that your project is eligible for final rewards.*

The link to project UI is: http://125.65.44.171:8099/

## (3) What does your application/UI do?

*Give us a brief description of what your application/UI does and how users are intended to interact with it.*

The data from optical fiber sensor networks will be stored on IPFS, A deep learning machine will trained to process these data.The artificial intelligence machine will analyze various signal types, perform pattern recognition on the signal, determine the event of a certain signal, classify the event, perform early warning or storage, or hand it over to manual for subsequent processing.
This time, We develop some webpages to play sound files,people could access our Web pages to listen to the sound from optic fibre sensors. Our team also designed a query interface running on IPFS node to send the sound files from IPFS to the remote web servers, So front end developers can design webpages as usual.

## (4) If your project is using a curated dataset, which one are you using?

*You can reference the [list of curated datasets in this repo](https://github.com/filecoin-project/slingshot/blob/master/datasets.md). If you'd like to use a dataset that is not on that list, please nominate your chosen dataset by updating the curated datasets table in this PR. If nominating a dataset, do you own or have exclusive rights to the data you plan to use?*

Not curated dataset.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

*What sorts of data will you collect? Do you own or have exclusive rights to the data you plan to use? Is the data license available online? Does the data contain any sensitive or illegal information?*

We collected these data from distributed optical fiber sensor networks,which is based on the widely-laid communication optical fiber as the sensing element,and  Continuously detect and collect the temperature, pressure, vibration, sound and other information around the optical fiber.
We have exclusive rights to the data we plan to use.the data license is availabe online. No license required, No sensitive and illegal information. 


## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

*Give us as realistic an estimate as you possibly can at this stage. We understand it's impossible to have perfect information before really starting your project!*

about 50TB to 100TB.

## (7) How are you structuring the data?

*Is this structured or unstructured data? What data formats, schemas, etc. does this dataset follow?*

Those sound or vibration data is Unstructured data, each file is tranferred and coded eventually in WAV data formats.

## (8) What pre-processing are you doing before ingesting the data?

*How will you prepare this data for ingestion into Filecoin? What size storage deals will you be making? If this is a tabular dataset or directory structure, how will you maintain indices into the data so you can retrieve specific data as needed for your application? This is currently one of the most important steps to being successful with data storage on Filecoin. Feel free to ask for help and/or look at docs for recommendations!*

first, We convert the sensors' analog singal to digital singal,then code in WAV file fomat,each file will be truncked into about 1 GB,in the beginning of each file,timestamp is added,and then store these files on IPFs.

usually,each data file size is about 1 GB or similar.so each file could be sealed into the IPFS sectors smoothly.

Not tabular dataset or directory structure.

## (9) What tech stack will you use to store the data?

*Either:* lotus

## (10) How will you retrieve the data?

*Share some more information about the data retrieval plans for your application? How often does the data need to be retrieved? What is the size of each individual read? Do you need to retrieve from Filecoin (colder storage) or from an intermediate caching layer, like IPFS? How will your application/UI retrieve the necessary data and expose it/interact with it in the UI?*

The smartcity sensor data are stored on IPFS once, need no change in the future(could be seen as colder data). the deep learning machine will access the orginal data frequently within a certain period of time in a period,after that time,the AI system would rarely access this orginal data again.reseachers or monitors would retrive orginal data when necessary, but not often.managers would browse itermediate data such as events produced by AI system,no more than tens of thousands retrive requsets a day. usually the size for each individual read is less than 1 GB. some retrieved data is directly from IPFS. 
Users usually retrieve data by web browsers when necessary, We develop an application interface running on lotus nodes which provide name service to map CID to filename.so the Web application developer could design their applications as before.

There is a complete data index in the web server. At the same time, the mapping between data and CID will be maintained.

## (11) Who is the intended user for your application/UI?

*Who do you anticipate will use your project/dataset?*

To be the “amazon cloud” of the Filecoin network.

The intended users are researchers、municipal managers、Public Utility managers、Traffic facility supervisors.etc

## (12) Do you have any users already or plans to acquire users soon?

*Yes/no. Also, please tell us a little bit about your future plans for user acquisition.*

Yes, We are promoting this system,and some customers are testing it,one order will be placed soon.if one city adopt the smart city Sensor-based network and data analysis system,it will flag event and help us to get the second customer.
recently,We are organizing a sale team to look for potential application scenarios.

## (13) What challenges do you anticipate with this project?

*We'd love to know what you're most worried about so we can help as much as possible. Let us know what you anticipate to be the biggest challenges with this project!*

We don't know when the IPFS will be reliable、robust and high performance.hopefully,IPFS would be as strong as the other similar infrastructers.
1.User experience：The data retrieval speed from IPFS should not be too slow comparing with other technologies.

2.Robustness：How many backups should be saved to ensure that data would not be lost and can be obtained immediately

3.Development：We need more developing guide documents and program libraries to improve programming efficiencies based on IPFS.

4.Economic benefits：How much money can filecoin save for us  comparing with traditional IDC.
