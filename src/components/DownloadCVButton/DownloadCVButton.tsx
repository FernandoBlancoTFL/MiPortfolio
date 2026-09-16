import "./DownloadCVButton.css";
import cvLink from "../../assets/CV_Blanco_Fernando_2026.pdf"
import { LuDownload } from "react-icons/lu";

function DownloadCVButton() {
  return (
    <a
      href={cvLink}
      download="Fernando_Blanco_CV.pdf"
      className="cv-button"
    >
      <LuDownload />
      <span>Curriculum</span>
    </a>
  );
}

export default DownloadCVButton;