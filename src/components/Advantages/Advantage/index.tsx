import CheckIcon from '@mui/icons-material/Check';
import { ReactNode } from 'react';

interface AdvantageProps {
    title: ReactNode;
}

const Advantage = ({ title }: AdvantageProps) => {
    return (
        <li>
            <div>
                <CheckIcon fontSize="large" htmlColor="var(--blue)" />
            </div>
            <p>{title}</p>
        </li>
    );
};

export default Advantage;
