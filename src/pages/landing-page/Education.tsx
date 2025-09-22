import { useRef } from "react";
import styled from "styled-components";
import LineHeader from "../../components/LineHeader";
import ScrollDown from "../../components/ScrollDown";

import getScrollPercent from "../../utils/scroll-percent";
import { useScroll } from "../../hooks/use-scroll";
import WhatIDoIllustration from "./WhatIDoIllustration";

const StyledEducation = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--dark);
  overflow: hidden;

  height: 100vh;
  @media only screen and (max-width: 1400px) {
    height: 100vh;
  }
  @media only screen and (max-width: 639px) {
    height: auto;
  }

  padding: 60px 0;
  padding-left: calc(15% + 60px);
  @media only screen and (max-width: 1550px) {
    padding-left: calc(10% + 60px);
  }
  @media only screen and (max-width: 1450px) {
    padding-left: calc(5% + 135px);
  }
  @media only screen and (max-width: 639px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 639px) {
    padding: 60px 130px;
  }

  ::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);

    transform: translate(50%, -50%);

    top: 50%;
    right: 30%;
    height: 160vh;
    width: 160vh;
    @media only screen and (max-width: 1400px) {
      right: 25%;
      height: 130vh;
      width: 130vh;
    }
    @media only screen and (max-width: 639px) {
      top: 30%;
      right: 50%;
      height: 150vw;
      width: 150vw;
    }
  }

  ::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);

    transform: translate(50%, -50%);

    top: 50%;
    right: 30%;
    height: 100vh;
    width: 100vh;
    @media only screen and (max-width: 1400px) {
      right: 25%;
      height: 80vh;
      width: 80vh;
    }
    @media only screen and (max-width: 639px) {
      top: 30%;
      right: 50%;
      height: 100vw;
      width: 100vw;
    }
  }
`;

const Content = styled.div`
  position: relative;
  margin-left: -160px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 870px;
`;

const Bold = styled.p`
  position: relative;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;
  color: var(--bg);

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
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--purple);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 639px) {
    padding: 24px;
  }
`;

const University = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: var(--bg);
  margin-bottom: 15px;

  @media only screen and (max-width: 639px) {
    font-size: 24px;
  }
`;

const Degree = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: var(--bg);
  margin-bottom: 8px;

  @media only screen and (max-width: 639px) {
    font-size: 18px;
  }
`;

const Duration = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
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
      <WhatIDoIllustration scrollPercent={scrollPercent} />
      <Content>
        <div />
        <div>
          <LineHeader pink text="Education" />
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
        </div>
        <ScrollDown target="work-experience-scroll" white />
      </Content>
    </StyledEducation>
  );
};

export default Education;
