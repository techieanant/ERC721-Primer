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
  erc721enum: require('../assets/erc721enum.jpg'),
  constructor: require('../assets/constructor.jpg'),
  getterfunctions: require('../assets/getterfunctions.jpg'),
  mintfunc: require('../assets/mintfunc.jpg'),
  burnfunc: require('../assets/burnfunc.jpg'),
  sampletoken: require('../assets/sampletoken.jpg'),
  getnexttokenid: require('../assets/getnexttokenid.jpg'),
  projectsusingnft: require('../assets/projectsusingnft.jpg'),
  thankyou: require('../assets/thankyou.gif'),
  eth: require('../assets/eth.gif')

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

const tokenchars = `
<p>
Ownership 
When you buy ERC-20 tokens, your rights of ownership will be written in the smart contracts. The smart contract also has data of how much tokens each and every address will have after the deal…and that’s it. The thing is that these contracts don’t need to worry about specific tokens because they are fungible, so they are all the same.
However, the value of one ERC-721 token is not the same as another ERC-721 token because of its non-fungibility. Adding an address and balance to the contract won’t be enough, a token’s unique ownership details also need to be added.
</p>
<p>
Creation 
Since each individual token is unique, we must create each individual token. With ERC20, we can easy create a batch of 100 more by adding to the totalSupply_. However, since we maintain an array of tokens in an ERC721 standard, we need to add each token to that array separately.
</p>
<p>
Transfer & Allowance
When we want another contract or address to be able to transfer our tokens, we need to allow the use the contract address to do that for us — this need arises in many instances in distributed applications — escrows, games, auctions, etc. Hence, we need a way to approve other address to spend our tokens. Then, another transfer function requires the contract to check the allowance of who is allowed to spend them. 
After checking the sender and receiver addresses are valid, the clearApproval() function is used to remove the approval of the transfer from the original owner of the token, so that a previously approved spender may not continue to transfer the token. As before the transferFrom() function is used to remove token ownership from the _from address and add token ownership to the _to address.
</p>
<p>
Burning
For ERC721 tokens, we need to ensure that the specific token id or index is eliminated. First, we clearApproval(), then remove the token from ownership via removeTokenFrom() and use the Transfer event to alert this change on the front end. Next, we eliminate the metadata associated with that token by deleting what is mapped to that particular token index. Lastly, much like removing a token from ownership, we rearrange our allTokens array so that we replace the _tokenId index with the last token in the array.
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

const metadata = `
<p>
In order to set a token’s URI data, the following _setTokenURI() function is also included. Here using the token Id that you created via _mint() and your desired URI information, you can set the data that is mapped to a token ID in tokenURIs. Note the requirement in this function that we determine that a token Id exists (meaning someone owns it) prior to assigning data.
</p>
`;

const createtoken = `
<p>
In order to keep the token IDs simple and sequential, an internal function _getNextTokenId() counts the current token supply (using the totalSupply getter) and adds 1. This is then used in the internal _mint function as the tokenId. Next, the metadata URI (if provided) is set using the _setTokenURI function and the newly created tokenId.
</p>
`;

const future = `
<p>
As the more practical uses of blockchain technology emerge and blockchain getting main-stream, you can expect more people tokenizing their digital as well as tangible assets on the blockchain. NFTs are a perfect fit for this use case.
</p>
`;

const usecases = `
<p>
Non-fungible tokens are in practical sense, title deeds to any property or certificate. The token doesn't define whether the property or certificate is digital or physical - or civil - in nature. It is up to the user to choose and define the practical use of the non-fungible token.
</p>
`;

const artgallery = `
<p>
An art gallery hosts a marketplace for paintings. The platform of the art gallery transfers ownership of the paintings to the customer, governed by a licensing contract set by the artist. Each painting is represented by a non-fungible token, encoded within the artwork itself.
</p>
<p>
The non-fungible token and the sales contract(s) associated with it provide the artist means of copyright and licensing in the digital world, and fine artists means of distinguishing their original artwork from forgery.
</p>
<p>
The non-fungible token provide the gallerist means to prove that their hosted artwork is indeed authentic, as well as means of offering custom contracts such as renting, licensing, exhibitions and direct sales. The non-fungible token provides the customer proof of authenticity and flexible deals on fine art both in collection and commerce.
</p>
`;

const conclusion = `
<p>
Non-fungible tokens may transform our society in ways never seen before since the invention of the printing press, by taking out the middleman in business contracts and bureaucracy.
Many if not most tasks today delegated to public servants, accountants, secretaries, commercial agents and opaque middlemen can be automated with a transparent, trustless system. This new method will liberate us from boring tasks and uncertainty in many aspects of modern life.
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
          <Image src={images.eth} />
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
        <Slide notes={fungibilityExample} transition={['spin', 'slide']} bgColor="tertiary">
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
        <Slide notes={tokenExamples} transition={['spin', 'slide']} bgColor="primary" textColor="secondary">
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
        <Slide notes={breedkitties} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
          CryptoKitties
          </Heading>
          <Image src={images.kittiesbreed} />
        </Slide>
        <Slide notes={tokenchars} transition={['zoom']} bgColor="primary" textColor="tertiary">
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
        <Slide notes={ercmetadata} transition={['fade', 'zoom']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
          The ERC721 Non Fungible Token Standard
          </Heading>
          <Image src={images.erc721metadata} />
          <Image src={images.erc721enum} />
        </Slide>
        <Slide notes={openzeppelin} transition={['spin', 'slide']} bgColor="tertiary" textColor="primary">
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
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="secondary" textColor="tertiary">
          <Heading margin="0 0 50px 0" size={6} textColor="primary" caps>
            Most Relevant Functions
          </Heading>
          <Appear>
            <Text textColor="tertiary">
            Set the name and symbol of the contract
            </Text>
          </Appear>
          <Appear>
            <Image src={images.constructor} />
          </Appear>
          <Appear>
            <Text textColor="tertiary">
            Getter
            </Text>
          </Appear>
          <Appear>
            <Image src={images.getterfunctions} />
          </Appear>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="secondary" textColor="tertiary">
          <Heading margin="0 0 50px 0" size={6} textColor="primary" caps>
            Most Relevant Functions
          </Heading>
          <Appear>
            <Text textColor="tertiary">
            Mint - Creates a new token with a given Id (reverts if this Id already exists) and transfers to a given address
            </Text>
          </Appear>
          <Appear>
            <Image src={images.mintfunc} />
          </Appear>
          <Appear>
            <Text textColor="tertiary">
            Burn - Removes from circulation
            </Text>
          </Appear>
          <Appear>
            <Image src={images.burnfunc} />
          </Appear>
        </Slide>
        <Slide notes={metadata} transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading margin="0 0 50px 0" size={6} textColor="primary" caps>
            Metadata
          </Heading>
          <Appear>
            <Text textColor="tertiary">
              Metadata is crucial to the vast majority of NFTs, as it gives the token it's unique attributes. In CryptoKitties for instance, this can be the name of the cat, it's “cattributes”, and other useful information.
            </Text>
          </Appear>
        </Slide>
        <Slide note={createtoken} transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading margin="0 0 20px 0" size={6} textColor="primary" caps>
        Creating a token
          </Heading>
          <Appear>
            <Image src={images.sampletoken} />
          </Appear>
        </Slide>
        <Slide notes={future} transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading margin="0 0 20px 0" size={6} textColor="tertiary" caps>
          The Future of Non Fungible Tokens
          </Heading>
          <Image src={images.projectsusingnft} />
        </Slide>
        <Slide notes={usecases} transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading margin="0 0 20px 0" size={6} textColor="tertiary" caps>
          The Future of Non Fungible Tokens
          </Heading>
          <Appear>
            <Text textColor="tertiary">
            Automating business contracts
            </Text>
          </Appear>
          <List>
            <Appear><ListItem>Proof of Origin</ListItem></Appear>
            <Appear><ListItem>Proof of Ownership</ListItem></Appear>
            <Appear><ListItem>Proof of Authenticity</ListItem></Appear>
            <Appear><ListItem>Licensing and Royalties</ListItem></Appear>
            <Appear><ListItem>KYC/AML</ListItem></Appear>
            <Appear><ListItem>Supply Chain Management</ListItem></Appear>
            <Appear><ListItem>Legal Contracts</ListItem></Appear>
            <Appear><ListItem>Leasing and Renting, Subscriptions</ListItem></Appear>
          </List>
        </Slide>
        <Slide notes={artgallery} transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading margin="0 0 20px 0" size={6} textColor="tertiary" caps>
          The Future of Non Fungible Tokens
          </Heading>
          <Appear>
            <Text textColor="tertiary">
            Art Gallery
            </Text>
          </Appear>
          <List>
            <Appear><ListItem>The origin of the work, or who painted it</ListItem></Appear>
            <Appear><ListItem>The current owner</ListItem></Appear>
            <Appear><ListItem>The licensing contract and whether the conditions are met</ListItem></Appear>
            <Appear><ListItem>Relevant information about the artwork</ListItem></Appear>
            <Appear><ListItem>The sales contract(s) associated with the token</ListItem></Appear>
          </List>
        </Slide>
        <Slide notes={conclusion} transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading margin="0 0 20px 0" size={6} textColor="tertiary" caps>
              Conclusion
          </Heading>
          <Text textColor="tertiary">
              The transition will be rapid, once the foundation is laid.
          </Text>
          <Appear>
            <Image src={images.thankyou} />
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
