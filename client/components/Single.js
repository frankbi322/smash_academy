import React from 'react';
import Tech from './tech';

const Single = React.createClass({
  render() {
    const i= this.props.techs.findIndex((tech) => tech.id === this.props.params.postId);
    const tech = this.props.techs[i];
    console.log(tech);
    return (
      <div className="single-photo">
        <h2>{tech.tech}</h2>
        <video className="video" autoPlay src={tech.videosrc} controls loop>

        </video>
        <span>
          {tech.inputs}
        </span>
        <p>
          {tech.description}
        </p>
      </div>
    )
  }
});

export default Single;
