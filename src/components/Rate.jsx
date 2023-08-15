import { useState } from "react"
import Button from "./Button"

const Rate = () => {
  const [rating, setRating] = useState(0)
  return (
    <div className="flex flex-col justify-start w-[340px] p-[25px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-[#252d37] to-[#121417] from-30% to-100% rounded-3xl">
      <div className="mb-[15px] flex justify-center items-center w-[40px] h-[40px] bg-[#252d37] rounded-[50%]">
        <img className="scale-90" src="./public/images/icon-star.svg" alt="star-icon" />
      </div>
      <h1 className="text-[white] font-['Overpass'] font-normal text-[1.6rem] mb-[5px]"> How did we do?</h1>
      <p className="text-[14px] text-[#959eac]"> Please let us know how we did with your support request. All feedback
        is appreciated to help us improve our offering!
      </p>
      <div className="pt-[30px] pb-[25px] flex flex-row justify-between">
        <Button num={1} rating={rating} setRating={setRating} />
        <Button num={2} rating={rating} setRating={setRating} />
        <Button num={3} rating={rating} setRating={setRating} />
        <Button num={4} rating={rating} setRating={setRating} />
        <Button num={5} rating={rating} setRating={setRating} />
      </div>
      <button className="
        text-[white] 
        mb-[5px] 
        rounded-3xl 
        bg-[#fb7413] 
        p-[12px] 
        hover:bg-[white] 
        hover:text-[#fb7413]
        duration-300
        font-['Overpass']
        text-[14px]
        tracking-widest
        font-bold
        ">
        SUBMIT
      </button>
    </div>
  )
}

export default Rate