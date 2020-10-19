# <Project Name>

Before submitting a PR containing your team's project information:
- Make sure you rename this file to contain your project's name
- Respond to add your response in each section below

## (0) Project Name and Team Slack Handles

Project Name:Koda Inc - Robotic Dog Data Collecting Project
Team Slack Handles: koda-crew.slack.com
Member ID: U01BN9054AG

## (1) Brief Project Description

We plan to create a backup on the IPFS network to restore the environment information from the robotic dog. The robotic dog will send the environment information to the IPFS network regularly.

## (2) Link to Project UI

The backup function is only for KODA users, so in order for you to review the project UI, we have created an account for you. You will need to login in on www.koda9.com to access it: 
Username: koda_test@koda9.com
Password: koda123456


## (3) What does your application/UI do?

This is a common data restore application. We collect data by the robotic dog and use the Internet to upload the data onto the IPFS network. This application includes login, examine, and download functions. 

## (4) If your project is using a curated dataset, which one are you using?

We don't use curated dataset，All the video data that needs to be uploaded is collected through the robot dog camera.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We will not collect any data without the consent from the users. The users will be able to store the video data according to the time period and store it in the IPFS network. The users own the rights to the data themselves. 
By signing user agreement, our users are informed to not upload videos containing any sensitive, unethical and illegal information. If the data is in violation of local jurisdiction, we may take compulsory deletion.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

At least 1TiB-5TiB

## (7) How are you structuring the data?

Unstructured data，Data format only includes video 

## (8) What pre-processing are you doing before ingesting the data?

•	The data uploaded by the user will be transferred to the server through the API interface and then to the IPFS node. The data will be divided into multiple smaller pieces when the file size exceeds a certain specification. 
•	Certain database will has been used to store the data. The data table will includes File name, File ID, File size, File type, and File CID list (when a file is divided into multiple pieces)


## (9)  What tech stack will you use to store the data?

Lotus

## (10) How will you retrieve the data?

Users can retrieve data directly from IPFS or Filecoin miners                    

## (11) Who is the intended user for your application/UI?

The users of the KODA robot dogs.

## (12) Do you have any users already or plans to acquire users soon?

Yes, we will start the pre-order of our first-generation robot dog KODA in October 2020. We already developed many initial users in the bitcoin mining communities who share our vision of the future of decentralization and artificial intelligence. 

## (13) What challenges do you anticipate with this project?

The data collected by the camera is huge, and the access speed of the IPFS network is the biggest challenge we are facing right now.
