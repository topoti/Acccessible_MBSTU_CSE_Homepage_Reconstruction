import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../Shared/Icon";

const MessageSectionTitle = () => {
  return (
    <div className="position-relative d-flex flex-column align-items-center justify-content-center">
      <h2 className="text-center" style={{ fontSize: "34px" }}>
        <span style={{ fontWeight: "300" }}>Message From </span>Chairman
      </h2>

      <Icon
        icon={faPaperPlane}
        customClass="paper-plane-icon"
        label="paper plane icon"
      />

      <span className="paper-plane-line-through position-absolute "/>
    </div>
  );
};

export default MessageSectionTitle;
