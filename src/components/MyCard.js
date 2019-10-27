import React from 'react';
import './MyCard.css';
import PropTypes from 'prop-types';

export class MyCard extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="mycard">
        <div className="mycard-title">
          <h2>{title}</h2>
        </div>
        <div className="mycard-body">{children}</div>
      </div>
    );
  }
}

MyCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
