import "./DownloadCVButton.css";
import { FaDownload } from "react-icons/fa";

function DownloadCVButton() {
  return (
    <a
      href="/cv/Fernando_Blanco_CV.pdf"
      download="Fernando_Blanco_CV.pdf"
      className="cv-button"
    >
      <FaDownload />
      <span>Curriculum</span>
    </a>
  );
}

export default DownloadCVButton;