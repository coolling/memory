import React from 'react';
//下载url 用于解析传递的参数 在需要的页面引用 用法： url.parse(this.props.location.search, true).query
import url from "url";

export default class Index extends React.Component {
    
    
    render() {
        
        return (
            <div>
                <a href='#/play'>去play</a>
              
                <a href='#/rush?id=4&m=1'>去rush</a>
            </div>
        )
    }
}