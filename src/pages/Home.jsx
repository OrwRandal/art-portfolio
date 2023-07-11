import CategoryCard from "../Components/CategoryCard"
const Home = () => {
  return (
    <>
      <section id="aboutMe">
        <img src="src/assets/headShot.jpg" id="me"></img>
        <div id="meText">
          <div id='meanwhile'>
            <h1><span style={{ fontSize: '3rem', color: 'red' }}>W</span>ho Is Randy...</h1>
          </div>
          <p>Hi, my name is Randy. I am 19 years old and I've always had an obsession with anything that enables me to be
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
          <CategoryCard img='https://deadline.com/wp-content/uploads/2021/05/WBA_Superman_Image.jpg?w=1000' path='/originals' title='originals' />
          <CategoryCard img='https://i.insider.com/649accc5867d960019d92aaa?width=700' path='/originals' title='Fan Art' />
          <CategoryCard img='https://i0.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2023/06/MAWS-intro.jpg?fit=680%2C383&ssl=1' path='/originals' title='Portraits' />
        </div>
      </div>
    </>
  )
}

export default Home
