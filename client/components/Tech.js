import React from 'react';
import { Link } from 'react-router';

const Tech = React.createClass({
  render(){
    const { tech, i } = this.props;
    return(
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
        <Link to={`/view/${tech.id}`}>
          <img src={tech.src} alt={tech.tech} className="grid-photo"/>

        </Link>
        </div>
          <figcaption>
            <p class="centered">{tech.tech}</p>
          </figcaption>

      </figure>
    )
  }
})

export default Tech;
