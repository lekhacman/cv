import React from 'react';
import PropTypes from 'prop-types';

export default function Company(props) {
  return (
    <div className="company">
      <h3>{props.position}</h3>
      <p>
        {props.company.homepage ? (
          <a
            href={props.company.homepage}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={'employerLink'}
          >
            <img
              className="company-icon"
              src={props.company.icon}
              alt={`${props.company.name} icon`}
            />
            {props.company.name}
          </a>
        ) : (
          props.company.name
        )}{' '}
        <small className="text-secondary">({props.period})</small>
      </p>
      <label>Projects:</label>
      <ul>
        {props.projects.map(function(project, id) {
          return (
            <li key={`project-${id}`}>
              <b>{project.name}</b>: {project.description}
            </li>
          );
        })}
      </ul>
      <label>Technology:</label>
      <ul className="technology-list">
        {props.technology.map(function(tech, id) {
          return <li key={`tech-${id}`}>{tech}</li>;
        })}
      </ul>
    </div>
  );
}

Company.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    homepage: PropTypes.string,
    icon: PropTypes.string,
  }),
  period: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    })
  ),
  technology: PropTypes.arrayOf(PropTypes.string),
};
