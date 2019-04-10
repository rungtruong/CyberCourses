import React from "react";
import logo from "../../assets/img/logo.png";
const header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-bg-white">
        <a className="navbar-brand">
          <img width="150px" src={logo} />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Khóa học
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Tất cả khóa học
                </a>
                <a className="dropdown-item" href="#">
                  Lập trình Front End
                </a>
                <a className="dropdown-item" href="#">
                  Lập trình Back End
                </a>
                <a className="dropdown-item" href="#">
                  Lập trình Mobile
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link">Lộ trình học</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Thông tin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Liên hệ</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default header;
