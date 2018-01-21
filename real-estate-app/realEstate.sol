pragma solidity ^0.4.0;

contract realEstate{
    mapping( string => string ) property;                 // mapping from Property Id to Property Owner Name
    mapping( string => address ) ownerAddress;            // mapping from Owner Name to Owner Address
    address admin;                                        // stores address of Blockchain admin, the person who creates the Blockchain
    string[] public propertyList;
    uint8 public propertyCount;

    // Constructor
    function realEstate(){
        admin = msg.sender ;
    }

    // Register new user
    function registerMe( string ownerName ) returns (bool) {
        if( ownerAddress[ownerName] == 0 )
            {
                ownerAddress[ ownerName ] = msg.sender ;
                return true;
            }
            return false;
    }

    // Function to add new property, this function is only accessible to admin
    function addProperty( string ownerName , string propertyId ) returns (bool){
        if( msg.sender == admin && ownerAddress[ ownerName ] != 0 && bytes(property[ propertyId ]).length == 0  ){
            property[ propertyId ] = ownerName ;
            propertyList.push( propertyId );
            propertyCount += 1;
            return true;
        }
        return false;
    }

    // Transfer the property to another registered user
    function transferProperty( string newOwnerName , string propertyId ) returns (bool){
        if( ownerAddress[ property[ propertyId ] ] == msg.sender && ownerAddress[ newOwnerName ] != 0 ){
            property[ propertyId ] = newOwnerName ;
            return true;
        }
        return false;
    }

    //get propety owner Name;
    function getOwner( string propertyId ) returns ( string ){
      return property[ propertyId ];
    }

}
