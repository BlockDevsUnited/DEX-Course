# DEX Course - Week 1

[Week 1 recording](https://drive.google.com/drive/folders/1-R8xd1Q7K2JD0TcfVp4BzEk-e__PiCKW) is posted now.

1. Learn how to use uniswap
  - [What is Uniswap](https://www.youtube.com/watch?v=dIneNZTnFMw)
  - Read Swap and Pools pages in [Uniswap docs V2](https://docs.uniswap.org/protocol/V2/introduction)
  - Perform token swap and add liquidity for token pairs. This can be done on HoneySwap with xDAI or UniSwap with Rikeby. 
    -  on [Honeyswap](https://app.honeyswap.org/#/swap), you can use BRIGHT, LINK or DCASH tokens on the xDai chain. You will need xDai tokens (<1 XDAI) to experiment with Honeyswap. HoneySwap is based on Uniswap V2 and this is what we will cover in this course.
    -  on Uniswap with Rinkeby, you can use the [HEX tokens](tokenlists/hex.tokenlist.json) for this course. Uniswap is Uniswap V3 and we will not cover in this course.

2. Fork UniswapV2 and publish the interface
  - Follow [README-Uniswap-interface.md](README-Uniswap-interface.md)
3. Use the published interface with the existing uniswap contracts.
  - The interface is already connected to existing contracts. 
  - Add liquidity for two tokens. Perform a swap. You may find it easier to import the [sample tokenlist](tokenlists/dex.tokenlist.json). 
