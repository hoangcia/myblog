import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: props.pageName
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <header id="top">

                <div className="row">

                    <div className="header-content twelve columns">

                        <h1 id="logo-text"><a href="index.html" title="">Ngộ's blog</a></h1>
                        <p id="intro">I don't have a slogan right now....</p>

                    </div>

                </div>

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Menu</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide Menu</a>

                    <div className="row">

                        <ul id="nav" className="nav">
                            <li className={this.state.currentPage == "home"?"current":""}><a href="/">Home</a></li>
                            <li className={this.state.currentPage == "archives"?"current":""}><a href="/archives">Archives</a></li>
                            <li className={this.state.currentPage == "blog" || this.state.currentPage == "single" ? "current has-children":"has-children"}><a href="/archives/single">Blog</a>
                                <ul>
                                    <li><a href="/archives/blog">Blog Entries</a></li>
                                    <li><a href="/archives/single">Single Blog</a></li>
                                </ul>
                            </li>
                            <li className={this.state.currentPage == "page"?"current":""}><a href="/page">Page</a></li>
                        </ul>

                    </div>

                </nav>

            </header>
        );
    }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'HEADER_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
