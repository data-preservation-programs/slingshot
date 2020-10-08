# [Space Race 2: Slingshot](https://slingshot.filecoin.io)

![Slingshot hero image](./slingshot.png)

Welcome to the SR2 Slingshot repo! All participants must submit a project application to this repo according to the submission instructions. Once submitted, a panel of community reviewers will review your application to ensure that your project is eligible for the competition. If your application is accepted, reviewers will merge your PR. If not, they will leave comments on the PR asking you for more information.

## Submission Instructions

1. Please make a copy of the [`participants/template.md`](./participants/template.md) file.
2. Rename the file with your project's name.
3. Fill out all requested fields in the template.
4. Submit a PR to add your project's application to the `participants` folder in this repo.
5. Work with the community reviewers to approve your application!


## Leaderboard

Participants will be eligible for show up on the Leaderboard approximately 24 hours after the submitted PR is merged.  

For this information to appear correctly, please ensure that:
* Your client node matches up with your registration information.
* Your PR has been successfully merged.

If you need to update your registration information, please email the Slingshot team at slingshot@filecoin.org

## Help

The main competition rules and leaderboard can be found at [https://slingshot.filecoin.io](https://slingshot.filecoin.io).
µ
If you need help, please [join the Filecoin Slack](https://filecoin.io/slack) and join the following channels:
- **`#fil-testnet-announce`** -- For major announcements about the testnet and major software releases
- **`#slingshot-announcements`** -- For major announcements about the Slingshot program
- **`#slingshot`** -- For debugging help and community conversations throughout the course of the competition

If you need any additional assistance, feel free to email the Slingshot team at slingshot@filecoin.org

## Community Reviewers

 
| Photo | Name | Affiliation | Filecoin Slack | Github		   |
|-------|------|-------------|----------------|----------------|
|<img src="https://avatars1.githubusercontent.com/u/528969?s=460&v=4" width="72"> | Aaron Sutula   | Textile       | aaron               | asutula         |
|<img src="https://avatars1.githubusercontent.com/u/43047258?s=460&v=4" width="72"> | Brett Shear    | Fleek         | Brett Shear         | Blockchainbrett |
|<img src="https://avatars0.githubusercontent.com/u/1220613?s=460&v=4" width="72"> | Carson Farmer  | Textile       | Carson (textile.io) | carsonfarmer    |
|<img src="https://avatars1.githubusercontent.com/u/1017762?s=460&v=4" width="72"> | Eva Shon       | Protocol Labs | eshon               | eshon           |
|<img src="https://avatars0.githubusercontent.com/u/16929357?s=460&v=4" width="72"> |Greg Markou    | Chainsafe     | GregTheGreek        | GregTheGreek    |
|<img src="https://avatars2.githubusercontent.com/u/33686587?s=460&v=4" width="72"> | Martina  Long  | Slate Team    | Martina Long        | martinalong     |
|<img src="https://avatars1.githubusercontent.com/u/7811297?s=460&v=4" width="72"> | Matt Ober      | Pinata        | Matt Ober           | obo20           |
|<img src="https://avatars2.githubusercontent.com/u/7520045?s=460&v=4" width="72"> | Michael Godsey | Infura        | Michael Godsey      | mbgodsey        |
|<img src="https://avatars3.githubusercontent.com/u/225111?s=460&v=4" width="72"> | Mike Goelzer   | Protocol Labs | Mike - Protocol Labs | mgoelzer        |
|<img src="https://avatars0.githubusercontent.com/u/47671066?s=460&v=4" width="72"> | Neo            | IPFS Main     | Neo Ge              | NeoGe-IPFSMain  |
|<img src="https://avatars2.githubusercontent.com/u/10411723?s=460&v=4" width="72"> |Steven Li   | IPFS Force     | Steven        | steven004 |
|<img src="https://avatars1.githubusercontent.com/u/49757531?s=460&v=4" width="72"> |Harrison Hines    | Fleek     | Harrison Hines (Fleek) | hhterminal |  

## Miners

A Slingshot participant is alowed to make deals with any miner available on the Filecoin network and encouraged to interact with a variety of miners. 
(The rules specify a minimum of 3 miners to be eligible for rewards).  In order to facilitate miner discovery, this repository maintains a [list of
active miners](https://github.com/filecoin-project/slingshot/blob/master/miners.json) that are used by Textile's Hub, Powergate, and other solutions.  

This miner list in JSON format will continue to evolve and clients are encouraged to use this updated list.  Please note that this list is not intended as an endorsement and clients are free to use any other miner.

Any miner that meets the eligibilty criteria outlined below can be added to this [list](https://github.com/filecoin-project/slingshot/blob/master/miners.json) by opening a PR or commmenting on this [issue](https://github.com/filecoin-project/slingshot/issues/79).

The eligibility criteria include:
* The node is set to accept deal from any public client.
* The node is reachable (can respond to a query-ask network request)
* The node has power available.
* The node is using the correct lotus version (v0.80)


The list will remove any miners that don't meet the criteria above.
