import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="   ">
        <div className="container p-5 ">
          <div className="row justify-content-center">
            <div className="col-4 mb-3 text-white text-center">
              <h3>LOCATION</h3>
              <p>2215 John Danial Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-4 mb-3 text-white text-center">
              <h3>AROUND THE WEB</h3>
              <div>
                <FontAwesomeIcon icon={faGlobe} className="icon-style " />
                <FontAwesomeIcon icon={faFacebook} className="icon-style" />
                <FontAwesomeIcon icon={faTwitter} className="icon-style" />
                <FontAwesomeIcon icon={faLinkedin} className="icon-style" />
              </div>
            </div>{" "}
            <div className="col-4 mb-3 text-white text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="Copy-sec text-white text-center ">
          <p className="mb-0 p-3">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
