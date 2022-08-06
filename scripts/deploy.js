// scripts/deploy-my-collectible.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const PolyfillFurnitureToken = await ethers.getContractFactory("PolyfillFurnitureToken");

  const pff = await upgrades.deployProxy(PolyfillFurnitureToken);

  await pff.deployed();
  console.log("MyCollectible deployed to:", pff.address);
}



main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
