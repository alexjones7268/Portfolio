import { GrMysql } from "react-icons/gr";
import {
  SiPostgresql,
  SiMongodb,
  SiOpenai,
  SiPython,
  SiNextdotjs,
  SiAngular,
  SiN8N,
  SiMake,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiPhp,
  SiRubyonrails,
  SiGo,
  SiKubernetes,
  SiTerraform,
  SiRedis,
  SiGit,
  SiJira,
  SiPostman,
  SiCypress,
  SiJest,
  SiStorybook,
  SiReact,
} from "react-icons/si";
import { FaAws, FaDocker, FaNode, FaReact } from "react-icons/fa";
import { TbBrandZapier } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { RiVuejsFill } from "react-icons/ri";
import { useRef } from "react";
import styled from "styled-components";

import LineHeader from "../../components/LineHeader";
import ScrollDown from "../../components/ScrollDown";
import lightBlueCube from "../../assets/greeble/light-blue-cube.png";
import getScrollPercent from "../../utils/scroll-percent";
import WhatIDoIllustration from "./WhatIDoIllustration";
import { useScroll } from "../../hooks/use-scroll";

const StyledWhatIDo = styled.div`
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
  margin-left: -160px;
  margin-top: -400px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 870px;
`;

const TextContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const LightCube = styled.img`
  position: absolute;
  top: -35%;
  left: 0%;
  width: 16%;
  transition: all 0.2s;
`;

const Bold = styled.p`
  position: relative;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;
  color: var(--bg);

  font-size: 72px;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
  }
  @media only screen and (max-width: 639px) {
    font-size: 42px;
    line-height: 1.33333;
  }
`;

const Smaller = styled.p`
  position: relative;
  color: var(--bg);

  font-size: 18px;
  line-height: 1.77778;
  margin-top: 50px;
  @media only screen and (max-width: 1400px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 639px) {
    font-size: 16px;
    line-height: 1.75;
    margin-top: 30px;
    margin-bottom: 450px;
  }
`;

const ScrollDownContainer = styled.div`
  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 50px;
  justify-content: center;

  @media only screen and (max-width: 639px) {
    gap: 20px;
    margin-bottom: 30px;
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  @media only screen and (max-width: 639px) {
    width: 60px;
    height: 60px;
  }
`;

const SkillName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--bg);
  text-align: center;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 639px) {
    font-size: 12px;
  }
`;

const WhatIDo = () => {
  const scroll = useScroll();
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledWhatIDo ref={pageRef} id="what-i-do-scroll">
      <WhatIDoIllustration scrollPercent={scrollPercent} />
      <Content>
        <div />
        <TextContent style={{ marginTop: "200px" }}>
          <LightCube
            src={lightBlueCube}
            style={{
              transform: `translateY(calc(${scrollPercent} * 200px))`,
            }}
          />
          <LineHeader pink text="What I do" />
          {/* <Bold>I love creating beautiful user experiences.</Bold>
          <Smaller>
            Most of my development experience and interest is in React front end
            development. More recently I have also been using Solidity to write
            smart contracts on Ethereum.
          </Smaller> */}
          <SkillsContainer>
            {/* Languages & Frameworks */}
            <SkillItem>
              <SkillIcon>
                <SiJavascript style={{ fontSize: "40px", color: "#F7DF1E" }} />
              </SkillIcon>
              <SkillName>JavaScript</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiTypescript style={{ fontSize: "40px", color: "#3178C6" }} />
              </SkillIcon>
              <SkillName>TypeScript</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaNode style={{ fontSize: "40px", color: "#339933" }} />
              </SkillIcon>
              <SkillName>Node.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiPython style={{ fontSize: "40px", color: "#3776AB" }} />
              </SkillIcon>
              <SkillName>Python</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiDotnet style={{ fontSize: "40px", color: "#239120" }} />
              </SkillIcon>
              <SkillName>C#</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiPhp style={{ fontSize: "40px", color: "#777BB4" }} />
              </SkillIcon>
              <SkillName>PHP</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiDotnet style={{ fontSize: "40px", color: "#512BD4" }} />
              </SkillIcon>
              <SkillName>.NET Core</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiDotnet style={{ fontSize: "40px", color: "#512BD4" }} />
              </SkillIcon>
              <SkillName>ASP.NET</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaReact style={{ fontSize: "40px", color: "#61DAFB" }} />
              </SkillIcon>
              <SkillName>React</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiNextdotjs style={{ fontSize: "40px", color: "#000000" }} />
              </SkillIcon>
              <SkillName>Next.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiAngular style={{ fontSize: "40px", color: "#DD0031" }} />
              </SkillIcon>
              <SkillName>Angular</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <RiVuejsFill style={{ fontSize: "40px", color: "#4FC08D" }} />
              </SkillIcon>
              <SkillName>Vue.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiReact style={{ fontSize: "40px", color: "#61DAFB" }} />
              </SkillIcon>
              <SkillName>React Native</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiRubyonrails style={{ fontSize: "40px", color: "#CC0000" }} />
              </SkillIcon>
              <SkillName>Ruby on Rails</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiGo style={{ fontSize: "40px", color: "#00ADD8" }} />
              </SkillIcon>
              <SkillName>Go</SkillName>
            </SkillItem>

            {/* Cloud & DevOps */}
            <SkillItem>
              <SkillIcon>
                <FaAws style={{ fontSize: "40px", color: "#FF9900" }} />
              </SkillIcon>
              <SkillName>AWS</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <span
                  style={{
                    fontSize: "24px",
                    color: "#0078D4",
                    fontWeight: "bold",
                  }}
                >
                  AZ
                </span>
              </SkillIcon>
              <SkillName>Azure</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaDocker style={{ fontSize: "40px", color: "#2496ED" }} />
              </SkillIcon>
              <SkillName>Docker</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiKubernetes style={{ fontSize: "40px", color: "#326CE5" }} />
              </SkillIcon>
              <SkillName>Kubernetes</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <AiFillGithub style={{ fontSize: "40px", color: "#181717" }} />
              </SkillIcon>
              <SkillName>GitHub</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiTerraform style={{ fontSize: "40px", color: "#7B42BC" }} />
              </SkillIcon>
              <SkillName>Terraform</SkillName>
            </SkillItem>

            {/* Databases */}
            <SkillItem>
              <SkillIcon>
                <SiMongodb style={{ fontSize: "40px", color: "#47A248" }} />
              </SkillIcon>
              <SkillName>MongoDB</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiPostgresql style={{ fontSize: "40px", color: "#336791" }} />
              </SkillIcon>
              <SkillName>PostgreSQL</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <GrMysql style={{ fontSize: "40px", color: "#4479A1" }} />
              </SkillIcon>
              <SkillName>MySQL</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <span
                  style={{
                    fontSize: "24px",
                    color: "#CC2927",
                    fontWeight: "bold",
                  }}
                >
                  SQL
                </span>
              </SkillIcon>
              <SkillName>SQL Server</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiRedis style={{ fontSize: "40px", color: "#DC382D" }} />
              </SkillIcon>
              <SkillName>Redis</SkillName>
            </SkillItem>

            {/* AI & Automation */}
            <SkillItem>
              <SkillIcon>
                <SiOpenai style={{ fontSize: "40px", color: "#000000" }} />
              </SkillIcon>
              <SkillName>OpenAI API</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <span
                  style={{
                    fontSize: "24px",
                    color: "#00BCF2",
                    fontWeight: "bold",
                  }}
                >
                  PC
                </span>
              </SkillIcon>
              <SkillName>Pinecone</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <TbBrandZapier style={{ fontSize: "40px", color: "#FF4A00" }} />
              </SkillIcon>
              <SkillName>Zapier</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiMake style={{ fontSize: "40px", color: "#000000" }} />
              </SkillIcon>
              <SkillName>Make.com</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiN8N style={{ fontSize: "40px", color: "#EA4B71" }} />
              </SkillIcon>
              <SkillName>N8N</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiMake style={{ fontSize: "40px", color: "#00BCF2" }} />
              </SkillIcon>
              <SkillName>Power Automate</SkillName>
            </SkillItem>

            {/* Tools & Testing */}
            <SkillItem>
              <SkillIcon>
                <SiGit style={{ fontSize: "40px", color: "#F05032" }} />
              </SkillIcon>
              <SkillName>Git</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiJira style={{ fontSize: "40px", color: "#0052CC" }} />
              </SkillIcon>
              <SkillName>Jira</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiPostman style={{ fontSize: "40px", color: "#FF6C37" }} />
              </SkillIcon>
              <SkillName>Postman</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiCypress style={{ fontSize: "40px", color: "#17202C" }} />
              </SkillIcon>
              <SkillName>Cypress</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiJest style={{ fontSize: "40px", color: "#C21325" }} />
              </SkillIcon>
              <SkillName>Jest</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiStorybook style={{ fontSize: "40px", color: "#FF4785" }} />
              </SkillIcon>
              <SkillName>Storybook</SkillName>
            </SkillItem>
          </SkillsContainer>
        </TextContent>
        <ScrollDownContainer>
          <ScrollDown target="portfolio-scroll" white />
        </ScrollDownContainer>
      </Content>
    </StyledWhatIDo>
  );
};

export default WhatIDo;
