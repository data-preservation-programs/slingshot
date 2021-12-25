## Slingshot Recovery
The Slingshot Recovery effort includes the Restore and Repair programs. You can learn more about each of these here:
- [Slingshot Restore](https://docs.google.com/document/d/1sGLkw321Fl09jvAr80kFY2FcQWa1H-dYpowXFRWo-OM/edit?usp=sharing)
- [Slingshot Repair](https://docs.google.com/document/d/1ZH4URWaNYtlddZwZMyqcSnc3GRsR3zCqnW0RfkkNlr8/edit?usp=sharing)

## Restore

### Tracking CIDs being restored

If you're participating in the Slingshot Restore Program, please create pull requests containing your CIDs in this repository, at the path `recovery/cids/restore/.` 

- CID lists must be `.csv`
- The file name should match your assigned dataset name, in kebab-case
- All CIDs must be **base32 CID v1's** only (i.e., `ba...`)
- Submit payload CIDs only (not piece CIDs)
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

## Repair

If you are interested in participating in the Repair effort, [sign up to be a Storage Provider on Estuary](https://docs.estuary.tech/get-invite-key) and participate in the conversation in #slingshot + #slingshot-announcements in Filecoin Slack.
