import React from 'react'
import styles from './Bio.module.css'

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src="/static/img/logo-man.png" alt="Me" />
      <p>
        Chat with me on social media{' '}
        <a href="https://twitter.com/ddonprogramming/">Twitter</a>
        <br />
        or follow my open source projects on{' '}
        <a href="https://github.com/decebal">github</a>.
      </p>
    </div>
  )
}

export default Bio
