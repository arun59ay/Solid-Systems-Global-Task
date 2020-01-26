import React, { Component } from 'react';
import '../style.scss';
import '../../assets/styles/variable.scss';
import Login from '../../page/login/index';
import SignUp from '../../page/signUp/index';


export default class Card extends Component {

    onChangeInput(e) {
        console.log(e, "......event");
    }
    render() {
        const { handleClick, signup, login } = this.props;
        return (
            <React.Fragment>
                <div className="custom-card">
                    {login ? (
                        <div>
                            <Login></Login>
                            <div className="mt-2">
                                <span>click here to</span>
                                <a onClick={() => handleClick("signup")} href="javascript:void(0)" className="card-link"> Sign Up?</a>
                            </div>
                        </div>
                    ) : null}
                    {signup ? (
                        <div>
                            <SignUp></SignUp>
                            <div className="mt-2">
                                <span>click here to</span>
                                <a onClick={() => handleClick("login")} href="javascript:void(0)" className="card-link"> Login</a>
                            </div>
                        </div>
                    ) : null}
                </div>
            </React.Fragment>
        )
    }
}
