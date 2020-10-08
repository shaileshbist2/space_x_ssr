import React from 'react';
import Router, { useRouter } from 'next/router'
import Link from "next/link";
import { prepareUrl } from '../../utils/index';
import { years, launch, landing } from '../../utils/data.json';
import '../../styles/main.scss';

let query = {
    launch_year: "",
    launch_success: "",
    land_success: ""
};

export const Header = (props) => {
    const router = useRouter();
    function updateKey(key, p) {
        if (key === 'launch_year') {
            if (p === query.launch_year) {
                query['launch_year'] = ""
            } else {
                query['launch_year'] = p
            }
        } else if (key === 'launch_success') {
            if (p === query.launch_success) {
                query['launch_success'] = ""
            } else {
                query['launch_success'] = p
            }
        } else if (key === 'land_success') {
            if (p === query.land_success) {
                query['land_success'] = ""
            } else {
                query['land_success'] = p
            }
        }
        const url = prepareUrl(query);
        router.push('data/?' + url)
    }

    return (
        <React.Fragment>
            <div className="col-12 header">
                <h4>SpaceX Launch Programs</h4>
            </div>
            <div className="col-2 leftSidebar">
                <div className="row">
                    <div className="col-12 block">
                        <h3>Filters</h3>
                        <h4>Launch Year</h4>
                        <hr />
                    </div>
                    <div className="row">
                        {
                            years.map((p, i) =>
                                <div key={i} className="col-6 filter">
                                    <a onClick={() => updateKey('launch_year', p)} style={{ cursor: "pointer" }}>
                                        {p}
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 block">
                        <h4>Successful Launch</h4>
                        <hr />
                    </div>
                    <div className="row">
                        {
                            launch.map((p, i) =>
                                <div key={i} className="col-6 filter">
                                    <a href="#" onClick={() => updateKey('launch_success', p)}>
                                        {p}
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 block">
                        <h4>Successful Land</h4>
                        <hr />
                    </div>
                    <div className="row">
                        {
                            landing.map((p, i) =>
                                <div key={i} className="col-6 filter">
                                    <a onClick={() => updateKey('land_success', p)} style={{ cursor: "pointer" }}>
                                        {p}
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
