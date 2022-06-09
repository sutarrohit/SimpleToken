
//const { getContractAddress,ethers } = require("ethers/lib/utils");
const {ethers} = require("hardhat")

async function main(){

    //Create factory object of the contract
    const tokenContractObject  = await ethers.getContractFactory("token")
    console.log("Deploying contract...")

    //Deploying contract using contract factory object 
    const contractDeploy = await tokenContractObject.deploy()
    console.log(`Contract deployed... ${contractDeploy.address}`)

    //getSigners provides contract account
    const [owner] = await ethers.getSigners()

    //Call function of the contract using deployed object
    const balance = await contractDeploy.balanceCheck(owner.address)
    console.log(balance)

}

main()
 .then(() => process.exit(0))
 .catch((error) =>{
     console.error(error)
     process.exit(1)
 })

