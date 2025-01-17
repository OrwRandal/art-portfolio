import CategoryCard from "../Components/CategoryCard"
import orig9 from '../assets/originals/orig9.webp'
import fanart2 from '../assets/fan-arts/fanart2.webp'
import port1 from '../assets/portraits/port1.webp'
import headShot from '../assets/headShot.jpg'
import { useEffect } from "react"
const Home = () => {
  return (
    <>
      <section id="aboutMe">
        <img src={headShot} id="me"></img>
        <div id="meText">
          <div id='meanwhile'>
            <h1><span style={{ fontSize: '3rem', color: 'red' }}>W</span>ho Is Randy...</h1>
          </div>
          <p>Hi, my name is Randy. I am {new Date().getFullYear() - 2004} years old and I've always had an obsession with anything that enables me to be
            creative. When I was younger, Even without any skill, I always doodled on my homework and notes. It even
            caused me to get into trouble a few times, but it never stopped being fun. Every career that piqued my
            interest, whether it was photography, graphic design, or even now, Software Engineering, has allowed me to
            create. Art is a way to express yourself and I wanted to create an amalgamation of my interests on this site
            by creating a site to showcase my art. I hope you enjoy your stay.</p>
        </div>
      </section>
      <div id='categoryHolder'>
        <h1 id='categoryTitle' className="bubble">Categories</h1>
        <div id="cardHolder">
          <CategoryCard img={orig9} path='/originals' title='originals' />
          <CategoryCard img={fanart2} path='/fanArt' title='Fan Art' />
          <CategoryCard img={port1} path='/portraits' title='Portraits' />
        </div>
      </div>
    </>
  )
}

export default Home
