'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import lodash from 'lodash';

import SiderNav from './common/SiderNav.jsx';
import Logo from './common/Logo.jsx';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    handleCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        const siderProps = {
            collapsible: true,
            collapsed: this.state.collapsed,
            onCollapse: e => {this.handleCollapse()}
        }
        const siderNavProps = {
            hideText: this.state.collapsed
        }
        return (
            <Layout className="layoutWraper">
                <Sider {...siderProps}>
                    <Logo />
                    <SiderNav {...siderNavProps} />
                </Sider>
                <Layout>
                    <Content className="contentWraper">
                        {this.props.children}
                    </Content>
                    <Footer className="footerWraper">Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default App;
