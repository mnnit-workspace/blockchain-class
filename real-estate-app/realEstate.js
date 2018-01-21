toAccount = 0 ;
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"ownerName","type":"string"}],"name":"registerMe","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"propertyId","type":"string"}],"name":"getOwner","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"propertyList","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"propertyCount","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwnerName","type":"string"},{"name":"propertyId","type":"string"}],"name":"transferProperty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ownerName","type":"string"},{"name":"propertyId","type":"string"}],"name":"addProperty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
realEstateContract = web3.eth.contract(abi);

//Provide below the new deployed address
contractInstance = realEstateContract.at('0x560d3232604b3c2fd86e006ffbd14c1e2f1b5688');
data = "" ;

function updateProperties(){
  data = "";
  for (var i = 0; i < contractInstance.propertyCount.call().c[0] ; i++ ) {
    data += "<tr> <td> " + contractInstance.propertyList.call(i) + "</td><td>" + contractInstance.getOwner.call( contractInstance.propertyList.call(i) ) + "</td></tr>";
  }
  $("#propertyTable").html(data);
}

function addUser(){
  user = $("#username").val();
  contractInstance.registerMe( user , { from: web3.eth.accounts[toAccount] , gas: 3000000 });
  alert("User successfully registered!!");
}

function addProperty(){
  propertyName = $("#pname").val();
  toUser = $("#toUser").val();
  contractInstance.addProperty( toUser , propertyName , { from: web3.eth.accounts[toAccount] , gas: 3000000 });
  updateProperties();
}

function transferProperty(){
  propertyName = $("#pname1").val();
  toUser = $("#toUser1").val();
  contractInstance.transferProperty( toUser , propertyName , { from: web3.eth.accounts[toAccount] , gas: 3000000 });
  updateProperties();
}

function changeAccount(){
  toAccount = parseInt( $('#toAccount').val() ) ;
  alert("Now connected to account "+ toAccount + " ...");
}
updateProperties();
