import React from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/data.json';
import Layout from '../components/layouts/Layout';
import DataView from '../components/data-view';
import { prepareUrl } from '../utils/index';
import '../styles/main.scss';
import '../styles/launch.scss';

const Year = props => {
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

Year.getInitialProps = async context => {
    const url = prepareUrl(context.query);
    let res = await axios.get(`${baseUrl}?limit=100&${url}`);
    return {
        data: res.data
    }
};

export default Year;
