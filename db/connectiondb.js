

import mysql from "mysql2"
 const connection=mysql.createConnection("mysql://urslpbaa1pgaj1pa:mbcyHYz4qZdcHBz9nmjI@b2pciw9wuoxjhgntju9e-mysql.services.clever-cloud.com:3306/b2pciw9wuoxjhgntju9e")

 connection.connect((err)=>{
    if(err){
        console.log('db fail connecteed');
    }
    else{
        console.log('db connection successfully');
    }
 })

 export default connection