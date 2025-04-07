# Making-SPL-coin
Making my own Solana coin in ubuntu
# Preparations
- [solana-docs](https://solana.com/ko/docs/intro/installation)
# 1. make admin wallet
```shell
solana-keygen new --outfile ./admin.json
```
# 2. make token wallet
```shell
solana-keygen new --outfile ./token.json
```
# 3. Upload Coin Metadata
- [upload-site](https://pinata.cloud/) (Metaday is a json file, and you can upload the image as it is.)

### example
- [token-metadata](https://gateway.pinata.cloud/ipfs/bafkreid6o7pxs3lwr4cqoffpqaooadkktpp4dxatk5gdjlg5qza2wdlfuu)
- [token-img](https://gateway.pinata.cloud/ipfs/bafkreiduqvs4vmmfdflivexk7dvaqsifr4rawc77gpembghjmlogvbsaae)

# 4. Clone this repository
```shell
git clone https://github.com/jaemoon99/Making-SPL-coin.git
```

# 5. Install Library
```shell
npm i
```

# 6. Modify the annotations in the mint.ts file to suit you
# 7. Practice
```
node mint.ts
```
# 8. [explorer-solana](https://explorer.solana.com/?cluster=devnet) Search Here
