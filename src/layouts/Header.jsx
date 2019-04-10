import React from "react";
import logo from "../assets/img/logo.png";

const header = () => {
  let isAccount = "Đăng nhập";
  return (
    <div className='container header'>
      <nav className='navbar navbar-expand-sm navbar-light bg-bg-white'>
        <a className='navbar-brand'>
          <img src={logo} />
        </a>
        <button
          className='navbar-toggler d-lg-none'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavId'
          aria-controls='collapsibleNavId'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='collapsibleNavId'>
          <ul className='navbar-nav mx-auto mt-2 mt-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                id='dropdownId'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
                Khóa học
              </a>
              <div className='dropdown-menu' aria-labelledby='dropdownId'>
                <a className='dropdown-item' href='#'>
                  Tất cả khóa học
                </a>
                <a className='dropdown-item' href='#'>
                  Lập trình Front End
                </a>
                <a className='dropdown-item' href='#'>
                  Lập trình Back End
                </a>
                <a className='dropdown-item' href='#'>
                  Lập trình Mobile
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Lộ trình học</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Thông tin</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Liên hệ</a>
            </li>
          </ul>
        </div>

        <div className='dropdown'>
          <a className='ml-auto btn-signin dropdown-toggle' id='btnSignIn'>
            <i className='fa fa-user-circle mr-2' aria-hidden='true' />
            {isAccount}
          </a>

          <div className='dropdown-menu  mt-2' aria-labelledby='triggerId'>
            <button className='dropdown-item'>
              <i className='fa fa-ticket mr-2'>Lịch sử đặt vé</i>
            </button>
            <i className='fa fa-ticket mr-2'>
              <button className='dropdown-item'>
                <i className='fa fa-server mr-2'>Quản lý Web phim</i>
              </button>
              <i className='fa fa-server mr-2'>
                <button className='dropdown-item '>
                  <i className='fa fa-sign-out mr-2'>Đăng xuất</i>
                </button>
                <i className='fa fa-sign-out mr-2' />
              </i>
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default header;
