## What is Bobcoin?

Bobcoin is a decentralized cryptocurrency that I made completely by myself after reading extensively about the revolutionary technologies that are cryptocurrencies, bitcoin, which are enabled by blockchains and some clever cryptography.

I made Bobcoin with the intention of recreating bitcoin, but also as a learning process. What better way to learn about cryptocurrencies than coding one yourself?

|                                                        ![rocket.jpg](/images/bobcoin/rocket.webp "Bobcoin going to Mars")                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| _Bobcoin going to Mars - [created by brgfx - www.freepik.com](https://www.freepik.com/free-vector/rocket-flying-through-astriods_4955149.htm#page=1&query=rocket&position=15)_ |

Bobcoin currently consists of 3 separate projects. The shared core functionality is written in javascript and packaged in npm as blockcrypto, it contains most of bobcoin’s common code shared between the frontend and backend, with unit and integration tests. Then there is bobcoin-client, which is the react frontend for interacting with bobcoin. It is a wallet software, a block explorer, and a marketing page all in one web application. Lastly, bobcoin-node is the node software responsible for maintaining and synchronizing the blockchain, and also serves as a backend for the block explorer. It is built using express and mongodb.

- Bobcoin client: &nbsp; [github](https://github.com/BobShoaun/Bobcoin-Client) &nbsp; [website](https://bobcoin.cash/)

- Bobcoin node: &nbsp; [github](https://github.com/BobShoaun/Bobcoin-Node) &nbsp; [live-mainnet](https://bobcoin-mainnet.herokuapp.com/) &nbsp; [live-testnet](https://bobcoin-testnet.herokuapp.com/)

- Blockcrypto: &nbsp; [github](https://github.com/BobShoaun/Blockchain-Crypto) &nbsp; [npm](https://www.npmjs.com/package/blockcrypto)

## What is it used for?

As for what it is used for, its utility for now is mainly just a fun way of introducing friends and families to cryptocurrencies. With the simple frontend interface, and the fact that bobcoins do not have any value, it serves as a risk free gateway for people into the daunting and complex world of cryptocurrencies. As I have followed many standards set by major cryptocurrencies when developing bobcoin, the education from learning how to use bobcoin translates well to other cryptocurrencies. If bobcoin ever catches on and starts having a significant demand and real world value, it would serve as a medium of exchange, and a store of value. If that is the case, I hope to be able to list this currency on an exchange, and eventually sites like coinmarketcap.

## How is it Decentralized?

A copy of the bobcoin blockchain is distributed to every computer running the bobcoin-node software. A blockchain is essentially a chain of blocks, with each block containing transactions. Therefore the entire blockchain is a giant ledger. The blockchain is updated when a new block is appended to the end of it, adding new lines to the ledger. But who gets to decide what new block is added? And can’t I just add any block with any transaction within a block?

Here's how it works: when a block is created, it is broadcasted to all the nodes in the network (computers running the bobcoin-node software). When a node receives a block, it validates the block by checking the validity of each transaction (funds are not double spent) and of the block. Most importantly, it checks whether the hash of each block meets a certain requirement.

Consensus is reached through a mechanism called proof of work. Before adding a block to the blockchain, a certain amount of work has to be put in order for it to be valid. The work is in the form of brute force computation, and cryptographic hash functions allow for an untrusted party to show proof that they have done a certain amount of work. This prevents anyone from being able to spam appends to the blockchain, and allows only people who have invested time and energy to add to it. These people are called miners, and the act of brute forcing the correct hash to a block is mining. As a reward for their efforts to secure and update the blockchain, they are given the block reward, which is currently 512 bobcoins minted from thin air and given to the miners.

## The Blockchain

Like all blockchains, the bobcoin blockchain started at its genesis block. Block explorer link: https://bobcoin.cash/block/0000000feec941f61402e216aad021939642cfee2e97e6fc45c7a692dd3a759f
. The block was mined on a Thursday morning on 10th June 2021, when I have finalized the parameters for the blockchain. The initial target hash I have chosen starts with exactly 6 zeros, that means, a hash of all blocks must be smaller than the target hash (has greater or equal to 6 zeroes). It took roughly 15 minutes to mine the first block, at that time I thought that was too long, and considered decreasing the difficulty. But subsequent blocks showed that the average time is around the ballpark of 5 minutes, I was just unlucky on my first block. Therefore I stuck with that initial difficulty and it remains to this day. The address which is served the block reward, or the miner is:

> `8GEN8Ab66ydbi82Q3wVcVwWKpvRVphN`

A vanity address curated specifically to have the GEN word in front, I wanted a special address to receive the first ever bobcoins mined.

## Address Format

All bobcoin addresses start with either an 8 or 9. Like bitcoin, which has 1 appended to legacy addresses, and 3 for segwit addresses, and dogecoin with a D in front of every address. In a world with multitudes of different cryptocurrencies using cryptic addresses, it is necessary to distinguish between addresses of different currencies. A bobcoin address is also encoded in base58, a standard adopted by most other cryptocurrencies as it eliminates common characters that can be confused with each other like 0, o, and O. Like a bank account number, it has a checksum built into the address, meaning there are “right” and “wrong” addresses, they are not just any random base58 string. This improves the user experience and saves them in the event of a typo, and thus sending their coins into the void.

If you explored the blockchain, you might have also seen quite a few other addresses with special words like “bob” or “hey” or “uwu” in front. Those are all vanity addresses, which took roughly 20 minutes or so to brute force. As like mining, just an increase in the required characters can exponentially increase the difficulty and time taken. I have tried to find an address with 4 desired characters, but I’d reckon it would take days for my computer to do so.

## Transactions and UTXOs

A transaction is made from one address to another, and it consists of inputs and outputs. If you are making a transaction to a friend, the input addresses are of yours, meaning you own the private keys associated with those addresses, and are able to sign the transaction with it. Each input is a reference to a previous transaction where you have received your current funds, they are known as unspent transaction outputs, UTXOs for short. Once they are used as input to a transaction, they can no longer be spent again.

The outputs are your friend’s address, and possibly your own address to receive change, as UTXO inputs has to be spent in its entirety, think of each UTXO as a piece of cash, to spend it you need to give the cashier the entire cash and receive change for it.

|       ![transactions.png](/images/bobcoin/transactions.png "Traceable transactions")       |
| :---------------------------------------------------------------------------------------: |
| _Traceable transactions - [from the Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf)_ |

This UTXO based model allows for all transactions to be easily traceable, and the flow of each bobcoin known. It also allows for an efficient way of finding your current balance, since it is just the sum of all your current UTXOs.

## Wallet Implementation

In my opinion, the term “wallet” in the context of cryptocurrencies is misleading. It should really be called a keychain, as they contain a bunch of bobcoin addresses and the corresponding private keys required to access the funds in them. When designing the bobcoin wallet, I have considered current industry standards to make it as seamless to consume between other cryptocurrencies. These standards include:

- BIP-39: https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki. mnemonic seed phrases. Instead of having the user save a 512 bit seed of random gibberish, they can save it as 12-24 words in their preferred language.

- BIP-32: https://en.bitcoin.it/wiki/BIP_0032. Hierarchical deterministic wallets, meaning each new address (key pair) is generated deterministically from a master seed. So the user only has to keep track and store one private key, and not a bunch of them.

- BIP-44: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki. A specific implementation of bip-32, with outlines about what is known as a derivation path, a format to encode how each key pair is derived. Think of it like the folder structure in your computer.

|       ![mnemonic.png](/images/bobcoin/mnemonic.png "A mnemonic seed phrase")       |
| :-------------------------------------------------------------------------------: |
| _A mnemonic seed phrase - [from the Bobcoin wallet](https://bobcoin.cash/wallet)_ |

## Coin economics

As of now, with each block added to the blockchain, 512 bobcoins are introduced to the circulation in the form of block rewards. But at block 10,100, the reward will be halved to 256, and will continue to do so every 10,100 blocks until no more block reward can be obtained from mining, and thus revenue will only be from transaction fees. Since the reward decreases geometrically, a hard supply cap is naturally set to about 10 million bobcoins. This makes the currency deflationary in the long run.

The value of existing bobcoins can also appreciate when they are _burnt_. The act of burning a cryptocurrency is essentially making a transaction to an address where the private keys to unlock them are unknown. Some verifiable burn addresses are manufactured manually just to fulfill its checksum, and have no private keys tied to them during its creation. If you lose access or forget your mnemonic seed phrase, your coins are also essentially burnt.

## Scalability

Aside from the speed and bandwidth of the servers hosting bobcoin-node. The scalability of the blockchain and network has to be considered. A constant block time of 8 minutes is chosen, meaning ideally there should be on average 8 minutes between the addition of each block. However, since the number of miners at any given moment can fluctuate, a difficulty adjustment mechanism is used to adjust the mining difficulty to maintain the 8 minute block time. Every 50 blocks, the difficulty is recalculated based on the average time of the last 50 blocks. If the network has a lot of miners, the difficulty will be increased, so the time taken for each block will be longer, vice versa.

## Summary / Conclusion

There is a lot more to talk about in this project, but I decided to limit this article for the sake of readability. Here is a TLDR:

> Bobcoin is a proof of work digital currency heavily inspired by Bitcoin. It employs current industry standards like BIP-32, 39, 44, and more, and the UTXO model for keeping track of balances and accounts. The source code can be found in github under 3 separate repositories. It is made as a means to improve my understanding of cryptocurrencies, and a way to spread education and introduce friends and family to the world of blockchains.

Thank you for reading my article, hope you found it interesting, and perhaps learnt a thing or two.
