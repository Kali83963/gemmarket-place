// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GemstoneRegistry {
    enum Status { PENDING, VERIFIED, REJECTED }

    struct Gemstone {
        string hash;
        address seller;
        bool isVerified;
        Status status;
    }

    mapping(uint => Gemstone) public gemstones;
    uint public gemstoneCount = 0;

    event GemstoneRegistered(uint gemstoneId, string hash, address seller);
    event GemstoneVerified(uint gemstoneId);
    event GemstoneRejected(uint gemstoneId);
    event GemstoneTransferred(uint gemstoneId, address newOwner);

    function registerGemstone(string memory _hash) public returns (uint) {
        gemstones[gemstoneCount] = Gemstone(_hash, msg.sender, false, Status.PENDING);
        emit GemstoneRegistered(gemstoneCount, _hash, msg.sender);
        gemstoneCount++;
        return gemstoneCount - 1;  
    }

    function verifyGemstone(uint _id, string memory _hash) public returns (Status) {
        require(_id < gemstoneCount, "Invalid gemstone ID");
        require(gemstones[_id].status == Status.PENDING, "Already verified or rejected");

        if (keccak256(bytes(gemstones[_id].hash)) == keccak256(bytes(_hash))) {
            gemstones[_id].isVerified = true;
            gemstones[_id].status = Status.VERIFIED;
            emit GemstoneVerified(_id);
        } else {
            gemstones[_id].status = Status.REJECTED;
            emit GemstoneRejected(_id);
        }

        return gemstones[_id].status;
    }

    function transferGemstone(uint _id, address _to) public {
        require(gemstones[_id].seller == msg.sender, "Not owner");
        gemstones[_id].seller = _to;
        emit GemstoneTransferred(_id, _to);
    }

    function getGemstoneHash(uint _id) public view returns (string memory) {
        return gemstones[_id].hash;
    }

    function isGemstoneVerified(uint _id) public view returns (bool) {
        return gemstones[_id].isVerified;
    }
}
