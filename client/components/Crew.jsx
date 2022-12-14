import React, { useEffect, useState } from 'react'
import { getCrew } from '../apiClient'

export default function Crewpack() {
  const [crewData, setCrewData] = useState(null)

  useEffect(() => {
    getCrew()
      .then((crewItems) => {
        setCrewData(crewItems)
      })
      .catch((err) => {
        err.message
      })
  }, [])

  const getRewards = (crewData) => {
    const { rewards } = crewData.currentCrew
    const { apiRender } = crewData.currentCrew.images

    return rewards?.map(({ item }) => {
      const { name, description, id } = item
      return { name, description, apiRender, id }
    })
  }
  if (crewData == null || crewData.currentCrew.length == 0) {
    return 'LOADING'
  }

  const rewards = getRewards(crewData)
  const { name, description, apiRender } = rewards[0]

  return (
    <>
      <MonthlyCrew
        name={name}
        description={description}
        apiRender={apiRender}
      />
    </>
  )
}

function MonthlyCrew({ name, description, apiRender }) {
  const currentDate = new Date()
  const month = currentDate.toLocaleString('default', { month: 'long' })
  return (
    <>
      <h1>{month} Crew Pack</h1>
      <a
        href="https://www.epicgames.com/fortnite/en-US/fortnite-crew-subscription"
        target="_blank"
        rel="noreferrer"
      >
        <img src={apiRender} alt={description} className="crew" />
      </a>
      <p className="crewText">
        {name} <br />
        {description}
      </p>
    </>
  )
}
