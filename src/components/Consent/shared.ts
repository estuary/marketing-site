import { CookieConsentConfig } from 'vanilla-cookieconsent';

export const COOKIE_NAME = 'estuary.consent.settings';

// If there are changes to what we load we need to increment this up to get consent again.
export const CONSENT_REVISION = 1;

export const COOKIE_CONSENT_SETTINGS: CookieConsentConfig = {
  autoShow: true,
  revision: CONSENT_REVISION,
  cookie: {
    name: COOKIE_NAME,
  },
  guiOptions: {
    consentModal: {
      layout: 'cloud inline',
      position: 'bottom center',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    functional: {},
    analytics: {},
    advertisement: {},
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description:
            'Hello, this website uses essential cookies to ensure its proper functioning and tracking cookies to understand how you interact with it. The latter is only set after permission.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage Individual preferences',
        },
        preferencesModal: {
          title: 'Manage cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Your Privacy Choices',
              description: `We use cookies to ensure basic website functionality and to improve your online experience. You can choose to opt in or out of each category whenever you want.`,
            },
            {
              title: 'Necessary',
              description:
                'Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functional',
              description:
                'Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.',
              linkedCategory: 'functional',
            },
            {
              title: 'Analytics',
              description:
                'Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Advertisement',
              description:
                'Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.',
              linkedCategory: 'advertisement',
            },
            {
              title: 'More information',
              description: 'For any queries in relation to our policy on cookies and your choices, please contact us.',
            },
          ],
        },
      },
    },
  },
};
