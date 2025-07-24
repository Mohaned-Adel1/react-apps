import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faStar } from "@fortawesome/free-solid-svg-icons";

export default function SectionHeader(props) {
  return (
    <>
      <div className="text-center">
        <h2
          className={
            props.sectionName == "ABOUT SECTION"
              ? "fw-bolder fs-1 text-white mt-2"
              : `fw-bolder fs-1 header-style mt-2`
          }
        >
          {props.sectionName}
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div
            className="line  me-3"
            style={
              props.sectionName == "ABOUT SECTION"
                ? { "background-color": "#ffffff" }
                : { "background-color": "#2c3e50" }
            }
          ></div>
          <FontAwesomeIcon
            icon={faStar}
            className={
              props.sectionName == "ABOUT SECTION"
                ? " text-white"
                : `header-style`
            }
          />
          <div
            className="line ms-3"
            style={
              props.sectionName == "ABOUT SECTION"
                ? { "background-color": "#ffffff" }
                : { "background-color": "#2c3e50" }
            }
          ></div>
        </div>
      </div>
    </>
  );
}
