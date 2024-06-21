import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    gap: 20px;
`;

export const IconWrapper = styled.div`
    width: 32px;
    height: 32px;
`;

export const Title = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #47506d;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
