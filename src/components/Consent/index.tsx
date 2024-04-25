import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import { IconButton } from '@mui/material';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Cookies from 'universal-cookie';
import * as CookieConsent from 'vanilla-cookieconsent';
import CookieConsentBanner from './Banner';
import { COOKIE_NAME } from './shared';

declare const window: Window & { dataLayer: Record<string, unknown>[] };

const BUTTON_SIZE = {
  height: 50,
  width: 50,
};

const ConsentForm = () => {
  const hasListeners = useRef(false);
  const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing
  const cookies = useMemo(() => new Cookies(), []);

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    // @ts-expect-error we want to use arguments as that is how they are implemented
    window.dataLayer.push(arguments);
  }

  const sendConsent = useCallback((consent) => {
    // @ts-expect-error gtag just passes along any arguments
    gtag('consent', 'update', consent);
  }, []);

  useLayoutEffect(() => {
    // @ts-expect-error gtag just passes along any arguments
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
    });
  }, []);

  useEffect(() => {
    setDecisionMade(cookies.get(COOKIE_NAME) !== undefined);
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
