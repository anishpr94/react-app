import React from "react";
import { Link } from "react-router-dom"
// export class Header extends React.Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-sm bg-light">
//         <div className="container">
//           <div className="navbar-header">
//             <ul className="navbar-nav">
//               <li className="nav-item"> <a className="nav-link" href="#"> Home</a></li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }

//stateless component
export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container">
        <div className="navbar-header">
          <ul className="navbar-nav">
            {/* {props.homeLinks.map((link, index) => 
            )} */}
            <li id ={0} className="nav-item"><Link to="/"className="nav-link" href="#"> {props.homeLinks[0]}</Link></li>
            <li id ={1} className="nav-item"><Link to="/card"className="nav-link" href="#"> {props.homeLinks[1]}</Link></li>
            <li id ={2} className="nav-item"><Link to="/new"className="nav-link" href="#"> {props.homeLinks[2]}</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


