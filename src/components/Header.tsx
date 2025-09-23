import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import PopupDesktop from "./PopupDesktop";
import MobilePopup from "./MobilePopup";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const ResumeButton = styled.button`
  background: var(--purple);
  color: var(--bg);
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  position: relative;

  &:hover {
    background: var(--dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 63, 247, 0.3);
  }

  @media only screen and (max-width: 639px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const Header = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const mobile = window.innerWidth <= 639;

  const handleResumeDownload = () => {
    // Force download of the PDF
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Takumi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledHeader>
      {mobile ? (
        <MobilePopup
          open={popupOpen}
          close={() => setPopupOpen(false)}
          onResumeClick={() => {
            handleResumeDownload();
            setPopupOpen(false);
          }}
        />
      ) : (
        <PopupDesktop
          open={popupOpen}
          close={() => setPopupOpen(false)}
          onResumeClick={() => {
            handleResumeDownload();
            setPopupOpen(false);
          }}
        />
      )}

      <LeftSection>
        <Logo primary={mobile || !popupOpen} />
        <ResumeButton onClick={handleResumeDownload}>Resume</ResumeButton>
      </LeftSection>

      <RightSection>
        <Hamburger open={popupOpen} click={() => setPopupOpen(!popupOpen)} />
      </RightSection>
    </StyledHeader>
  );
};

export default Header;
