## Slingshot Recovery

### Restore

If you're participating in the Slingshot Recovery initiative, please create pull requests containing your CIDs in this repository, at the path `recovery/cids/restore/.` 

- CID lists must be `csv`
- The file name should match your assigned dataset name, in kebab-case
- All CIDs must be **base32 CID v1's** only (i.e., `ba...`)
- Submit payload CIDs only (not piece CIDs)
- If you need to add more CIDs, simply create another PR and append to your existing file
- Your file's first row should say `payload_cid`
- Submit only one column (just the `payload_cid` and no additional content)

#### Example

| payload_cid |
| --- |
| bafykbacelmss5jrbnze37rhyiuhat |
| bafykbacelmss7s2zmqekui7ysukid |
| bafykbacelmssa6xkdvebnzu2xmaol |
| bafykbacelmssdtuhui4ea32ohda6z |
| bafykbacelmssfokmkaugllwx255ss |
| bafykbacelmsskocznkpqc4mj23got |
| bafykbacelmssvoooxgbpbt6ps4ump |
