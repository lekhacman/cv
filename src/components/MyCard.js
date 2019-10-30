import React from 'react';
import './MyCard.scss';
import PropTypes from 'prop-types';

export class MyCard extends React.Component {
  render() {
    const { id, title, children } = this.props;
    return (
      <div className="mycard mycard--light" id={`mycard--${id}`}>
        <div className="mycard__title">
          <h2>{title}</h2>
        </div>
        <div className="mycard__body">{children}</div>
      </div>
    );
  }
}

MyCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};
