import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './l-b-pets.css'

const LBPets = (props) => {
  return (
    <div className="l-b-pets-container">
      <Helmet>
        <title>LB-Pets - Cynx's Values</title>
        <meta
          name="description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
        <meta property="og:title" content="LB-Pets - Cynx's Values" />
        <meta
          property="og:description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
      </Helmet>
      <div data-role="Header" className="l-b-pets-header-container">
        <header className="l-b-pets-header">
          <div className="l-b-pets-logo"></div>
          <div className="l-b-pets-menu">
            <Link to="/" className="l-b-pets-navlink headline6">
              Home
            </Link>
            <Link to="/l-b-pets" className="l-b-pets-navlink01 headline6">
              Leaderboard Pets
            </Link>
            <Link to="/perm-secrets" className="l-b-pets-navlink02 headline6">
              Perm Secrets
            </Link>
            <Link
              to="/limited-secrets"
              className="l-b-pets-navlink03 headline6"
            >
              Limited Secrets
            </Link>
            <Link to="/update-42" className="l-b-pets-navlink04">
              <span className="headline6 l-b-pets-text">Update 42</span>
              <br></br>
            </Link>
            <Link
              to="/cynxs-values-info"
              className="l-b-pets-navlink05 headline6"
            >
              Why Cynx&apos;s Values?
            </Link>
          </div>
          <div className="l-b-pets-container01"></div>
          <div data-type="BurgerMenu" className="l-b-pets-burger-menu">
            <svg viewBox="0 0 1024 1024" className="l-b-pets-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="l-b-pets-mobile-menu">
          <div className="l-b-pets-top">
            <div className="l-b-pets-logo1"></div>
            <div data-type="CloseMobileMenu" className="l-b-pets-close-menu">
              <svg viewBox="0 0 1024 1024" className="l-b-pets-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="l-b-pets-mid">
            <Link to="/" className="l-b-pets-navlink06">
              <span className="l-b-pets-text002">New Home</span>
              <br></br>
            </Link>
            <Link to="/limited-secrets" className="l-b-pets-navlink07">
              <span className="l-b-pets-text004">Limited Secrets</span>
              <br></br>
            </Link>
            <Link to="/l-b-pets" className="l-b-pets-navlink08">
              Leaderboard Rewards
            </Link>
            <Link to="/perm-secrets" className="l-b-pets-navlink09">
              Perm Secrets
            </Link>
            <Link to="/update-42" className="l-b-pets-navlink10">
              Update 41
            </Link>
            <span className="l-b-pets-text006">More</span>
          </div>
          <div className="l-b-pets-bot"></div>
        </div>
      </div>
      <div className="l-b-pets-main">
        <div className="l-b-pets-hero">
          <div className="l-b-pets-container02">
            <h1 className="l-b-pets-text007">
              <span className="l-b-pets-text008">Leaderboard Pets</span>
              <br></br>
              <span>Cynx&apos;s Values</span>
              <br></br>
              <br></br>
              <span>O/C = Owner&apos;s Choice</span>
              <br></br>
            </h1>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="l-b-pets-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="l-b-pets-purple-circle"
        />
      </div>
      <div className="l-b-pets-feature-card">
        <div className="l-b-pets-container03">
          <h2 className="l-b-pets-text015">Top #1 Reward</h2>
          <span className="l-b-pets-text016 headline6">
            Normal: 1 Exists | Owner&apos;s Choice
          </span>
          <span className="l-b-pets-text017 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text018">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text019 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container04">
          <h2 className="l-b-pets-text020">Top #10 Reward</h2>
          <span className="l-b-pets-text021 headline6">
            Normal: 10 Exists | 650,000
          </span>
          <span className="l-b-pets-text022 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text023">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text024 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container05">
          <h2 className="l-b-pets-text025">Top #25 Reward</h2>
          <span className="l-b-pets-text026 headline6">
            Normal: 22 Exists | 400,000
          </span>
          <span className="l-b-pets-text027 headline6">
            Shiny: 1 Exists | O/C
          </span>
          <span className="l-b-pets-text028">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text029 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container06">
          <h2 className="l-b-pets-text030">Overworld Leaderboard Pets</h2>
        </div>
      </div>
      <div className="l-b-pets-feature-card1">
        <div className="l-b-pets-container07">
          <h2 className="l-b-pets-text031">Top #1 Tech Reward</h2>
          <span className="l-b-pets-text032 headline6">
            Normal: 1 Exists | O/C
          </span>
          <span className="l-b-pets-text033 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text034">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text035 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container08">
          <h2 className="l-b-pets-text036">Top #10 Tech Reward</h2>
          <span className="l-b-pets-text037 headline6">
            Normal: 10 Exists | 500,000
          </span>
          <span className="l-b-pets-text038 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text039">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text040 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container09">
          <h2 className="l-b-pets-text041">Top #25 Tech Reward</h2>
          <span className="l-b-pets-text042 headline6">
            Normal: 25 Exists | 350,000
          </span>
          <span className="l-b-pets-text043 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text044">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text045 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container10">
          <h2 className="l-b-pets-text046">Tech Leaderboard Pets</h2>
        </div>
      </div>
      <div className="l-b-pets-feature-card2">
        <div className="l-b-pets-container11">
          <h2 className="l-b-pets-text047">Top #1 Time Reward</h2>
          <span className="l-b-pets-text048 headline6">
            Normal: 1 Exists | O/C
          </span>
          <span className="l-b-pets-text049 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text050">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text051 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container12">
          <h2 className="l-b-pets-text052">Top #10 Time Reward</h2>
          <span className="l-b-pets-text053 headline6">
            Normal: 10 Exists | 500,000
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="l-b-pets-text054 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text055">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text056 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container13">
          <h2 className="l-b-pets-text057">Top #25 Time Reward</h2>
          <span className="l-b-pets-text058 headline6">
            Normal: 25 Exists | 280,000
          </span>
          <span className="l-b-pets-text059 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text060">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text061 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <h2 className="l-b-pets-text062">Time Leaderboard Pets</h2>
      </div>
      <div className="l-b-pets-feature-card3">
        <div className="l-b-pets-container14">
          <h2 className="l-b-pets-text063">Top #1 Ocean Reward</h2>
          <span className="l-b-pets-text064 headline6">
            Normal: 1 Exists | O/C
          </span>
          <span className="l-b-pets-text065 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text066">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text067 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container15">
          <h2 className="l-b-pets-text068">Top #10 Ocean Reward</h2>
          <span className="l-b-pets-text069 headline6">
            Normal: 7 Exists | 300,000
          </span>
          <span className="l-b-pets-text070 headline6">
            Shiny: 1 Exists | O/C
          </span>
          <span className="l-b-pets-text071">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text072 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container16">
          <h2 className="l-b-pets-text073">Top #25 Ocean Reward</h2>
          <span className="l-b-pets-text074 headline6">
            Normal: 22 Exists | 180,000
          </span>
          <span className="l-b-pets-text075 headline6">
            Shiny: 1 Exists | N/A
          </span>
          <span className="l-b-pets-text076">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text077 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <h2 className="l-b-pets-text078">Ocean Leaderboard Pets</h2>
      </div>
      <div className="l-b-pets-feature-card4">
        <div className="l-b-pets-container17">
          <h2 className="l-b-pets-text079">Top #1 Fantasy Reward</h2>
          <span className="l-b-pets-text080 headline6">
            Normal: 1 Exists | O/C
          </span>
          <span className="l-b-pets-text081 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text082">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text083 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container18">
          <h2 className="l-b-pets-text084">Top #10 Fantasy Reward</h2>
          <span className="l-b-pets-text085 headline6">
            Normal: 7 Exists | 235,000
          </span>
          <span className="l-b-pets-text086 headline6">
            Shiny: 1 Exists | O/C
          </span>
          <span className="l-b-pets-text087">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text088 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container19">
          <h2 className="l-b-pets-text089">Top #25 Fantasy Reward</h2>
          <span className="l-b-pets-text090 headline6">
            Normal: 16 Exists | 155,000
          </span>
          <span className="l-b-pets-text091 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text092">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text093 headline6">
            Rainbow: 1 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container20">
          <h2 className="l-b-pets-text094">Fantasy Leaderboard Pets</h2>
        </div>
      </div>
      <div className="l-b-pets-feature-card5">
        <div className="l-b-pets-container21">
          <h2 className="l-b-pets-text095">Top #1 Space Reward</h2>
          <span className="l-b-pets-text096 headline6">
            Normal: 0 Exists | SOON
          </span>
          <span className="l-b-pets-text097 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text098">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text099 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container22">
          <h2 className="l-b-pets-text100">Top #10 Space Reward</h2>
          <span className="l-b-pets-text101 headline6">
            Normal: 0 Exists | SOON
          </span>
          <span className="l-b-pets-text102 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text103">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text104 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container23">
          <h2 className="l-b-pets-text105">Top #50 Space Reward</h2>
          <span className="l-b-pets-text106 headline6">
            Normal: 0 Exists | SOON
          </span>
          <span className="l-b-pets-text107 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="l-b-pets-text108">Golden: 0 Exists | N/A</span>
          <span className="l-b-pets-text109 headline6">
            Rainbow: 0 Exists | N/A
          </span>
        </div>
        <div className="l-b-pets-container24">
          <h2 className="l-b-pets-text110">Space Leaderboard Pets</h2>
        </div>
      </div>
      <div className="l-b-pets-feature-card6">
        <div className="l-b-pets-container25">
          <h1 className="l-b-pets-text111">
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
            className="l-b-pets-link"
          >
            <h1 className="l-b-pets-text114">
              <span className="l-b-pets-text115 headline3">
                Join the Discord Server!
              </span>
              <br></br>
            </h1>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="l-b-pets-turquoise-cirble1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="l-b-pets-turquoise-cirble2"
        />
      </div>
    </div>
  )
}

export default LBPets
