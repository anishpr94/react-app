import React from "react";
import PropTypes from 'prop-types';
import { Header } from "./Header";
import { HomeParent } from "./HomeParent";
import { Footer } from "./Footer";
export class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            footerItems: ['Footer'],
            homeLink: ['Home', 'Card', 'New']
        }
    }

    onChangeLink(name) {
        this.setState({
            homeLink: name
        })
    }    

    addItems(name) {
        this.setState({
            footerItems: [...this.state.footerItems, name]
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <div>
                    <Header homeLinks={this.state.homeLink} />
                </div>
                   {/* <HomeParent   addItems={this.addItems.bind(this)} homeLink={this.state.homeLink}  homeLinkChanges={this.onChangeLink.bind(this)}/> */}
                <div>
                    {this.props.children}
                    <Footer footerItems={this.state.footerItems} />
                </div>
            </div>
        )
    }
}