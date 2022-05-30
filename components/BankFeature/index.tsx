import React from 'react';
import Icon from '../Icon';
import styles from './BankFeature.module.scss';

const BankFeature = () => {
  return (
    <div className={styles.bankFeature}>
      <div className={styles.bankFrame}>
        <Icon icon="bankFrame" />
      </div>
      <div className={styles.bankDesc}>
        <h4>Dedicated Account Number</h4>
        <p>
          Instantly pay for your electricity bills by transferring money from
          your mobile/internet banking app or USSD to your <b>Dedicated</b>{' '}
          account number and receive a token <b>Insantly</b> via email, SMS and
          in-app.
        </p>
        <div className={styles.fees}>
          <div>
            <small>Service fee</small>
          </div>
          <div>
            <span className="badge">
              <small>Pawa: ₦50</small>
            </span>
          </div>
          <div>
            <span className="badge">
              <small>Our competitors: ₦100 and more.</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankFeature;
