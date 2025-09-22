import { useRef } from "react";
import styled from "styled-components";
import LineHeader from "../../components/LineHeader";
import ScrollDown from "../../components/ScrollDown";

import getScrollPercent from "../../utils/scroll-percent";
import whiteSquare from "../../assets/hero/main-pic-9.png";
import pinkSquare from "../../assets/hero/main-pic-8.png";
import { useScroll } from "../../hooks/use-scroll";

const StyledEducation = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;

  background: radial-gradient(
    75.22% 75.22% at 20.49% 12.79%,
    #ffffff 0%,
    rgba(228, 231, 233, 0.502295) 100%
  );
  @media only screen and (max-width: 639px) {
    background: var(--bg);
  }

  padding: 120px calc(15% + 60px);
  @media only screen and (max-width: 1550px) {
    padding: 120px calc(10% + 60px);
  }
  @media only screen and (max-width: 1450px) {
    padding-left: calc(5% + 35px);
    padding-right: calc(5% + 35px);
  }
  @media only screen and (max-width: 639px) {
    padding: 60px 30px;
  }
`;

const PinkSquare = styled.img`
  position: absolute;
  top: 450px;
  left: -29%;
  width: 68%;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WhiteSquare = styled.img`
  position: absolute;
  right: -240px;
  bottom: -120px;
  width: 300px;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const Bold = styled.p`
  position: relative;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;

  font-size: 72px;
  margin-bottom: 80px;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 639px) {
    font-size: 42px;
    margin-bottom: 30px;
  }
`;

const EducationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 80px;
  margin-bottom: 60px;
  width: 100%;
  @media only screen and (max-width: 639px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 30px;
  }
`;

const EducationItem = styled.div`
  background: var(--bg);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid var(--sub);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: var(--purple);
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(76, 63, 247, 0.1);
  }

  @media only screen and (max-width: 639px) {
    padding: 30px;
  }
`;

const University = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: var(--purple);
  margin-bottom: 15px;

  @media only screen and (max-width: 639px) {
    font-size: 24px;
  }
`;

const Degree = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 8px;

  @media only screen and (max-width: 639px) {
    font-size: 18px;
  }
`;

const Duration = styled.p`
  font-size: 16px;
  color: var(--sub);
  font-weight: 400;

  @media only screen and (max-width: 639px) {
    font-size: 14px;
  }
`;

const Education = () => {
  const scroll = useScroll();
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledEducation ref={pageRef} id="education-scroll">
      <PinkSquare
        src={pinkSquare}
        style={{
          transform: `translateY(calc(${scrollPercent} * 400px))`,
        }}
      />
      <Content>
        <WhiteSquare src={whiteSquare} />
        <LineHeader text="Education" />
        <Bold>My academic journey.</Bold>
        
        <EducationContainer>
          <EducationItem>
            <University>Warsaw University of Technology</University>
            <Degree>Master of Science in Artificial Intelligence (MSc)</Degree>
            <Duration>2019 - 2021</Duration>
          </EducationItem>
          <EducationItem>
            <University>Warsaw University of Technology</University>
            <Degree>Bachelor of Science in Computer Science (BSc)</Degree>
            <Duration>2016 - 2019</Duration>
          </EducationItem>
        </EducationContainer>
      </Content>
      <ScrollDown target="work-experience-scroll" />
    </StyledEducation>
  );
};

export default Education;
