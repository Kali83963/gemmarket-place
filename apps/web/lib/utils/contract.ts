// utils/contract.ts
import { ethers } from "ethers";
import contractArtifact from "../../contracts/abi/GemstoneRegistry.json";

const CONTRACT_ADDRESS = "0x264A7a1747A9B5453d3a7190D95DC7Af750484E5"; // Sepolia
declare global {
  interface Window {
    ethereum?: any;
  }
}

export async function getContract() {
  if (typeof window.ethereum === "undefined") {
    throw new Error("MetaMask is not installed");
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contractArtifact.abi,
    signer
  );
  return contract;
}