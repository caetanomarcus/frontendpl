import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    padding: 40px 168px;
    background: #F6F4F6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TopBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 400;
    color: #5F1478;
`;

export const Button = styled.button`
    width: 173px;
    height: 48px;
    border: none;
    outline: none;
    background: #E76316;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
`;

export const PaginationBox = styled.div`
    width: 40%;
    margin-bottom: 36px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

export const Total = styled.p``;

export const Pagination = styled.div`
    width: 50% ;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PaginationButton = styled.button`
    background: transparent ;
    border: none;
    outline: none;
    cursor: pointer;
    
`;

export const PaginationIcon = styled.img`
    width: 24px;
    height: 24px;
`

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;