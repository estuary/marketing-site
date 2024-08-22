import CheckIcon from '@mui/icons-material/Check';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ChangeEvent, useState } from 'react';
import { ButtonFilled } from '../../globalStyles';
import {
    emailInput,
    form,
    formFields,
    inputIconWrapper,
    primaryButton,
} from './styles.module.less';

type NewsletterSignupFormProps = {
    inputPlaceholder?: string;
    buttonTitle?: string;
    redirectUrl?: string;
};

const NewsletterSignupForm = ({
    inputPlaceholder = 'Email',
    buttonTitle = 'Submit',
    redirectUrl = '',
}: NewsletterSignupFormProps) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmission = (ev: { preventDefault: () => void }) => {
        ev.preventDefault();
        if (redirectUrl) {
            window.open(redirectUrl);
        }
        setEmail('');
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <form
            id="newsletter-signup"
            className={form}
            onSubmit={handleFormSubmission}
        >
            <div className={formFields}>
                <div className={inputIconWrapper}>
                    <StaticImage
                        placeholder="none"
                        alt="Email icon"
                        src="../../svgs/product-page/section-thirteen/email-outlined.svg"
                    />
                </div>
                <input
                    placeholder={inputPlaceholder}
                    type="email"
                    required
                    className={emailInput}
                    value={email}
                    onChange={handleEmailChange}
                />
                {/* TODO: Move this button style to LESS */}
                <ButtonFilled type="submit" className={primaryButton}>
                    {isSubmitted ? (
                        <CheckIcon fontSize="medium" htmlColor="#FFFFFF" />
                    ) : (
                        buttonTitle
                    )}
                </ButtonFilled>
            </div>
        </form>
    );
};

export default NewsletterSignupForm;
