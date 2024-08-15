import './skills.scss'
function Cp({name,link,address}) {

  return (
   <>
    <div className="CP">
    <a href={link}>
        <div className="circle"><img src={address} /></div></a>
        <span>{name}</span>
    </div>
   </>
  )
}

export default Cp