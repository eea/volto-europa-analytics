import { EuropaAnalyticsAppExtra } from './EuropaAnalyticsExtra';

const applyConfig = (config) => {
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '',
      component: EuropaAnalyticsAppExtra,
    },
  ];
  config.settings = {
    ...config.settings,
    ...{
      europaAnalyticsParams: {
        sitePath: 'demo-climate-advisory-board.devel4cph.eea.europa.eu',
      },
    },
  };

  return config;
};

export default applyConfig;
