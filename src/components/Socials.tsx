import styled from "styled-components";
import Telegram from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
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
        link="https://github.com/CloudDev777"
        text="GitHub"
      />
      <Social
        icon={<Telegram fontSize="inherit" />}
        link="https://t.me/sunstar987"
        text="Telegram"
      />
      <Social
        icon={<SiDiscord fontSize="inherit" />}
        link="https://discord.com/users/sunstar987"
        text="Discord"
      />
    </StyledSocials>
  );
};

export default Socials;
