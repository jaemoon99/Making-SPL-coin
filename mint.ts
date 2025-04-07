import {
  percentAmount,
  createSignerFromKeypair,
  signerIdentity,
} from '@metaplex-foundation/umi';
import {
  TokenStandard,
  createAndMint
} from '@metaplex-foundation/mpl-token-metadata';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine';
import '@solana/web3.js';
  import wad from './your-admin-account.json'; // your admin key
import wc from './your-token-account.json'; // your token key

const umi = createUmi('https://api.devnet.solana.com/');

const userWallet = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wad));
const userWalletSigner = createSignerFromKeypair(umi, userWallet);

const mintKeypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wc));
const mintSigner = createSignerFromKeypair(umi, mintKeypair);

const metadata = {
  name: 'your-token-name',  // your token name
  symbol: 'your-token-symbol',  // your token symbol
  uri: "your-metadata-uri (no image uri)",  // your upload metadatd uri
};

umi.use(signerIdentity(userWalletSigner));
umi.use(mplCandyMachine());

createAndMint(umi, {
  mint: mintSigner,
  authority: umi.identity,
  name: metadata.name,
  symbol: metadata.symbol,
  uri: metadata.uri,
  sellerFeeBasisPoints: percentAmount(0),
  decimals: 8,
  amount: 51751000_000_00000000,
  tokenOwner: userWallet.publicKey,
  tokenStandard: TokenStandard.Fungible,
})
  .sendAndConfirm(umi)
  .then(() => {
    console.log("Successfully minted 1 million tokens");
  })
  .catch((err) => {
    console.error('Minting failed:', err);
  });
