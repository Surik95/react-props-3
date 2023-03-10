import React from "react";
import PropTypes from "prop-types";

export default function Message({ from, message }) {
  return (
    <li className='clearfix'>
      <div className='message-data align-right'>
        <span className='message-data-time'>{message.time}</span> &nbsp; &nbsp;
        <span className='message-data-name'>{from.name}</span>
        <i className='fa fa-circle me' />
      </div>
      <div className='message other-message float-right'>{message.text}</div>
    </li>
  );
}

Message.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string,
  }).isRequired,
};
