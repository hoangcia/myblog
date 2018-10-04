import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';

import PageContent from '../PageContent';

class Page extends React.Component {
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
    <div id="page">            
      <Header pageName="page"/>
      <PageContent/>
      <Footer/>
    </div>
    );             
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'PAGE_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
