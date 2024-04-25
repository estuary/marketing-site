import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import { IconButton } from '@mui/material';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Cookies from 'universal-cookie';
import * as CookieConsent from 'vanilla-cookieconsent';
import CookieConsentBanner from './Banner';
import { COOKIE_NAME } from './shared';

declare const window: Window & { dataLayer: Record<string, unknown>[] };

function gtag() {
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error we want to use arguments as that is how they are implemented
  window.dataLayer.push(arguments);
}

const BUTTON_SIZE = {
  height: 50,
  width: 50,
};

const ConsentForm = () => {
  const hasListeners = useRef(false);
  const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing

  const cookies = useMemo(() => new Cookies(), []);
  const cookieValue = cookies.get(COOKIE_NAME);

  useEffect(() => {
    setDecisionMade(cookieValue !== undefined);
  }, []);

  const handleDecision = () => {
    const consentSettings = {
      ad_storage: CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      ad_user_data: CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      ad_personalization: CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      analytics_storage: CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
      functionality_storage: CookieConsent.acceptedCategory('functional') ? 'granted' : 'denied',
      personalization_storage: CookieConsent.acceptedCategory('functional') ? 'granted' : 'denied',
      security_storage: 'granted',
    };

    // @ts-expect-error gtag just passes along any arguments
    gtag('consent', 'update', consentSettings);
    setDecisionMade(true);
  };

  useLayoutEffect(() => {
    console.log('checking', CookieConsent.validConsent());
    if (cookieValue) {
      console.log('cookieValue', cookieValue);
      handleDecision();
    }
  }, []);

  useEffect(() => {
    if (hasListeners.current) {
      return;
    }

    window.addEventListener('cc:onFirstConsent', () => {
      handleDecision();
    });
    window.addEventListener('cc:onChange', () => {
      handleDecision();
    });

    hasListeners.current = true;
  }, []);

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
