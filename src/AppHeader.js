import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

class AppHeader extends React.Component{
  constructor(){
    super();
    this.state={
      defaultSelectedKeys:[window.location.pathname]
    }
  }

  render(){

    return(
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={this.state.defaultSelectedKeys}>
          <Menu.Item key="/"><Link to="/">App</Link></Menu.Item>
          <Menu.Item key="/about"><Link to="/about">About</Link></Menu.Item>
        </Menu>
    </Header>
    )
  }
    
}

export default AppHeader;