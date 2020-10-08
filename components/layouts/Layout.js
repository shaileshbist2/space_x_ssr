import React from 'react';
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";


const Layout = (props) => {
    return (
        <React.Fragment>
            {Header(props)}
            {props.children}
            {Footer(props)}
        </React.Fragment>
    )
};

export default Layout;
