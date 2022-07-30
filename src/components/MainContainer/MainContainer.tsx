import React from 'react';

import styles from './MainContainer.module.css';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <main className={styles.mainContainer}>{children}</main>
);

export default MainContainer;
