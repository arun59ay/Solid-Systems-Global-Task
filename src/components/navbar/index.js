import React, { Component } from 'react';
import '../style.scss';
import '../../assets/styles/variable.scss';


export default class Navbar extends Component {


    render() {
        let list = require('../../assets/images/list.png')
        let close = require('../../assets/images/close.png')
        return (
            <React.Fragment>
                <div className="nav-bar">
                    <div>
                        <div className='menu-icon' onClick={() => this.props.handleNavBar("navbar")}>
                            <img src={this.props.handleNavBar ? list : close}
                                width='22' height='18' alt="" />
                        </div>
                    </div>
                    <div>
                        <ul className="custom-list">
                            <li>Home</li>
                            <li>Qbook</li>
                            <li>Admin Panel</li>
                            <li>User Name  <span className="ft-10">&#x25bc;</span></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
