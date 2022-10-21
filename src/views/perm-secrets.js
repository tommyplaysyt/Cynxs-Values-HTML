import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './perm-secrets.css'

const PermSecrets = (props) => {
  return (
    <div className="perm-secrets-container">
      <Helmet>
        <title>Perm-Secrets - Cynx's Values</title>
        <meta
          name="description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
        <meta property="og:title" content="Perm-Secrets - Cynx's Values" />
        <meta
          property="og:description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
      </Helmet>
      <div data-role="Header" className="perm-secrets-header-container">
        <header className="perm-secrets-header">
          <div className="perm-secrets-logo"></div>
          <div className="perm-secrets-menu">
            <Link to="/" className="perm-secrets-navlink headline6">
              Home
            </Link>
            <Link to="/l-b-pets" className="perm-secrets-navlink01 headline6">
              Leaderboard Pets
            </Link>
            <Link
              to="/perm-secrets"
              className="perm-secrets-navlink02 headline6"
            >
              Perm Secrets
            </Link>
            <Link
              to="/limited-secrets"
              className="perm-secrets-navlink03 headline6"
            >
              Limited Secrets
            </Link>
            <Link to="/update-42" className="perm-secrets-navlink04">
              <span className="headline6 perm-secrets-text">Update 42</span>
              <br></br>
            </Link>
            <Link
              to="/cynxs-values-info"
              className="perm-secrets-navlink05 headline6"
            >
              Why Cynx&apos;s Values?
            </Link>
          </div>
          <div className="perm-secrets-container01"></div>
          <div data-type="BurgerMenu" className="perm-secrets-burger-menu">
            <svg viewBox="0 0 1024 1024" className="perm-secrets-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="perm-secrets-mobile-menu">
          <div className="perm-secrets-top">
            <div className="perm-secrets-logo1"></div>
            <div
              data-type="CloseMobileMenu"
              className="perm-secrets-close-menu"
            >
              <svg viewBox="0 0 1024 1024" className="perm-secrets-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="perm-secrets-mid">
            <Link to="/" className="perm-secrets-navlink06">
              <span className="perm-secrets-text002">New Home</span>
              <br></br>
            </Link>
            <Link to="/limited-secrets" className="perm-secrets-navlink07">
              <span className="perm-secrets-text004">Limited Secrets</span>
              <br></br>
            </Link>
            <Link to="/l-b-pets" className="perm-secrets-navlink08">
              Leaderboard Rewards
            </Link>
            <Link to="/perm-secrets" className="perm-secrets-navlink09">
              Perm Secrets
            </Link>
            <Link to="/update-42" className="perm-secrets-navlink10">
              Update 41
            </Link>
            <span className="perm-secrets-text006">More</span>
          </div>
          <div className="perm-secrets-bot"></div>
        </div>
      </div>
      <div className="perm-secrets-main">
        <div className="perm-secrets-hero">
          <div className="perm-secrets-container02">
            <h1 className="perm-secrets-text007">
              <span className="perm-secrets-text008">Perm Secrets</span>
              <br></br>
              <span>Cynx&apos;s Values</span>
              <br></br>
              <br></br>
              <span>
                The existance amounts of each Perm Secret are approximate and
                aren&apos;t
              </span>
              <br></br>
              <span>constantly updated.</span>
              <br></br>
              <br></br>
              <span>
                Perm Secrets include all current Permanent Hatchable Secrets.
              </span>
              <br></br>
            </h1>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="perm-secrets-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="perm-secrets-purple-circle"
        />
      </div>
      <div className="perm-secrets-feature-card">
        <div className="perm-secrets-container03">
          <h2 className="perm-secrets-text020">NEW SECRET SLOT</h2>
          <span className="perm-secrets-text021 headline6">
            Normal: 0 Exists | NFT
          </span>
          <span className="perm-secrets-text022 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="perm-secrets-text023">Golden: 0 Exists | N/A</span>
          <span className="perm-secrets-text024 headline6">
            Rainbow: 0 Exists | N/A
          </span>
          <span className="perm-secrets-text025 headline6">
            Overall Demand: 10/10 | Rising
          </span>
        </div>
        <div className="perm-secrets-container04">
          <h2 className="perm-secrets-text026">NEW SECRET SLOT</h2>
          <span className="perm-secrets-text027 headline6">
            Normal: 0 Exists | 0
          </span>
          <span className="perm-secrets-text028 headline6">
            Shiny: 0 Exists | N/A
          </span>
          <span className="perm-secrets-text029">Golden: 0 Exists | N/A</span>
          <span className="perm-secrets-text030 headline6">
            Rainbow: 0 Exists | N/A
          </span>
          <span className="perm-secrets-text031 headline6">
            Overall Demand: 10/10 | Rising
          </span>
        </div>
        <div className="perm-secrets-container05">
          <h2 className="perm-secrets-text032">Force of Nature</h2>
          <span className="perm-secrets-text033 headline6">
            Normal: ? Exists | 500
          </span>
          <span className="perm-secrets-text034 headline6">
            Shiny: ? Exists | 800
          </span>
          <span className="perm-secrets-text035">Golden: ? Exists | 2,500</span>
          <span className="perm-secrets-text036 headline6">
            Rainbow: 0 Exists | 3,000
          </span>
          <span className="perm-secrets-text037 headline6">
            Overall Demand: 10/10 | Rising
          </span>
        </div>
        <div className="perm-secrets-container06">
          <h2 className="perm-secrets-text038">Perm Secrets</h2>
        </div>
      </div>
      <div className="perm-secrets-feature-card01">
        <div className="perm-secrets-container07">
          <h2 className="perm-secrets-text039">Psykinetic Pegasus</h2>
          <span className="perm-secrets-text040 headline6">
            Normal: 400+ Exists | 200
          </span>
          <span className="perm-secrets-text041 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text042">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text043 headline6">
            Rainbow: N/A Exists | 1,000
          </span>
          <span className="perm-secrets-text044 headline6">
            Overall Demand: 5/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container08">
          <h2 className="perm-secrets-text045">Blazing Monument</h2>
          <span className="perm-secrets-text046 headline6">
            Normal: 375+ Exists | 200
          </span>
          <span className="perm-secrets-text047 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text048">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text049 headline6">
            Rainbow: N/A Exists | 1,000
          </span>
          <span className="perm-secrets-text050 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container09">
          <h2 className="perm-secrets-text051">Virulent Ruins</h2>
          <span className="perm-secrets-text052 headline6">
            Normal: 750+ Exists | 200
          </span>
          <span className="perm-secrets-text053 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text054">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text055 headline6">
            Rainbow: N/A Exists | 800
          </span>
          <span className="perm-secrets-text056 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card02">
        <div className="perm-secrets-container10">
          <h2 className="perm-secrets-text057">Ghastly Dinosaur</h2>
          <span className="perm-secrets-text058 headline6">
            Normal: 375+ Exists | 200
          </span>
          <span className="perm-secrets-text059 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text060">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text061 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text062 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container11">
          <h2 className="perm-secrets-text063">Superb Jelly-ship</h2>
          <span className="perm-secrets-text064 headline6">
            Normal: 670+ Exists | 200
          </span>
          <span className="perm-secrets-text065 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text066">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text067 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text068 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container12">
          <h2 className="perm-secrets-text069">Blazing Inferno Dragon</h2>
          <span className="perm-secrets-text070 headline6">
            Normal: 500+ Exists | 200
          </span>
          <span className="perm-secrets-text071 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text072">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text073 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text074 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card03">
        <div className="perm-secrets-container13">
          <h2 className="perm-secrets-text075">Supernatural Sorcerer</h2>
          <span className="perm-secrets-text076 headline6">
            Normal: 800+ Exists | 200
          </span>
          <span className="perm-secrets-text077 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text078">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text079 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text080 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container14">
          <h2 className="perm-secrets-text081">Pixie Elvenia</h2>
          <span className="perm-secrets-text082 headline6">
            Normal: 1,100+ Exists | 200
          </span>
          <span className="perm-secrets-text083 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text084">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text085 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text086 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container15">
          <h2 className="perm-secrets-text087">Galaxium Core</h2>
          <span className="perm-secrets-text088 headline6">
            Normal: 350+ Exists | 200
          </span>
          <span className="perm-secrets-text089 headline6">
            Shiny: 2 Exists | 600
          </span>
          <span className="perm-secrets-text090">Golden: 3 Exists | 1,500</span>
          <span className="perm-secrets-text091 headline6">
            Rainbow: 15 Exists | 1,200
          </span>
          <span className="perm-secrets-text092 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card04">
        <div className="perm-secrets-container16">
          <h2 className="perm-secrets-text093">Molten Core</h2>
          <span className="perm-secrets-text094 headline6">
            Normal: 175+ Exists | 200
          </span>
          <span className="perm-secrets-text095 headline6">
            Shiny: 1 Exists | 600
          </span>
          <span className="perm-secrets-text096">Golden: 1 Exists | 1,500</span>
          <span className="perm-secrets-text097 headline6">
            Rainbow: 20 Exists | 1,200
          </span>
          <span className="perm-secrets-text098 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container17">
          <h2 className="perm-secrets-text099">Mutant Robot</h2>
          <span className="perm-secrets-text100 headline6">
            Normal: 150+ Exists | 200
          </span>
          <span className="perm-secrets-text101 headline6">
            Shiny: 1 Exists | 600
          </span>
          <span className="perm-secrets-text102">Golden: 1 Exists | 1,500</span>
          <span className="perm-secrets-text103 headline6">
            Rainbow: 20 Exists | 1,200
          </span>
          <span className="perm-secrets-text104 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container18">
          <h2 className="perm-secrets-text105">Time Lord</h2>
          <span className="perm-secrets-text106 headline6">
            Normal: 190+ Exists | 200
          </span>
          <span className="perm-secrets-text107 headline6">
            Shiny: 7 Exists | 600
          </span>
          <span className="perm-secrets-text108">Golden: 3 Exists | 1,500</span>
          <span className="perm-secrets-text109 headline6">
            Rainbow: 20 Exists | 1,200
          </span>
          <span className="perm-secrets-text110 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card05">
        <div className="perm-secrets-container19">
          <h2 className="perm-secrets-text111">Mothership</h2>
          <span className="perm-secrets-text112 headline6">
            Normal: 210+ Exists | 200
          </span>
          <span className="perm-secrets-text113 headline6">
            Shiny: 6 Exists | 600
          </span>
          <span className="perm-secrets-text114">Golden: 1 Exists | 1,500</span>
          <span className="perm-secrets-text115 headline6">
            Rainbow: 16 Exists | 1,200
          </span>
          <span className="perm-secrets-text116 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container20">
          <h2 className="perm-secrets-text117">Techno Mecha</h2>
          <span className="perm-secrets-text118 headline6">
            Normal: 250+ Exists | 200
          </span>
          <span className="perm-secrets-text119 headline6">
            Shiny: 6 Exists | 600
          </span>
          <span className="perm-secrets-text120">Golden: 1 Exists | 1,500</span>
          <span className="perm-secrets-text121 headline6">
            Rainbow: 16 Exists | 1,200
          </span>
          <span className="perm-secrets-text122 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container21">
          <h2 className="perm-secrets-text123">Meta Virus</h2>
          <span className="perm-secrets-text124 headline6">
            Normal: 285+ Exists | 200
          </span>
          <span className="perm-secrets-text125 headline6">
            Shiny: 17 Exists | 600
          </span>
          <span className="perm-secrets-text126">Golden: 1 Exists | 1,500</span>
          <span className="perm-secrets-text127 headline6">
            Rainbow: 31 Exists | 1,200
          </span>
          <span className="perm-secrets-text128 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card06">
        <div className="perm-secrets-container22">
          <h2 className="perm-secrets-text129">Martius Module</h2>
          <span className="perm-secrets-text130 headline6">
            Normal: 300+ Exists | 200
          </span>
          <span className="perm-secrets-text131 headline6">
            Shiny: 13 Exists | 600
          </span>
          <span className="perm-secrets-text132">Golden: 3 Exists | 1,500</span>
          <span className="perm-secrets-text133 headline6">
            Rainbow: 34 Exists | 1,200
          </span>
          <span className="perm-secrets-text134 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container23">
          <h2 className="perm-secrets-text135">Skeletal Gigasaur</h2>
          <span className="perm-secrets-text136 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text137 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text138">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text139 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text140 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container24">
          <h2 className="perm-secrets-text141">Soulgard Anubis</h2>
          <span className="perm-secrets-text142 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text143 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text144">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text145 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text146 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card07">
        <div className="perm-secrets-container25">
          <h2 className="perm-secrets-text147">Frostwinged Mammoth</h2>
          <span className="perm-secrets-text148 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text149 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text150">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text151 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text152 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container26">
          <h2 className="perm-secrets-text153">Great Yamata</h2>
          <span className="perm-secrets-text154 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text155 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text156">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text157 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text158 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container27">
          <h2 className="perm-secrets-text159">Gladiator Reincarnate</h2>
          <span className="perm-secrets-text160 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text161 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text162">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text163 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text164 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card08">
        <div className="perm-secrets-container28">
          <h2 className="perm-secrets-text165">Winged Gigaphant</h2>
          <span className="perm-secrets-text166 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text167 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text168">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text169 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text170 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container29">
          <h2 className="perm-secrets-text171">Rune War Dragon</h2>
          <span className="perm-secrets-text172 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text173 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text174">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text175 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text176 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container30">
          <h2 className="perm-secrets-text177">Spirit Of The West</h2>
          <span className="perm-secrets-text178 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text179 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text180">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text181 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text182 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card09">
        <div className="perm-secrets-container31">
          <h2 className="perm-secrets-text183">Gigajet xD1NO</h2>
          <span className="perm-secrets-text184 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text185 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text186">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text187 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text188 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container32">
          <h2 className="perm-secrets-text189">Heavenly Hydra</h2>
          <span className="perm-secrets-text190 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text191 headline6">
            Shiny: 1 Exists | 600
          </span>
          <span className="perm-secrets-text192">Golden: 1 Exists | 1,500</span>
          <span className="perm-secrets-text193 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text194 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container33">
          <h2 className="perm-secrets-text195">Hydra Spider</h2>
          <span className="perm-secrets-text196 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text197 headline6">
            Shiny: 1 Exists | 600
          </span>
          <span className="perm-secrets-text198">Golden: 1 Exists | 1,500</span>
          <span className="perm-secrets-text199 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text200 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card10">
        <div className="perm-secrets-container34">
          <h2 className="perm-secrets-text201">Imperial Alligator</h2>
          <span className="perm-secrets-text202 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text203 headline6">
            Shiny: 1 Exists | 600
          </span>
          <span className="perm-secrets-text204">Golden: 1 Exists | 1,500</span>
          <span className="perm-secrets-text205 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text206 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container35">
          <h2 className="perm-secrets-text207">Coastline Serpent</h2>
          <span className="perm-secrets-text208 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text209 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text210">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text211 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text212 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container36">
          <h2 className="perm-secrets-text213">Ancient Shark Wreck</h2>
          <span className="perm-secrets-text214 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text215 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text216">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text217 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text218 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card11">
        <div className="perm-secrets-container37">
          <h2 className="perm-secrets-text219">Submerged Raider</h2>
          <span className="perm-secrets-text220 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text221 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text222">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text223 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text224 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container38">
          <h2 className="perm-secrets-text225">Ice Leviathan</h2>
          <span className="perm-secrets-text226 headline6">
            Normal: N/A Exists | 200
          </span>
          <span className="perm-secrets-text227 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text228">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text229 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text230 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
        <div className="perm-secrets-container39">
          <h2 className="perm-secrets-text231">Deep Sea Brute</h2>
          <span className="perm-secrets-text232 headline6">
            Normal: N/A | 200
          </span>
          <span className="perm-secrets-text233 headline6">
            Shiny: N/A Exists | 600
          </span>
          <span className="perm-secrets-text234">
            Golden: N/A Exists | 1,500
          </span>
          <span className="perm-secrets-text235 headline6">
            Rainbow: N/A Exists | 1,200
          </span>
          <span className="perm-secrets-text236 headline6">
            Overall Demand: 3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card12">
        <div className="perm-secrets-container40">
          <h2 className="perm-secrets-text237">Droid Draco</h2>
          <span className="perm-secrets-text238 headline6">
            Normal: 300+ Exists | 200
          </span>
          <span className="perm-secrets-text239 headline6">
            Shiny: 8 Exists | 600 
          </span>
          <span className="perm-secrets-text240">Golden: 9 Exists | 1,500</span>
          <span className="perm-secrets-text241 headline6">
            Rainbow: 50+ Exists | 1,200
          </span>
          <span className="perm-secrets-text242 headline6">
            Overall Demand:3/10 | Decreasing
          </span>
        </div>
      </div>
      <div className="perm-secrets-feature-card13">
        <div className="perm-secrets-container41">
          <h1 className="perm-secrets-text243">
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
            className="perm-secrets-link"
          >
            <h1 className="perm-secrets-text246">
              <span className="perm-secrets-text247 headline3">
                Join the Discord Server!
              </span>
              <br></br>
            </h1>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="perm-secrets-turquoise-cirble1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="perm-secrets-turquoise-cirble2"
        />
      </div>
    </div>
  )
}

export default PermSecrets
