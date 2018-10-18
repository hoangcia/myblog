import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';

import NewBlogEntryContent from '../NewBlogEntryContent';

class NewBlogEntry extends React.Component {
  componentDidMount() {
    
    const { onLoad } = this.props;
  /*
    axios('http://localhost:8000/api/articles')
      .then((res) => onLoad(res.data));
  */    
  }
  render() {
    /*
    const { articles } = this.props;
   */
    return (
    <div id="new-blog-entry">            
      <Header pageName="new-blog"/>
      <NewBlogEntryContent/>      
    </div>
    );             
  }
}

const mapStateToProps = state => ({
  //articles: state.home.articles,
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'NEW_BLOG_ENTRY_PAGE_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBlogEntry);
