import './styles.scss';
import React, { Fragment } from 'react';
import Header from 'components/Header';
import Adopt from 'components/Adopt';
import About from 'components/About';
import Footer from 'components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Puppers extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className="container">
          <div className="heading">
            <h3>Welcome to CryptoPuppers</h3>
            <h2>Even digital doggos need a home</h2>
          </div>

          <Adopt />
        </div>

        <About />
        <Footer />
        <ToastContainer />
      </Fragment>
    );
  }
}
