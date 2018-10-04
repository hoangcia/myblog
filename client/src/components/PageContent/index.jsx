import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SideBar from '../SideBar';

class PageContent extends React.Component {
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
        const sideBarInput = {
            categories: [{
                id: 1,
                name: "Category 1",
                quantity: 2
            },
            {
                id: 2,
                name: "Category 2",
                quantity: 33
            }]
        };
        return (
            <div id="content-wrap">

                <div className="row">

                    <div id="main" className="eight columns">

                        <section className="page">

                            <h2 className="entry-title">
                                Sample Page.
             </h2>

                            <p className="lead">Lorem ipsum Nisi enim est proident est magna occaecat dolore proident eu ex sunt consectetur consectetur dolore enim nisi exercitation adipisicing magna culpa commodo deserunt ut do Ut occaecat. Lorem ipsum Veniam consequat quis aliquip dolore minim ex labore dolor Excepteur Duis velit in officia Excepteur officia officia officia cillum ut elit in fugiat incididunt ea ad Ut ut ea ea dolor ex dolor eu magna voluptate irure consectetur.</p>

                            <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>

                            <p>Lorem ipsum Nisi enim est proident est magna occaecat dolore proident eu ex sunt consectetur consectetur dolore enim nisi exercitation adipisicing magna culpa commodo deserunt ut do Ut occaecat. Lorem ipsum Veniam consequat quis aliquip dolore minim ex labore dolor Excepteur Duis velit in officia Excepteur officia officia officia cillum ut elit in fugiat incididunt ea ad Ut ut ea ea dolor ex dolor eu magna voluptate irure consectetur.</p>

                            <div className="row">

                                <div className="six columns left">

                                    <h5>Our Process.</h5>

                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                   eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                   voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>

                                </div>

                                <div className="six columns right">

                                    <h5>Our Approach.</h5>

                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                   eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                   voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>

                                </div>

                            </div>

                            <div className="row">

                                <div className="six columns left">

                                    <h5>Our Goal.</h5>

                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                   eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                   voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>

                                </div>

                                <div className="six columns right">

                                    <h5>Our Mission.</h5>

                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                   eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                   voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>

                                </div>

                            </div>

                        </section> {/* End page */}

                    </div> {/* End main */}
                    <SideBar key="side-bar" value={sideBarInput} />

                </div> {/* end row */}

            </div> // end content-wrap 
        );
    }
}

const mapStateToProps = state => ({
    //    articles: state.home.articles,
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'PAGE_CONTENT_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContent);
