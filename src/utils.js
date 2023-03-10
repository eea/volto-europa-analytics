export const trackPageView = () =>
  window.addEventListener('wtAnalyticsReady', function () {
    if ($wt.analytics.isTrackable()) {
      $wt.trackPageView();
    }
  });
