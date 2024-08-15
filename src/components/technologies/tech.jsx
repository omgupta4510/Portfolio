import React from 'react'
import './tech.scss'
const items = [
    {
        id:1,
        title:"HTML",
        image:"html5.png"
    },
    {
        id:2,
        title:"JavaSript",
        image:"javascript.png"
    },
    {
        id:3,
        title:"CSS",
        image:"css.png"
    },
    {
        id:4,
        title:"React",
        image:"react.png"
    },
    {
        id:5,
        title:"NodeJs",
        image:"nodejs.png"
    },
    {
        id:6,
        title:"Express",
        image:"express.png"
    },
    {
        id:7,
        title:"MongoDB",
        image:"mongodb.png"
    },
    {
        id:8,
        title:"Postman",
        image:"postman.png"
    },
    {
        id:9,
        title:"Prisma",
        image:"prisma.png"
    },
]
const Skill = ({item}) => {
  return (
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={item.image} className='skill-icon'/>
                    </div>
                    <h3>{item.title}</h3>
                </div>
            </div>
  )
}
const Tech = () => {
    return (
    <div className='inner'>
        <div className='header'>
            <h1>My Skills</h1>
        </div>
        <div className='container'>
        {items.map((item) => (
          <Skill item={item} key={item.id} />
        ))}
        </div>
    </div>
    )
  }
export default Tech;