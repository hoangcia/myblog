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
    onEditorInit(editor) {
        // You can store the "editor" and use when it is needed.
        editor.ui.view.editable.element.style.height = (document.documentElement.clientHeight * 0.5) + "px";
        console.log('Editor is ready to use!', editor);
    }
    onEditorChange(event, editor) {
        const data = editor.getData();
        console.log({ event, editor, data });
    }
    render() {
        /*
        const { articles } = this.props;
       */
        //console.log(blogEntryComponents);
        let config = {},
        btnBarStyles = {
            float: "right"
        },
        margin5 = {
            margin: "5px"
        },
        whiteBg = {
            "background-color": "white",
            "color": "#333333",
            "border": "solid 1px #CFCFCF"
        };
        return (
            <div id="content-wrap">
                <div className="row">
                    <div id="main" className="twelve columns">
                        <div id="blog-editor">
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onInit={this.onEditorInit}
                                config={config}
                                onChange={this.onEditorChange}
                            />
                        </div>
                        <div id="button-bar">
                            <div style={btnBarStyles}>
                                <button id="preview" style={Object.assign(whiteBg,Object.assign({},margin5))}>Preview</button>
                                <button id="save" style={margin5}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
