export default {
  trackingIds: ['G-P1PZPE4HHZ'],
  // This object gets passed directly to the gtag config command
  // This config will be shared across all trackingIds
  gtagConfig: {
    anonymize_ip: true,
    ignore_referrer: true,
    cookie_expires: 0,
  },
  // This object is used for configuration specific to this plugin
  pluginConfig: {
    head: true,
    respectDNT: true,
  },
};
