import React, { useEffect } from 'react';
import { trackPageView } from './utils';
import { loadEuropaAnalyticsScript } from './helpers';

/**
 *
 * @param {*} param0
 * @returns
 */
export const EuropaAnalyticsAppExtra = () => {
  useEffect(() => {
    loadEuropaAnalyticsScript(trackPageView);
  }, []);

  return <></>;
};

export default EuropaAnalyticsAppExtra;
