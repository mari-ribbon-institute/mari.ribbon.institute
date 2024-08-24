import React from 'react';
import styles from './FooterSection.module.css';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <div className={styles.FooterWrapper}>
      <hr />
        <div className={styles.FooterGrid}>
          <div className={styles.FooterGrid1}>
            <Image

              alt='mari logo'
              src='/logo.png'
              width={70}
              height={70}
            />
            <h6 className={styles.FooterTitle}>Mari</h6>
          </div>
          <div className={styles.FooterGrid1}>
            
          </div>
        </div>
      <hr />
    </div>
  )
}

export default FooterSection
