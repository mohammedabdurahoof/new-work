"use client"

import { Card, Chat, Footer, Header, LoadMore, Loading, ProgressBar, SideBar, TopButton } from '@/components'
import React, { useEffect, useState } from 'react'
import '../../../styles/index.8c75d3e3.css'
import '../../../styles/GameList.4fceab7d.css'
import '../../../styles/GameNavPath.e1cc4a4a.css'
import axios from 'axios'

function page() {
  const [providers, setProviders] = useState<any[]>([])
  const [games, setGames] = useState<any>({})
  const [gameList, setGameList] = useState<any[]>([])
  const [gameCount, setGameCount] = useState<number>(40)

  useEffect(() => {
    const fetchData = async () => {
      await axios.post('https://api.muslotgame.com/api/v2/provider_list', {
        "agent_code": "bctest",
        "agent_token": "72a0b5c71f1a86136a2f80a3acde38dc",
        "game_type": "slot"
      }).then(function (response) {
        // console.log(response.data);
        setProviders(response.data.providers)

      })
        .catch(function (error) {
          console.log(error);
        });
    }

    fetchData()
  }, [])

  useEffect(() => {
    providers.forEach((element: { code: any }) => {
      axios.post('https://api.muslotgame.com/api/v2/game_list', {
        "agent_code": "bctest",
        "agent_token": "72a0b5c71f1a86136a2f80a3acde38dc",
        "provider_code": element.code,
        "lang": "en"
      }).then(function (response) {
        // setGames(response.data);
        // console.log(response.data);
        if (response.data.msg == "SUCCESS") {
          setGames((preValue: any) => {
            return {
              ...preValue,
              [element.code]: response.data.games
            }
          })
        }//{...preValue,  [element.code]: response.data.games }
      })
        .catch(function (error) {
          console.log(error);
        });
    });

  }, [providers])

  useEffect(() => {
    shuffleArrays()
  }, [games])

  const shuffleArrays = () => {
    let combinedArray: any[] = [];

    Object.entries(games).forEach(([key, value]: any) => {
      // let toArray: any[] = Object.values(element);
      combinedArray = [...combinedArray, ...value]
    });

    combinedArray.sort((a, b) => a.game_name.localeCompare(b.game_name));

    // console.log(combinedArray);
    setGameList(combinedArray)

  };



  return (
    

      <div className="s1m5fjkg">
        <div className="slots-container page-max-width-wrap">
          <div className="game-opt-wrap">
            <div className="path-wrap">
              <div className="nsy8oc0 game-nav-path">
                <a href="/casino" keep-scroll-position="true" className="path hover" title="Casino">Casino</a>
                <svg className="s1ff97qc icon">
                  <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                </svg>
                <a keep-scroll-position="true" className="path active" title="Slots">Slots</a>
              </div>
              {/* <div className="region-block">
                <div className="ui-switch">
                  <div className="dot"></div>
                </div>Show Blocked
              </div> */}
            </div>
            <div className="filter-wrap">
              {/* <div className="filter-sort">
                <div className="label">Sort by</div>
                <div className="ui-select">
                  <div className="select-trigger">You may like<div className="arrow "><svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                  </svg></div>
                  </div>
                </div>
              </div> */}
              <div className="filter-provider">
                <div className="label">Provider</div>
                <div className="ui-select sle65vm">
                  <div className="select-trigger">
                    <div className="all-provider">All Providers</div>
                    <div className="arrow "><svg className="s1ff97qc icon">
                      <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {gameList.length > 0 ?
            <div className="s1qvj928">
              <div className="game-list">

                {
                  gameList.slice(0, gameCount).map((game) =>
                    <Card
                      banner={game.banner}
                      game_code={game.game_code}
                      game_name={game.game_name}
                      providerCode={game.provider_code}
                    />)
                }

              </div>
              <ProgressBar current={gameCount} total={gameList.length} />
              <LoadMore setGameCount={setGameCount} />
            </div> : <Loading />}
        </div>
      </div>
      
  )
}

export default page