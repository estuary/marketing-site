import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import { IconButton } from '@mui/material';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Cookies from 'universal-cookie';
import * as CookieConsent from 'vanilla-cookieconsent';
import { COOKIE_CONSENT_SETTINGS, COOKIE_NAME } from './shared';

declare const window: Window & { dataLayer: Record<string, unknown>[] };

const gtag: Gtag.Gtag = () => {
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error we want to use arguments as that is how they are implemented
  window.dataLayer.push(arguments);
};

const BUTTON_SIZE = {
  height: 50,
  width: 50,
};

const ConsentForm = () => {
  // This is kind of janky but if a user clears their cookie after accepting and clicks
  //  around CookieConsent still kept their consent in memory.
  const cookies = useMemo(() => new Cookies(), []);
  const cookieValue = cookies.get(COOKIE_NAME);

  // Start with true so there is not a weird flash during load
  const [decisionMade, setDecisionMade] = useState(true);

  // Store if we have got consent so we do not spam events
  const consentDecisionProvided = useRef(false);

  // Store if we setup listeners so we do not bind multiples
  const hasListeners = useRef(false);

  // Set the local variables and call gtag to inform Google about consent
  const handleDecision = useCallback(() => {
    // We have already told Google so we can skip
    if (consentDecisionProvided.current) {
      return;
    }

    // Snag the settings from cookie consent
    const advertisementSettings = CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied';
    const analyticsSettings = CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied';
    const functionalSettings = CookieConsent.acceptedCategory('functional') ? 'granted' : 'denied';

    // Tell Google about it
    gtag('consent', 'update', {
      ad_storage: advertisementSettings,
      ad_user_data: advertisementSettings,
      ad_personalization: advertisementSettings,
      analytics_storage: analyticsSettings,
      functionality_storage: functionalSettings,
      personalization_storage: functionalSettings,
      security_storage: 'granted',
    });

    // Update local state
    consentDecisionProvided.current = true;
    setDecisionMade(true);
  }, [setDecisionMade]);

  useEffect(() => {
    // If we have a cookie and it is valid we should be fine
    if (cookieValue && CookieConsent.validConsent()) {
      console.log('has consent');
      handleDecision();
      return;
    }

    consentDecisionProvided.current = false;
    setDecisionMade(false);

    // This handles both initial loading/showing of the banner and when
    //  a user deletes cookies in the middle of navigating the site.
    // The `reset` call is only really needed when navigating after a cookie
    //  was deleted but it does not hurt getting called on init.
    CookieConsent.reset(true);
    CookieConsent.run(COOKIE_CONSENT_SETTINGS);
  }, [cookieValue]);

  useEffect(() => {
    if (hasListeners.current) {
      return;
    }

    window.addEventListener('cc:onFirstConsent', () => {
      handleDecision();
    });
    window.addEventListener('cc:onChange', () => {
      consentDecisionProvided.current = false;
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
    </>
  );
};

export default ConsentForm;
