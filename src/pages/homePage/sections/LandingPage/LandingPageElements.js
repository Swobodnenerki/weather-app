import styled from 'styled-components';
import {MdArrowForwardIos, MdArrowForward} from 'react-icons/md';
import {Link} from 'react-scroll';

export const LPBackground = styled.div`
    background: #7899C9;
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;

`
export const LPTint = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: #070B64;
    z-index: 2;
    opacity: 0.4;
    overflow: hidden;
`

export const HeroBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`

export const HeroContent = styled.div`
    margin-top: 50px;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const HeroP = styled.p`
    color: white;
    margin-top: 24px;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.p`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowForwardIos = styled(MdArrowForwardIos)`
    margin-left: 8px;
    font-size: 20px;
`
export const FormContainer = styled.div`
    z-index: 3;
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled(Link)`
    z-index: 4;
    font-weight: 400;
    height: 60px;
    width: 150px;
    border-radius: 50px;
    background: yellow;
    white-space: nowrap;
    color: black;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;
    &:hover{
        font-size: 20px;
        background: #3C77D0;
        transition: all 0.2s ease-in-out;
        color: white;
    }
    @media screen and (max-width: 380px){
        width: 70px;
    }
    
`
export const Text = styled.input`
    margin-left: 20px;
    font-size: 15px;
    margin-right: 20px;
    background: white;
    white-space: nowrap;
    color: black;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 550px){
        width: 150px;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and (max-width: 380px){
        width: 100px;
        margin-left: 10px;
        margin-right: 10px;
    }
`
