import Image from 'next/image';
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
                Spice up your life with discounted bill payments, affordable insurance packages, swift wallet transactions, a secure virtual dollar card, cash rewards, and more. 
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
            <Image
              src="/phone.png"
              alt="Pawa app"
              width={784}
              height={519}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
