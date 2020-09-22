const { createPow } = require('@textile/powergate-client')
const host = "http://58.144.221.21:6002"
const pow = createPow({ host })

var mysql = require('mysql');
    var connection = mysql.createConnection({
       host: '45.32.19.182',
    //  host:"localhost",
      user: 'root',
      password: 'root',
      database: 'ipfs_scholar_db'
    });

    const exec = (sql) => {
      const promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
          resolve(result);
        })
      })
      return promise;
    }


module.exports = {

  // health.check()
  checkHealth: async function () {
    this.definePow()
    const { health } = await pow.health.check();
    return health;
  },


  // get wallet addresses
  getWalletAddresses: async function () {
    const { token } = await pow.ffs.create();
    pow.setToken(token)
    const { addrsList } = await pow.ffs.addrs();
    return addrsList;
  },
  
  connectDb: function () {
    return exec;
  },

  closeDb:function(){
    connection.end();
    console.log("close db success!")
  },


  getFileType:function(fileName){
    return fileName.substr(fileName.length-3,3);
  },
  
};



