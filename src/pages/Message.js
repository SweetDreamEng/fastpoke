import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import person from "../assets/img/person.jpg";
import client_placeholder from "../assets/img/client-placeholder.jpg";
import tulane from "../assets/img/tulane.jpg";
import MessageList from "../components/message/MessageList";
import MessagePanel from "../components/message/MessagePanel";
import MessageSideBar from "../components/message/MessageSideBar";

const Message = () => {

    return (
        <>
            <Header />
            <main className="message-page">
                <div className="container">
                    <h1>Inbox</h1>
                </div>
                <div className="container pt-3">
                    <div className="messaging-box">
                        <MessageList/>
                        <MessagePanel/>
                        <MessageSideBar/>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};


export default Message;
