import React from 'react';
import url from "url";

export default class Rush extends React.Component {
    componentDidMount(){
        console.log(url.parse(this.props.location.search, true).query)
       
    }
    render() {
        return (
            <div>
                <a href='#/'>回到Index</a>
            </div>
        )
    }
}