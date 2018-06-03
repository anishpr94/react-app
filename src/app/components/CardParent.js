import React from "react";
import PropTypes from 'prop-types';
import { CardExampleCardProps } from "./Card";
import { Image } from "semantic-ui-react";

const splitWidth = {
  
    padding: "10px",
    overflow: 'auto'
};

const paddingLeft = {
    marginLeft: '20px'
}
const imageSize = {
    width: '200px',
    height: '200px',
    margin: '20px'
}


export class CardParent extends React.Component {
    render() {
        return (
            <div className="" style={splitWidth}>
                <div className="row">
                    <div className="col-sm-3 col-md-3" style={paddingLeft}>
                        <CardExampleCardProps imageName="batsup.gif" />
                    </div>
                    <div className="col-sm-3 col-md-3" style={paddingLeft} >
                        <CardExampleCardProps imageName="gamer.gif" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 col-md-2" style={imageSize}>
                        <Image src="gamer.gif" />
                    </div>
                    <div className="col-sm-3 col-md-2" style={imageSize} >
                        <Image src="1.gif" />
                    </div>
                    <div className="col-sm-3 col-md-2" style={imageSize} >
                        <Image src="2.gif" />
                    </div>
                    <div className="col-sm-3 col-md-2" style={imageSize} >
                        <Image src="3.gif" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 col-md-2" style={imageSize}>
                        <Image src="4.gif" />
                    </div>
                    <div className="col-sm-3 col-md-2" style={imageSize} >
                        <Image src="5.gif" />
                    </div>
                    <div className="col-sm-3 col-md-2" style={imageSize}>
                        <Image src="6.gif" />
                    </div>
                    <div className="col-sm-3 col-md-2" style={imageSize}>
                        <Image src="7.gif" />
                    </div>
                </div>
            </div>
        )
    }
}