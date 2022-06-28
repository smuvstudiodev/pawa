import React from 'react';
import Icon from '../Icon';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
     
      <div className="container">
        <div>
          <div className={styles.heroDesc}>
            <h3>#PaymentMadeEasy</h3>
            <h5 className="py-40">
              Seamlessly pay bills, buy airtime & data, renew subscriptions, buy
              insurance and transfer money.
            </h5>
            <div className={styles.btnWrap}>
              <div className={styles.appButton}>
                <Icon icon="appStore" />
              </div>
              <div className={styles.appButton}>
                <Icon icon="playStore" />
              </div>
            </div>
          </div>
          <div className={styles.phone}>
            <Icon icon="phoneStraight" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
