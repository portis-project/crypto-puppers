import './styles.scss';
import React from 'react';

const About: React.FunctionComponent = () => (
  <div className="about-portis">
    <div className="container">
      <div className="portis-heading">
        <h3>Portis Powered Puppers</h3>
        <p>Let's redefine how humans experience the blockchain</p>
      </div>

      <div className="about">
        <div className="content">
          <h4>About this demo</h4>
          <p>
            We created CryptoPuppers so anyone can have a look around and experience how Portis intergrates with any
            decentralized application. Want to offer your users the same frictionless experience? Find out how in our{' '}
            <a target="_bank" href="https://docs.portis.io/#/">
              Documentation
            </a>
            .
          </p>
          <p>
            Explore our{' '}
            <a target="_bank" href="https://github.com/portis-project/crypto-puppers">
              Github Repo
            </a>{' '}
            to see how we created this DApp and how we use the Portis{' '}
            <a target="_bank" href="https://github.com/portis-project/web-sdk">
              SDK
            </a>{' '}
            to offer users a web3 provider and wallet right in their existing browser.
          </p>
          <p>
            Adopting puppers is free, as it should be 🐕 As for gas fees? When using the Ropsten network they're on the
            house, thanks to our integration with the{' '}
            <a
              target="_bank"
              href="https://github.com/ethereum/EIPs/blob/f15cd4a294791468435f1d8ae4f471cf1aab3216/EIPS/eip-1613.md"
            >
              Gas Station Network ⛽️
            </a>
            .
          </p>
        </div>
        <div className="content">
          <h4>Bring the DApp revolution to mainstream users</h4>

          <p>
            Portis is a platform for making decentralized applications accessible to mainstream users. We offer
            developers an{' '}
            <a target="_bank" href="https://github.com/portis-project/web-sdk">
              SDK
            </a>{' '}
            that they can integrate into their DApp to make it familiar and friendly for their users, just like using a
            regular web app. Users can even easily purchase additional crypto straight to their wallet!
          </p>

          <p>
            Other solutions force decentralized applications to place the burden on the end users, making them install a
            third-party application on their device before they can even start using said application. In addition, the
            user’s private key is stored only on the device, making it both risky (if the device is lost/destroyed, all
            of the user’s funds are lost forever) and inconvenient – using the same wallet across different devices is
            an intimidating process for the average user.
          </p>
          <p>
            With Portis, the application developer takes care of this burden with three lines of code that integrate the
            Portis SDK into their DApp. Consequentially, users enjoy a built-in wallet, without needing to install
            anything, while still maintaining absolute control over their private key (Portis never sees the user’s
            password or unencrypted private key). In addition, thanks to Portis’ end-to-end encryption architecture,
            users enjoy a friendly cloud experience and can access the same account on all of their devices, through a
            familiar email and password login flow.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
