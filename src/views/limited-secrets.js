import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './limited-secrets.css'

const LimitedSecrets = (props) => {
  return (
    <div className="limited-secrets-container">
      <Helmet>
        <title>Limited-Secrets - Cynx's Values</title>
        <meta
          name="description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
        <meta property="og:title" content="Limited-Secrets - Cynx's Values" />
        <meta
          property="og:description"
          content="A new &amp; trusted Clicker Simulator Value List. Contains every pet from Legendary pets, Divine pets to Permanent Secrets and Limited Secrets."
        />
      </Helmet>
      <div data-role="Header" className="limited-secrets-header-container">
        <header className="limited-secrets-header">
          <div className="limited-secrets-logo"></div>
          <div className="limited-secrets-menu">
            <Link to="/" className="limited-secrets-navlink headline6">
              Home
            </Link>
            <Link
              to="/l-b-pets"
              className="limited-secrets-navlink01 headline6"
            >
              Leaderboard Pets
            </Link>
            <Link
              to="/perm-secrets"
              className="limited-secrets-navlink02 headline6"
            >
              Perm Secrets
            </Link>
            <Link
              to="/limited-secrets"
              className="limited-secrets-navlink03 headline6"
            >
              Limited Secrets
            </Link>
            <Link to="/update-42" className="limited-secrets-navlink04">
              <span className="headline6 limited-secrets-text">Update 42</span>
              <br></br>
            </Link>
            <Link
              to="/cynxs-values-info"
              className="limited-secrets-navlink05 headline6"
            >
              Why Cynx&apos;s Values?
            </Link>
          </div>
          <div className="limited-secrets-container01"></div>
          <div data-type="BurgerMenu" className="limited-secrets-burger-menu">
            <svg viewBox="0 0 1024 1024" className="limited-secrets-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="limited-secrets-mobile-menu">
          <div className="limited-secrets-top">
            <div className="limited-secrets-logo1"></div>
            <div
              data-type="CloseMobileMenu"
              className="limited-secrets-close-menu"
            >
              <svg viewBox="0 0 1024 1024" className="limited-secrets-icon3">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="limited-secrets-mid">
            <Link to="/" className="limited-secrets-navlink06">
              <span className="limited-secrets-text002">New Home</span>
              <br></br>
            </Link>
            <Link to="/limited-secrets" className="limited-secrets-navlink07">
              <span className="limited-secrets-text004">Limited Secrets</span>
              <br></br>
            </Link>
            <Link to="/l-b-pets" className="limited-secrets-navlink08">
              Leaderboard Rewards
            </Link>
            <Link to="/perm-secrets" className="limited-secrets-navlink09">
              Perm Secrets
            </Link>
            <Link to="/update-42" className="limited-secrets-navlink10">
              Update 41
            </Link>
            <span className="limited-secrets-text006">More</span>
          </div>
          <div className="limited-secrets-bot"></div>
        </div>
      </div>
      <div className="limited-secrets-main">
        <div className="limited-secrets-hero">
          <div className="limited-secrets-container02">
            <h1 className="limited-secrets-text007">
              <span className="limited-secrets-text008">Limited Secrets</span>
              <br></br>
              <span>Cynx&apos;s Values</span>
              <br></br>
              <br></br>
              <span>
                The existance amounts of each Limited Secret usually do not
                change.
              </span>
              <br></br>
              <br></br>
              <span>
                Limited Secrets include all previous secrets that were able to
                be
              </span>
              <br></br>
              <span>hatched but are unable now.</span>
              <br></br>
              <br></br>
              <span>
                Secrets that are still in the game will not have their existance
                amount
              </span>
              <br></br>
              <span> counted.</span>
              <br></br>
            </h1>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="limited-secrets-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="limited-secrets-purple-circle"
        />
        <div className="limited-secrets-feature-card">
          <div className="limited-secrets-container03">
            <h2 className="limited-secrets-text025">N/A</h2>
            <span className="limited-secrets-text026 headline6">
              Normal: ? Exists | SOON
            </span>
            <span className="limited-secrets-text027 headline6">
              Shiny: ? Exists | SOON
            </span>
            <span className="limited-secrets-text028">
              Golden: ? Exists | SOON
            </span>
            <span className="limited-secrets-text029 headline6">
              Rainbow: ? Exists | SOON
            </span>
            <span className="limited-secrets-text030 headline6">
              Overall Demand: N/A | 
            </span>
          </div>
          <div className="limited-secrets-container04">
            <h2 className="limited-secrets-text031">Headless Horseman</h2>
            <span className="limited-secrets-text032 headline6">
              Normal: N/A | SOON
            </span>
            <span className="limited-secrets-text033 headline6">
              Shiny: N/A | SOON
            </span>
            <span className="limited-secrets-text034">Golden: N/A | SOON</span>
            <span className="limited-secrets-text035 headline6">
              Rainbow: N/A | SOON
            </span>
            <span className="limited-secrets-text036 headline6">
              Overall Demand: N/A | N/A
            </span>
          </div>
          <div className="limited-secrets-container05">
            <h2 className="limited-secrets-text037">Cursed Spirit</h2>
            <span className="limited-secrets-text038 headline6">
              Normal: N/A | SOON
            </span>
            <span className="limited-secrets-text039 headline6">
              Shiny: N/A | SOON
            </span>
            <span className="limited-secrets-text040">Golden: N/A | SOON</span>
            <span className="limited-secrets-text041">
              <span className="headline6">Rainbow: N/A | SOON</span>
              <br></br>
            </span>
            <span className="limited-secrets-text044 headline6">
              Overall Demand: N/A | N/A
            </span>
          </div>
          <div className="limited-secrets-container06">
            <h2 className="limited-secrets-text045">Limited Secrets</h2>
          </div>
        </div>
        <div className="limited-secrets-feature-card01">
          <div className="limited-secrets-container07">
            <h2 className="limited-secrets-text046">Grim Reaper</h2>
            <span className="limited-secrets-text047 headline6">
              Normal: ? Exists | SOON
            </span>
            <span className="limited-secrets-text048 headline6">
              Shiny: ? Exists | SOON
            </span>
            <span className="limited-secrets-text049">
              Golden: ? Exists | SOON
            </span>
            <span className="limited-secrets-text050 headline6">
              Rainbow: ? Exists | SOON
            </span>
            <span className="limited-secrets-text051 headline6">
              Overall Demand: N/A | 
            </span>
          </div>
          <div className="limited-secrets-container08">
            <h2 className="limited-secrets-text052">Multiversal Ascendancy!</h2>
            <span className="limited-secrets-text053 headline6">
              Normal: ? Exists | SOON
            </span>
            <span className="limited-secrets-text054 headline6">
              Shiny: ? Exists | SOON
            </span>
            <span className="limited-secrets-text055">
              Golden: ? Exists | SOON
            </span>
            <span className="limited-secrets-text056 headline6">
              Rainbow: ? Exists | SOON
            </span>
            <span className="limited-secrets-text057 headline6">
              Overall Demand: ?/10 | ?
            </span>
          </div>
          <div className="limited-secrets-container09">
            <h2 className="limited-secrets-text058">2022 Time Guardian</h2>
            <span className="limited-secrets-text059 headline6">
              Normal: 19 Exists | 450,000
            </span>
            <span className="limited-secrets-text060 headline6">
              Shiny: 2 Exists | O/C
            </span>
            <span className="limited-secrets-text061">
              Golden: 1 Exists | O/C
            </span>
            <span className="limited-secrets-text062 headline6">
              Rainbow: 1 Exists | NFT
            </span>
            <span className="limited-secrets-text063 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card02">
          <div className="limited-secrets-container10">
            <h2 className="limited-secrets-text064">1/2 YR Wisp Overlord</h2>
            <span className="limited-secrets-text065 headline6">
              Normal: 15,000 Exists | 18,000
            </span>
            <span className="limited-secrets-text066 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text067">
              Golden: 5 Exists | O/C
            </span>
            <span className="limited-secrets-text068 headline6">
              Rainbow: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text069 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container11">
            <h2 className="limited-secrets-text070">20M Portal Guardian</h2>
            <span className="limited-secrets-text071 headline6">
              Normal: 214 Exists | 40,000
            </span>
            <span className="limited-secrets-text072 headline6">
              Shiny: 12 Exists | 120,000
            </span>
            <span className="limited-secrets-text073">
              Golden: 2 Exists | O/C
            </span>
            <span className="limited-secrets-text074 headline6">
              Rainbow: 5 Exists | 270,000
            </span>
            <span className="limited-secrets-text075 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container12">
            <h2 className="limited-secrets-text076">50M Terminator</h2>
            <span className="limited-secrets-text077 headline6">
              Normal: 268 Exists | 20,000
            </span>
            <span className="limited-secrets-text078 headline6">
              Shiny: 7 Exists | 50,000
            </span>
            <span className="limited-secrets-text079">
              Golden: 2 Exists | 100,000
            </span>
            <span className="limited-secrets-text080 headline6">
              Rainbow: 9 Exists | 80,000
            </span>
            <span className="limited-secrets-text081 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card03">
          <div className="limited-secrets-container13">
            <h2 className="limited-secrets-text082">75M Vortex Fury</h2>
            <span className="limited-secrets-text083 headline6">
              Normal: 202 Exists | 30,000
            </span>
            <span className="limited-secrets-text084 headline6">
              Shiny: 7 Exists | 80,000
            </span>
            <span className="limited-secrets-text085">
              Golden: 1 Exists | O/C
            </span>
            <span className="limited-secrets-text086 headline6">
              Rainbow: 9 Exists | 120,000
            </span>
            <span className="limited-secrets-text087 headline6">
              Overall Demand: 10/10 | Rising 
            </span>
          </div>
          <div className="limited-secrets-container14">
            <h2 className="limited-secrets-text088">435M Stardust Emperor</h2>
            <span className="limited-secrets-text089 headline6">
              Normal: N/A Exists | 14,000
            </span>
            <span className="limited-secrets-text090 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text091">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text092 headline6">
              Rainbow: 1 Exists | N/A
            </span>
            <span className="limited-secrets-text093 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container15">
            <h2 className="limited-secrets-text094">1/2 YR Cream Cone</h2>
            <span className="limited-secrets-text095 headline6">
              Normal: N/A Exists | 200
            </span>
            <span className="limited-secrets-text096 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text097">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text098 headline6">
              Rainbow: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text099 headline6">
              Overall Demand: 10/10 | Rising 
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card04">
          <div className="limited-secrets-container16">
            <h2 className="limited-secrets-text100">100M Furnace of Heaven</h2>
            <span className="limited-secrets-text101 headline6">
              Normal: 350+ Exists | 10,000
            </span>
            <span className="limited-secrets-text102 headline6">
              Shiny: 14 Exists | 20,000
            </span>
            <span className="limited-secrets-text103">
              Golden: 2 Exists | 65,000
            </span>
            <span className="limited-secrets-text104 headline6">
              Rainbow: 21 Exists | 40,000
            </span>
            <span className="limited-secrets-text105 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container17">
            <h2 className="limited-secrets-text106">Ultraviolet Spectre</h2>
            <span className="limited-secrets-text107 headline6">
              Normal: 300+ Exists | 15,000
            </span>
            <span className="limited-secrets-text108 headline6">
              Shiny: 10 Exists | 35,000
            </span>
            <span className="limited-secrets-text109">
              Golden: 4 Exists | 45,000
            </span>
            <span className="limited-secrets-text110 headline6">
              Rainbow: 15 Exists | 65,000
            </span>
            <span className="limited-secrets-text111 headline6">
              Overall Demand: 10/10 | Rising 
            </span>
          </div>
          <div className="limited-secrets-container18">
            <h2 className="limited-secrets-text112">Luck of the Irish</h2>
            <span className="limited-secrets-text113 headline6">
              Normal: 405+ Exists | 4,000
            </span>
            <span className="limited-secrets-text114 headline6">
              Shiny: 28 Exists | 8,000
            </span>
            <span className="limited-secrets-text115">
              Golden: 4 Exists | 18,000
            </span>
            <span className="limited-secrets-text116 headline6">
              Rainbow: 34 Exists | 10,000
            </span>
            <span className="limited-secrets-text117 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card05">
          <div className="limited-secrets-container19">
            <h2 className="limited-secrets-text118">150M Shattered Reality</h2>
            <span className="limited-secrets-text119 headline6">
              Normal: 380+ Exists | 6,000
            </span>
            <span className="limited-secrets-text120 headline6">
              Shiny: 12 Exists | 15,000
            </span>
            <span className="limited-secrets-text121">
              Golden: 5 Exists | 30,000
            </span>
            <span className="limited-secrets-text122 headline6">
              Rainbow: 37 Exists | 20,000
            </span>
            <span className="limited-secrets-text123 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container20">
            <h2 className="limited-secrets-text124">Demented Jokester</h2>
            <span className="limited-secrets-text125 headline6">
              Normal: 345+ Exists | 8,000
            </span>
            <span className="limited-secrets-text126 headline6">
              Shiny: 11 Exists | 12,000
            </span>
            <span className="limited-secrets-text127">
              Golden: 5 Exists | 13,500
            </span>
            <span className="limited-secrets-text128 headline6">
              Rainbow: 33 Exists | 20,000
            </span>
            <span className="limited-secrets-text129 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container21">
            <h2 className="limited-secrets-text130">175M Hoarder of Light</h2>
            <span className="limited-secrets-text131 headline6">
              Normal: 445 Exists | 3,500
            </span>
            <span className="limited-secrets-text132 headline6">
              Shiny: 4 Exists | 11,000
            </span>
            <span className="limited-secrets-text133">
              Golden: 9 Exists | 22,500
            </span>
            <span className="limited-secrets-text134 headline6">
              Rainbow: 44 Exists | 12,000
            </span>
            <span className="limited-secrets-text135 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card06">
          <div className="limited-secrets-container22">
            <h2 className="limited-secrets-text136">Baneful Bot Bunny</h2>
            <span className="limited-secrets-text137 headline6">
              Normal: 540+ Exists | 3,000
            </span>
            <span className="limited-secrets-text138 headline6">
              Shiny: 21 Exists | 7,000
            </span>
            <span className="limited-secrets-text139">
              Golden: 5 Exists | 16,500
            </span>
            <span className="limited-secrets-text140 headline6">
              Rainbow: 35 Exists | 10,000
            </span>
            <span className="limited-secrets-text141 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container23">
            <h2 className="limited-secrets-text142">200M Software Hacker</h2>
            <span className="limited-secrets-text143 headline6">
              Normal: 580+ Exists | 2,500
            </span>
            <span className="limited-secrets-text144 headline6">
              Shiny: 23 Exists | 5,000
            </span>
            <span className="limited-secrets-text145">
              Golden: 21 Exists | 9,500
            </span>
            <span className="limited-secrets-text146 headline6">
              Rainbow: 55 Exists | 6,000
            </span>
            <span className="limited-secrets-text147 headline6">
              Overall Demand: 10/10 | Rising 
            </span>
          </div>
          <div className="limited-secrets-container24">
            <h2 className="limited-secrets-text148">
              225M Interdimensional Insurgent
            </h2>
            <span className="limited-secrets-text149 headline6">
              Normal: 780+ Exists | 1,500
            </span>
            <span className="limited-secrets-text150 headline6">
              Shiny: 11 Exists | 4,600
            </span>
            <span className="limited-secrets-text151">
              Golden: 17 Exists | 8,500
            </span>
            <span className="limited-secrets-text152 headline6">
              Rainbow: 53 Exists | 5,500
            </span>
            <span className="limited-secrets-text153 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card07">
          <div className="limited-secrets-container25">
            <h2 className="limited-secrets-text154">250M Holy Temple</h2>
            <span className="limited-secrets-text155 headline6">
              Normal: 800+ Exists | 1,200
            </span>
            <span className="limited-secrets-text156 headline6">
              Shiny: 25 Exists | 3,600
            </span>
            <span className="limited-secrets-text157">
              Golden: 18 Exists | 6,000
            </span>
            <span className="limited-secrets-text158 headline6">
              Rainbow: 52 Exists | 4,000
            </span>
            <span className="limited-secrets-text159 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container26">
            <h2 className="limited-secrets-text160">260M Astro Fighter</h2>
            <span className="limited-secrets-text161 headline6">
              Normal: 300+ Exists | 5,000
            </span>
            <span className="limited-secrets-text162 headline6">
              Shiny: 7 Exists | 12,000
            </span>
            <span className="limited-secrets-text163">
              Golden: 7 Exists | 35,000
            </span>
            <span className="limited-secrets-text164 headline6">
              Rainbow: 20 Exists | 20,000
            </span>
            <span className="limited-secrets-text165 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container27">
            <h2 className="limited-secrets-text166">275M Steam Overlord</h2>
            <span className="limited-secrets-text167 headline6">
              Normal: 1,120+ Exists | 1,000
            </span>
            <span className="limited-secrets-text168 headline6">
              Shiny: 37 Exists | 1,500
            </span>
            <span className="limited-secrets-text169">
              Golden: 26 Exists | 3,500
            </span>
            <span className="limited-secrets-text170 headline6">
              Rainbow: 89 Exists | 2,200
            </span>
            <span className="limited-secrets-text171 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card08">
          <div className="limited-secrets-container28">
            <h2 className="limited-secrets-text172">290M Jackpot Master</h2>
            <span className="limited-secrets-text173 headline6">
              Normal: 415+ Exists | 2,000
            </span>
            <span className="limited-secrets-text174 headline6">
              Shiny: 8 Exists | 6,000
            </span>
            <span className="limited-secrets-text175">
              Golden: 15 Exists | 12,000
            </span>
            <span className="limited-secrets-text176 headline6">
              Rainbow: 26 Exists | 8,000
            </span>
            <span className="limited-secrets-text177 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container29">
            <h2 className="limited-secrets-text178">300M Deranged Crab</h2>
            <span className="limited-secrets-text179 headline6">
              Normal: 415+ Exists | 2,000
            </span>
            <span className="limited-secrets-text180 headline6">
              Shiny: 2 Exists | 5,500
            </span>
            <span className="limited-secrets-text181">
              Golden: 1 Exists | 11,000
            </span>
            <span className="limited-secrets-text182 headline6">
              Rainbow: 24 Exists | 7,000
            </span>
            <span className="limited-secrets-text183 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container30">
            <h2 className="limited-secrets-text184">310M Butterfly Spirits</h2>
            <span className="limited-secrets-text185 headline6">
              Normal: 335+ Exists | 4,000
            </span>
            <span className="limited-secrets-text186 headline6">
              Shiny: 2 Exists | 8,000
            </span>
            <span className="limited-secrets-text187">
              Golden: 1 Exists | 17,000
            </span>
            <span className="limited-secrets-text188 headline6">
              Rainbow: 22 Exists | 12,000
            </span>
            <span className="limited-secrets-text189 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card09">
          <div className="limited-secrets-container31">
            <h2 className="limited-secrets-text190">325M Galaxy Empress</h2>
            <span className="limited-secrets-text191 headline6">
              Normal: 190+ Exists | 12,000
            </span>
            <span className="limited-secrets-text192 headline6">
              Shiny: 1 Exists | O/C
            </span>
            <span className="limited-secrets-text193">
              Golden: 13 Exists | 55,000
            </span>
            <span className="limited-secrets-text194 headline6">
              Rainbow: 12 Exists | 25,000
            </span>
            <span className="limited-secrets-text195 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container32">
            <h2 className="limited-secrets-text196">335M Infernal Queen</h2>
            <span className="limited-secrets-text197 headline6">
              Normal: 406+ Exists | 2,000
            </span>
            <span className="limited-secrets-text198 headline6">
              Shiny: 1 Exists | 4,500
            </span>
            <span className="limited-secrets-text199">
              Golden: 2 Exists | 10,000
            </span>
            <span className="limited-secrets-text200 headline6">
              Rainbow: 20 Exists | 6,500
            </span>
            <span className="limited-secrets-text201 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container33">
            <h2 className="limited-secrets-text202">350M Butterfly Overlord</h2>
            <span className="limited-secrets-text203 headline6">
              Normal: 479 Exists | 1,500
            </span>
            <span className="limited-secrets-text204 headline6">
              Shiny: N/A Exists | 4,500
            </span>
            <span className="limited-secrets-text205">
              Golden: N/A Exists | 13,000 
            </span>
            <span className="limited-secrets-text206 headline6">
              Rainbow: 22 Exists | 6,000
            </span>
            <span className="limited-secrets-text207 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card10">
          <div className="limited-secrets-container34">
            <h2 className="limited-secrets-text208">4th Remix Master</h2>
            <span className="limited-secrets-text209 headline6">
              Normal: 568 Exists | 1,000
            </span>
            <span className="limited-secrets-text210 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text211">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text212 headline6">
              Rainbow: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text213 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container35">
            <h2 className="limited-secrets-text214">375M Shattered Guard</h2>
            <span className="limited-secrets-text215 headline6">
              Normal: 616 Exists | 1,500
            </span>
            <span className="limited-secrets-text216 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text217">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text218 headline6">
              Rainbow: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text219 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container36">
            <h2 className="limited-secrets-text220">425M Overclock</h2>
            <span className="limited-secrets-text221 headline6">
              Normal: 400+ Exists | 1,500
            </span>
            <span className="limited-secrets-text222 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text223">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text224 headline6">
              Rainbow: N/A Exists | 5,000
            </span>
            <span className="limited-secrets-text225">
              <span className="headline6">Overall Demand: 10/10 | Rising </span>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card11">
          <div className="limited-secrets-container37">
            <h2 className="limited-secrets-text229">430M Star Overlord</h2>
            <span className="limited-secrets-text230 headline6">
              Normal: 50+ Exists | 5,000
            </span>
            <span className="limited-secrets-text231 headline6">
              Shiny: N/A Exists | O/C
            </span>
            <span className="limited-secrets-text232">
              Golden: N/A Exists | O/C
            </span>
            <span className="limited-secrets-text233 headline6">
              Rainbow: N/A Exists | O/C
            </span>
            <span className="limited-secrets-text234 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container38">
            <h2 className="limited-secrets-text235">450M Premordial Jewel</h2>
            <span className="limited-secrets-text236 headline6">
              Normal: 15+ Exists | 8,000
            </span>
            <span className="limited-secrets-text237 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text238">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text239 headline6">
              Rainbow: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text240 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container39">
            <h2 className="limited-secrets-text241">460M Autumn Eruption</h2>
            <span className="limited-secrets-text242 headline6">
              Normal: 77 Exists | N/A
            </span>
            <span className="limited-secrets-text243 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text244">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text245 headline6">
              Rainbow: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text246 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
        <div className="limited-secrets-feature-card12">
          <div className="limited-secrets-container40">
            <h2 className="limited-secrets-text247">Summer Equatorial</h2>
            <span className="limited-secrets-text248 headline6">
              Normal: 1,800 Exists | 350
            </span>
            <span className="limited-secrets-text249 headline6">
              Shiny: N/A Exists | 250
            </span>
            <span className="limited-secrets-text250">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text251 headline6">
              Rainbow: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text252 headline6">
              Overall Demand: 5/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container41">
            <h2 className="limited-secrets-text253">Summer Dinosaur</h2>
            <span className="limited-secrets-text254 headline6">
              Normal: 258 Exists | 3,600
            </span>
            <span className="limited-secrets-text255 headline6">
              Shiny: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text256">
              Golden: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text257 headline6">
              Rainbow: N/A Exists | N/A
            </span>
            <span className="limited-secrets-text258 headline6">
              Overall Demand: 8/10 | Rising
            </span>
          </div>
          <div className="limited-secrets-container42">
            <h2 className="limited-secrets-text259">Corgi of the Sun</h2>
            <span className="limited-secrets-text260 headline6">
              Normal: N/A | 40,000
            </span>
            <span className="limited-secrets-text261 headline6">
              Shiny: N/A Exists | 95,000
            </span>
            <span className="limited-secrets-text262">
              Golden: N/A Exists |155,000
            </span>
            <span className="limited-secrets-text263 headline6">
              Rainbow: N/A Exists |100,000
            </span>
            <span className="limited-secrets-text264 headline6">
              Overall Demand: 10/10 | Rising
            </span>
          </div>
        </div>
      </div>
      <div className="limited-secrets-feature-card13">
        <div className="limited-secrets-container43">
          <h1 className="limited-secrets-text265">
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
            className="limited-secrets-link"
          >
            <h1 className="limited-secrets-text268">
              <span className="limited-secrets-text269 headline3">
                Join the Discord Server!
              </span>
              <br></br>
            </h1>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="limited-secrets-turquoise-cirble1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="limited-secrets-turquoise-cirble2"
        />
      </div>
    </div>
  )
}

export default LimitedSecrets
