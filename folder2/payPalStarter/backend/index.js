const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

// Your ABI (contract interface) goes here
const ABI = require("./abi.json");

// Initialize Alchemy
const ALCHEMY_API_KEY = "";
const SEPOLIA_PRIVATE_KEY = "";
const AlchemyRPCURL = `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_PRIVATE_KEY}`; // Sepolia test network

// Modify your Moralis setup to use Alchemy
const Moralis = require("moralis").default;
Moralis.start({
  
  appId: "", // Replace with your Moralis app ID
});

// Define your API routes
app.get("/getNameAndBalance", async (req, res) => {
  const { userAddress } = req.query;

  try {
    const response = await Moralis.EvmApi.utils.runContractFunction({
      chain: "0xaa36a7", // Sepolia network
      address: "", // Replace with your contract address
      functionName: "", // Replace with your contract function name
      abi: ABI,
      params: { _user: "" },
    });

    const jsonResponseName = response.raw;
    
    const jsonResponse = {
      name: jsonResponseName,

    };
    // Return relevant data (name and balance) in the response
    return res.status(200).json({
      name: jsonResponseName,
      balance: "1234", // Replace with actual balance
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening for API Calls on port ${port}`);
});
