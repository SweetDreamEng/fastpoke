import React from "react";
import person from "../../assets/img/person.jpg";
import MessageApi from "../../api/message";

const MessageSideBar = () => {
    return (
        <div className="mb-right">
            <ul className="mb-contacts clean">
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <i className="fad fa-times"></i>
                        <b>Ethan Cohen</b>
                        <small><i className="fad fa-building"></i> Fastpoke</small>
                        <small><i className="fad fa-map-marker-alt"></i> New York, NY</small>
                    </div>
                </li>
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <i className="fad fa-times"></i>
                        <b>Ethan Cohen</b>
                        <small><i className="fad fa-building"></i> Fastpoke</small>
                        <small><i className="fad fa-map-marker-alt"></i> New York, NY</small>
                    </div>
                </li>
            </ul>
            <button className="btn-message">
                Add People
                <i className="fad fa-user-plus"></i>
            </button>
        </div>
    );
};

export default MessageSideBar;