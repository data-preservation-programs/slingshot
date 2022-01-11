## Slingshot Recovery
The Slingshot Recovery effort includes the Restore and Repair programs. You can learn more about each of these here:
- [Slingshot Restore](https://docs.google.com/document/d/1sGLkw321Fl09jvAr80kFY2FcQWa1H-dYpowXFRWo-OM/edit?usp=sharing)
- [Slingshot Repair](https://docs.google.com/document/d/1ZH4URWaNYtlddZwZMyqcSnc3GRsR3zCqnW0RfkkNlr8/edit?usp=sharing)

A dashboard displaying progress for both Slingshot Restore and Slingshot Repair is available at [slingshot.filecoin.io/recovery](https://slingshot.filecoin.io/recovery).

## Restore
If you're a client participating in the Slingshot Restore Program, this directory has the metadata used to track your deals on chain. Please feel free to create pull requests for the following scenarios.

### Tracking CIDs being restored
If you need to update the list of payload CIDs being tracked for your dataset onboarding, PR the list of (each of) your dataset's CIDs in this repository, at the path `recovery/cids/restore/.` 

- CID lists must be `.csv`
- The file name should match your assigned dataset name, in kebab-case (also referred to as the dataset-slug)
  - check your dataset-slug in the [Client Info spreadsheet](https://docs.google.com/spreadsheets/d/1LWVndxGyegTdz5cPU86UZ5Y9vqN2n-VlK1kC0OeJHC8/edit?usp=sharing) or  [the recovery dataset list](https://github.com/filecoin-project/slingshot/blob/master/recovery/files/dataset-list.json)
- All CIDs must be **base32 CID v1's** only (i.e., `ba...`)
- Submit payload CIDs only (these will most likely begin with `bafyk...` or `bafyb...`)
  - Not piece CIDs
  - Not deal proposal CIDs (CIDs beginning with `baga...` or `bafyr...` are incorrect)
  - If your payload CIDs are in `Qm...` format, they must be converted to `base 32` CIDv1's; if you've installed [cid-tool](https://www.npmjs.com/package/cid-tool), you can run `cid base32 Qm...` to convert
- If you need to add more CIDs, simply create another PR and append to your existing file
- Your file's first row should say `payload_cid`
- Submit only one column (just the `payload_cid` and no additional content)

#### Example
File name: chosen-dataset.csv

File path: recovery/cids/restore/chosen-dataset.csv

File content: 
```
payload_cid
bafykbacelmss5jrbnze37rhyiuhat
bafykbacelmss7s2zmqekui7ysukid
bafykbacelmssa6xkdvebnzu2xmaol
bafykbacelmssdtuhui4ea32ohda6z
bafykbacelmssfokmkaugllwx255ss
bafykbacelmsskocznkpqc4mj23got
bafykbacelmssvoooxgbpbt6ps4ump
```


### Updating address for client deal making
If you need to update the client address being used to track your deals on chain, update the [Client Info spreadsheet](https://docs.google.com/spreadsheets/d/1LWVndxGyegTdz5cPU86UZ5Y9vqN2n-VlK1kC0OeJHC8/edit?usp=sharing) and PR `recovery/files/client-list.json`. The Slingshot admin team will periodically be updating this file but if you'd like to see updates on the dashboard sooner, feel free to submit a PR any time.

- each JSON object in `client-list.json` is unique
- client addresses are tracked per dataset, so if you use the same address for different datasets _(note: not recommended, but possible)_ you must add a new object for each dataset with the same address

#### Example

Adding a new address `f1th1s1smyn3waddr3ssfr0mwh1chd3alsaremad3` for client "Restorer" who is assigned to Landsat 7 and 8, and who's Slack handle is "OnboardingLegend". 

PR `client-list.json` and add the following to the list:


```json
  {
    "client_address": "f1th1s1smyn3waddr3ssfr0mwh1chd3alsaremad3",
    "dataset_slug": "landsat-7",
    "client_name": "Restorer",
    "client_slack_handle": "OnboardingLegend"
  },
  {
    "client_address": "f1th1s1smyn3waddr3ssfr0mwh1chd3alsaremad3",
    "dataset_slug": "landsat-9",
    "client_name": "Restorer",
    "client_slack_handle": "OnboardingLegend"
  },

```

## Repair

If you are interested in participating in the Repair effort, [sign up to be a Storage Provider on Estuary](https://docs.estuary.tech/get-invite-key) and participate in the conversation in #slingshot + #slingshot-announcements in Filecoin Slack.
