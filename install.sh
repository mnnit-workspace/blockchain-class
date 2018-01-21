sudo apt-get install -y curl build-essential python git software-properties-common
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g ganache-cli web3@0.20.2 solc
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install -y ethereum
sudo npm install -g truffle webpack
