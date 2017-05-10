import React from 'react';
import ResultListEntry from './ResultListEntry.jsx';
import $ from 'jquery';
import _ from 'lodash';


class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.colleges.map((college, i) => {
          return <ResultListEntry key={i} college={college} />;
        })}
      </div>
    );
  }
}

export default Results;