import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './update-42.css'

const Update42 = (props) => {
  return (
    <div className="update42-container">
      <Helmet>
        <title>Update-42 - Cynx's Values</title>
        <meta
          name="description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
        <meta property="og:title" content="Update-42 - Cynx's Values" />
        <meta
          property="og:description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
      </Helmet>
      <div data-role="Header" className="update42-header-container">
        <header className="update42-header">
          <div className="update42-logo"></div>
          <div className="update42-menu">
            <Link to="/" className="update42-navlink headline6">
              Home
            </Link>
            <Link to="/l-b-pets" className="update42-navlink01 headline6">
              Leaderboard Pets
            </Link>
            <Link to="/perm-secrets" className="update42-navlink02 headline6">
              Perm Secrets
            </Link>
            <Link
              to="/limited-secrets"
              className="update42-navlink03 headline6"
            >
              Limited Secrets
            </Link>
            <Link to="/update-42" className="update42-navlink04">
              <span className="headline6 update42-text">Update 42</span>
              <br></br>
            </Link>
            <Link
              to="/cynxs-values-info"
              className="update42-navlink05 headline6"
            >
              Why Cynx&apos;s Values?
            </Link>
          </div>
          <div className="update42-container01"></div>
          <div data-type="BurgerMenu" className="update42-burger-menu">
            <svg viewBox="0 0 1024 1024" className="update42-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="update42-mobile-menu">
          <div className="update42-top">
            <div className="update42-logo1"></div>
            <div data-type="CloseMobileMenu" className="update42-close-menu">
              <svg viewBox="0 0 1024 1024" className="update42-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="update42-mid">
            <Link to="/" className="update42-navlink06">
              <span className="update42-text02">New Home</span>
              <br></br>
            </Link>
            <Link to="/limited-secrets" className="update42-navlink07">
              <span className="update42-text04">Limited Secrets</span>
              <br></br>
            </Link>
            <Link to="/l-b-pets" className="update42-navlink08">
              Leaderboard Rewards
            </Link>
            <Link to="/perm-secrets" className="update42-navlink09">
              Perm Secrets
            </Link>
            <Link to="/update-42" className="update42-navlink10">
              Update 41
            </Link>
            <span className="update42-text06">More</span>
          </div>
          <div className="update42-bot"></div>
        </div>
      </div>
      <div className="update42-main">
        <div className="update42-hero">
          <div className="update42-container02">
            <h1 className="update42-text07">
              <span className="update42-text08">Update 42 Pets</span>
              <br></br>
              <span>Cynx&apos;s Values</span>
              <br></br>
              <br></br>
              <span>Moon Update</span>
              <br></br>
              <br></br>
              <span>Perm Secrets can be found on the Perm Secrets page.</span>
              <br></br>
            </h1>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="update42-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="update42-purple-circle"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="update42-purple-circle1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="update42-turquoise-cirble1"
        />
      </div>
      <div className="update42-feature-card">
        <div className="update42-container03">
          <h2 className="update42-text18">Sunshine Spider</h2>
          <span className="update42-text19 headline6">
            Normal: | &lt;1 Tokens
          </span>
          <span className="update42-text20 headline6">
            Shiny: | &lt;1 Tokens
          </span>
          <span className="update42-text21">Golden: | &lt;1 Tokens</span>
          <span className="update42-text22 headline6">
            Rainbow: | &lt;1 Tokens
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="update42-turquoise-cirble2"
        />
        <div className="update42-container04">
          <h2 className="update42-text23">Moon Golem</h2>
          <span className="update42-text24 headline6">
            <span className="headline6">Normal: | 0.025 </span>
            <span className="headline6">Tokens</span>
          </span>
          <span className="update42-text27">
            <span className="update42-text28">Shiny: | 0.05 Tokens</span>
            <br className="update42-text29"></br>
            <span>Golden: | 0.075 Tokens</span>
          </span>
          <span className="update42-text31 headline6">
            Rainbow: | 0.1 Tokens
          </span>
        </div>
        <div className="update42-container05">
          <h2 className="update42-text32">Legendaries</h2>
        </div>
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="update42-purple-circle2"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="update42-purple-circle3"
        />
      </div>
      <div className="update42-feature-card1">
        <div className="update42-container06">
          <h2 className="update42-text33">Astral Overseer</h2>
          <span className="update42-text34 headline6">
            Normal: | &lt;1 Tokens
          </span>
          <span className="update42-text35 headline6">
            Shiny:  | &lt;1 Tokens
          </span>
          <span className="update42-text36">Golden: | &lt;1 Tokens</span>
          <span className="update42-text37 headline6">
            Rainbow: | &lt;1 Tokens
          </span>
        </div>
        <div className="update42-container07">
          <h2 className="update42-text38">Lunar Anti-Lander</h2>
          <span className="update42-text39 headline6">
            Normal: 0.8-3 Tokens
          </span>
          <span className="update42-text40 headline6">Shiny: 4-8 Tokens</span>
          <span className="update42-text41">Golden: 10-14 Tokens</span>
          <span className="update42-text42 headline6">
            Rainbow: 20-30 Tokens
          </span>
        </div>
        <div className="update42-container08">
          <h2 className="update42-text43">Divines</h2>
        </div>
      </div>
      <div className="update42-feature-card2">
        <div className="update42-container09">
          <h2 className="update42-text44">Full Moon Behemoth</h2>
          <span className="update42-text45 headline6">
            Normal: | 0.03 Tokens
          </span>
          <span className="update42-text46 headline6">
            Shiny: | 0.09 Tokens
          </span>
          <span className="update42-text47">Golden: | 0.25-0.75 Tokens</span>
          <span className="update42-text48 headline6">
            Rainbow: | 0.9-2 Tokens
          </span>
        </div>
        <div className="update42-container10">
          <h2 className="update42-text49">Cosmic Crescent</h2>
          <span className="update42-text50 headline6">
            Normal: | 0.6-2.5 Tokens
          </span>
          <span className="update42-text51 headline6">Shiny: | 3-6 Tokens</span>
          <span className="update42-text52">Golden: | 6-8 Tokens</span>
          <span className="update42-text53 headline6">
            Rainbow: | 8-10 Tokens
          </span>
        </div>
        <div className="update42-container11">
          <h2 className="update42-text54">Crafteds</h2>
        </div>
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="update42-purple-circle4"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="update42-turquoise-cirble3"
        />
      </div>
      <div className="update42-feature-card3">
        <div className="update42-container12">
          <h1 className="update42-text55">
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
            className="update42-link"
          >
            <h1 className="update42-text58">
              <span className="update42-text59 headline3">
                Join the Discord Server!
              </span>
              <br></br>
            </h1>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="update42-turquoise-cirble4"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="update42-turquoise-cirble5"
        />
      </div>
    </div>
  )
}

export default Update42
