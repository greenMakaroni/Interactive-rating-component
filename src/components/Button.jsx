
const Button = (props) => {

  return (
  <button 
    onClick={() => props.setRating(props.num)} 
    className={
        ` text-[#959eac] 
        flex 
        justify-center 
        items-center 
        w-[45px] 
        h-[45px] 
        bg-[#252d37] 
        rounded-[50%]
        duration-300
        font-bold
        ${props.rating == props.num ? "bg-[#fb7413] text-[white]" : "hover:text-[white]  hover:bg-[#959eac] "}`
    }>

    <p className="text-[15px]">{props.num}</p>
  </button>
  )
}

export default Button