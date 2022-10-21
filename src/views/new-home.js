import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './new-home.css'

const NewHome = (props) => {
  return (
    <div className="new-home-container">
      <Helmet>
        <title>Cynx's Values</title>
        <meta
          name="description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
        <meta property="og:title" content="Cynx's Values" />
        <meta
          property="og:description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
      </Helmet>
      <div data-role="Header" className="new-home-header-container">
        <header className="new-home-header">
          <div className="new-home-logo"></div>
          <div className="new-home-menu">
            <Link to="/" className="new-home-navlink headline6">
              Home
            </Link>
            <Link to="/l-b-pets" className="new-home-navlink01 headline6">
              Leaderboard Pets
            </Link>
            <Link to="/perm-secrets" className="new-home-navlink02 headline6">
              Perm Secrets
            </Link>
            <Link
              to="/limited-secrets"
              className="new-home-navlink03 headline6"
            >
              Limited Secrets
            </Link>
            <Link to="/update-42" className="new-home-navlink04">
              <span className="headline6 new-home-text">Update 42</span>
              <br></br>
            </Link>
            <Link
              to="/cynxs-values-info"
              className="new-home-navlink05 headline6"
            >
              Why Cynx&apos;s Values?
            </Link>
          </div>
          <div className="new-home-container1"></div>
          <div data-type="BurgerMenu" className="new-home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="new-home-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="new-home-mobile-menu">
          <div className="new-home-top">
            <div className="new-home-logo1"></div>
            <div data-type="CloseMobileMenu" className="new-home-close-menu">
              <svg viewBox="0 0 1024 1024" className="new-home-icon03">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="new-home-mid">
            <Link to="/" className="new-home-navlink06">
              <span className="new-home-text02">New Home</span>
              <br></br>
            </Link>
            <Link to="/limited-secrets" className="new-home-navlink07">
              <span className="new-home-text04">Limited Secrets</span>
              <br></br>
            </Link>
            <Link to="/l-b-pets" className="new-home-navlink08">
              Leaderboard Rewards
            </Link>
            <Link to="/perm-secrets" className="new-home-navlink09">
              Perm Secrets
            </Link>
            <Link to="/update-42" className="new-home-navlink10">
              Update 42
            </Link>
          </div>
          <div className="new-home-bot"></div>
        </div>
      </div>
      <div className="new-home-feature-card">
        <h1 className="new-home-text06">
          <span className="new-home-text07">Cynx&apos;s Value List</span>
          <br className="new-home-text08"></br>
          <br className="new-home-text09"></br>
          <span className="new-home-text10">
            Valued by leaderboard players.
          </span>
          <br className="new-home-text11"></br>
          <br className="new-home-text12"></br>
          <span className="new-home-text13">
            Developed by Cynx#0003 &amp; tommy.#5084
          </span>
          <br className="new-home-text14"></br>
          <br className="new-home-text15"></br>
          <span className="new-home-text16">Last Updated: 10/20/22</span>
          <br></br>
        </h1>
      </div>
      <div className="new-home-main">
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="new-home-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="new-home-purple-circle"
        />
      </div>
      <div className="new-home-container2">
        <Link to="/perm-secrets" className="new-home-navlink11">
          <h1 className="new-home-text18">
            <span className="headline3">Perm Secrets</span>
            <br></br>
          </h1>
        </Link>
        <Link to="/limited-secrets" className="new-home-navlink12">
          <h1 className="new-home-text21">
            <span className="headline3">Limited Secrets</span>
            <br></br>
          </h1>
        </Link>
        <Link to="/update-42" className="new-home-navlink13">
          <h1 className="new-home-text24">
            <span className="headline3">Update 42</span>
            <br></br>
          </h1>
        </Link>
        <Link to="/halloween-event" className="new-home-navlink14">
          <h1 className="new-home-text27">
            <span className="headline3">Halloween Event</span>
            <br></br>
          </h1>
        </Link>
        <Link to="/l-b-pets" className="new-home-navlink15">
          <h1 className="new-home-text30">
            <span className="headline3">Leaderboard Rewards</span>
            <br></br>
          </h1>
        </Link>
        <Link to="/l-b-pets" className="new-home-navlink16">
          <h1 className="new-home-text33">
            <span className="headline3">Donate for cynxvalues.com [SOON]</span>
            <br></br>
          </h1>
        </Link>
        <Link to="/cynxs-values-info" className="new-home-navlink17">
          <h1 className="new-home-text36">
            <span className="headline3">Why use Cynx&apos;s Values?</span>
            <br></br>
          </h1>
        </Link>
      </div>
      <div className="new-home-feature-card1">
        <h1 className="new-home-text39">
          <span className="headline3">
            If the website looks broken on phone, select &quot;Desktop
            Site&quot; on your device.
          </span>
          <br></br>
        </h1>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="new-home-turquoise-cirble1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="new-home-turquoise-cirble2"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="new-home-purple-circle1"
        />
      </div>
      <div className="new-home-feature-card2">
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="new-home-purple-circle2"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="new-home-purple-circle3"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="new-home-purple-circle4"
        />
        <div className="new-home-container3">
          <div className="new-home-container4">
            <div className="new-home-container5">
              <div className="new-home-container6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-home-feature-card3">
        <h1 className="new-home-text42">
          <span className="headline3">
            Please note: The website has been optimised for most devices. Let us
            know if you have issues.
          </span>
          <br></br>
        </h1>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="new-home-turquoise-cirble3"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="new-home-turquoise-cirble4"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="new-home-purple-circle5"
        />
      </div>
      <div className="new-home-feature-card4">
        <div className="new-home-container7">
          <h1 className="new-home-text45">
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
            className="new-home-link"
          >
            <h1 className="new-home-text48">
              <span className="new-home-text49 headline3">
                Join the Discord Server!
              </span>
              <br></br>
            </h1>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="new-home-turquoise-cirble5"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="new-home-turquoise-cirble6"
        />
      </div>
      <svg viewBox="0 0 1024 1024" className="new-home-icon05">
        <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="new-home-icon09">
        <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
      </svg>
    </div>
  )
}

export default NewHome
