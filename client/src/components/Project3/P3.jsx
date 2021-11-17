import './P3.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiRubyonrails, SiJsonwebtokens } from 'react-icons/si';
import P4 from '../../images/project4.png';

export default function P3() {
  const p3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 3000, duration: 3000 },
  })

  return (
    <animated.div style={p3} className='p3'>
      <div className='top'>
        <h1 className='ATG'>Around the Globe</h1>
        <div className='w-icons'>
        <p className='info'>Full CRUD full stack web application with a ruby on rails backend with user authentication. A blogg app that allows users to make posts and leave comments under other users posts. Built with HTML, CSS, JavaScript, React, Ruby on Rails, Node.js, bcrypt and JWT.</p>
          <FaHtml5 size={35} />
          <FaCss3Alt size={35} />
          <SiJavascript size={35} />
          <SiReact size={35} />
          <SiRubyonrails size={35} />
          <FaNodeJs size={35} />
          <SiJsonwebtokens size={35} />
          <div className='buttons'>
          <button className='code'><a href="https://github.com/greciacas/around-the-globe" target="_blank" rel="noopener noreferrer">Viev Code</a></button>
          <button className='site'><a href="https://around-the-globe.surge.sh/" target="_blank" rel="noopener noreferrer">View Site</a></button>
          </div>
        </div>
        <a href="https://around-the-globe.surge.sh/" target="_blank" rel="noopener noreferrer">
        <img src={P4} alt='p4' className='project-4'/>
        </a>
      </div>
      </animated.div>
  )
}
