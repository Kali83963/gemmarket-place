// scripts/deploy.ts
import { ethers, artifacts, run } from "hardhat";
import fs from "fs";
import path from "path";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const GemstoneRegistry = await ethers.getContractFactory("GemstoneRegistry");
  const gemstoneRegistry = await GemstoneRegistry.deploy();
  await gemstoneRegistry.waitForDeployment();

  console.log(
    "GemstoneRegistry deployed to:",
    await gemstoneRegistry.getAddress()
  );

  // Save contract address & ABI
  const dataDir = path.resolve(__dirname, "../abi");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  fs.writeFileSync(
    path.join(dataDir, "contract-address.json"),
    JSON.stringify({ GemstoneRegistry: gemstoneRegistry.getAddress() }, null, 2)
  );

  const artifact = await artifacts.readArtifact("GemstoneRegistry");
  fs.writeFileSync(
    path.join(dataDir, "GemstoneRegistry.json"),
    JSON.stringify(artifact, null, 2)
  );

  console.log("Contract address and ABI saved in /abi");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
