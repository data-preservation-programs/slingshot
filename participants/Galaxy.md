## (0) Project Name, and Team Slack Handles

- Galaxy
- kevin780126

## (1) Brief Project Description

The original intention of our project is to pay tribute to the spirit of open source. After some officially provided data sets are processed and filtered, they are displayed to users in a previewable form. We also have a search function to accurately locate data resources through the file CID and display The data set where the current data is located.  
The user believes that the current file content meets his needs, then he can choose whether to encourage and support us in the form of rewards.
In addition, we also plan to cache part of the hot data directly on our own server to provide refreshed retrieval services.


## (2) Link to Project UI

[https://github.com/kevinyankai/Galaxy](https://github.com/kevinyankai/Galaxy)

## (3) What does your application/UI do?
- Upload the public files to Filecoin
- Store the index of the data to local database
- Display Filecoin transaction information and IPFS download links for data, making it easy for users to access public data.

## (4) If your project is using a curated dataset, which one are you using?

- [Open Images Dataset](https://storage.googleapis.com/openimages/web/index.html)
- [Free Music Archive](https://github.com/mdeff/fma)
- [Condensed Movies](https://www.robots.ox.ac.uk/~vgg/research/condensed-movies/)
- [Unsplash](https://unsplash.com/)
- [ImageNet](http://www.image-net.org/)
- [Noisy speech database](https://datashare.is.ed.ac.uk/handle/10283/2791)

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

N/A

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?
~20TiB

## (7) How are you structuring the data?

Unstructured data. These data can be text files, pictures, audio and video, etc.

## (8) What pre-processing are you doing before ingesting the data?

We will upload the data to IPFS first, and then import it into filecoin through IPFS. We use mysql to maintain the catalog index.

## (9)  What tech stack will you use to store the data?
- Lotus
- IPFS
- MySQL

## (10) How will you retrieve the data?
The data is retrieved from the IPFS first, and if not, it can be retrieved from the Lotus Client. We will set up a Web server to help users retrieve data that has disappeared in IPFS.

## (11) Who is the intended user for your application/UI?

Users with public data searching needs will use our application.

## (12) Do you have any users already or plans to acquire users soon?

We have no users not yet. We plan to use filecoin/ipfs as cloud disk, first for cooperative enterprises and their employees.

## (13) What challenges do you anticipate with this project?

For ourselves, a challenge will be rebuilding the entire 18TB dataset from the packages stored on Filecoin. We are not certain yet about the cost and performance requirements to accomplish this.
