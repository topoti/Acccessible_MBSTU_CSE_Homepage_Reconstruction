import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const MessageSectionTitle = () => {
  return (
    <div className="position-relative d-flex flex-column align-items-center justify-content-center">
      <h2 className="text-center" style={{ fontSize: "34px" }}>
        <span style={{ fontWeight: "300" }}>Message From </span>Chairman
      </h2>

      <div className="paper-plane d-flex align-items-center justify-content-center rounded-circle">
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="paper-plane-icon"
          aria-label="paper plane icon"
        />
      </div>

      <span className="paper-plane-line-through position-absolute "></span>
    </div>
  );
};

export default MessageSectionTitle;
