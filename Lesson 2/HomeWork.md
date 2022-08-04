# Try out the Solidity Template

## 1. Start a new project using the [Solidity Template](https://github.com/paulrberg/hardhat-template)

## 2. Make a fork of mainnet from the command line (you may need to setup an Infura or Alchemy account)

    Command line for the fork

```bash
   npx hardhat console --network hardhat
```

## 3. Query the mainnet using the command line to retrieve a property such as latest block number

Query the node:

```js
    const provider = ethers.getDefaultProvider();
    const blockNumber = await this.provider.getBlockNumber();
    blockNumber
```

## Solidity

_________________

## 1. Write a function that will delete items (one at a time) from a dynamic array without leaving gaps in the array. You should assume that the items to be deleted are chosen at random, and try to do this in a gas efficient manner. For example imagine your array has 12 items and you need to delete the items at indexes 8, 2 and 7

    The final array will then have items (0,1,3,4,5,6,9,10,11}

```sol
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
```
