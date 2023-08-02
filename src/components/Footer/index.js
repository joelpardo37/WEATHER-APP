import React from 'react'

import { FooterComponent } from './style'

const Footer = () => {
  return (
    <FooterComponent>
      <p>
        created by{' '}
        <a
          className="user"
          href="http://github.com/lemartins07"
          target={'_blank'}
          rel="noreferrer"
        >
          1v4npard0
        </a>{' '}
        -{' '}
        <a
          href="https://devchallenges.io/portfolio/lemartins07"
          target={'_blank'}
          rel="noreferrer"
        >
          Weather-App
        </a>
      </p>
    </FooterComponent>
  )
}

export default Footer
