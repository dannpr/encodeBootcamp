# Homework 1

## 1. What information is held for an Ethereum account ?

- nonce: number of transaction ent from this address ,number of contract made by the contract .
- balance
- storageRoot : a 256-bit hash of the root node of a merkle patricia tree that encode and storage the contents of the accounts
- codeHash : hash of the EVM code of the account

## 2. Where is the full Ethereum state held ?

    The Ethereum state is not contained on chain but in a Merkle Patricia Tree .

## 3. What is a replay attack ? which 2 pieces of information can prevent it ?

## 4. What checks are made on transactions for view functions ?

    The light client check events from the block bloom filter that is a space-efficient data structure for fast checks. The bloom filter return a 'no' or 'maybe' if it's maybe the client can check the full transaction .
