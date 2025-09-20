import { useState, useEffect } from "react";
import styled from "styled-components";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  background: var(--bg);
  border-radius: 20px;
  width: 95vw;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0.8)'};
  transition: transform 0.3s ease;
  
  @media only screen and (max-width: 768px) {
    width: 95vw;
    max-width: 95vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--dark-bg);
  color: var(--bg);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  z-index: 1001;
  transition: all 0.3s ease;

  &:hover {
    background: var(--purple);
    transform: scale(1.1);
  }
`;

const ResumeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ResumeHeader = styled.div`
  background: linear-gradient(135deg, var(--purple), var(--dark));
  color: var(--bg);
  padding: 40px;
  text-align: center;
`;

const ResumeTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  @media only screen and (max-width: 639px) {
    font-size: 32px;
  }
`;

const ResumeSubtitle = styled.p`
  font-size: 20px;
  opacity: 0.9;
  @media only screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

const ResumeContent = styled.div`
  padding: 0;
  overflow: hidden;
  height: calc(90vh - 200px);
  display: flex;
  flex-direction: column;
`;

const PDFContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  position: relative;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
  min-height: 600px;
  
  @media only screen and (min-width: 1200px) {
    min-height: 700px;
  }
`;

const PDFControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: var(--bg);
  border-bottom: 1px solid #e0e0e0;
`;

const PDFTitle = styled.h3`
  font-size: 18px;
  color: var(--dark);
  margin: 0;
  font-weight: 600;
`;

const PDFFallback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  text-align: center;
  background: #f8f9fa;
`;

const FallbackTitle = styled.h3`
  font-size: 24px;
  color: var(--dark);
  margin-bottom: 20px;
`;

const FallbackText = styled.p`
  font-size: 16px;
  color: var(--sub);
  margin-bottom: 30px;
  max-width: 400px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 16px;
  color: var(--sub);
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--purple);
  color: var(--bg);
  padding: 15px 30px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--dark);
    transform: translateY(-2px);
  }
`;

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setPdfLoaded(false);
      setPdfError(false);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePdfLoad = () => {
    setPdfLoaded(true);
    setPdfError(false);
  };

  const handlePdfError = () => {
    setPdfError(true);
    setPdfLoaded(false);
  };

  const handleDownload = () => {
    // Force download of the PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Maksym_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent isOpen={isOpen}>
            <CloseButton onClick={onClose}>×</CloseButton>
            <ResumeContainer>
              <ResumeHeader>
                <ResumeTitle>Maksym</ResumeTitle>
                <ResumeSubtitle>Full Stack & AI & Automation Developer</ResumeSubtitle>
              </ResumeHeader>
              
              <ResumeContent>
                <PDFContainer>
                  <PDFControls>
                    <PDFTitle>📄 Maksym's Resume</PDFTitle>
                    <DownloadButton onClick={handleDownload}>
                      📥 Download PDF
                    </DownloadButton>
                  </PDFControls>
                  
                  {!pdfError ? (
                    <PDFViewer 
                      src="/resume.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitV"
                      title="Maksym's Resume"
                      onLoad={handlePdfLoad}
                      onError={handlePdfError}
                    />
                  ) : (
                    <PDFFallback>
                      <FallbackTitle>📄 Resume Not Found</FallbackTitle>
                      <FallbackText>
                        The resume PDF file is not found. Please make sure you have added your resume.pdf file to the public folder.
                      </FallbackText>
                      <DownloadButton onClick={handleDownload}>
                        📥 Try Download Anyway
                      </DownloadButton>
                    </PDFFallback>
                  )}
                  
                  {!pdfLoaded && !pdfError && (
                    <LoadingSpinner>
                      Loading your resume...
                    </LoadingSpinner>
                  )}
                </PDFContainer>
              </ResumeContent>
            </ResumeContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ResumeModal;
