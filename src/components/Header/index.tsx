import './styles.scss';
import React from 'react';
import { web3, web3networks, portis } from '../../services/web3';

export default class Header extends React.Component {
  state = {
    networkName: '',
    networkExplorer: '',
    wallet: '',
  };

  async componentDidMount() {
    portis.onLogin(wallet => {
      this.setState({ wallet });
    });
    const networkId = await web3.eth.net.getId();
    const networkName = web3networks[networkId].name;
    const networkExplorer = web3networks[networkId].explorerAddress;
    this.setState({ networkName, networkExplorer });
  }

  render() {
    return (
      <header className="header">
        <div className="branding">
          <div className="logo" />
          <p>CryptoPuppers</p>
        </div>
        <div className="status">
          {this.state.networkName && (
            <p className="network-name">
              {this.state.networkName}
              {this.state.wallet && (
                <React.Fragment>
                  <br />
                  <span className="wallet-address">
                    <span title={this.state.wallet}>
                      {this.state.wallet.substring(0, 5) +
                        '...' +
                        this.state.wallet.substring(this.state.wallet.length - 3)}
                    </span>
                    <a href={this.state.networkExplorer + '/address/' + this.state.wallet} target="_blank">
                      ↗
                    </a>
                  </span>
                </React.Fragment>
              )}
            </p>
          )}
          <span className="status-icon" onClick={() => portis.showPortis()} />
        </div>
      </header>
    );
  }
}
