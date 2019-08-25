// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Appear,
  Layout,
  Fill,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  fivedollarbill: require('../assets/fivedollar.jpg'),
  carlossantana: require('../assets/carlossantana.jpg'),
  casinochips: require('../assets/casinochips.jpg'),
  vouchers: require('../assets/giftvoucher.jpg'),
  stock: require('../assets/stock.jpg'),
  clubstamp: require('../assets/clubstamp.jpg'),
  applicationtokens: require('../assets/applicationtokens.png'),
  cryptokitties: require('../assets/cryptokitties.gif'),
  kittiesbreed: require('../assets/kittiesbreed.gif'),
  erc721interface: require('../assets/erc721interface.jpg'),
  erc721metadata: require('../assets/erc721metadata.jpg'),
  erc721enum: require('../assets/erc721enum.jpg')

};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const fungibilityNotes = `
<p>
In simpler terms, a fungible commodity is an interchangeable commodity. An easy example would be fiat money such as the US dollar or even a cryptocurrency such as Bitcoin or Ethereum. 
</p>
<p>
If you lent me $20, it doesn’t matter if I repay you with a different $20 note (or two $10 notes) because the US dollar is fungible. Fungibility is, essentially, a characteristic of an asset, or token in this case, that determines whether items or quantities of the same or similar type can be completely interchangeable during exchange or utility.
</p>
`;

const fungibilityExample = `
  <p>
  For example, the US Five Dollar bill here can be used to purchase a soda from a convenience store.
  </p>
  <p>
  It has value and can be used to purchase items with the same or less value. However, when one goes to purchase a soda with the following baseball card, the store owner won’t accept it.
  </p>
  <p>
  Why wouldn’t this Carlos Santana card be accepted by the store owner when it’s worth $5, same as the dollar bill? This is because the baseball card and the dollar bill have different characteristics that define their value to certain people. A 7 year old child could be willing to pay $7 for the baseball card, because they like the colors on the card. But, the store owner doesn’t even value the card at $5 simply because it wasn’t issued by the Federal Reserve like the dollar is. The unique attributes that the baseball card and dollar bill have are what take away their fungibility, as they are valued differently depending on the exchange and cannot always be used interchangeably.
  </p>
  <p>
  In terms of collectible items, two items in a collection are not fungible if they have different characteristics. For physical coins, a gold coin is not fungible with a copper coin, because their different characteristics give them different values to collectors.
  </p>
`;

const tokenExamples = `
<p>
Tokens are not a new thing and have existed since long before the emergence of blockchain. Traditionally, tokens can represent any form of economic value. Shells and beads were probably the earliest types of tokens used. Other types of tokens are, for example, casinos chips, vouchers, gift cards, bonus points in a loyalty program, coat check tokens, stock certificates, bonds, concert or club entry tokens represented by a stamp on your hand, dinner reservations, ID cards, club memberships, or train or airline tickets. 
</p>
<p>
Cryptographic tokens on the blockchain have lower issuance and management costs involved. They can be easily issued and securely traded on a blockchain, without an intermediary or escrow service. Whereas state-of-the-art digital assets are controlled by centralized entities, they can now be issued with a few lines of code, and managed by a public and verifiable infrastructure like the Ethereum blockchain.
</p>
`;

const ethereumTokens = `
<p>
Ethereum is based on the use of tokens, which can be bought, sold, or traded. In this case, "tokens" represent a diverse range of digital assets, such as vouchers, IOUs, or even real-world, tangible objects. In this way, tokens are essentially smart contracts that keep track of who owns what,  make use of the Ethereum blockchain.
</p>
<p>
One of the most significant tokens is known as ERC20, which has emerged as the technical standard used for all smart contracts on the Ethereum blockchain for fungible token implementation. As of April 16, 2019, more than 181,000 ERC-20-compatible tokens exist on Ethereum main network.
</p>
<p></p>
`;

const kitties = `
<p>
Like many things on the internet, the idea of non fungible tokens was popularized with a game called Cryptokitties. CryptoKitties is a game in which players can buy, sell, trade, and breed digital cats. They can be thought of as “breedable Beanie Babies” in that each cat is unique in some way. This uniqueness makes these CryptoKitties extremely collectible, as someone could take an interest in the characteristics of several kittens and wish to own many of them and breed them to produce more rare, unique and valuable cats.
</p>
`;

const breedkitties = `
<p>
Like ERC20, the ERC721 standard outlines a set of common rules that all tokens can follow on the Ethereum network to produce expected results.

ERC721 is important for a number of reasons, particularly because of the new use cases it enables as well as its ability to be easily integrated into ecosystem infrastructure. Having a common interface for exchange and wallet operators to easily implement makes Non-Fungible tokens that much more valuable. Assimilation into the ecosystem makes them more liquid, increases price discovery, and allows anyone in the world to own Non-Fungible assets.
</p>
`;

const erc721interface = `
<p>
ERC721 standard is the most popular and recognized implementation of a NFT. ERC721 is an EIP (Ethereum Improvement Proposal) which was proposed by developers of Ethereum, and it became one of ERCs (Ethereum Request for Comment) after it was passed by the Ethereum committee. The official introduction of ERC721 is: A standard interface for non-fungible tokens, also known as deeds.

ERC721 suggests that a standard NFT on Ethereum should realize the interfaces in ERC721 and ERC165.

</p>

<p>
The interface itself is composed of 8 functions:
<p>balanceOf: returns the number of tokens owned by the given address</p>
<p>ownerOf: returns the address that owns a particular token (by unique ID)
</p>
<p>transferFrom: transfers the token from one address to another
</p>
<p>safeTransferFrom: performs the same action as transferFrom, but will fail if the receiver (_to) has not implemented the ERC721 functionality. This is done to prevent the accidental burning of the token, as a contract without ERC721 would have no support for moving the token elsewhere.
</p>
<p>approve: sets an address as the “approved” owner, but does not transfer the token to them (they can do so in the future by using transferFrom). note: the specified token (by tokenId) must be owned by the sender (msg.sender)
</p>
<p>setApprovalForAll: similar to approve, but sets the address as the “approved” owner for all tokens owned by the sender (msg.sender)
</p>
<p>getApproved: returns the approved owner of a _tokenId
</p>
<p>isApprovedForAll: returns true or false if the _operator is listed as the approved owner for all of _owner's tokens (setApprovalForAll called previously)
</p>
</p>
`;

const ercmetadata = `
<p>
In addition to standard interfaces, there are also some extended interfaces. For example, the interfaces defined in ERC721Metadata contract hold some basic information of the NFT, and the interfaces in ERC721Enumerable add some enumeration functions.
</p>
<p>
It should be noted that when using ERC721, you must implement some additional functions, such as a mint operation to create a new NFT, a burn operation to destroy a NFT, etc. Then you can apply ERC271 tokens to your own scenarios, and freely add specific business logic to enrich the application.
</p>
`;

const openzeppelin = `
<p>
As with many common smart contract patterns, the Zeppelin team has released an audited version of the ERC721 implementation, which will likely be one of the most highly used. There are 6 files that compose the standard.
</p>
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
          ERC721 Primer
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" bold>
          Anant Upadhyay
          </Text>
        </Slide>
        <Slide transition={['zoom']} notes={fungibilityNotes} bgColor="secondary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
          What is fungibility?
          </Heading>
          <Text margin="40px 0 0" textColor="quaternary" bold>
            Fungible — being something (such as money or a commodity) of such a nature that one part or quantity may be replaced by another equal part or quantity in paying a debt or settling an account.
          </Text>
          <BlockQuote>
            <Cite margin="10px 0 0 30px">Merriam-Webster</Cite>
          </BlockQuote>
        </Slide>
        <Slide notes={fungibilityExample} transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Example
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.fivedollarbill} />
            </Fill>
            <Fill>
              <Appear fid="1">
                <Image src={images.carlossantana} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide notes={tokenExamples} transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" caps>
          But what does this have to do with Ethereum?
          </Heading>
          <Layout>
            <Fill>
              <Appear fid="1">
                <Image src={images.casinochips} />
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="2">
                <Image src={images.vouchers} />
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="3">
                <Image src={images.stock} />
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="4">
                <Image src={images.clubstamp} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide notes={ethereumTokens} transition={['zoom']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="secondary" caps>
            Tokens
          </Heading>
          <Appear fid="1">
            <Image height={600} width={650} src={images.applicationtokens} />
          </Appear>
        </Slide>
        <Slide notes={kitties} transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={3} textColor="secondary" caps>
          It all started with cats
          </Heading>
          <Image height={400} src={images.cryptokitties} />
        </Slide>
        <Slide notes={breedkitties} transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Image src={images.kittiesbreed} />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
          Token standards primarily stipulate the following characteristics about a token:
          </Heading>
          <List>
            <Appear><ListItem>Ownership — How is token ownership handled?</ListItem></Appear>
            <Appear><ListItem>Creation — How are tokens created?</ListItem></Appear>
            <Appear><ListItem>Transfer & Allowance — How are tokens transferred, and how do we allow other addresses (contracts or externally owned accounts) transfer capability?</ListItem></Appear>
            <Appear><ListItem>Burn — How do we burn or destroy a token?</ListItem></Appear>
          </List>
        </Slide>
        <Slide notes={erc721interface} transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
          The ERC721 Non Fungible Token Standard
          </Heading>
          <Image src={images.erc721interface} />
        </Slide>
        <Slide notes={ercmetadata} transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Image src={images.erc721metadata} />
          <Image src={images.erc721enum} />
        </Slide>
        <Slide notes={openzeppelin} transition={['fade']} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>
            OpenZeppelin Implementation
          </Heading>
          <Link textSize={25}>https://github.com/OpenZeppelin/openzeppelin-solidity/tree/master/contracts/token/ERC721</Link>

          <List bulletStyle="-----------------------------------------------------------------------------------------------------------------------------------------">
            <Appear><ListItem textSize={25}><Text textSize={25} bold>ERC721Basic.sol</Text> Implements the standard interface</ListItem></Appear>
            <Appear><ListItem textSize={25}><Text textSize={25} bold>ERC721BasicToken.sol</Text>Provides a basic token implementation, minus the option metadata and enumerable extensions</ListItem></Appear>
            <Appear><ListItem textSize={25}><Text textSize={25} bold>ERC721Holder.sol</Text> Can be inherited to receive ERC721 transfers to a smart contract (implemented in ERC721Receiver.sol). Note: If you want your contract to receive ERC721, this is the one you want!</ListItem></Appear>
            <Appear><ListItem textSize={25}><Text textSize={25} bold>ERC721.sol</Text> Packages the optional metadata and enumerable extensions for use in ERC721Token.sol</ListItem></Appear>
            <Appear><ListItem textSize={25}><Text textSize={25} bold>ERC721Token.sol</Text> This is the full implementation of the standard, and what we will be focusing on.</ListItem></Appear>
          </List>
          {/* <Image src={images.kittiesbreed} /> */}
        </Slide>
        <Slide notes={breedkitties} transition={['fade']} bgColor="secondary" textColor="tertiary">
          {/* <Image src={images.kittiesbreed} /> */}
        </Slide>
        <Slide notes={breedkitties} transition={['fade']} bgColor="secondary" textColor="tertiary">
          {/* <Image src={images.kittiesbreed} /> */}
        </Slide>
      </Deck>
    );
  }
}
