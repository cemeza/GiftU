import React, { Component } from "react";
import Auth from "../../lib/Auth";
import Router from "next/router";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const auth = new Auth();

export default class Callback extends Component {
    componentDidMount() {
        var user_details = auth.extractInfoFromHash();
        console.log(user_details);
        auth.handleAuthentication().then((res) => {
            if (!res) {
                // window.location.replace("/");
                Router.push("/");
            } else {
                Router.push("/search");
            }
        });
    }

    render() {
        const style = {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
        };
        return ( 
			<div style = { style } >
            	<Loader
                    type="Puff"
                    color="#A0DDC7"
                    height={100}
                    width={100}
                    timeout={1000} //3 secs
                />
			</div>
        );
    }
}