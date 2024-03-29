import { Connection, PublicKey } from "@solana/web3.js";
import { programs } from "@metaplex/js/";
import * as metadata from "@metaplex-foundation/mpl-token-metadata";


// NFT is a mint. just like SRM, USDC ..., the only different is that NFT's supply is 1
//
// if we want to get NFT's metadata, first we need to know what is the mint address.
// here I take a random DAPE as an example
// https://explorer.solana.com/address/9MwGzSyuQRqmBHqmYwE6wbP3vzRBj4WWiYxWns3rkR7A
//
// tokenmeta is a PDA a which derived by mint address
// the formula is ['metadata', metadata_program_id, mint_id]
// is it totally fine to forget it because sdk already wrapped it for us



async function getMetaData () {

  const connection = new Connection("https://api.mainnet-beta.solana.com");

  let mintPubkey = new PublicKey("FsdXX6qguGmY6yLPxjHF7srcyeYL61E2mguwMfJ57i1K");
  let tokenmetaPubkey = await programs.metadata.Metadata.getPDA(mintPubkey);

  // const tokenMetadata = await programs.metadata.Metadata.findByOwner(connection, mintPubkey);

  // console.log(JSON.stringify(tokenMetadata));

  // const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
  // console.log(tokenmeta);

  const nftsmetadata = await metadata.Metadata.findDataByOwner(connection, tokenmetaPubkey);

  console.log(nftsmetadata);
}



export default getMetaData