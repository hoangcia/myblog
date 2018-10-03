import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SideBar from '../SideBar';
import BlogEntry from '../BlogEntry';

class HomeContent extends React.Component {
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
        const date = new Date('2018-06-24T14:22:33');
        const blogEntries = [
            {
                id: 1,
                date: new Date("2018-07-23T12:21:38"),
                title: "Blog 1",
                content: "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.",
                tags: [{ id: 1, name: 'Local' }, { id: 2, name: 'tag 1' }]
            },
            {
                id: 2,
                title: "Blog 2",
                date: new Date("2018-06-23T18:21:38"),
                content: "Content 2",
                tags: [{ id: 1, name: 'Local' }, { id: 3, name: 'tag 2' }]
            }
        ];
        const blogEntryComponents = blogEntries.map((entry, index, array) =>
            <BlogEntry key={entry.id} value={entry} />
        ),
            sideBarInput = {
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

        //console.log(blogEntryComponents);
        return (
            <div id="content-wrap">

                <div className="row">

                    <div id="main" className="eight columns">

                        {blogEntryComponents}

                        <article className="entry">

                            <header className="entry-header">

                                <h2 className="entry-title">
                                    <a href="single.html" title="">Hey, We Love Open Sans!</a>
                                </h2>

                                <div className="entry-meta">
                                    <ul>
                                        <li>July 12, 2014</li>
                                        <span className="meta-sep">&bull;</span>
                                        <li><a href="#" title="" rel="category tag">Ghost</a></li>
                                        <span className="meta-sep">&bull;</span>
                                        <li>John Doe</li>
                                    </ul>
                                </div>

                            </header>

                            <div className="entry-content">
                                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
                            </div>

                        </article> {/* end entry */}

                        <article className="entry">

                            <header className="entry-header">

                                <h2 className="entry-title">
                                    <a href="single.html" title="">We All Love Good Typography.</a>
                                </h2>

                                <div className="entry-meta">
                                    <ul>
                                        <li>July 11, 2014</li>
                                        <span className="meta-sep">&bull;</span>
                                        <li>
                                            <a href="#" title="" rel="category tag">Wordpress</a>,
                             <a href="#" title="" rel="category tag">Ghost</a>
                                        </li>
                                        <span className="meta-sep">&bull;</span>
                                        <li>Jane Doe</li>
                                    </ul>
                                </div>

                            </header>

                            <div className="entry-content">
                                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in.</p>
                            </div>

                        </article> {/* end entry */}

                        <article className="entry">

                            <header className="entry-header">

                                <h2 className="entry-title">
                                    <a href="single.html" title="">White Space Everywhere.</a>
                                </h2>

                                <div className="entry-meta">
                                    <ul>
                                        <li>July 10, 2014</li>
                                        <span className="meta-sep">&bull;</span>
                                        <li>
                                            <a href="#" title="" rel="category tag">Joomla</a>,
                             <a href="#" title="" rel="category tag">Drupal</a>
                                        </li>
                                        <span className="meta-sep">&bull;</span>
                                        <li>Naruto Uzumaki</li>
                                    </ul>
                                </div>

                            </header>

                            <div className="entry-content">
                                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
                            </div>

                        </article> {/* end entry */}

                        <article className="entry">

                            <header className="entry-header">

                                <h2 className="entry-title">
                                    <a href="single.html" title="">Simple And Minimalist Designs.</a>
                                </h2>

                                <div className="entry-meta">
                                    <ul>
                                        <li>July 09, 2014</li>
                                        <span className="meta-sep">&bull;</span>
                                        <li>
                                            <a href="#" title="" rel="category tag">Ghost</a>
                                        </li>
                                        <span className="meta-sep">&bull;</span>
                                        <li>Naruto Uzumaki</li>
                                    </ul>
                                </div>

                            </header>

                            <div className="entry-content">
                                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
                            </div>

                        </article> {/* end entry */}


                    </div> {/* end main */}

                    <SideBar key="side-bar" value={sideBarInput} />

                </div> {/* end row */}

            </div> // end content-wrap
        );
    }
}

const mapStateToProps = state => ({
    articles: state.home.articles,
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'HOME_PAGE_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);
