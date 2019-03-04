import './styles.scss';
import React from 'react';
import { default as Adoption } from '../../../build/contracts/Adoption.json';
import { default as pups } from './pets.json';
import { toast } from 'react-toastify';
import { web3, portis, web3networks } from '../../services/web3';
import { AdoptionSuccess } from 'components/AdoptionSuccess';
import * as Sebastian from '../../assets/images/puppers/dog1.png';
import * as Apollo from '../../assets/images/puppers/dog2.png';
import * as Benji from '../../assets/images/puppers/dog3.png';
import * as Snuggles from '../../assets/images/puppers/dog4.png';
const contract = require('truffle-contract');
const puupersImgs = [Sebastian, Apollo, Benji, Snuggles];

interface IPupperItem {
  id: number;
  name: string;
  picture: string;
}

export default class Adopt extends React.Component<{}, { adopters: string[]; loaders: boolean[] }> {
  adoptionContract: any;
  explorer: string = '';
  state = {
    adopters: [],
    loaders: new Array(pups.length).fill(false),
  };

  async componentDidMount() {
    this.adoptionContract = contract(Adoption);
    this.adoptionContract.setProvider(web3.currentProvider);
    this.loadAdopters();
    const networkId = await web3.eth.net.getId();
    this.explorer = web3networks[networkId].explorer;
  }

  async loadAdopters() {
    const contractInstance = await this.adoptionContract.deployed();
    let adopters: string[] = await contractInstance.getAdopters.call();
    adopters = adopters
      .slice(0, 4)
      .map((address: string) => address.toLowerCase())
      .map((address: string) =>
        address === '0x0000000000000000000000000000000000000000'
          ? ''
          : address.substring(0, 5) + '...' + address.substring(address.length - 3),
      );
    this.setState({ adopters });
  }

  handleAdopt = async (pupIdx: number) => {
    try {
      this.setState(state => {
        const loaders = state.loaders.map((item, idx) => (idx === pupIdx ? !item : item));
        return { loaders };
      });

      const contractInstance = await this.adoptionContract.deployed();
      const accounts = await portis.provider.enable();
      const result = await contractInstance.adopt(pupIdx, { from: accounts[0] });
      this.loadAdopters();
      toast(<AdoptionSuccess exploreTx={`${this.explorer}/tx/${result.tx}`} pupperName={pups[pupIdx].name} />);
    } catch (error) {
      console.error(error);
      toast.error(error);
    } finally {
      this.setState(state => {
        const loaders = state.loaders.map((item, idx) => (idx === pupIdx ? !item : item));
        return { loaders };
      });
    }
  };

  render() {
    return (
      <div className="adopt-a-doggo">
        {pups.map((pup: IPupperItem, pupIdx: number) => (
          <div key={pupIdx} className="pupper-item">
            <div className="pupper-card">
              <img className="pupper-picture" src={puupersImgs[pupIdx]} />
              <div className="owner">
                <span>Owner</span>
                {(this.state.adopters[pupIdx] && <p>{this.state.adopters[pupIdx]}</p>) || (
                  <p>{pup.name} needs a home</p>
                )}
              </div>
              <div className="pupper-tag">{pup.name}</div>
            </div>
            <button
              disabled={this.state.loaders[pupIdx]}
              className={this.state.loaders[pupIdx] ? 'button is-loading' : 'button'}
              onClick={() => this.handleAdopt(pupIdx)}
            >
              {(this.state.loaders[pupIdx] && (
                <span className="loading-state">
                  <div className="dots">
                    <div className="dot" />
                    <div className="dot dot2" />
                    <div className="dot dot3" />
                  </div>
                </span>
              )) || <span>Adopt Me</span>}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
