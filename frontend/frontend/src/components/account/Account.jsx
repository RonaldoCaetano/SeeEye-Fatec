import React, { Component } from 'react';
import Loader from '../helpers/Loader';
import './account.css'
import { Link } from 'react-router-dom'

class Account extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            loader: true
        }
    }


    componentDidMount() {
        const user = sessionStorage.getItem('data')

        if (user) {
            const jsonUser = JSON.parse(user)
            this.setState({ user: jsonUser, loader: false })
        } else {
            window.location.href = "/home"
        }

    }

    render() {
        console.log(this)
        return (
            this.state.loader ? (
                <Loader />
            ) : (
                    <div className="account" id="account">
                        <div className="spot-user">
                            <div className="content-user">
                                <h1 className="user-title">Usuário</h1>
                                <h2 className="name-user">
                                    Nome:
                                    {this.state.user.data.user.name}
                                </h2>
                                <h2 className="name-user email">
                                    Email:
                                    {this.state.user.data.user.email}
                                </h2>
                            </div>
                        </div>
                        <div className="results">
                            <h1 className="results-title">
                                Resultados
                            </h1>
                            {
                                this.state.user.data.user.results != false ? (
                                    <div></div>
                                ) : (
                                        <div className="not-results">
                                            <h2 className="title-not">
                                                Não foram encontrados Resultados.
                                                <Link to="/camera" className="link-camera">
                                                    Clique aqui para realizar o teste com a camera
                                                </Link>
                                            </h2>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                )
        );
    }
}

export default Account;