import React from "react";
import PropTypes from 'prop-types';
const alignLeft = {
    textAlign:"left"
  };
  
  const paddingLeft = {
       marginLeft : '20px'
  }

  const paddingLeftWidth ={
      width: '20%',
      textAlign: 'center',
      alignItems: 'center'

  }
export class Home extends React.Component {
    constructor(props){
        super();
        this.age = props.age;
        this.state = {
            age: props.initialAge,
            status: 'unresolved',
            changeLink: 'About',
            homeLink: props.homeLink
        }
        setTimeout(()=> {
            this.setState({
                status: 'Solved buddy'
            })
        }, 4000)
        console.log('constructor')
    }

    componentWillMount = () => {
      console.log("component will mount")
    }

    componentDidMount = () => {
      console.log("component did mount");
    }
    
     componentWillReceiveProps(nextProps) {
         console.log("will receive props", nextProps)
     }

     shouldComponentUpdate = (nextProps, nextState) => {
       console.log("should component update", nextProps, nextState)
       return true;
     }

     componentWillUpdate = (nextProps, nextState) => {
       console.log("component will update", nextProps, nextState)
     }

     componentDidUpdate = (prevProps, prevState) => {
       console.log("component did update", prevProps, prevState)
     }

     componentWillUnmount = () => {
       console.log("component will unmount")
     }
     
     
     
     
     
    
    onMakeOlder(){
           this.age+=3; 
           console.log(this.age)
           this.setState({
               age: this.state.age + 3
           })
    }

    onChangeLink(){
        this.props.onChangeLink(this.state.changeLink);
    }
    onFooterAdd(){
        this.props.addItems('abc');
    }

    onHandleChange(event){
        this.setState({
            status: event.target.value
        })
    }

    onChangeHomeLink(event){
        this.setState({
            homeLink: event.target.value
        })
    }

    propogateChangeToParentHeader(event){
        this.props.homeLinkChanges(this.state.homeLink);
    
    }

    render() {
        console.log(this.props)
        let content = "";
        if (true) {
            content = <p>Hello react</p>           
        }
        return (
            <div >
                <br></br>
                <p> In a new component </p>
                {[1, 2, 3].join('***')}
                {content}
                <p> My name is {this.props.user.name} and age is {this.state.age}</p>
                <p> My hobby is {this.props.user.hobbies[0]} and the status is {this.state.status}</p>
                <hr />
                {this.props.children}
                <hr />
                <h4> Hobbies</h4>
                <ul> {this.props.user.hobbies.map((hobby, index) => <li style={alignLeft} key={index}>{hobby}</li>)}</ul>
                <hr/>
              
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older buddy</button>
                <button style={paddingLeft} onClick ={this.props.greetings} className="btn btn-primary"> Greet </button>
                <button style={paddingLeft} onClick ={this.onChangeLink.bind(this)} className="btn btn-primary"> Change </button>
                <button style={paddingLeft} onClick ={this.onFooterAdd.bind(this)} className="btn btn-primary"> Footer add </button>
                <input  style={paddingLeftWidth} className="form-control" type = 'text' onChange = {this.onHandleChange.bind(this)}value = {this.state.status}/>
                <input  style={paddingLeftWidth} className="form-control" type = 'text' onChange = {this.onChangeHomeLink.bind(this)}value = {this.state.homeLink}/>
                <button style={paddingLeft} onClick ={this.propogateChangeToParentHeader.bind(this)} className="btn btn-primary"> Change header </button>
            </div>
        )
    };
}

Home.propTypes = {
    name: PropTypes.string,
    user: PropTypes.object,
    age: PropTypes.number,
    children: PropTypes.element.isRequired,
    greetings: PropTypes.func
}
