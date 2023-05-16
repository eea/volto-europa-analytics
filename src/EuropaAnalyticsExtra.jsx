import React, { useEffect } from 'react';
import {
  loadEuropaAnalyticsScript,
} from './helpers';

loadEuropaAnalyticsScript();
/**
 *
 * @param {*} param0
 * @returns
 */
export const EuropaAnalyticsAppExtra = (props) => {
  const { pathname } = props;

  useEffect(() => {
    if(window.$wt) $wt.trackPageView();
  }, [pathname]);
  return <></>;
};

export default EuropaAnalyticsAppExtra;
