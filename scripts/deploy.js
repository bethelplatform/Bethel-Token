// Import ethers from Hardhat package
const { ethers } = require("hardhat");


async function main() {
    const BETHEL = await ethers.getContractFactory("BETHEL");
    const instance = await BETHEL.deploy();
    await instance.deployed();
    console.log("BETHEL Token deployed to:", instance.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
