import crypto from "crypto";
import { ethers } from "ethers";
import dotenv from "dotenv";
import contractArtifact from "../../../../contracts/abi/GemstoneRegistry.json";
import fs from "fs";
import axios from "axios";
import { CERTIFICATE_STATUS, GEMSTONE_STATUS } from "@prisma/client";
dotenv.config();
const provider = new ethers.JsonRpcProvider(process.env.BLOCKCHAIN_URL); // or Infura/Alchemy
const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS as string,
  contractArtifact.abi,
  signer
);
async function downloadFile(url: string): Promise<Buffer> {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  return Buffer.from(response.data);
}

export class BlockChainService {
  async generateGemstoneHash(gemstone, certification) {
    let certBuffer: Buffer;

    if (certification.startsWith("http")) {
      certBuffer = await downloadFile(certification);
    } else {
      certBuffer = fs.readFileSync(certification); // Local path
    }
    const certHash = crypto
      .createHash("sha256")
      .update(certBuffer)
      .digest("hex");
    const data = `${gemstone.name}-${gemstone.type}-${gemstone.weight}-${certHash}`;
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  async registerGemstoneOnChain(signerAddress, hash: string) {
    // const signer = new ethers.Wallet(signerAddress, provider);
    // const contract = new ethers.Contract(
    //   process.env.CONTRACT_ADDRESS as string,
    //   contractArtifact.abi,
    //   signer
    // );

    const tx = await contract.registerGemstone(hash);
    await tx.wait();

    const count: ethers.BigNumberish = await contract.gemstoneCount();
    const id = Number(count) - 1;

    const onChainHash: string = await contract.getGemstoneHash(id);
    console.log(onChainHash);
    console.log(id);

    return { id, onChainHash };
  }
  async verifyGemstoneOnChain(signerAddress, gemstone, certification) {
    // const signer = new ethers.Wallet(signerAddress, provider);
    // const contract = new ethers.Contract(
    //   process.env.CONTRACT_ADDRESS as string,
    //   contractArtifact.abi,
    //   signer
    // );
    console.log(certification);
    console.log(gemstone.blockchainGemstoneId);

    const onChainHash: string = await contract.getGemstoneHash(
      gemstone.blockchainGemstoneId
    );

    const endoserHash = await this.generateGemstoneHash(
      gemstone,
      certification
    );

    const status =
      onChainHash === endoserHash
        ? CERTIFICATE_STATUS.ACCEPTED
        : CERTIFICATE_STATUS.REJECTED;

    console.log(status);

    const tx = await contract.verifyGemstone(gemstone.blockchainGemstoneId);
    await tx.wait();

    return status;
  }
}
