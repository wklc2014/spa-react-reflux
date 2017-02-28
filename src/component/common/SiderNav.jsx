'use strict';
import React, {Component} from 'react';
import NavLink from '../common/NavLink.jsx';

import {NAV_DATA} from '../common/const.js';

import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

class SiderNav extends Component {
    render() {
        const {hideText} = this.props;
        const menuEle = Object.keys(NAV_DATA).map((nav, i) => {
            const item = NAV_DATA[nav];
            const text = hideText ? null : item.text;
            return (
                <Menu.Item key={i}>
                    <Icon type={item.icon} />
                    <span className="nav-text">
                        <NavLink isHome={!!item.isHome} to={item.to}>
                            {text}
                        </NavLink>
                    </span>
                </Menu.Item>
            )
        })
        return (
            <Menu theme="dark" mode="inline">
                {menuEle}
            </Menu>
        )
    }
}

export default SiderNav;
