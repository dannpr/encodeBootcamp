# Homework 3

#### 1. What are the advantages and disadvantages of the 256 bit word length in the EVM

advantages :

- Facilitates Keccak256 hash scheme
- Eliptic curve computations

disadvantages :

- Overflow , if the result doesn't fit into 256 bits  

#### 2. What would happen if the implementation of a precompiled contract varied between

- Same result but different time/space complexity.
-The implementation provide a different result, provoke blockchain inconsistences. Some contracts won't be able to execute properly the code .

#### 3. Do we need to validate the beneficiary field in the Ethereum block ?

The beneficiary is the address that will collect the fee from a successful mining.

(idk)

#### 4. Using Remix write a simple contract that uses a memory variable, then using the debugger step through the function and inspect the memory
