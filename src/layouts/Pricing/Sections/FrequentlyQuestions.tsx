import React from 'react';
import { Typography } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import frequentlyQuestions from '../questions';

const PricingFrequentlyQuestions = () => {
    return (
        <div className="frequently-question">
            <div className="heading">
                <h2>Frequently asked questions</h2>
            </div>
            <div className="frequently-container">
                <div className="question">
                    {frequentlyQuestions.map((item, index) => (
                        <Accordion defaultExpanded={true} key={index}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        sx={{
                                            color: '#27272A',
                                            fontSize: '2rem',
                                        }}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className="faq-question"
                            >
                                <Typography className="faq-text">
                                    {item.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    className="faq-description"
                                    sx={{
                                        lineHeight: '2.5rem',
                                        color: '#3F3F46',
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingFrequentlyQuestions;
