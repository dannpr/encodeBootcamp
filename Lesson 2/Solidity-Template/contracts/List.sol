// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";

contract List {
    uint256[] public list;

    constructor(uint256[] memory _list) {
        list = _list;
    }

    function erase(uint256 _index) public {
        require(_index < list.length);
        for (uint256 i = _index; i < list.length - 1; ++i) {
            list[i] = list[i + 1];
        }
        list.pop();
    }

    function returnArray() external view returns (uint256[] memory) {
        return list;
    }
}
