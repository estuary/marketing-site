import * as React from 'react';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';

type StepProps = {
    activePage: number;
    setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

const Step = React.memo(({ activePage, setActivePage }: StepProps) => {
    switch (activePage) {
        case 0:
            return <Step0 activePage={activePage} setState={setActivePage} />;
        case 1:
            return <Step1 activePage={activePage} setState={setActivePage} />;
        case 2:
            return <Step2 activePage={activePage} setState={setActivePage} />;
        case 3:
            return <Step3 activePage={activePage} setState={setActivePage} />;
        case 4:
            return <Step4 activePage={activePage} setState={setActivePage} />;
        case 5:
            return <Step5 activePage={activePage} setState={setActivePage} />;
        case 6:
            return <Step6 activePage={activePage} setState={setActivePage} />;
        case 7:
            return <Step7 activePage={activePage} />;
        default:
            return null;
    }
});

export default Step;
