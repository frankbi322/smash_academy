import React from 'react';
import Tech from './Tech';

const Grid = React.createClass({
  render(){
    return (
      <div className="photo-grid">
        {this.props.techs.map((tech, i) => <Tech {...this.props} key={i} i={i} tech={tech}/>)}
      </div>
    )
  }
});

export default Grid;
