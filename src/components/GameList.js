import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const GameList = ({url, search}) => {
  const [games, setGames] = useState([])
  useEffect(() => {
    axios.get( !url ? '/api/games' : `/api/games${url}`).then(response => {
      const games = response.data
      setGames(games)
    })
    console.log(games)

  })
  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 pb-9">Todos los juegos {search}</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games.map((game) => (
              <li
                key={game.id}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="flex-1 flex flex-col p-8">
                  <img className="w-auto h-auto flex-shrink-0 mx-auto " src={game.thumbnail} alt="" />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">{game.title}</h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">title</dt>
                    <dd className="text-gray-500 text-sm">{game.platform}</dd>
                    <dt className="sr-only">platform</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {game.genre}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <a
                        href={game.game_url}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                      
                        <span className="ml-3">Sitio Web</span>
                      </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a
                        href={game.freetogame_profile_url}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                      >
                     
                        <span className="ml-3">Perfil freetogame</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        {/* /End replace */}
        </div>
      </div>
    </main>
  )
}

export default GameList
