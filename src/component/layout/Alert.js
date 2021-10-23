import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <article className={`message ${alert.colorClass} mb-2`}>
        <div className='message-body'>
          <i className='fas fa-info-circle mr-2'></i>
          {alert.message}
        </div>
      </article>
    )
  );
};

export default Alert;
