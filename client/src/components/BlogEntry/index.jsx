import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class BlogEntry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : props.id,
            date: props.date,
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
    componentWillUnmount(){

    }
    toggleContent(e){
        e.preventDefault();

        let divBlogContent = this.state.id + "-content";
        let element = document.getElementById(divBlogContent);
        let isToggleContentOn = this.state.isToggleContentOn;

        if(isToggleContentOn)
        {
            element.style.display = "none";
            this.setState({isToggleContentOn: !isToggleContentOn});                        
        }
        else{
            element.style.display = "block";
            this.setState({isToggleContentOn: !isToggleContentOn});            
        }
    }       
    render() {
        return (
            <article className="entry">

                <header className="entry-header">

                    <h2 className="entry-title">
                        <a href="/single/:id" title="">Hey, We Love Open Sans!</a>
                    </h2>

                    <div className="entry-meta">
                        <ul>
                            <li>{this.state.date.toDateString()}</li>
                            <span className="meta-sep">&bull;</span>
                            <li><a href="#" title="" rel="category tag">Ghost</a></li>
                            <span className="meta-sep">&bull;</span>
                            <li>John Doe</li>
                        </ul>
                    </div>
                    <button onClick={this.toggleContent}>{this.state.isToggleContentOn ? 'Hide' : 'Show'}</button>
                </header>

                <div className="entry-content" id={this.state.id + "-content"}>
                    <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
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