import * as React from 'react';
import clsx from 'clsx';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import OutboundLink from '../components/LinksAndButtons/OutboundLink';
import {
    legalWrapper,
    privacyRoot,
    legalUnderline,
    lastUpdatedStyle,
    legalBold,
} from '../components/styles.module.less';

export const Head = () => <Seo title="Privacy Policy" />;

const PrivacyPolicy = () => {
    return (
        <Layout>
            <div className={clsx(legalWrapper, privacyRoot)}>
                <h2>Privacy Policy</h2>
                <p className={lastUpdatedStyle}>Revised as of [May 28, 2024]</p>
                <h5>We respect your privacy.</h5>
                <p>
                    Estuary Technologies, Inc. (&quot;
                    <span className={legalUnderline}>Estuary</span>,” “
                    <span className={legalUnderline}>we</span>,” “
                    <span className={legalUnderline}>us</span>,” or “
                    <span className={legalUnderline}>our</span>”) welcomes you.
                    Our collection and use of information from visitors of our
                    Website and Customers of our Product and related services
                    (collectively with the Website and Product, the “
                    <span className={legalUnderline}>Services</span>”) is
                    subject to the following privacy policy (the “
                    <span className={legalUnderline}>Privacy Policy</span>”),
                    which may be updated by us from time to time without notice
                    to you.
                </p>
                <p>
                    By visiting our Website, visitors are agreeing to the terms
                    of this Privacy Policy and the accompanying Terms of Use.
                </p>
                <p>
                    By using the Website, or by signing up to access and use the
                    Services, you acknowledge that you have read, understood and
                    agree to be legally bound by the terms of this Privacy
                    Policy and the accompanying Terms of Use. If you do not
                    agree to (or cannot comply with) all of the terms of this
                    Privacy Policy and the Terms of Use, you may not access or
                    use the Services.
                </p>
                <p>
                    If you accept or agree to this Agreement on behalf of a
                    company or other legal entity, you represent and warrant
                    that you have the authority to bind that company or other
                    legal entity to the Agreement and, in such event, “
                    <span className={legalUnderline}>you</span>” and “
                    <span className={legalUnderline}>your</span>” will refer and
                    apply to that company or other legal entity and any
                    Authorized Users.
                </p>
                <p>
                    Capitalized terms not defined in this Privacy Policy shall
                    have the meaning set forth in our Terms of Use or the Master
                    Software Agreement, as applicable.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    THE INFORMATION WE COLLECT AND HOW WE USE IT
                </p>
                <p>
                    In the course of operating the Services, Estuary collects or
                    receives the following types of information from you, which
                    may include personal information:
                </p>

                <p className={legalBold}>Contact Information</p>
                <p>
                    We collect contact information through our Services; contact
                    information typically includes your name, email address, and
                    any information you provide in messages to us. We use such
                    contact information for purposes such as providing you with
                    information about the Services, responding to your
                    inquiries, sending you email alerts (including marketing
                    emails), registering you as an Authorized User of the
                    Product, and providing you the Services.
                </p>

                <p className={legalBold}>Payment Information</p>
                <p>
                    If you purchase the Product, to process your payment you
                    will be required to provide to us certain billing
                    information, which may include providing a credit card
                    number, expiration date, bank account information, billing
                    address, activation code, and similar information
                    (collectively, “
                    <span className={legalUnderline}>Payment Information</span>
                    ”). You authorize our third-party payment vendors including,
                    without limitation, Stripe, to collect, process, and store
                    such Payment Information in accordance with their respective
                    privacy policies. We reserve the right to change our payment
                    vendors at any time, or to use additional payment vendors,
                    at our discretion, and will update this Privacy Policy from
                    time to time accordingly. By purchasing the Product, you
                    agree to be bound by Stripe&apos;s terms and conditions and
                    privacy policy, which are available at
                    https://stripe.com/legal and https://stripe.com/us/privacy,
                    respectively.
                </p>

                <p className={legalBold}>Activity Information</p>
                <p>
                    We will have access to any Customer Content that you submit
                    to us for our portability services. Customer content
                    includes: (i) the data that Customer, or its Client, as
                    applicable, requests Estuary to transfer from one system to
                    another, (ii) configuration information to connect to the
                    relevant systems, such as passwords and user
                    identifications, and (iii) other information provided to
                    Estuary to help configure how and when the data transfer
                    will occur, such as notification preferences. We only access
                    and use the Customer Content to provide you the data
                    portability services.
                </p>

                <p className={legalBold}>Server Log Information</p>
                <p>
                    Our servers and CookieFirst (discussed below) keep log files
                    that record data each time a device accesses the servers.
                    The log files contain the following items:
                </p>
                <ul>
                    <li>Your consent status or the withdrawal of consent</li>
                    <li>Your IP address</li>
                    <li>Information about your Browser</li>
                    <li>Information about your Device</li>
                    <li>
                        The date and time you have visited our website, and the
                        pages you&apos;ve clicked on while on our Services and
                        time spent on the Services
                    </li>
                    <li>
                        The webpage url where you saved or updated your consent
                        preferences
                    </li>
                    <li>
                        The approximate location of the user that saved their
                        consent preference
                    </li>
                    <li>
                        A universally unique identifier (UUID) of the website
                        visitor that clicked the cookie banner
                    </li>
                    <li>
                        Other similar data about the nature of your access and
                        how you use the Services
                    </li>
                </ul>
                <p>
                    We may use these log files for purposes such as assisting in
                    monitoring and troubleshooting errors and incidents,
                    analyzing traffic, or optimizing the user experience.
                </p>

                <p className={legalBold}>Cookies</p>
                <p>
                    We may collect information using “cookie” and other similar
                    technologies. Cookies are small packets of data that a
                    website stores on your computer&apos;s or mobile
                    device&apos;s hard drive (or other storage medium) so that
                    your computer will “remember” information about your use. We
                    use both first and third party session cookies and
                    persistent cookies. Below is a general primer on session and
                    persistent cookies; information collected by cookies depends
                    on its particular purpose. For more information, please see
                    the information regarding analytics providers discussed
                    further below.
                </p>
                <ul>
                    <li>
                        <span className={legalBold}>Session Cookies:</span> We
                        use session cookies to make it easier for you to
                        navigate our Services. A session ID cookie expires when
                        you close the Services.
                    </li>
                    <li>
                        <span className={legalBold}>Persistent Cookies:</span> A
                        persistent cookie remains on your device for an extended
                        period of time or until you delete them. Persistent
                        cookies enable us to track and target the interests of
                        our visitors to personalize the experience on our
                        Services. Also, to the extent we provide a log-in portal
                        or related feature on our Services, persistent cookies
                        can be used to store your passwords so that you don’t
                        have to enter it more than once.
                    </li>
                </ul>
                <p>
                    To obtain and record your consent for the use and storage of
                    cookies, we use a consent management platform: CookieFirst.
                    This technology is provided by Digital Data Solutions BV,
                    Plantage Middenlaan 42a, 1018 DH, Amsterdam, The
                    Netherlands. Website:{' '}
                    <OutboundLink href="https://cookiefirst.com">
                        https://cookiefirst.com
                    </OutboundLink>{' '}
                    referred to as CookieFirst.
                </p>
                <p>
                    When you access our website, a connection is established
                    with CookieFirst&apos;s server and we seek consent from you
                    regarding the use of certain cookies. If approved,
                    CookieFirst then stores a cookie in your browser, which then
                    activates only those cookies to which you have consented
                    (and documents such activity accordingly). The data
                    processed is stored until the predefined storage period
                    expires or you request to delete the data. Certain mandatory
                    legal storage periods may apply notwithstanding the
                    aforementioned.
                </p>
                <p>
                    For the avoidance of doubt, CookieFirst is used to obtain
                    the legally required consent for the use of cookies. The
                    legal basis for this is article 6(1)(c) of the General Data
                    Protection Regulation (GDPR).
                </p>
                <p>
                    We have concluded a data processing agreement with
                    CookieFirst. This is a contract required by data protection
                    law, which ensures that data of our website visitors is only
                    processed in accordance with our instructions and in
                    compliance with the GDPR.
                </p>

                <p className={legalBold}>Third-Party Analytics Providers</p>
                <p>
                    We use one or more third–party analytics services to
                    evaluate your use of the Services, as the case may be, by
                    compiling reports on activity (based on their collection of
                    IP addresses, Internet service provider, browser type,
                    operating system and language, referring and exit pages and
                    URLs, data and time, amount of time spent on particular
                    pages, what sections of the Services you visit, number of
                    links clicked, search terms and other similar data with
                    respect to how you use the Services) and analyzing
                    performance metrics. These third parties use cookies and
                    other technologies to help collect, analyze, and provide us
                    reports or other data.
                </p>
                <p>
                    By accessing and using the Services, you consent to the
                    processing of data about you by these analytics providers in
                    the manner and for the purposes set out in this Privacy
                    Policy. For more information on these third parties,
                    including how to opt out from certain data collection,
                    please visit the sites below. Please be advised that if you
                    opt out of any service, you may not be able to use the full
                    functionality of the Services.
                </p>

                <p>
                    For Google Analytics, please visit:{' '}
                    <OutboundLink href="https://www.google.com/analytics">
                        https://www.google.com/analytics
                    </OutboundLink>
                </p>
                <p>
                    For Hotjar, please visit:{' '}
                    <OutboundLink href="https://www.hotjar.com/legal/policies/privacy/">
                        https://www.hotjar.com/legal/policies/privacy/
                    </OutboundLink>
                </p>
                <p>
                    For Mailchimp please visit:{' '}
                    <OutboundLink href="https://mailchimp.com/legal/privacy/">
                        https://mailchimp.com/legal/privacy/
                    </OutboundLink>
                </p>
                <p>
                    For HubSpot please visit:{' '}
                    <OutboundLink href="https://legal.hubspot.com/privacy-policy">
                        https://legal.hubspot.com/privacy-policy
                    </OutboundLink>
                </p>

                <p className={legalBold}>Third-Party OAuth Providers</p>
                <p>
                    The use and transfer of information received from Google
                    APIs to any other app will adhere to{' '}
                    <OutboundLink href="https://developers.google.com/terms/api-services-user-data-policy">
                        Google API Services User Data Policy
                    </OutboundLink>
                    , including the Limited Use requirements.
                </p>

                <p className={legalBold}>Aggregate Data</p>
                <p>
                    In an ongoing effort to better understand our users and the
                    Services, we might analyze data with respect to how you use
                    the Services, including Usage Data, alone and in combination
                    with other data (including anonymized elements of the
                    Customer Content), and may use such combined data in an
                    aggregate and anonymous manner to operate, maintain, manage,
                    and improve the Services. This aggregate information does
                    not identify you personally. We may share this aggregate
                    data with our affiliates, agents, and business partners. We
                    may also disclose aggregated user statistics to describe the
                    Services to current and prospective business partners and to
                    other third parties for other lawful purposes.
                </p>

                <p className={legalBold}>Onward Transfer to Third Parties</p>
                <ul>
                    <li>
                        Like many businesses, we hire other companies to perform
                        certain business-related services. We may disclose
                        personal information to certain types of third party
                        companies but only to the extent needed to enable them
                        to provide such services. The types of companies that
                        may receive personal information and their functions
                        are: hosting services, technical assistance, database
                        management/back-up services, usage analytics, email
                        marketing platforms, customer service, collaboration
                        services, authentication services, and authorization
                        services.
                    </li>
                    <li>
                        To provide our Services and administer promotional
                        programs, we may share your personal information with
                        our third-party promotional and marketing partners,
                        including, without limitation, businesses participating
                        in our various programs.
                    </li>
                    <li>
                        We may, from time to time, share and/or license personal
                        information to other companies who may provide you
                        information about the products and services they or
                        their partners offer. However, to the extent required by
                        law, you will be given the opportunity to opt out of
                        such sharing.
                    </li>
                    <li>
                        We may share personal information and Customer Content
                        with third party systems in connection with the Services
                        and to enable use of the Product, such as when you use
                        the Product to move data to or from one system to
                        another.
                    </li>
                    <li>
                        We may also disclose personal information to our parent
                        companies, subsidiaries, affiliates, joint ventures, or
                        other companies under common control to support the
                        marketing and sale of our products and services.
                    </li>
                </ul>

                <p className={legalBold}>Business Transfers</p>
                <p>
                    In the event of a merger, dissolution, reorganization or
                    similar corporate event, or the sale of all or substantially
                    all of our assets, we expect that the information that we
                    have collected, including personal information, would be
                    transferred to the surviving entity in a merger or the
                    acquiring entity. All such transfers shall be subject to our
                    commitments with respect to the privacy and confidentiality
                    of such personal information as set forth in this Privacy
                    Policy. This policy shall be binding upon Estuary and its
                    legal successors in interest.
                </p>

                <p className={legalBold}>Disclosure to Public Authorities</p>
                <p>
                    We are required to disclose personal information in response
                    to lawful requests by public authorities, including for the
                    purpose of meeting national security or law enforcement
                    requirements. We may also disclose personal information to
                    other third parties when compelled to do so by government
                    authorities or required by law or regulation including, but
                    not limited to, in response to court orders and subpoenas.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    OPT-OUT FOR DIRECT MARKETING; EMAIL MANAGEMENT
                </p>
                <p>
                    You may opt out at any time from the use of your personal
                    information for direct marketing purposes by emailing the
                    instructions to{' '}
                    <a href="mailto:privacy@estuary.dev">privacy@estuary.dev</a>{' '}
                    or by clicking on the “Unsubscribe” link located on the
                    bottom of any Estuary marketing email and following the
                    instructions found on the page to which the link takes you.
                    Please allow us a reasonable time to process your request.
                    You cannot opt out of receiving transactional e-mails
                    related to the Services.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    HOW WE PROTECT YOUR INFORMATION
                </p>
                <p>
                    Estuary takes very seriously the security and privacy of the
                    personal information that it collects pursuant to this
                    Privacy Policy. Accordingly, we implement reasonable
                    security measures designed to protect your personal
                    information from loss, misuse and unauthorized access,
                    disclosure, alteration and destruction, taking into account
                    the risks involved in processing and the nature of such
                    data, and to comply with applicable laws and regulations.
                    Please understand, however, that no security system is
                    impenetrable. We cannot guarantee the security of our
                    databases or the databases of the third parties with which
                    we may share your information (as permitted herein), nor can
                    we guarantee that the information you supply will not be
                    intercepted while being transmitted over the Internet. In
                    particular, e-mail sent to us may not be secure, and you
                    should therefore take special care in deciding what
                    information you send to us via e-mail.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>CHILDREN</p>
                <p>
                    We do not knowingly collect personal information from
                    children under the age of 13 through the Services. If you
                    are under 13, please do not give us any personal
                    information. We encourage parents and legal guardians to
                    monitor their children&apos;s Internet usage and to help
                    enforce our Privacy Policy by instructing their children to
                    never provide personal information without their permission.
                    If you have reason to believe that a child under the age of
                    13 has provided personal information to us, please contact
                    us at{' '}
                    <a href="mailto:privacy@estuary.dev">privacy@estuary.dev</a>
                    , and we will endeavor to delete that information from our
                    databases.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    IMPORTANT NOTICE TO ALL NON-US RESIDENTS
                </p>
                <p>
                    Our servers are located in the US and elsewhere. Please be
                    aware that your information may be transferred to,
                    processed, maintained, and used on computers, servers, and
                    systems located outside of your state, province, country, or
                    other governmental jurisdiction where the privacy laws may
                    not be as protective as those in your country of origin. If
                    you are located outside the United States and choose to use
                    the Services, you do so at your own risk.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    CALIFORNIA PRIVACY RIGHTS
                </p>
                <p>
                    Pursuant to Section 1798.83 of the California Civil Code,
                    residents of California have the right to obtain certain
                    information about the types of personal information that
                    companies with whom they have an established business
                    relationship (and that are not otherwise exempt) have shared
                    with third parties for direct marketing purposes during the
                    preceding calendar year, including the names and addresses
                    of those third parties, and examples of the types of
                    services or products marketed by those third parties. If you
                    wish to submit a request pursuant to Section 1798.83, please
                    contact Estuary via email at{' '}
                    <a href="mailto:privacy@estuary.dev">privacy@estuary.dev</a>
                    .
                </p>

                <p className={clsx(legalUnderline, legalBold)}>DO NOT TRACK</p>
                <p>
                    Estuary does not respond to “Do Not Track” settings or other
                    related mechanisms at this time.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    NEVADA PRIVACY RIGHTS
                </p>
                <p>
                    If you are a resident of Nevada, you have the right to
                    opt-out of the sale of certain personal information to third
                    parties who intend to license or sell that personal
                    information. You can exercise this right by contacting us at{' '}
                    <a href="mailto:privacy@estuary.dev">privacy@estuary.dev</a>{' '}
                    with the subject line “Nevada Do Not Sell Request” and
                    providing us with your name and the email address associated
                    with your account. Please note that we do not currently sell
                    your personal information as sales are defined in Nevada
                    Revised Statutes Chapter 603A.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    LINKS TO EXTERNAL WEBSITES
                </p>
                <p>
                    The Services may contain links to third-party websites
                    (“External Sites”). Estuary has no control over the privacy
                    practices or the content of any such External Sites. As
                    such, we are not responsible for the content or the privacy
                    policies of such External Sites. You should check the
                    applicable privacy policy and terms of use when visiting any
                    such External Sites.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    CHANGES TO THIS PRIVACY POLICY
                </p>
                <p>
                    This Privacy Policy is effective as of the last updated date
                    stated at the top of this Privacy Policy. We may change this
                    Privacy Policy from time to time with or without notice to
                    you. By accessing the Services after we make any such
                    changes to this Privacy Policy, you are deemed to have
                    accepted such changes. Please be aware that, to the extent
                    permitted by applicable law, our use of the information
                    collected is governed by the Privacy Policy in effect at the
                    time we collect the information. Please refer back to this
                    Privacy Policy on a regular basis.
                </p>

                <p className={clsx(legalUnderline, legalBold)}>
                    HOW TO CONTACT US
                </p>
                <p>
                    If you have questions about this Privacy Policy, please
                    e-mail us at{' '}
                    <a href="mailto:privacy@estuary.dev">privacy@estuary.dev</a>{' '}
                    with “Privacy Policy” in the subject line.
                </p>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
