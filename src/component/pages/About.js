import React, { Fragment } from 'react';

function About() {
  return (
    <Fragment>
      <article className='message is-dark'>
        <div className='message-header'>
          <p>About App</p>
        </div>
        <div className='message-body'>
          <p>The app helps you find users from GitHub</p>
          <small>Version: 1.0.0</small>
        </div>
      </article>
    </Fragment>
  );
}

export default About;
