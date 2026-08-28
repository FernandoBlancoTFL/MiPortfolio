import "./DownloadCVButton.css";
import { LuDownload } from "react-icons/lu";

function DownloadCVButton() {
  return (
    <a
      href="/cv/Fernando_Blanco_CV.pdf"
      download="Fernando_Blanco_CV.pdf"
      className="cv-button"
    >
      <LuDownload />
      <span>Curriculum</span>
    </a>
  );
}

export default DownloadCVButton;