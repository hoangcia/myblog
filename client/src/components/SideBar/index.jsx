import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class SideBar extends React.Component {
    componentDidMount() {
        /*
        const { onLoad } = this.props;
    
        axios('http://localhost:8000/api/articles')
          .then((res) => onLoad(res.data));
          */
    }
    render() {
        /*
        const { articles } = this.props;
       */
        return (
            <div id="sidebar" className="four columns">

                <div className="widget widget_search">
                    <h3>Search</h3>
                    <form action="#">

                        <input type="text" placeholder="Search here..." onBlur={() => { if (this.value == '') { this.value = 'Search here...'; } }} onFocus={() => { if (this.value == 'Search here...') { this.value = ''; } }} className="text-search" />
                        <input type="submit" className="submit-search" />

                    </form>
                </div>

                <div className="widget widget_categories group">
                    <h3>Categories.</h3>
                    <ul>
                        <li><a href="#" title="">Wordpress</a> (2)</li>
                        <li><a href="#" title="">Ghost</a> (14)</li>
                        <li><a href="#" title="">Joomla</a> (5)</li>
                        <li><a href="#" title="">Drupal</a> (3)</li>
                        <li><a href="#" title="">Magento</a> (2)</li>
                        <li><a href="#" title="">Uncategorized</a> (9)</li>
                    </ul>
                </div>

                <div className="widget widget_text group">
                    <h3>Widget Text.</h3>

                    <p>Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur sint cillum sint consectetur voluptate adipisicing Duis irure magna ut sit amet reprehenderit.</p>

                </div>

                <div className="widget widget_tags">
                    <h3>Post Tags.</h3>

                    <div className="tagcloud group">
                        <a href="#">Corporate</a>
                        <a href="#">Onepage</a>
                        <a href="#">Agency</a>
                        <a href="#">Multipurpose</a>
                        <a href="#">Blog</a>
                        <a href="#">Landing Page</a>
                        <a href="#">Resume</a>
                    </div>

                </div>

                <div className="widget widget_popular">
                    <h3>Popular Post.</h3>

                    <ul className="link-list">
                        <li><a href="#">Sint cillum consectetur voluptate.</a></li>
                        <li><a href="#">Lorem ipsum Ullamco commodo.</a></li>
                        <li><a href="#">Fugiat minim eiusmod do.</a></li>
                    </ul>

                </div>
            </div> // end sidebar 
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'SIDE_BAR_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
