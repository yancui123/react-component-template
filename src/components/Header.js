import React, { Component } from 'react';
//import '../../style/header.less';

export default class Header extends Component {
  render() {
    return(
      <div className="vip-header">
        <div className="container header-content">
          <div className="header-title">
            <a href="http://www.58.com" className="logo"></a>
            <h1>VIP中心 招聘会员88458版27<a className="old" href="https://vip.58.com/index/merchant/?from=zhaopin">【商家中心】</a>
            </h1>
          </div>
          <div className="header-account">
            <ul className="header-menu">
              <li>
                <a href="http://vip.58.com/app/sysmsg/" target="_blank"><i className="icon-message mr5"></i><span>(383)</span></a>
              </li>
              <li>
                <a href="javascript:void(0)" className="loginIcon"><i className="icon icon-user mr5"></i> <span>sgytest014</span> <i className="icon icon-caret-down"></i></a>
              </li>
				      <li><a href="//my.58.com" target="_blank"><span>58用户中心</span></a></li>
              <li>
                <a href="//openapi.58.com/v2/auth/show?app_key=0459031bdb3572deb0780cdd7e1db3c2&amp;auth_type=1&amp;redirect_uri=http://passport.chinahr.com/qy/buser/openId/callback&amp;state=58" target="_blank"><span>中华英才网</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
