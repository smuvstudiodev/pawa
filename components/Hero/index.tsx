import React from 'react';
import Icon from '../Icon';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.descWrapper}>
          <div className={styles.heroDesc}>
            <div>
              <h3>
                #Payment<span>MadeEasy</span>
              </h3>
              <h5 className="py-40">
                Seamlessly pay bills, buy airtime & data, renew subscriptions,
                buy insurance and transfer money.
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
