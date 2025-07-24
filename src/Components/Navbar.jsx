import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container p-3">
          <a className="navbar-brand h1 fw-bolder text-white fs-3 " href="#">
            START FRAMEWORK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-decoration-none ">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link active fw-semibold text-white `
                      : `nav-link fw-semibold text-white`
                  }
                  aria-current="page"
                  to={"/about"}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link active fw-semibold text-white `
                      : `nav-link fw-semibold text-white`
                  }
                  to={"/portfolio"}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link active fw-semibold text-white `
                      : `nav-link fw-semibold text-white`
                  }
                  to={"/contact"}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
