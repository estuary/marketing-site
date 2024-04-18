import React, { useEffect, useState, useMemo, useCallback } from 'react';
import CookieConsentBanner from './Banner';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';
import * as CookieConsent from 'vanilla-cookieconsent';
import { COOKIE_NAME } from './shared';
import { IconButton } from '@mui/material';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';

declare const window: Window & { dataLayer: Record<string, unknown>[] };

const BUTTON_SIZE = {
  height: 50,
  width: 50,
};

const ConsentForm = () => {
  const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing
  const cookies = useMemo(() => new Cookies(), []);

  function gtag(...args) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }

  const sendConsent = useCallback((consent) => {
    gtag('consent', 'default', consent);
  }, []);

  useEffect(() => {
    console.log('cookie effect - decision');
    if (cookies.get(COOKIE_NAME) !== undefined) {
      setDecisionMade(true);
    } else {
      setDecisionMade(false);
    }
  }, [cookies, setDecisionMade, sendConsent]);

  const handleDecision = () => {
    console.log('sendConsent');
    sendConsent({
      ad_storage: CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      ad_user_data: CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      ad_personalization: CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      analytics_storage: CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
      functionality_storage: CookieConsent.acceptedCategory('functional') ? 'granted' : 'denied',
      personalization_storage: CookieConsent.acceptedCategory('functional') ? 'granted' : 'denied',
      security_storage: 'granted', //necessary
    });
    setDecisionMade(true);
  };

  useEffect(() => {
    console.log('listener effect');

    window.addEventListener('cc:onFirstConsent', () => {
      handleDecision();
    });
    window.addEventListener('cc:onChange', () => {
      handleDecision();
    });
  }, []);

  console.log('decisionMade', decisionMade);

  return (
    <>
      {decisionMade ? (
        <IconButton
          color="info"
          sx={{
            ...BUTTON_SIZE,
            bottom: 5,
            left: 5,
            opacity: 0.95,
            position: 'sticky',
            zindex: 9999,
          }}
          type="button"
          onClick={() => CookieConsent.showPreferences()}
        >
          <CookieOutlinedIcon sx={BUTTON_SIZE} />
        </IconButton>
      ) : null}
      <CookieConsentBanner />
    </>
  );
};

export default ConsentForm;
