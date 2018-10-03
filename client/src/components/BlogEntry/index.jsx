import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class BlogEntry extends React.Component {
    constructor(props) {
        super(props);

        let value = props.value;

        this.state = {
            id: value.id,
            title: value.title,
            date: value.date,
            tags: value.tags,
            content: value.content,
            isToggleContentOn: true
        };
        //binding event handlers - required in the callback
        this.toggleContent = this.toggleContent.bind(this);
    }
    componentDidMount() {
        /*
        const { onLoad } = this.props;
    
        axios('http://localhost:8000/api/articles')
          .then((res) => onLoad(res.data));
          */
    }
    componentWillUnmount() {

    }
    toggleContent(e) {
        e.preventDefault();

        let divBlogContent = this.state.id + "-content";
        let element = document.getElementById(divBlogContent);
        let isToggleContentOn = this.state.isToggleContentOn;

        if (isToggleContentOn) {
            element.style.display = "none";
            this.setState({ isToggleContentOn: !isToggleContentOn });
        }
        else {
            element.style.display = "block";
            this.setState({ isToggleContentOn: !isToggleContentOn });
        }
    }
    render() {
        const state = this.state,
            tags = state.tags.map((tag, index, array) => {
                return (
                    <li key={tag.id}>
                        <a href={"/catagory/" + tag.id} title={tag.name} rel="category tag">{tag.name}</a>
                        {index < array.length - 1 ? <span className="meta-sep">&bull;</span>:""}
                    </li>

                );
            });
        return (
            <article className="entry">

                <header className="entry-header">

                    <h2 className="entry-title">
                        <a href="/single/:id" title={this.state.title}>{this.state.title}</a>
                    </h2>

                    <div className="entry-meta">
                        <ul>
                            <li>{state.date.toDateString()}</li>
                            <span className="meta-sep">&bull;</span>
                            {tags}
                        </ul>
                    </div>
                    <button onClick={this.toggleContent}>{this.state.isToggleContentOn ? 'Hide' : 'Show'}</button>
                </header>

                <div className="entry-content" id={state.id + "-content"}>
                    <p>{state.content}</p>
                </div>

            </article> // end entry
        );
    }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'BLOG_ENTRY_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogEntry);