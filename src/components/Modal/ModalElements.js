import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Button } from '../../pages/homePage/sections/LandingPage/LandingPageElements';

export const Background = styled.div`
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 200;
    align-items: center;
    left: 0;
    top: 0;
`
export const ModalWrapper = styled.div`
    width: 250px;
    height: 250px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: flex;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    opacity: 1;
    align-items: center;
    justify-content: center;

`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

export const ModalButton = styled(Button)`
  margin-top: 30px;
  height: 50px;
  width: 100px;
`