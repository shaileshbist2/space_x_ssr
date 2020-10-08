import React from 'react';
import axios from 'axios';
import DataView from '../components/data-view';
import Layout from '../components/layouts/Layout';
import { baseUrl } from '../utils/data.json';
import '../styles/main.scss';
import '../styles/launch.scss';

function LaunchProgram(props) {
    return (
        <div className="row main">
            <Layout>
                <div className="col-10">
                    <div className="row">
                        <DataView props={props} />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

LaunchProgram.getInitialProps = async () => {
    let res = await axios.get(`${baseUrl}?limit=100`);
    return {
        data: res.data
    }
}

export default LaunchProgram;
