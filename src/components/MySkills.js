import './MySkills.scss';
import React from 'react';
import { MyCard } from './MyCard';
import * as R from 'ramda';

export function MySkills() {
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
    htmlCss: {
      title: 'HTML/CSS',
      rating: '70%',
    },
    linux: {
      title: 'Linux',
      rating: '60%',
    },
    go: {
      title: 'Golang',
      rating: '50%',
    },
    javaPhp: {
      title: 'Java/PHP',
      rating: '40%',
    },
    aws: {
      title: 'Amazon Web Services',
      rating: '60%',
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
              <div
                className="score-bar__score"
                style={{ width: skill.rating }}
              />
            </div>
          ),
        },
        acc
      );
    },
    { labels: [], skills: [] }
  );
  return (
    <MyCard title="Skills Set" id="skills">
      <div className="skills">
        {labels}
        {skills}
      </div>
      <div></div>
    </MyCard>
  );
}
