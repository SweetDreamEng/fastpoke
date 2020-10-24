import React from "react";
import person from "../../assets/img/person.jpg";
import MessageApi from "../../api/message";

const MessageList = () => {
    return (
        <div className="mb-left">
            <div className="mbl-search search-box">
                <i className="fad fa-search"></i>
                <input type="search" placeholder="Search Messages"/>
            </div>
            <select className="btn-message">
                <option>All Messages</option>
            </select>
            <ul className="side-inbox clean">
                <li className="selection">
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <b>Darren Newman</b>
                        <p>Hi Taylan, I think you guys I also am going to add more text so this goes
                            long.</p>
                    </div>
                    <span className="si-meta">
                    Sun
                  </span>
                </li>
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <b>Ethan Cohen</b>
                        <p>I also am going to add more text so this goes long.</p>
                    </div>
                    <span className="si-meta">
                    Aug 11
                  </span>
                </li>
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <b>Ethan Cohen</b>
                        <p>I also am going to add more text so this goes long.</p>
                    </div>
                    <span className="si-meta">
                    Aug 11
                  </span>
                </li>
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <b>Ethan Cohen</b>
                        <p>I also am going to add more text so this goes long.</p>
                    </div>
                    <span className="si-meta">
                    Aug 11
                  </span>
                </li>
            </ul>
        </div>
    );
};

export default MessageList;