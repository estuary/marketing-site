import styled from 'styled-components';

export const Cicle = styled.div`
    position: relative;
    z-index: 2;
    max-width: 20%;
    padding: 1px;

    @media (max-width: 425px) {
        max-width: 40%;
    }
`;

export const Path = styled.div<{ $tab: 'analytics' | 'ops' | 'ai' }>`
    position: relative;
    z-index: 1;
    background-color: #0e2443;
    display: flex;
    align-items: center;
    margin-left: ${(props) => (props.$tab === 'analytics' ? '-6%' : '-2%')};

    @media (max-width: 425px) {
        transform: rotate(90deg);
        margin: 6% 0 0 0;
        max-width: 128px;
        height: 16px;
    }
`;
