import React from 'react';
import { Background, CloseModalButton, ModalButton, ModalContent, ModalWrapper } from './ModalElements';
const Modal = ({showModal, setShowModal, error}) => {
    return (
        <div>
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                            <h1>Try again</h1>
                            <p1>{error}</p1>
                            <ModalButton onClick={() => setShowModal(prev => !prev)}>OK</ModalButton>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                 </Background>
            ) : null}
        </div>
    )         
}
export default Modal;