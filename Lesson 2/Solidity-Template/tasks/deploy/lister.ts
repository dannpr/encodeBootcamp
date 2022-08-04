import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { List } from "../../src/types/List";
import type { List__factory } from "../../src/types/factories/List__factory";

task("deploy:List")
  .addParam("listing", "Say hello, that should be good")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const signers: SignerWithAddress[] = await ethers.getSigners();
    const listerFactory: List__factory = <List__factory>await ethers.getContractFactory("List");
    const lister: List = <List>await listerFactory.connect(signers[0]).deploy(taskArguments.greeting);
    await lister.deployed();
    console.log("Lister deployed to: ", lister.address);
  });
