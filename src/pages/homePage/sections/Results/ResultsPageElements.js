import styled from 'styled-components';

export const ResultsPageBackground = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #89ABFF;
    min-height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    overflow: hidden;
`

export const TableWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`

export const Divider = styled.h4`
    display: flex;
    align-items: center;
    &::before {
        background-color: yellow;
        border-radius: 5px;
        display: flex;
        content: "";
        flex-grow: 1;
        height: 4px;
        margin: 0 20px;
        margin-left: 12%;
  }
  &::after {
        border-radius: 5px;
        display: flex;
        content: "";
        flex-grow: 1;
        height: 4px;
        background-color: yellow;
        margin: 0 20px;
        margin-right: 12%;
  }
`

export const Header = styled.div`
    margin-top: 10px;
    text-align: center;
    font-size: 2.313rem;
    font-weight: 500;
    @media only screen and (max-width: 480px){
        font-size: 1.438rem;
    }
    @media only screen and (max-width: 950px){
        font-size: 1.875rem;
    }
`

export const ColumnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;  
    
`

export const SvgContainer = styled.div`
    margin-top: 40px;
    align-items: flex-end;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;  
    
`
export const Image = styled.img`
    width: 50%;
    @media only screen and (max-width: 480px){
        width: 80%;
    }
    
`


