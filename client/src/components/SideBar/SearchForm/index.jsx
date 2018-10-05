import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            searchValue: props.searchValue || ""
        };        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSearchBlur = this.onSearchBlur.bind(this);
        this.onSearchFocus = this.onSearchFocus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputOnInput = this.handleInputOnInput.bind(this);

    }

    handleSubmit(event) {

        let formValues = $(event.target).serializeArray();

        console.log(formValues);
        event.preventDefault();
    }
    handleInputOnInput(event) {
        const state = this.state;

        this.setState({
            [event.target.name]: event.target.value
        });

        if(state[event.target.name] != event.target.value){
            this.props.onSearchChange(event.target.value);
        }
    }
    handleInputChange(event) {
        const inputName = event.target.name,
            value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        this.setState({
            [inputName]: value
        });

        if(this.state[inputName] != value){
            this.props.onSearchChange(this.props.id, value);
        }

    }
    componentDidMount() {

    }
    onSearchBlur(event) {
        if (event.target.value == '') {
            event.target.value = 'Search here...';
        }
    }

    onSearchFocus(event) {
        if (event.target.value == 'Search here...') {
            event.target.value = '';
        }
    }
    render() {
        console.log("form rendering : " + this.props.id + " - value: " + this.props.searchValue);        
        let searchValue = this.props.searchValue;

        return (
            <div className="widget widget_search">
                <h3>Search</h3>
                <form action="/search" onSubmit={this.handleSubmit} id={this.props.id}>

                    <input type="text" placeholder="Search here..." className="text-search"
                        id={this.props.id + "-input-field"}
                        name={this.props.id + "-input-field"}
                        value={searchValue}
                        onInput={this.handleInputOnInput}
                        onChange={this.handleInputChange}
                        onBlur={this.onSearchBlur}
                        onFocus={this.onSearchFocus}  />

                    <input type="submit" className="submit-search" value="" />

                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'SEARCH_FORM_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);