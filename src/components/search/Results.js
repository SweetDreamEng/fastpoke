import React, { useEffect } from "react";
import person from "../../assets/img/person.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getRecruiters } from '../../actions/searchActions';

const Results = () => {

    const {
        recruiters,
    } = useSelector((state) => state.searchRecruiter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecruiters())
    }, [])

    return (
        <div className="sr-return">
            <ul className="clean rec-grid">
                <li>
                    <a href="profile-talent.html" className="pg-card">
                        <span className="pgc-ref">10</span>
                        <div className="pgcr-box">
                            <div className="pgcr-left">
                                <span className="pgc-image" style={{backgroundImage: `url(${person})`}}></span>
                                <button href="#" className="btn btn-secondary btn-small">Message</button>
                            </div>
                            <div className="pgcr-right">
                                <b className="pgc-name">Mark Reynolds</b>
                                <small><i className="fad fa-building"></i> Newgold Search</small>
                                <small><i className="fad fa-map-marker-alt"></i> Stamford, Connecticut</small>
                                <br/><br/>
                                <div className="pgcr-pills">
                                    <ul className="certs clean">
                                        <li className="pgcr-title">Industries Served</li>
                                        <li>{recruiters}</li>
                                        <li>Logistics & Supply Chain</li>
                                    </ul>
                                    <ul className="certs clean">
                                        <li className="pgcr-title">Placement Functions</li>
                                        <li>Information Technology</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <span className="pgcr-length">10</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Results;