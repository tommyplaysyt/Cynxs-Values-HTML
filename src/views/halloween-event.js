import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './halloween-event.css'

const HalloweenEvent = (props) => {
  return (
    <div className="halloween-event-container">
      <Helmet>
        <title>Halloween-Event - Cynx's Values</title>
        <meta
          name="description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
        <meta property="og:title" content="Halloween-Event - Cynx's Values" />
        <meta
          property="og:description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
      </Helmet>
      <div data-role="Header" className="halloween-event-header-container">
        <header className="halloween-event-header">
          <div className="halloween-event-logo"></div>
          <div className="halloween-event-menu">
            <Link to="/" className="halloween-event-navlink headline6">
              Home
            </Link>
            <Link
              to="/l-b-pets"
              className="halloween-event-navlink01 headline6"
            >
              Leaderboard Pets
            </Link>
            <Link
              to="/perm-secrets"
              className="halloween-event-navlink02 headline6"
            >
              Perm Secrets
            </Link>
            <Link
              to="/limited-secrets"
              className="halloween-event-navlink03 headline6"
            >
              Limited Secrets
            </Link>
            <Link to="/update-42" className="halloween-event-navlink04">
              <span className="headline6 halloween-event-text">Update 42</span>
              <br></br>
            </Link>
            <Link
              to="/cynxs-values-info"
              className="halloween-event-navlink05 headline6"
            >
              Why Cynx&apos;s Values?
            </Link>
          </div>
          <div className="halloween-event-container01"></div>
          <div data-type="BurgerMenu" className="halloween-event-burger-menu">
            <svg viewBox="0 0 1024 1024" className="halloween-event-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="halloween-event-mobile-menu">
          <div className="halloween-event-top">
            <div className="halloween-event-logo1"></div>
            <div
              data-type="CloseMobileMenu"
              className="halloween-event-close-menu"
            >
              <svg viewBox="0 0 1024 1024" className="halloween-event-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="halloween-event-mid">
            <Link to="/" className="halloween-event-navlink06">
              <span className="halloween-event-text02">New Home</span>
              <br></br>
            </Link>
            <Link to="/limited-secrets" className="halloween-event-navlink07">
              <span className="halloween-event-text04">Limited Secrets</span>
              <br></br>
            </Link>
            <Link to="/l-b-pets" className="halloween-event-navlink08">
              Leaderboard Rewards
            </Link>
            <Link to="/perm-secrets" className="halloween-event-navlink09">
              Perm Secrets
            </Link>
            <Link to="/update-42" className="halloween-event-navlink10">
              Update 41
            </Link>
            <span className="halloween-event-text06">More</span>
          </div>
          <div className="halloween-event-bot"></div>
        </div>
      </div>
      <div className="halloween-event-main">
        <div className="halloween-event-hero">
          <div className="halloween-event-container02">
            <h1 className="halloween-event-text07">
              <span className="halloween-event-text08">Halloween Event</span>
              <br className="halloween-event-text09"></br>
              <span className="halloween-event-text10">Cynx&apos;s Values</span>
              <br className="halloween-event-text11"></br>
              <br className="halloween-event-text12"></br>
              <span className="halloween-event-text13">
                The existance amounts here are not shown.
              </span>
              <br className="halloween-event-text14"></br>
              <br className="halloween-event-text15"></br>
              <span className="halloween-event-text16">
                Secrets can be found on the 
              </span>
              <span className="halloween-event-text17">Limited Secrets</span>
              <span className="halloween-event-text18"> page.</span>
              <br className="halloween-event-text19"></br>
            </h1>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="halloween-event-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="halloween-event-purple-circle"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="halloween-event-purple-circle1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="halloween-event-turquoise-cirble1"
        />
      </div>
      <div className="halloween-event-feature-card">
        <div className="halloween-event-container03">
          <h2 className="halloween-event-text20">Violet Witch</h2>
          <span className="halloween-event-text21 headline6">
            Normal: | SOON
          </span>
          <span className="halloween-event-text22 headline6">
            Shiny: | SOON
          </span>
          <span className="halloween-event-text23">Golden: | SOON</span>
          <span className="halloween-event-text24 headline6">
            Rainbow: | SOON
          </span>
        </div>
        <div className="halloween-event-container04">
          <h2 className="halloween-event-text25">Flaming Scarecrow</h2>
          <span className="halloween-event-text26 headline6">
            Normal: | SOON
          </span>
          <span className="halloween-event-text27 headline6">
            Shiny: | SOON
          </span>
          <span className="halloween-event-text28">Golden: | SOON</span>
          <span className="halloween-event-text29 headline6">
            Rainbow: | SOON
          </span>
        </div>
        <div className="halloween-event-container05">
          <h2 className="halloween-event-text30">Pumpkin Egg - 50 Pumpkins</h2>
        </div>
      </div>
      <div className="halloween-event-feature-card1">
        <div className="halloween-event-container06">
          <h2 className="halloween-event-text31">Pumpkin Kitty</h2>
          <span className="halloween-event-text32 headline6">
            Normal: | SOON
          </span>
          <span className="halloween-event-text33 headline6">
            Shiny: | SOON
          </span>
          <span className="halloween-event-text34">Golden: | SOON</span>
          <span className="halloween-event-text35 headline6">
            Rainbow: | SOON
          </span>
        </div>
        <div className="halloween-event-container07">
          <h2 className="halloween-event-text36">Ancient Mummy</h2>
          <span className="halloween-event-text37 headline6">
            Normal: | SOON
          </span>
          <span className="halloween-event-text38 headline6">
            Shiny: | SOON
          </span>
          <span className="halloween-event-text39">Golden: | SOON</span>
          <span className="halloween-event-text40 headline6">
            Rainbow: | SOON
          </span>
        </div>
        <div className="halloween-event-container08">
          <h2 className="halloween-event-text41">Witch Egg - 1,500 Pumpkins</h2>
        </div>
      </div>
      <div className="halloween-event-feature-card2">
        <div className="halloween-event-container09">
          <h1 className="halloween-event-text42">
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
            className="halloween-event-link"
          >
            <h1 className="halloween-event-text45">
              <span className="halloween-event-text46 headline3">
                Join the Discord Server!
              </span>
              <br></br>
            </h1>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="halloween-event-turquoise-cirble2"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="halloween-event-turquoise-cirble3"
        />
      </div>
    </div>
  )
}

export default HalloweenEvent
