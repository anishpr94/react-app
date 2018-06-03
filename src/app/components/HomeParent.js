import React from "react"
import { render } from "react-dom"
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { CardParent } from "./CardParent";
const pStyle = {
    textAlign: "center",
    width: '100%'
};
const splitWidth = {
    display: "inline-flex",
    padding: "10px"
};
const padding = {
    margin: "20px"
};

export class HomeParent extends React.Component {
    constructor() {
        super();
        this.state = {
            greetMessage: '',
            footerItems: ['Footer'],
            homeLink: 'This is me',
            homeMounted: true
        }
    }
    greetings(name) {
        this.setState({
            greetMessage: 'Hello Bro Anish!'
        })
        alert(name);
    }   

    onHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }
   
    render() {
        let user = {
            name: 'anish',
            hobbies: ['cricket', 'music', 'sing']
        }
        let homeComp = "";
        if (this.state.homeMounted) {
            homeComp = (
                <Home name={"bartender here"}
                    initialAge={24}
                    user={user}
                    greetings={this.greetings.bind(this)}
                    onChangeLink={this.greetings.bind(this)}
                    addItems={this.props.addItems}
                    homeLink={this.props.homeLink}
                    homeLinkChanges={this.props.homeLinkChanges}
                    initialLink={23}>
                    {/* <Home/> */}
                    <p> cool boy : {this.state.greetMessage}</p>
                </Home>
            )
        }
        return (
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1" style={pStyle}>
                    {homeComp}
                    <div className="col-xs-10 col-xs-offset-1" style={pStyle}>
                        <button style={padding} onClick={this.onHomeMounted.bind(this)} className="btn btn-primary" >Unmount home</button>
                    </div>
                </div>
            </div>
        );

    }
}

