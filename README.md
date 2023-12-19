npm install --save-dev hardhat
npm install @openzeppelin/contracts
npm install dotenv --save
npm install --save-dev @nomiclabs/hardhat-ethers ethers
npm install --save-dev @nomicfoundation/hardhat-verify

**.ENV**

ALCHEMY_API_URL="https://polygon-mumbai.g.alchemy.com/v2/SOxCgJzw6PLvC02g238nlDqJRq83_j3k"
POLYGONSCAN_API_KEY="POLYGONSCAN_API_KEY"
ETHERSCAN_API_KEY="ETHERSCAN_API_KEY"
SOLIDITY_VERSION="SOLIDITY_V_8_20"
EVM_VERSION="EVM_PARIS"
PRIVATE_KEY="PRIVATE_KEY"

npx hardhat compile 
npx hardhat run --network BethelzkEVM scripts/deploy.js
npx hardhat blockscout-verify contracts/BETHEL.sol 0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB
