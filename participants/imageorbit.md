# <ImageOrbit>

## (0) Registration Submission, Project Name, and Team Slack Handles

Submission id:675772268

project name:ImageOrbit

Filecoin Slack handle:mariswang

## (1) Brief Project Description

Image orbit builds the 'ImageNet' on filecoin.
It's a large scale public images data set for AI research.

The image storege function and retrive function of ImageNet are all realized based on FIL/IPFS tech stack.
Moreover, based on the token feature of Filecoin, Motivate Mechanism will also be designed for image human annotated/mark work and image data sharing.

Comparation of ImageOrbit and ImageNet
|        | ImageNet  | imageOrbit|
|  ----  | ----  |----  |
|  scale  | 14M images, almost no increase |20M images in first period, no limited|
|  access control  | need .edu e-mail  | full open |
|  maintain cost  | high, based on aws,etc | low, based on FIL/IPFS |
|  service performance  | serverals days to download | more nodes, more speed |
|  commerical model  | no,editor get few reward, unsustainable | easily design economic system based on FIL |
|  development plan  | no |  biggest public image dataset on earth |

## (2) Link to Project UI

imageorbit.space


## (3) What does your application/UI do?

First, The researchers and students in AI area could get the image big data set from ImageOrbit.
Secondly, user could annotate the image and get reword from this system.
In the future, User could also submit and share their own image data set.

## (4) If your project is using a curated dataset, which one are you using?

We use the curated datasets (open image dateset of google).
The original dataset of ImageNet is also used. It's still no in curated datasets list.
They are all public data set. We follow the same rule.

## (5) If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

We download the public images as ImageNet/(Google open image) do.
There is no any sensitive or illegal information.

## (6) How much data are you planning to store to the Filecoin network during the Slingshot competition?

10T-30T
download the images url of imagenet and google open image dataset: 20T
extend this dataset: 10T

## (7) How are you structuring the data?

Image is unstructured data. But we use the hierarchical structure of WordNet to orgnize the directory of images.

## (8) What pre-processing are you doing before ingesting the data?

Just like ImageNet, we use the hierarchical structure of WordNet to orgnize the images. For example, a concent 'plant, flora, plant life' is a top directory, a sub concent 'planktonic algae' is its sub directory. We use the WordNet ID of concepts like 'n15075141' to name the directory. 

For example, to retrive a image of 'phytoplankton', we could know its wordnet Id is 'n01383896'. It's a second level directory. Its parent directory is 'n00017222'. So we could get its image by  ipfs_gate+top_dir+'/n01383896/n00017222/*'.

## (9)  What tech stack will you use to store the data?

We use Powergate as our tech slack. Hot data is stored in IPFS and long cold reversed data is stored in Filecoin.

## (10) How will you retrieve the data?

In our system, Hot data is stored in IPFS and long cold reversed data is stored in Filecoin. We mainly use files in IPFS. To speed the retrieve process, we also set a local caching layer to index the image filename/content by mysql, milvus, etc.


## (11) Who is the intended user for your application/UI?

Researchers and students in AI and big data research area.


## (12) Do you have any users already or plans to acquire users soon?

yes.
1 Some researcher has download the images from our site. 
2 For cost reason, the imageNet hasn't provide full images download services for about 2 years. But ImageOrbit could provide the unlimited download services for researchers benefitting from the low lost and public feature of Filecoin/IPFS.
3 We will also design the plugin for popular AI system like tenserflow/keras etc to promote the application of ImageOrbit.

## (13) What challenges do you anticipate with this project?

Most minners don't know the requiremnets of big data/AI area. They have no idea about imagenet, kaggle, arxiv,etc. So the communication and collebration between blockchain and AI area is neccessary.
