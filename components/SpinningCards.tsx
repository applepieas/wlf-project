import React from 'react'
import SpinningCard from './SpinningCard'

const data = [
  { name: 'Alpha', imageSrc: '/cardPlaceholder.svg' },
  { name: 'Beta', imageSrc: undefined },
  { name: 'Gamma', imageSrc: undefined },
  { name: 'Delta', imageSrc: undefined },
  { name: 'Epsilon', imageSrc: undefined },
]

const SpinningCards = () => {
  return (
    <div className="carausel">
      <div className="group">
        {data.map((c, i) => (
          <SpinningCard key={`front-${i}`} name={c.name} imageSrc={c.imageSrc} />
        ))}
      </div>

      <div aria-hidden="true" className="group">
        {data.map((c, i) => (
          <SpinningCard key={`ghost-${i}`} name={c.name} imageSrc={c.imageSrc} />
        ))}
      </div>

    </div>
  )
}

export default SpinningCards