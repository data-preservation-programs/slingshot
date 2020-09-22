class File{
    constructor(){

    }
    setInfo(cid,filename,abstract,walletAddr,downloads){
        this.cid=cid;
        this.filename=filename;
        this.abstract=abstract;
        this.walletAddr=walletAddr;
        this.downloads=downloads;
    }
    getCid(){
        return this.cid;
    }
    getFilename(){
        return this.filename;
    }
    getAbstract(){
        return this.abstract;
    }
    getWalletAddr(){
        return this.walletAddr;
    }
    getDownloads(){
        return this.downloads;
    }
}

module.exports=File;