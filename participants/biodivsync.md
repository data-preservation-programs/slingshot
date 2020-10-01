# Submission form

## SR2 Slingshot

### Getting started

Before submitting a PR containing your team's project information:

* [x] Make sure you rename this file to contain your project's name
* [x] Respond to add your response in each section below

### Steps

0. Registration Submission, Project Name, and Team Slack Handles

* Submission ID: 670130564
* Project Name:	BioDivSync
* Slack Handles: Anthony Goddard (U01B8JQLX5L), philcryer (U01BNTKS0NQ)

1. Brief Project Description

Realizing the scalable, sustainable storage solution for Biodiversity Data on the Filecoin Network. 
We (Phil & Anthony) have a long history of developing and administering large, scalable storage for biodiversity projects, including the Encyclopedia of Life (EOL) and Biodiversity Heritage Library (BHL). The BHL is a multi-national multi-institutional project to digitize the world's biodiversity literature, and one of the pressing needs for the project has always been to geographically distribute the data. We discussed some background on the challenges surrounding this and other biodiversity storage initiatives in the following paper: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3287448/ . Our project here is aimed at using the Filecoin network as a means to achieve scalable and reliable storage of, as well as interation with, this historically significant BHL dataset, and others to follow

2. Link to Project UI

https://slingshot.lowf.at/biodivsync/

3. What does your application/UI do?

Storage of an important dataset, and access to view the content with an interactive book reader: https://github.com/internetarchive/bookreader. We are also hoping to experiment with text extraction tooling on the dataset.

4. If your project is using a curated dataset, which one are you using?

We are using public domain biodiverity literature, that has been scanned by [Internet Archive]**(https://archive.org/), as part of the Biodiversity Heritage Library project.

* [Internet Achive - Biodiversity Heritage Library project page](https://archive.org/search.php?query=biodiversity%20heritage%20library) - the raw files and data
* [Biodiversity Heritage Library](https://www.biodiversitylibrary.org/) - the project's homepage where they display files in a more readable manner
* [Biodiversity Heritage Library's Wikipedia page](https://en.wikipedia.org/wiki/Biodiversity_Heritage_Library)

5. If your project is not using a curated dataset, please tell us a little bit more about your data by answering the questions below.

N/A

6. How much data are you planning to store to the Filecoin network during the Slingshot competition?

We hosted 67 TiB of this data on a GlusterFS filesystem in 2012, but that filesystem is no longer available, so we're unsure of the exact current size, though we estimate it to be in the range of 120-150TiB.

The BHL site lists the number of items in the collection:

* 159,384 titles
* 260,377 volumes
* 58,583,886 pages

7. How are you structuring the data?

* thumbnail (jpg)
* metadata(.xml, .sqlite, .mrc)
* high resolution image(jpeg2000, pdf)

8. What pre-processing are you doing before ingesting the data?

The data has been pre-processed to extract metadata as well as OCR (Optical Character Recognition) processing. We anticipate that further derivitive data may be generated in the future if we further process the source dataset (for example, with improved OCR).

9. What tech stack will you use to store the data?

Powergate

10. How will you retrieve the data?

APIs & interactive bookreader software.

* [Internet Archive BookReader](https://archive.org/details/BookReader)
* [On github](https://github.com/internetarchive/bookreader)

Note, initial retrieval of the data from [Archive.org](archive.org) is accomplished by first by getting a list of titles by using the [Internet Archive tool](https://pypi.org/project/internetarchive/) to get search results, then pulling all the files from that title by running [Aria2](https://aria2.github.io/) against the torrent files for each title.

11. Who is the intended user for your application/UI?

The biodiversity informatics community, stakeholders of the Bioldiversity Heritage Library and text mining/machine learning researchers

12. Do you have any users already or plans to acquire users soon?

There are already users of the dataset via its present portal, we aim to add value to those existing users by providing redundant storage and an additional portal for interacting with the data.

13. What challenges do you anticipate with this project?

* data transfer - having enough time/bandwidth to tranfer all the data from Internet Archive, and passing it on to the Filecoin Network
* testing limitations of the storage network and what workarounds might be required

