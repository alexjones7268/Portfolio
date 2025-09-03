import { BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";
import Telegram from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { SiDiscord } from "react-icons/si";
import Social from "./Social";

const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 639px) {
    margin-top: 10px;
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <Social
        icon={<GitHubIcon fontSize="inherit" />}
        link="https://github.com/Maksym-TopDev"
        text="GitHub"
      />
      <Social
        icon={<BsWhatsapp fontSize="inherit" />}
        link="https://wa.me/+1(979)326-8076"
        text="WhatsApp"
      />
      <Social
        icon={<Telegram fontSize="inherit" />}
        link="https://t.me/sunstar987"
        text="Telegram"
      />
      <Social
        icon={<SiDiscord fontSize="inherit" />}
        link="https://discord.com/users/cloud_dev000"
        text="Discord"
      />
    </StyledSocials>
  );
};

export default Socials;
