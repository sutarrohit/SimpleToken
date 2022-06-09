/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle")
require("dotenv").config()


const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.7.3",

  networks:{
    rinkeby:{
      url: RINKEBY_RPC_URL,
      accounts:[RINKEBY_PRIVATE_KEY],
      chainId: 4 ,
    },
  },
  

};
