import { useRef } from "react";
import styled from "styled-components";
import LineHeader from "../../components/LineHeader";
import ScrollDown from "../../components/ScrollDown";

import getScrollPercent from "../../utils/scroll-percent";
import whiteSquare from "../../assets/hero/main-pic-9.png";
import pinkSquare from "../../assets/hero/main-pic-8.png";
import { useScroll } from "../../hooks/use-scroll";

const StyledWorkExperience = styled.div`
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

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 80px;
  margin-bottom: 60px;
  width: 100%;
  @media only screen and (max-width: 639px) {
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 30px;
  }
`;

const ExperienceItem = styled.div`
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

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;

  @media only screen and (max-width: 639px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const JobTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: var(--purple);
  margin: 0;

  @media only screen and (max-width: 639px) {
    font-size: 20px;
  }
`;

const Company = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
  margin: 0;

  @media only screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

const JobDuration = styled.p`
  font-size: 16px;
  color: var(--sub);
  font-weight: 400;
  margin: 0;
  white-space: nowrap;

  @media only screen and (max-width: 639px) {
    font-size: 14px;
    white-space: normal;
  }
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Achievement = styled.li`
  font-size: 16px;
  color: var(--text);
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: "•";
    color: var(--purple);
    font-weight: bold;
    position: absolute;
    left: 0;
    font-size: 18px;
  }

  @media only screen and (max-width: 639px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const WorkExperience = () => {
  const scroll = useScroll();
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledWorkExperience ref={pageRef} id="work-experience-scroll">
      <PinkSquare
        src={pinkSquare}
        style={{
          transform: `translateY(calc(${scrollPercent} * 400px))`,
        }}
      />
      <Content>
        <WhiteSquare src={whiteSquare} />
        <LineHeader text="Work Experience" />
        <Bold>My professional journey.</Bold>
        
        <ExperienceContainer>
          <ExperienceItem>
            <JobHeader>
              <div>
                <JobTitle>Senior Full-Stack Engineer</JobTitle>
                <Company>Coherent Solutions</Company>
              </div>
              <JobDuration>Oct 2022 – Dec 2024</JobDuration>
            </JobHeader>
            <Achievements>
              <Achievement>Led the architecture and delivery of a B2B SaaS platform using Next.js (frontend) and NestJS microservices (backend), deployed on AWS EKS.</Achievement>
              <Achievement>Boosted performance by improving Lighthouse scores by 35+ points, reducing page load time by 20%.</Achievement>
              <Achievement>Built a RAG-based AI chatbot (LangChain, OpenAI, Pinecone) answering 5,000+ queries/month, saving 40+ research hours weekly.</Achievement>
              <Achievement>Automated CI/CD pipelines with GitHub Actions and optimized AWS resources, reducing cloud spend by 30% ($18,000 annually).</Achievement>
            </Achievements>
          </ExperienceItem>

          <ExperienceItem>
            <JobHeader>
              <div>
                <JobTitle>Full-Stack Developer</JobTitle>
                <Company>Synerise</Company>
              </div>
              <JobDuration>Feb 2019 – Apr 2022</JobDuration>
            </JobHeader>
            <Achievements>
              <Achievement>Delivered full-lifecycle development for enterprise apps using MERN stack and .NET stack, improving reliability by 25%.</Achievement>
              <Achievement>Built custom WordPress plugins & themes handling 100k+ monthly visitors with HubSpot & Salesforce API integrations, saving 15+ manual hours/week.</Achievement>
              <Achievement>Developed a cross-platform React Native logistics app with real-time GPS tracking, cutting dispatch time by 18%.</Achievement>
            </Achievements>
          </ExperienceItem>

          <ExperienceItem>
            <JobHeader>
              <div>
                <JobTitle>Automation & Systems Analyst</JobTitle>
                <Company>Profil Software</Company>
              </div>
              <JobDuration>Oct 2016 – Dec 2018</JobDuration>
            </JobHeader>
            <Achievements>
              <Achievement>Identified 50+ processes for automation, generating annual ROI of $200k.</Achievement>
              <Achievement>Built UiPath bots processing 500+ invoices weekly with 99.9% accuracy, saving 20+ manual hours/week.</Achievement>
              <Achievement>Implemented HubSpot & Salesforce automations (lead scoring/nurturing), increasing MQLs by 50% in 6 months.</Achievement>
            </Achievements>
          </ExperienceItem>
        </ExperienceContainer>
      </Content>
      <ScrollDown target="what-i-do-scroll" />
    </StyledWorkExperience>
  );
};

export default WorkExperience;
