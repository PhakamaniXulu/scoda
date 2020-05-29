import React, { Component } from 'react';



export default class IndicatorExplorerDataBoxMapFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const selectorOptions = this.props.datasetOptions.map((dataset,index) =>(
            <option key={index} value={dataset.Value}>{dataset.Value}</option>
        ));

        return (
                        <div className="ie-box-card">
                            <div className="ie-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      Data on Map
                                  </div>
                              </div>
                            </div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                <select id="map-selector" className="pl-3 mt-2 mr-2 ie-dropdown-small">
                                  {selectorOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="row mt-3"></div>
                        </div>
        )
    }
}