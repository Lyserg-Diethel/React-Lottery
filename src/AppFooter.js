import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;


class AppFooter extends React.Component{
    render(){
        return(
            <Footer style={{ textAlign: 'center' }}>I hope you're enjoying the app!</Footer>
        )
    }
}





export default AppFooter;