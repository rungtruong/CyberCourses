import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div className='myCarousel'>
        <div className='carousel-box'>
          <img
            src={require("../../../assets/img/banner-1.png")}
            alt='Mountains'
            className='img-background'
          />
          <div className='carousel-content'>
            <div className='container'>
              <div className='overlay-text text-center'>
                <h3>Tương lai bắt đầu từ đây!</h3>
                <p>
                  Tìm các môn học mà bạn đam mê bằng cách duyệt các danh mục
                  khóa học trực tuyến của chúng tôi. <br /> Bắt đầu học với các
                  khóa học hàng đầu được xây dựng với các chuyên gia trong
                  ngành.
                </p>
                <div className='col-md-8 offset-md-2'>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      aria-label='Text input with dropdown button'
                      placeholder='Nhập khóa học...'
                    />
                    <div className='input-group-append styleSelect'>
                      <select id='inputGroupSelect01'>
                        <option selected>Tất cả khóa học</option>
                        <option value='1'> Lập trình Front End</option>
                        <option value='2'> Lập trình Back End</option>
                        <option value='3'> Lập trình Mobile</option>
                      </select>
                    </div>
                    <div className='input-group-append'>
                      <button className='btn btn-search' type='button'>
                        <i class='fa fa-search' aria-hidden='true' />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='slider-feature'>
                  <ul>
                    <li>
                      <i class='fa fa-book' /> 500 Khóa học
                    </li>
                    <li>
                      <i class='fa fa-graduation-cap' /> 1000 Học viên
                    </li>
                    <li>
                      <i class='fa fa-users' /> 200 Giảng viên
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
