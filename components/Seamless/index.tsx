import React from 'react';
import Icon from '../Icon';
import styles from './Seamless.module.scss'

const Seamless = () => {
  return (
    <div className={styles.seamless}>
      <div>
        <h3>The Seamless Way to Pay</h3>
        <div className={styles.divider}>
          <div className="divider-long"></div>
          <div className="divider-short"></div>
        </div>
      </div>
      <div className={styles.service}>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <Icon icon="electricity" />
          </div>
          <p className="py-10">Electricity bills</p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <Icon icon="cable" />
          </div>

          <p className="py-10">Cable subscriptions</p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <Icon icon="airtime" />
          </div>
          <p className="py-10">Buy airtime</p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <Icon icon="data" />
          </div>
          <p className="py-10">Buy data</p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <Icon icon="send" />
          </div>
          <p className="py-10">Send & receive money</p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <Icon icon="insurance" />
          </div>
          <p className="py-10">Pay for insurance</p>
        </div>
      </div>
    </div>
  );
};

export default Seamless;
