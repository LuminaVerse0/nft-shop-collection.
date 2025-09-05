const connectWalletBtn = document.getElementById("connectWallet");
const buyNftBtn = document.getElementById("buyNft");

let provider;
let signer;

async function connectWallet() {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    const address = await signer.getAddress();
    connectWalletBtn.innerText = `Connected: ${address.slice(0,6)}...${address.slice(-4)}`;
  } else {
    alert("Please install MetaMask to use this feature!");
  }
}

async function buyNft() {
  if (!signer) {
    alert("Please connect your wallet first.");
    return;
  }
  // 🚨 Replace with your smart contract interaction
  alert("This would trigger NFT minting or purchase from your smart contract.");
}

connectWalletBtn.addEventListener("click", connectWallet);
buyNftBtn.addEventListener("click", buyNft);