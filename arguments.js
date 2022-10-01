module.exports = [
  // address _summoner
  "0x6D6Fe13E339Aa55743E2A719f80A71Ee6e18831f",
  // address[] memory _approvedTokens
  ["0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa"],
  // uint256 _periodDuration
  17280,
  // uint256 _votingPeriodLength
  35,
  // uint256 _gracePeriodLength
  35,
  // uint256 _proposalDeposit
  "1000000000000000000", // 1 ETH
  // uint256 _dilutionBound
  3,
  // uint256 _processingReward
  "10000000000" // 0.00000001 ETH
];

// Use this command to verify the contract
// npx hardhat verify --constructor-args arguments.js --network polygon_mumbai DEPLOYED_CONTRACT_ADDRESS