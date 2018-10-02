import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Footer extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <footer>

            <div className="row"> 
      
                <div className="twelve columns">	
                      <ul className="social-links">
                     <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                     <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                     <li><a href="#"><i className="fa fa-google-plus"></i></a></li>               
                     <li><a href="#"><i className="fa fa-github-square"></i></a></li>
                     <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                     <li><a href="#"><i className="fa fa-flickr"></i></a></li>               
                     <li><a href="#"><i className="fa fa-skype"></i></a></li>
                  </ul>			
                </div>
                
               <div className="six columns info">
      
                  <h3>About Keep It Simple</h3> 
      
                  <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. 
                  </p>
      
                  <p>Lorem ipsum Sed nulla deserunt voluptate elit occaecat culpa cupidatat sit irure sint 
                  sint incididunt cupidatat esse in Ut sed commodo tempor consequat culpa fugiat incididunt.</p>
      
               </div>
      
               <div className="four columns">
      
                  <h3>Photostream</h3>
                  
                  <ul className="photostream group">
                     <li><a href="#"><img alt="thumbnail" src="dist/images/thumb.jpg"/></a></li>
                     <li><a href="#"><img alt="thumbnail" src="dist/images/thumb.jpg"/></a></li>
                     <li><a href="#"><img alt="thumbnail" src="dist/images/thumb.jpg"/></a></li>
                     <li><a href="#"><img alt="thumbnail" src="dist/images/thumb.jpg"/></a></li>
                     <li><a href="#"><img alt="thumbnail" src="dist/images/thumb.jpg"/></a></li>
                     <li><a href="#"><img alt="thumbnail" src="dist/images/thumb.jpg"/></a></li>
                     <li><a href="#"><img alt="thumbnail" src="dist/images/thumb.jpg"/></a></li>
                     <li><a href="#"><img alt="thumbnail" src="dist/images/thumb.jpg"/></a></li>
                  </ul>                 
               </div>
      
               <div className="two columns">
                  <h3 className="social">Navigate</h3>
      
                  <ul className="navigate group">
                     <li><a href="#">Home</a></li>
                     <li><a href="#">Blog</a></li>
                     <li><a href="#">Demo</a></li>
                     <li><a href="#">Archives</a></li>
                     <li><a href="#">About</a></li>
                  </ul>
               </div>
      
               <p className="copyright">&copy; Copyright 2018 Hoang's Blog. &nbsp; Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a>.</p>
              
            </div> 
      
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-chevron-up"></i></a></div>
      
         </footer>          
        );
    }
}
const mapStateToProps = state => ({
    
  });
  
  const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'FOOTER_LOADED', data }),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
