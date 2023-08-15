
const Button = (props) => {
  return (
  <button onClick={() => props.setRating(props.num)} className="flex justify-center items-center w-[40px] h-[40px] bg-[#252d37] rounded-[50%]">
    <p className="text-[#959eac] text-[15px]">{props.num}</p>
  </button>
  )
}

export default Button