import React, { Component } from 'react';
import { MenuItem, DropdownButton } from 'react-bootstrap';

class TableHeaderTitles extends Component {
    constructor(props){
        super(props)
        this.state={
            didMount: false,
            data: this.props.data,
        }
    }

    componentDidMount() {
        this.setState({
          didMount: true,
          data: this.props.data,
        })
      }

    render() {
        return (
            <thead>
                <tr className="commDataHeadersCntr">
                    <th xs={6} className="commDataHeaders">Name <DropdownButton
                            bsSize="small"
                            title="Sort"
                            id="dropdown-size-small">
                            <MenuItem onClick={this.props.sortByNameAsc}>a {'\u21E2'} z</MenuItem>
                            <MenuItem divider />
                            <MenuItem onClick={this.props.sortByNameDesc}>z {'\u21E2'} a</MenuItem>
                        </DropdownButton>
                    </th>
                    <th xs={6} onClick={this.props.sortByCaseNo} className="commDataHeaders">No. of Cases <DropdownButton
                            bsSize="small"
                            title="Sort"
                            id="dropdown-size-small">
                            <MenuItem onClick={this.props.sortByCaseNoAsc}>{'\u21E1'}Low - High</MenuItem>
                            <MenuItem divider />
                            <MenuItem onClick={this.props.sortByCaseNoDesc}>{'\u21E3'}High - Low</MenuItem>
                        </DropdownButton>
                    </th>
                </tr>
            </thead>
            
        );
    }
}

export default TableHeaderTitles;