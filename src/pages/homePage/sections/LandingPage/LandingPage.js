import React, {useState} from "react";
import {LPBackground, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button, ArrowForward, ArrowForwardIos, LPTint, Text, FormContainer} from './LandingPageElements';
import video from '../../../../photos/video.mp4'
import Modal from "../../../../components/Modal/Modal";
const LandingPage = ({handleSubmit, showModal, setShowModal, error}) => {
    const[hover, setHover] = useState(false)
    const [text, setText] = useState("");

    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(text);
      setText("");
    };

    const onHover = () => {
      setHover(!hover)
    }


    return(
      <LPBackground id='home'>
        <LPTint/>
        <Modal showModal={showModal} setShowModal={setShowModal} error={error}/>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1>What's the weather like today</HeroH1>
          <HeroP>
            If you're too lazy to look outside, find out with us!
          </HeroP>
          <HeroBtnWrapper>
          <FormContainer>
            <Text
              id="city-text"
              placeholder="Type city" 
              label="City"
              value={text}
              onChange={(e) => setText(e.target.value)}
              />
            <Button onMouseEnter={onHover} onMouseLeave={onHover} disabled={isTextareaDisabled} onClick={onSubmit}>
              Search {hover ? <ArrowForwardIos/> : <ArrowForward size={25}/>}
            </Button>
          </FormContainer>
          </HeroBtnWrapper>
        </HeroContent>
      </LPBackground>
    );
  };
  export default LandingPage;