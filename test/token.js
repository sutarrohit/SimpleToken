const {expect} = require("chai")
const {ethers} = require("hardhat")
/*
//We write test case under describe function 
describe("Token Contract",  function(){

    //Write function to test balacne check function.
    it("Deployment should assign total suppply of token to owner", async function(){

            const [owner] = await ethers.getSigners()

            //Create object of the contract usong getContractFactory
            const Token  = await ethers.getContractFactory("token")

            //Deploy contract using factory object
            const TokenDeploy = await Token.deploy()

            //intract with contract using deploy contract object
            const ownerBalance = await TokenDeploy.balanceCheck(owner.address)
            console.log("Owner address", owner.address)
 
            //check test case
            expect(await TokenDeploy.TotalSupply()).to.equal(ownerBalance)
            console.log(ownerBalance)
    })


    it("Should transfer between token", async function(){

        const [owner,add1,add2] = await ethers.getSigners()

        //Create object of the contract usong getContractFactory
        const Token  = await ethers.getContractFactory("token")

        //Deploy contract using factory object
        const TokenDeploy = await Token.deploy()

        //Transfer Toekn from owner to add1
        await TokenDeploy.transfer(add1.address, 10)
        expect(await TokenDeploy.balanceCheck(add1.address)).to.equal(10)
        
        //Transfer token from add1 to add2
        await TokenDeploy.connect(add1).transfer(add2.address, 5)
        expect(await TokenDeploy.balanceCheck(add2.address)).to.equal(5)

        //print Token balance
        console.log(`Balance of add1 ${await TokenDeploy.balanceCheck(add1.address)}`)
        console.log(`Balance of add2 ${await TokenDeploy.balanceCheck(add2.address)}`)
        console.log(`Balance of owner ${await TokenDeploy.balanceCheck(owner.address)}`)

    })

})
*/

//Test using beforeEach

describe("Token Contract", function(){

//let owner
let add1
let add2
let owner
let Token
let TokenDeploy 
let ownerBalance

beforeEach(async function(){
    Token  = await ethers.getContractFactory("token")
    TokenDeploy = await Token.deploy()   
    let [owner,add1,add2] = await ethers.getSigners() 
    ownerBalance = await TokenDeploy.balanceCheck(owner.address)
    ownerAddress = owner.address
    add1Address = add1.address
    
})

    it("Checking owner balance", async function(){
         expect(await TokenDeploy.TotalSupply()).to.equal(ownerBalance)
    })

    it("checking owner is set or not", async function(){
        expect(await TokenDeploy.owner()).to.equal(ownerAddress)
    })

    it("Transer token from owner to add1", async function(){
        await TokenDeploy.transfer(add1Address,10)
        expect(await TokenDeploy.balanceCheck(add1Address)).to.equal(10)
       // console.log(await sTokenDeploy.balanceCheck(add1Address))
    })

})




