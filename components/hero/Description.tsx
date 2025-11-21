'use client';

import React from 'react'
import styles from './Highlights.module.css'

const HIGHLIGHT_WORDS = ['Webflow', 'HTML', 'icons', 'easings', 'course'];

const Description = () => {
  const text = "Platform packed with Webflow & HTML resources, icons, easings and a page transition course";

  let html = text;
  HIGHLIGHT_WORDS.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    html = html.replace(regex, `<span class="${styles.highlight} text-[32px]">$&</span>`);
  });

  return (
    <div
      className="home-hero__description-p font-ttCommons font-normal text-[32px]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Description