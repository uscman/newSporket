import skills from '../data/skills';
import Link from 'next/link';
const Skills = () => {
  return (
    <section className="states bg-img bg-fixed" style={{ backgroundImage: "url('img/background/7.jpg')" }} data-overlay-dark="5">
      <div className="container position-re">
        <ul className="rest">
          <li className="sd-color">
            <span className="numb">{ skills[0].number }</span>
            <h5>{ skills[0].title1 } <br /> { skills[0].title2 }</h5>
          </li>
          <li className="blur d-flex align-items-center ">
            <h5 className='mr-10'>Discover Our Services </h5>
          <Link href={'/services/'}>  <span className={`icon ${skills[1].icon}`}></span> </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills;