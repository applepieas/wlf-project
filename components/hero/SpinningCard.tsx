import Image from 'next/image'
import React from 'react'

export type SpinningCardProps = {
  imageSrc?: string
  name: string
  alt?: string
}

const SpinningCard: React.FC<SpinningCardProps> = ({ imageSrc, name, alt }) => {
  const src = imageSrc || '/cardPlaceholder.svg'
  return (
    <div className="card">
      <Image
        src={src}
        width={300}
        height={200}
        loading="lazy"
        alt={alt || name}
        className="rounded-lg object-cover"
      />
      <div className="mt-2 text-sm font-medium text-white pl-2">{name}</div>
    </div>
  )
}

export default SpinningCard