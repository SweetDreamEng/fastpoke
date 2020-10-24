import React from "react";
import client_placeholder from "../../assets/img/client-placeholder.jpg";
import person from "../../assets/img/person.jpg";
import tulane from "../../assets/img/tulane.jpg";
import MessageApi from "../../api/message";

const MessagePanel = () => {
    return (
        <div className="mb-center">
            <div className="mb-toolbar">
                <button className="btn btn-small"><i className="fad fa-inbox-in"></i> Archive</button>
                <button className="btn btn-small"><i className="fad fa-envelope"></i> Mark as Unread
                </button>
            </div>
            <ul className="mb-reading-pane clean">
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${client_placeholder})` }}></span>
                    <div className="si-details">
                        <p className="intro">This is the very beginning of the conversation.</p>
                    </div>
                </li>
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <b>Darren Newman</b>
                        <p>Hi Jeff, here is the opening we discussed this morning. Excited to work with
                            you!</p>
                        <div className="pro-openings">
                            <div className="po-post">
                                <b>Account Executive</b>
                                <small><i className="fad fa-briefcase"></i> Direct Hire</small>
                                <small><i className="fad fa-map-marker-alt"></i> Los Angeles, CA</small>
                                <small>Base: $100,000/year</small>
                                <p>We are looking for an experienced CPA
                                    who works well with others and is flexible.
                                    Being a small company we are very open
                                    with one another and we place heavy value</p>
                            </div>
                        </div>
                    </div>
                    <span className="si-meta">
                    3:05pm
                  </span>
                </li>
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <b>Darren Newman</b>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                            atque.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ipsum.</p>
                    </div>
                    <span className="si-meta">
                    11:30am
                  </span>
                </li>
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${tulane})` }}></span>
                    <div className="si-details">
                        <b>Mike Brown</b>
                        <p>Hi Taylan, I think you guys I also am going to add more text so this goes
                            long.</p>
                    </div>
                    <span className="si-meta">
                    10:44am
                  </span>
                </li>
                <li className="date-change">
                    <span>August 10, 2010</span>
                </li>
                <li>
                                    <span className="si-image"
                                          style={{ backgroundImage: `url(${person})` }}></span>
                    <div className="si-details">
                        <b>Darren Newman</b>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                            atque.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ipsum.</p>
                    </div>
                    <span className="si-meta">
                    6:12pm
                  </span>
                </li>
            </ul>
            <div className="chat-box">
                <textarea rows="8" placeholder="Type your message here..."></textarea>
                <div className="cb-toolbar">
                    <button className="btn btn-small"><i className="fal fa-caret-down"></i></button>
                    <button className="btn btn-small"><i className="fal fa-paperclip"></i></button>
                    <button className="btn btn-small"><i className="fal fa-smile"></i></button>
                    <button className="btn btn-small btn-primary">Send</button>
                </div>
            </div>
        </div>
    );
};

export default MessagePanel;