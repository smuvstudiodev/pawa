import React from 'react';
import Icon from '../Icon';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      
      <div className="container">
      <div className={styles.logo}>
        <Icon icon="logo" />
      </div> 
        <div className={styles.heroColumn}>
          <div className={styles.heroDesc}>
            <h3>One wallet for all your payment needs.</h3>
            <h5 className="text-light py-40">
              The most seamless way to send & recieve money, pay electricity
              bills, cable subscription, buy airtime, buy data, pay for
              insurance.
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
          <div className={styles.pawa}>
            <Icon icon="phone" />
            <Icon icon="phoneStraight" />
            <Icon icon="pawa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
