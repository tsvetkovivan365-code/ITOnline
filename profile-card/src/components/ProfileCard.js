import React from 'react';
import './ProfileCard.css'

export function ProfileCard(props) {
  return (
    <section className='profile'>
        <figure>{props.image}</figure>
        <figcaption>{props.name}</figcaption>
        <h2>{props.jobTitle}</h2>
        <p>{props.bio}</p>
    </section>
  )
}
