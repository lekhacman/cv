import './MySkills.scss';
import React from 'react';
import MyCard from './MyCard';
import * as R from 'ramda';

export default function MySkills() {
  const spec = {
    js: {
      title: 'JavaScript',
      rating: '90%',
    },
    jsfw: {
      title: 'Angular/React',
      rating: '80%',
    },
    node: {
      title: 'NodeJS',
      rating: '80%',
    },
    java: {
      title: 'Java',
      rating: '60%',
    },
    go: {
      title: 'Golang',
      rating: '50%',
    },
    linux: {
      title: 'Linux',
      rating: '50%',
    },
    container: {
      title: 'Docker & k8s',
      rating: '50%',
    },
    cloud: {
      title: 'Cloud',
      rating: '50%',
    },
  };

  const { labels, skills } = Object.entries(spec).reduce(
    (acc, [key, skill], idx) => {
      return R.evolve(
        {
          labels: R.append(<label key={`label-${key}`}>{skill.title}</label>),
          skills: R.append(
            <div
              className="score-bar"
              key={`score-${key}`}
              style={{ gridRow: idx + 1 }}
            >
              <div className="score-bar__score" style={{ width: skill.rating }}>
                {/*<span>{skill.rating}</span>*/}
              </div>
            </div>
          ),
        },
        acc
      );
    },
    { labels: [], skills: [] }
  );
  return (
    <MyCard title="Skills" id="skills">
      <div className="skills">
        {labels}
        {skills}
      </div>
    </MyCard>
  );
}
