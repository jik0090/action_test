import React from 'react'

const Image = ({ logo }) => {
  const [path, extension] = logo.src.split('.')
  const { width, height } = logo

  const size = {}
  if (width) size.width = `${width}px`
  if (height) size.height = `${height}px`

  return (
    <img
      alt={logo.alt}
      src={`${path}.${extension}`}
      srcSet={`${path}.${extension} 1x, ${path}@2x.${extension} 2x`}
      width={logo.width ? `${logo.width}px` : 'auto'}
      height={logo.height ? `${logo.height}px` : 'auto'}
    />
  )
}


export default Image
