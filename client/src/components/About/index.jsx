import React from 'react';
import reactDOM from 'react-dom';
import { connect } from 'react-redux';

class About extends React.Component{
    render(){
        return (
            <div className="about">
                <h3>About page</h3>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    articles: [],
  });
  
  const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'ABOUT_PAGE_LOADED', data }),
  });

export default connect(mapStateToProps, mapDispatchToProps)(About);
