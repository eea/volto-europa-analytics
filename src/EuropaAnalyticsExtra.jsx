import React, { useEffect } from 'react';
import {
  loadEuropaAnalyticsScript,
  removeEuropaAnalyticsScript,
} from './helpers';

/**
 *
 * @param {*} param0
 * @returns
 */
export const EuropaAnalyticsAppExtra = (props) => {
  const { pathname } = props;

  useEffect(() => {
    loadEuropaAnalyticsScript();

    // this is the cleaner function, it will be executed before ony other code inside the setup function
    // replace script loaded on each route change
    return () => {
      removeEuropaAnalyticsScript();
    };
  }, [pathname]);
  return <></>;
};

export default EuropaAnalyticsAppExtra;
