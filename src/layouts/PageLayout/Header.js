import React from 'react'
import {IndexLink, Link} from 'react-router'
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  ;

  pushMenu() {
    var body = document.body;
    var coreLayouts = document.getElementsByClassName('core-layout');
    var coreLayout = coreLayouts[0] || null;
    if (body.clientWidth > 768 && coreLayout) {
      if (coreLayout.className.indexOf('sidebar-collapse') === -1) {
        coreLayout.className += ' sidebar-collapse';
      } else {
        coreLayout.className = coreLayout.className.replace(' sidebar-collapse', '');
      }
    } else {
      if (coreLayout.className.indexOf('sidebar-open') === -1) {
        coreLayout.className += ' sidebar-open';
      } else {
        coreLayout.className = coreLayout.className.replace(' sidebar-open', '');
      }
    }
  };

  render() {
    return (
      // <!-- Navbar -->
      <nav className='main-header navbar navbar-expand bg-white navbar-light border-bottom'>
        {/*// <!-- Left navbar links -->*/}
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' data-widget='pushmenu' href='#'><i className='fa fa-bars'></i></a>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <a href='index3.html' className='nav-link'>Home</a>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <a href='#' className='nav-link'>Contact</a>
          </li>
        </ul>

        {/*// <!-- SEARCH FORM -->*/}
        <form className='form-inline ml-3'>
          <div className='input-group input-group-sm'>
            <input className='form-control form-control-navbar' type='search' placeholder='Search' aria-label='Search' />
            <div className='input-group-append'>
              <button className='btn btn-navbar' type='submit'>
                <i className='fa fa-search'></i>
              </button>
            </div>
          </div>
        </form>

        {/*// <!-- Right navbar links -->*/}
        <ul className='navbar-nav ml-auto'>
          {/*// <!-- Messages Dropdown Menu -->*/}
          <li className='nav-item dropdown'>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              <i className='fa fa-comments-o'></i>
              <span className='badge badge-danger navbar-badge'>3</span>
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <a href='#' className='dropdown-item'>
                {/*// <!-- Message Start -->*/}
                <div className='media'>
                  <img src='dist/img/user1-128x128.jpg' alt='User Avatar' className='img-size-50 mr-3 img-circle'/>
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                      Brad Diesel
                      <span className='float-right text-sm text-danger'><i className='fa fa-star'></i></span>
                    </h3>
                    <p className='text-sm'>Call me whenever you can...</p>
                    <p className='text-sm text-muted'><i className='fa fa-clock-o mr-1'></i> 4 Hours Ago</p>
                  </div>
                </div>
                {/*// <!-- Message End -->*/}
              </a>
              <div className='dropdown-divider'></div>
              <a href='#' className='dropdown-item'>
                {/*// <!-- Message Start -->*/}
                <div className='media'>
                  <img src='dist/img/user8-128x128.jpg' alt='User Avatar' className='img-size-50 img-circle mr-3'/>
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                      John Pierce
                      <span className='float-right text-sm text-muted'><i className='fa fa-star'></i></span>
                    </h3>
                    <p className='text-sm'>I got your message bro</p>
                    <p className='text-sm text-muted'><i className='fa fa-clock-o mr-1'></i> 4 Hours Ago</p>
                  </div>
                </div>
                {/*// <!-- Message End -->*/}
              </a>
              <div className='dropdown-divider'></div>
              <a href='#' className='dropdown-item'>
                {/*// <!-- Message Start -->*/}
                <div className='media'>
                  <img src='dist/img/user3-128x128.jpg' alt='User Avatar' className='img-size-50 img-circle mr-3' />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                      Nora Silvester
                      <span className='float-right text-sm text-warning'><i className='fa fa-star'></i></span>
                    </h3>
                    <p className='text-sm'>The subject goes here</p>
                    <p className='text-sm text-muted'><i className='fa fa-clock-o mr-1'></i> 4 Hours Ago</p>
                  </div>
                </div>
                {/*// <!-- Message End -->*/}
              </a>
              <div className='dropdown-divider'></div>
              <a href='#' className='dropdown-item dropdown-footer'>See All Messages</a>
            </div>
          </li>
          {/*// <!-- Notifications Dropdown Menu -->*/}
          <li className='nav-item dropdown'>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              <i className='fa fa-bell-o'></i>
              <span className='badge badge-warning navbar-badge'>15</span>
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <span className='dropdown-item dropdown-header'>15 Notifications</span>
              <div className='dropdown-divider'></div>
              <a href='#' className='dropdown-item'>
                <i className='fa fa-envelope mr-2'></i> 4 new messages
                <span className='float-right text-muted text-sm'>3 mins</span>
              </a>
              <div className='dropdown-divider'></div>
              <a href='#' className='dropdown-item'>
                <i className='fa fa-users mr-2'></i> 8 friend requests
                <span className='float-right text-muted text-sm'>12 hours</span>
              </a>
              <div className='dropdown-divider'></div>
              <a href='#' className='dropdown-item'>
                <i className='fa fa-file mr-2'></i> 3 new reports
                <span className='float-right text-muted text-sm'>2 days</span>
              </a>
              <div className='dropdown-divider'></div>
              <a href='#' className='dropdown-item dropdown-footer'>See All Notifications</a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link' data-widget='control-sidebar' data-slide='true' href='#'><i
              className='fa fa-th-large'></i></a>
          </li>
        </ul>
      </nav>
      // <!-- navbar -->
    )
  };
}

export default Header;
