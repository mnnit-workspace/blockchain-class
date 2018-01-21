# Blockchain Class
This repo contains blockchain class materials.
## Getting the environment

### Using Docker Container
**Recommended:** We recommend everyone to use docker image `khalibartan/testrpcenv:latest` for environment.
#### Installing Docker

##### On Ubuntu
- Go to https://download.docker.com/linux/ubuntu/dists/, choose your Ubuntu version, browse to `pool/stable/` and choose `amd64`, `armhf`, `ppc64el`, or `s390x` (choose amd64 if not sure). Download the `.deb` file for the Docker version **17.12.0**. For example here is the [link](https://download.docker.com/linux/ubuntu/dists/xenial/pool/stable/amd64/docker-ce_17.12.0~ce-0~ubuntu_amd64.deb) to `.deb` file for ubuntu xenial (16.04) amd64.

- Run following command in your shell and replace the `/path/to/package.deb` with path to downloaded file. 

```sudo dpkg -i /path/to/package.deb```

##### On Windows
Download the .exe file from [here](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe) and follow the prompts.

##### Others
For other operating system follow the instructions for docker community edition (Docker CE). Browse the list at [here](https://docs.docker.com/engine/installation/#supported-platforms).

#### Configuring proxy
For confuring proxy on docker we need to add the proxy configuration in the Docker systemd service file.
Instructions below are for linux distros only.

1. Create a systemd drop-in directory for the docker service:

```sudo mkdir -p /etc/systemd/system/docker.service.d```

2. Create a file `/etc/systemd/system/docker.service.d/https-proxy.conf` that adds HTTPS_PROXY settings

``` sudo touch /etc/systemd/system/docker.service.d/https-proxy.conf```

3. Enter following things in the file created in earlier step (Replace proxy server with your choice of server).

```
[Service]
Environment="HTTPS_PROXY=http://heed:ravi@172.31.52.52:3128/"
```

#### Getting the image
Once you have installed docker on your system, pull the `khalibartan/testrpcenv:latest` image. This image contains all the necessary node modules and other dependencies for running the app.

For pulling the docker image run the command

```docker pull khalibartan/testrpcenv:latest```

Note: You might need to use sudo on linux

### Building Environment from scratch
If you don't want to use docker image and want to build your own env from scratch. Install following dependencies (all for nodejs)

- [nodejs](https://nodejs.org/en/download/package-manager/) (version 8.9.4)
- [ganache cli](https://github.com/trufflesuite/ganache-cli) (version 6.0.3)
- [web3js](https://github.com/ethereum/web3.js/) (version 0.20.2)
- [solc](https://www.npmjs.com/package/solc)
- [truffle](https://github.com/trufflesuite/truffle)
- [webpack](https://www.npmjs.com/package/webpack)

#### Ubuntu
Ubuntu users can use the `install.sh` script to install all the packages





