import React from 'react';
import mads from '../images/mads.png';
import iverson from '../images/iverson.jpg';
import './PopOut.scss';
export default function PopOut() {
  return (
    <figure className="popout">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" className="image" aria-hidden="true">
    <title>This is an image title</title>
    <desc>This is an image description</desc>
    <defs>
      <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
        <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
      </clipPath>
      <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
        <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
      </clipPath>
    </defs>
    {/* Background image */}
    <g clip-path="url(#maskImage)" transform="translate(0 -7)">
      <image clip-path="url(#maskBackground)" width="120" height="120" x="70" y="38" href={iverson} transform="translate(-90 -31)" />
      {/* Foreground image */}
      <image width="120" height="144" x="-15" y="0" fill="none" className="image__foreground" href={mads} />
    </g>
  </svg>

  {/* SEO and a11y fallback image */}

  <img src="https://res.cloudinary.com/dazdt97d3/image/upload/v1615813734/fallback.png" alt="This is a detailed description" loading="lazy" className="fallback-image" />
</figure>
  )
}
