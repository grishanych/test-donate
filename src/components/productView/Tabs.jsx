import React, { useState } from 'react';
import styles from './ProductView.module.scss'


const TabComponent = ({productDescription}) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className={styles.tabs}>
                <div className={styles.descriptionTab}>
                    <div className={activeTab === 'tab1' ? styles.activeTab : 'tab'} onClick={() => handleTabClick('tab1')}>
                        Детальний опис
                    </div>
                </div>
                <div className={styles.reviewsTab}>
                    <div className={activeTab === 'tab2' ? styles.activeTab : 'tab'} onClick={() => handleTabClick('tab2')}>
                        Відгуки (0)
                    </div>
                </div>

            </div>
            <div className={styles.tabContent}>
                {activeTab === 'tab1' && <div>{productDescription}</div>}
                {activeTab === 'tab2' && <div>Відгуків ще немає</div>}
            </div>
        </>
    );
};

export default TabComponent;
