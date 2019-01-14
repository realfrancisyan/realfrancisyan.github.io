import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndexComponent = props => {
  const { state } = props;

  return (
    <div className="index">
      <h2>{state.content.title}</h2>
      {state.content.content.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}

      <div className="index__icons">
        {state.links.map((item, index) => {
          return (
            <a href={item.href} key={index}>
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

IndexComponent.propTypes = {
  state: PropTypes.object
};

export default IndexComponent;
