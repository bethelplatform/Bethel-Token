// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// @custom:security-contact technical@futurecx.com.au
contract BETHEL is ERC20 {
    constructor() ERC20("BETHEL", "BECX") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}
