import React, { useState } from 'react';
import * as s from './styles/globalStyles';
import { useDispatch } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import styled from 'styled-components'; // Make sure you have this import statement
import Header from './Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



function App() {
  const dispatch = useDispatch();
  const gifs = ["/config/images/art2.gif", "/config/images/art3.gif", "/config/images/art4.gif", "/config/images/art5.gif", "/config/images/art6.gif", "/config/images/art1.gif"];
  const [currentGif, setCurrentGif] = useState(0);

  const handleNextGif = () => {
    setCurrentGif((prevGif) => (prevGif + 1) % gifs.length);
  };

  const handlePreviousGif = () => {
    setCurrentGif((prevGif) => (prevGif - 1 + gifs.length) % gifs.length);
  };

  // State for FAQ toggle
  const [faqItems, setFaqItems] = useState([
    { question: "THE STORY", answer: "ETHERINGS project has artfully sculpted the intricate and animated tale of Ethereum's history, symbolized through distinct rings. A harmonious blend of technology and artistry, this extensive creation has been long in the making, poised to unveil the essence of Ethereum's journey. It stands as a cornerstone, representing the fusion of intellectual innovation and artistic expression, capturing the spirit of Ethereum's technological evolution.", isOpen: false },
    { question: "MINT", answer: "The Mint will start at 1 PM UTC, on August 5th. The price is 0.1ETH per mint.", isOpen: false },
    { question: "REVEAL", answer: "The reveal will take place within 24 hours after the conclusion of the mint.", isOpen: false },
    { question: "TECHNOLOGY", answer: "In the creation of ETHERINGS, art and technology intertwine in a masterful dance, forging a unique representation of Ethereum's vibrant history. Utilizing cutting-edge Graph Neural Networks, the project extracts intricate patterns, movements, and the roles of significant players from Ethereum blocks. These elements are then merged into dynamically moving rings, symbolizing the fluidity and complexity of Ethereum's blockchain evolution. This fusion of artistic vision and technological prowess has allowed ETHERINGS to translate data into visual art, crafting a living testament to Ethereum's legacy. The precise mechanics remain shrouded in a subtle veil of ambiguity, reflecting the mysterious and profound nature of the connection between art and the technological world.", isOpen: false },
    // Add more questions and answers here
  ]);



  // Function to toggle FAQ item visibility
  const toggleFAQItem = (index) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };





  return (
    <div>
      <Header /> {/* Use the Header component here */}
      <s.BodyContainer>
        {/* Components and content inside the main body go here */}
      </s.BodyContainer>
      <s.ScrollContainer>
        <s.ScrollText>Scroll to start exploring</s.ScrollText>
        <s.ArrowContainer>
          <s.AnimatedArrow />
          <s.AnimatedArrow />
          <s.AnimatedArrow />
        </s.ArrowContainer>
      </s.ScrollContainer>

      <s.IntroductionSection data-aos="fade-up" data-aos-duration="2000">
        <s.IntroductionTitle>ETHERINGS IS A COLLECTION OF 2,000 COLLECTIBLES IMMORTALIZING ETHEREUM BLOCKCHAIN</s.IntroductionTitle>
        <s.ContentWrapper>
          <s.IntroductionGif src="/config/images/art1.gif" alt="Introduction Gif" />
          <s.IntroductionText>
            <s.Subtitle>Crafted Rings of Time: Gateways into Ethereum</s.Subtitle>
            <s.Text>Etherings presents a one-of-a-kind collection of 2,000 specially crafted NFTs, each representing 1,000 blocks in Ethereum's history.
              These aren't just art pieces; they're windows into time, meticulously rendered into captivating visual rings.</s.Text>
            <s.Text> Immortalizing its dynamic evolution,
              the Etherings link you directly to significant epochs within the Ethereum universe. From transaction patterns to network changes,
              every fine detail is artistically rendered into each unique NFT</s.Text>


            <s.Text>Etherings: A ring for every epoch.</s.Text>
          </s.IntroductionText>
        </s.ContentWrapper>
      </s.IntroductionSection>

      <s.ArtSection data-aos="fade-up" data-aos-duration="2000">
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <s.ArtTextTitle>Etherings art</s.ArtTextTitle> {/* Title or text above the art */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <s.ArrowLeft onClick={() => setCurrentGif(currentGif === 0 ? gifs.length - 1 : currentGif - 1)}>
              &#8592;
            </s.ArrowLeft>
            <s.ArtImage src={gifs[currentGif]} alt="Art" />
            <s.ArrowRight onClick={() => setCurrentGif((currentGif + 1) % gifs.length)}>
              &#8594;
            </s.ArrowRight>
          </div>
          <s.ArtTextPlaceholder>
            {/* Place your text here */}
            <p>Etherings is a dance of digital artistry, where every animation is a living moment from Ethereum's evolving history.
              Each piece within the collection comes to life through 1,000 blocks, animating a vivid timeline of what unfolded within those instances in time.
            </p>
          </s.ArtTextPlaceholder>

          <s.ArtTextPlaceholder>
            {/* Place your text here */}
            <p>

              From network shifts to transactional waves, every nuance is meticulously animated, immortalizing the complex interplay of data and motion. Each Ethering is more than a visual spectacle; it's a timeless gateway,
              inviting you to explore and connect with significant epochs within the Ethereum universe, each characterized by its own unique traits that make it distinct and unparalleled.</p>
          </s.ArtTextPlaceholder>
        </div>
      </s.ArtSection>
      <s.MintScheduleSection data-aos="fade-up" data-aos-duration="1000">
        <s.MintScheduleTitle>Mint Schedule</s.MintScheduleTitle>


        <s.Box>
          <div className="top-row">
            <s.SmallBox>5 AUGUST - 1-5 PM UTC</s.SmallBox>

          </div>
          <div className="bottom-row">
            <div className="section">
              <div className="title">RINGLIST</div>
              <div className="text">The Ringlist sale is reserved for project supporters included in the prepaid Ringlist.
                Every person on this list has the secured option to mint five ETHERINGS.</div>
            </div>
            {/* Add more sections as needed */}
          </div>
        </s.Box>
        <s.Box>
          <div className="top-row">
            <s.SmallBox>5 AUGUST - 5-6 PM UTC</s.SmallBox>
            <s.SmallBox>PRICE: 0.1 ETH</s.SmallBox>
          </div>
          <div className="bottom-row">
            <div className="section">
              <div className="title">WAITLIST</div>
              <div className="text">Should there be any supply left after the Ringlist stage, the Waitlist sale will commence at once.
                Those who applied via the portal, qualify for the Waitlist. Please note that the Waitlist allows only one mint for each wallet.</div>
            </div>
            {/* Add more sections as needed */}
          </div>
        </s.Box>
        <s.Box>
          <div className="top-row">
            <s.SmallBox>5 AUGUST - 6 PM UTC</s.SmallBox>
            <s.SmallBox>PRICE: 0.1 ETH</s.SmallBox>
          </div>
          <div className="bottom-row">
            <div className="section">
              <div className="title">PUBLIC SALE</div>
              <div className="text">If there's remaining supply after the Waitlist stage, the Public sale will initiate without delay. This stage limits minting to five per wallet.</div>
            </div>
            {/* Add more sections as needed */}
          </div>
        </s.Box>
      </s.MintScheduleSection>
      <s.FAQSection data-aos="fade-up" data-aos-duration="2000">
        <s.FAQTitle>Frequently Asked Questions</s.FAQTitle>
        {faqItems.map((item, index) => (
          <s.FAQItem key={index}>
            <s.FAQQuestionContainer onClick={() => toggleFAQItem(index)}> {/* Use container here */}
              <s.FAQQuestionText>{item.question}</s.FAQQuestionText>
              <s.FAQArrow>{item.isOpen ? '↑' : '↓'}</s.FAQArrow>
            </s.FAQQuestionContainer>
            {item.isOpen && <s.FAQAnswer>{item.answer}</s.FAQAnswer>}
          </s.FAQItem>
        ))}
      </s.FAQSection>





    </div>
  );
}

export default App;
