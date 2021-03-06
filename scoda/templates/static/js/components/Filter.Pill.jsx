import React, { Component } from 'react';


export default class FilterPill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let main_class ='data-story-trigger';

        if(this.props.filter == 'Productive Cities'){
            main_class = 'data-story-trigger data-story-card-productive';
        }
        else if(this.props.filter == 'Inclusive Cities'){
            main_class = 'data-story-trigger data-story-card-inclusives';
        }
        else if(this.props.filter == 'Well Governed Cities'){
            main_class = 'data-story-trigger data-story-card-well';
        }
        else if(this.props.filter == 'Sustainable Cities'){
            main_class = 'data-story-trigger data-story-card-sustainable';
        }
        else if(this.props.filter == 'Built Enviroment'){
            main_class = 'data-story-trigger data-story-card-built';
        }
        else if(this.props.filter == 'City Demographics'){
            main_class = 'data-story-trigger data-story-card-city';
        }
        else if(this.props.filter == 'Employment'){
            main_class = 'data-story-trigger data-story-card-employment';
        }
        else if(this.props.filter == 'Services'){
            main_class = 'data-story-trigger data-story-card-service';
        }
        else if(this.props.filter == 'Economy'){
            main_class = 'data-story-trigger data-story-card-economy';
        }


        let pillStyle = {
            boxSizing: 'border-box',
            height: '34px',
            width: '164px',
            border: `2px solid ${this.props.color}`,
            borderRadius: '25px',
            backgroundColor: this.props.color,
            color: '#FFFFFF',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            letterSpacing: '0',
            lineHeight: '30px',
            textAlign: 'center'
        };

        return (
            <div id="filter_"><a className={main_class} style={pillStyle}>{this.props.filter}</a></div>
        )
    }
}