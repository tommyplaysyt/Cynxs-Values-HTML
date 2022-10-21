import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './donate.css'

const Donate = (props) => {
  return (
    <div className="donate-container">
      <Helmet>
        <title>Donate - Cynx's Values</title>
        <meta
          name="description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
        <meta property="og:title" content="Donate - Cynx's Values" />
        <meta
          property="og:description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
      </Helmet>
      <div data-role="Header" className="donate-header-container">
        <header className="donate-header">
          <div className="donate-logo"></div>
          <div className="donate-menu">
            <Link to="/" className="donate-navlink headline6">
              Home
            </Link>
            <Link to="/l-b-pets" className="donate-navlink01 headline6">
              Leaderboard Pets
            </Link>
            <Link to="/perm-secrets" className="donate-navlink02 headline6">
              Perm Secrets
            </Link>
            <Link to="/limited-secrets" className="donate-navlink03 headline6">
              Limited Secrets
            </Link>
            <Link to="/update-42" className="donate-navlink04">
              <span className="headline6 donate-text">Update 42</span>
              <br></br>
            </Link>
            <Link
              to="/cynxs-values-info"
              className="donate-navlink05 headline6"
            >
              Why Cynx&apos;s Values?
            </Link>
          </div>
          <div className="donate-container1"></div>
          <div data-type="BurgerMenu" className="donate-burger-menu">
            <svg viewBox="0 0 1024 1024" className="donate-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="donate-mobile-menu">
          <div className="donate-top">
            <div className="donate-logo1"></div>
            <div data-type="CloseMobileMenu" className="donate-close-menu">
              <svg viewBox="0 0 1024 1024" className="donate-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="donate-mid">
            <Link to="/" className="donate-navlink06">
              <span className="donate-text02">New Home</span>
              <br></br>
            </Link>
            <Link to="/limited-secrets" className="donate-navlink07">
              <span className="donate-text04">Limited Secrets</span>
              <br></br>
            </Link>
            <Link to="/l-b-pets" className="donate-navlink08">
              Leaderboard Rewards
            </Link>
            <Link to="/perm-secrets" className="donate-navlink09">
              Perm Secrets
            </Link>
            <Link to="/update-42" className="donate-navlink10">
              Update 41
            </Link>
            <span className="donate-text06">More</span>
          </div>
          <div className="donate-bot"></div>
        </div>
      </div>
      <div className="donate-main">
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="donate-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="donate-purple-circle"
        />
        <div className="donate-hero">
          <div className="donate-container2">
            <h1 className="donate-text07">
              <span className="donate-text08">Donations</span>
              <br></br>
              <span>Cynx&apos;s Values</span>
              <br></br>
              <br></br>
              <span>All donations will go towards evolving the website</span>
              <span>
                .
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>With your donations, we&apos;ll be  </span>
              <span>able to </span>
              <span>
                get a new domain name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>(such as cynxvalues.com) </span>
              <span>and official art &amp; GFX for our website.</span>
              <br></br>
              <br></br>
              <span className="donate-text24">Donation Link</span>
              <br></br>
              <span>[Coming Soon]</span>
              <br></br>
              <br></br>
            </h1>
          </div>
        </div>
      </div>
      <div className="donate-feature-card">
        <div className="donate-container3">
          <h1 className="donate-text29">
            <span className="headline3">
              Values will soon be gathered by proof trades. Join our Discord
              below to submit your trades.
            </span>
            <br></br>
          </h1>
          <a
            href="https://discord.gg/ee7JvcxAuR"
            target="_blank"
            rel="noreferrer noopener"
            className="donate-link"
          >
            <h1 className="donate-text32">
              <span className="donate-text33 headline3">
                Join the Discord Server!
              </span>
              <br></br>
            </h1>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="donate-turquoise-cirble1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="donate-turquoise-cirble2"
        />
      </div>
    </div>
  )
}

export default Donate
