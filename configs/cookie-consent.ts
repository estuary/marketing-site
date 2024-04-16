import * as CookieConsent from 'vanilla-cookieconsent';

function logConsent() {
  // Retrieve all the fields
  const cookie = CookieConsent.getCookie();
  const preferences = CookieConsent.getUserPreferences();

  const gtagConsentSettings = {
    functionality_storage: CookieConsent.acceptedCategory('necessary') ? 'granted' : 'denied',
    security_storage: CookieConsent.acceptedCategory('necessary') ? 'granted' : 'denied',
    analytics_storage: CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
    personalization_storage: CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
    ad_storage: CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
    ad_user_data: CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
    ad_personalization: CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
  };

  console.log('preferences', preferences);
  console.log('cookie', cookie);
  console.log('gtagConsentSettings', gtagConsentSettings);

  window.gtag('consent', 'update', gtagConsentSettings);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'Cookie preferences',
    cookies: CookieConsent.getUserPreferences().acceptedCategories.join(' '),
  });
}

export default {
  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {},
    marketing: {},
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'Cookie usage',
          description: 'The usage of cookies helps to improve the usage of this website.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage Individual preferences',
        },
        preferencesModal: {
          title: 'Manage cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Accept current selection',
          closeIconLabel: 'Close modal',
          sections: [
            {
              title: 'Type of Cookies',
              description: 'Allowing Analytics cookies helps to improve the website.',
            },
            {
              title: 'Strictly Necessary cookies',
              description:
                'These cookies are essential for the proper functioning of the website and cannot be disabled.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics',
              description:
                'These cookies collect information about how you use the website. All of the data is anonymized and cannot be used to identify you.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Marketing',
              description: `These cookies are ones that our advertising partners may set on our site. They use them to create a profile of your interests and show relevant ads on other sites. They do not store personal information.`,
              linkedCategory: 'marketing',
            },
            {
              title: 'More information',
              description:
                'For any queries in relation to our policy on cookies and your choices, please see our <a href="/...">Privacy Policy</a> or <a href="/...">contact us</a>.',
            },
          ],
        },
      },
    },
  },
  onFirstConsent: ({ cookie }) => {
    // do something
    console.log('first consent called', cookie);
    logConsent();
  },
  onConsent: function () {
    console.log('consent called');
    if (CookieConsent.acceptedCategory('analytics')) {
      // Analytics category enabled
    }

    if (CookieConsent.acceptedService('Google Analytics', 'analytics')) {
      // Google Analytics enabled
    }
  },
};
