import React from 'react';

const DataView = props => {
    return (
        <React.Fragment>
            {
                props.props.data.map((p, i) =>
                    <div
                        key={i}
                        className="col-3 col-md-6">
                        <div className="row data-block">
                            <div className="col-12 logo">
                                <img src={p.links && p.links.mission_patch_small} />
                            </div>
                            <div className="col-12 mission-name">
                                <strong>{p.mission_name} # {p.flight_number}</strong>
                            </div>
                            <div className="col-12 info">
                                <strong>Mission Ids: </strong>
                                {p.mission_id && p.mission_id.length > 0 && p.mission_id.map((p, i) => <li key={i}>{p}</li>)}
                            </div>
                            <div className="col-12 info">
                                <strong>Launch Year: </strong> {p.launch_year}
                            </div>
                            <div className="col-12 info">
                                <strong>Successful Launch: </strong> {JSON.stringify(p.launch_success)}
                            </div>
                            <div className="col-12 info">
                                <strong>Successful Landing: </strong>
                                {p.rocket.first_stage.cores.length > 0 && p.rocket.first_stage.cores[0].land_success !== null && JSON.stringify(p.rocket.first_stage.cores[0].land_success)}
                            </div>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default DataView;
