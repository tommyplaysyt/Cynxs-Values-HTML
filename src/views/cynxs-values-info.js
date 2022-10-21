import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './cynxs-values-info.css'

const CynxsValuesInfo = (props) => {
  return (
    <div className="cynxs-values-info-container">
      <Helmet>
        <title>Cynxs-Values-Info - Cynx's Values</title>
        <meta
          name="description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
        <meta property="og:title" content="Cynxs-Values-Info - Cynx's Values" />
        <meta
          property="og:description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
      </Helmet>
      <div data-role="Header" className="cynxs-values-info-header-container">
        <header className="cynxs-values-info-header">
          <div className="cynxs-values-info-logo"></div>
          <div className="cynxs-values-info-menu">
            <Link to="/" className="cynxs-values-info-navlink headline6">
              Home
            </Link>
            <Link
              to="/l-b-pets"
              className="cynxs-values-info-navlink01 headline6"
            >
              Leaderboard Pets
            </Link>
            <Link
              to="/perm-secrets"
              className="cynxs-values-info-navlink02 headline6"
            >
              Perm Secrets
            </Link>
            <Link
              to="/limited-secrets"
              className="cynxs-values-info-navlink03 headline6"
            >
              Limited Secrets
            </Link>
            <Link to="/update-42" className="cynxs-values-info-navlink04">
              <span className="headline6 cynxs-values-info-text">
                Update 42
              </span>
              <br></br>
            </Link>
            <Link
              to="/cynxs-values-info"
              className="cynxs-values-info-navlink05 headline6"
            >
              Why Cynx&apos;s Values?
            </Link>
          </div>
          <div className="cynxs-values-info-container1"></div>
          <div data-type="BurgerMenu" className="cynxs-values-info-burger-menu">
            <svg viewBox="0 0 1024 1024" className="cynxs-values-info-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="cynxs-values-info-mobile-menu">
          <div className="cynxs-values-info-top">
            <div className="cynxs-values-info-logo1"></div>
            <div
              data-type="CloseMobileMenu"
              className="cynxs-values-info-close-menu"
            >
              <svg viewBox="0 0 1024 1024" className="cynxs-values-info-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="cynxs-values-info-mid">
            <Link to="/" className="cynxs-values-info-navlink06">
              <span className="cynxs-values-info-text02">New Home</span>
              <br></br>
            </Link>
            <Link to="/limited-secrets" className="cynxs-values-info-navlink07">
              <span className="cynxs-values-info-text04">Limited Secrets</span>
              <br></br>
            </Link>
            <Link to="/l-b-pets" className="cynxs-values-info-navlink08">
              Leaderboard Rewards
            </Link>
            <Link to="/perm-secrets" className="cynxs-values-info-navlink09">
              Perm Secrets
            </Link>
            <Link to="/update-42" className="cynxs-values-info-navlink10">
              Update 41
            </Link>
            <span className="cynxs-values-info-text06">More</span>
          </div>
          <div className="cynxs-values-info-bot"></div>
        </div>
      </div>
      <div className="cynxs-values-info-main">
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="cynxs-values-info-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="cynxs-values-info-purple-circle"
        />
        <div className="cynxs-values-info-hero">
          <div className="cynxs-values-info-container2">
            <h1 className="cynxs-values-info-text07">
              <span className="cynxs-values-info-text08">
                Why use Cynx&apos;s Values?
              </span>
              <br></br>
              <span>Cynx&apos;s Values</span>
              <br></br>
              <br></br>
              <span>
                Our value list is updated daily with proof trades submitted
              </span>
              <br></br>
              <span>by fellow players.</span>
              <br></br>
              <br></br>
              <span>
                Each pet is evaluated by a team of leaderboard players.
              </span>
              <br></br>
              <br></br>
              <span>
                The team at Cynx&apos;s Values are looking to become one of
              </span>
              <br></br>
              <span>the most used Clicker Simulator value lists.</span>
              <br></br>
              <br></br>
              <br></br>
              <span className="cynxs-values-info-text27">Credits</span>
              <br></br>
              <span>Cynx#0003 - Valuing Management</span>
              <br></br>
              <br></br>
              <span>tommy.#5084 - Technical &amp; Website Management</span>
              <br></br>
              <br></br>
            </h1>
          </div>
        </div>
      </div>
      <div className="cynxs-values-info-feature-card">
        <div className="cynxs-values-info-container3">
          <h1 className="cynxs-values-info-text35">
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
            className="cynxs-values-info-link"
          >
            <h1 className="cynxs-values-info-text38">
              <span className="cynxs-values-info-text39 headline3">
                Join the Discord Server!
              </span>
              <br></br>
            </h1>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="cynxs-values-info-turquoise-cirble1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="cynxs-values-info-turquoise-cirble2"
        />
      </div>
    </div>
  )
}

export default CynxsValuesInfo
