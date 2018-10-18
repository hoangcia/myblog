import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class NewBlogEntryContent extends React.Component {
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
        //console.log(blogEntryComponents);
        let config = {};
        return (
            <div id="content-wrap">
{/*
                <div className="row">
*/}
                    <div id="main" className="twelve columns">
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor 5!</p>"
                            onInit={editor => {
                                // You can store the "editor" and use when it is needed.
                                editor.config.set("height",600);
                                console.log('Editor is ready to use!', editor);
                            }}
                            config={config}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                            }}
                        />
                    </div>
                </div>
    
    //        </div>    
        );
    }
}

const mapStateToProps = state => ({
    //articles: state.home.articles,
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'NEW_BLOG_ENTRY_CONTENT_PAGE_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBlogEntryContent);
