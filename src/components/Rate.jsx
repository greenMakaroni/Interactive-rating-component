import { useState } from "react"
import Button from "./Button"

const Rate = () => {
  const [rating, setRating] = useState(0)
  const [rated, setRated] = useState(false)
  
  return (
    <div className={`flex flex-col shadow w-[360px] p-[30px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#252d37] to-[#121417] from-0% to-[120%] rounded-3xl ${rated ? "items-center justify-center" : "justify-start"}`}>
      {
        rated ?
          <>
            <img className="opacity-0 animate-elementIn scale-90 mb-[25px] " src="./illustration-thank-you.svg" alt="thank-you-image" />
            <div className="opacity-0 animate-elementIn bg-[#252d37] mb-[25px] rounded-2xl w-[190px] flex p-[5px] justify-center items-center">
              <p className="text-[#fb7413] text-[15px] mt-[4px] font-['Overpass']"> You selected {rating} out of 5 </p>
            </div>
            <h1 className=" opacity-0 animate-elementIn text-[white] font-['Overpass'] font-normal text-[1.6rem] mb-[5px]"> Thank you! </h1>
            <p className=" opacity-0 animate-elementIn text-center text-[14px] mb-[20px]  text-[#959eac]"> We appreciate taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
          </>

          :

          <>
            <div className="opacity-0 animate-elementIn mb-[25px] flex justify-center items-center w-[50px] h-[50px] bg-[#252d37] rounded-[50%]">
              <img className="scale-90" src="./icon-star.svg" alt="star-icon" />
            </div>
            <h1 className="opacity-0 animate-elementIn text-[white] font-['Overpass'] font-bold text-[1.5rem] mb-[5px]"> How did we do?</h1>
            <p className="opacity-0 animate-elementIn text-[14px] text-[#959eac]"> Please let us know how we did with your support request. All feedback
              is appreciated to help us improve our offering!
            </p>
            <div className="  opacity-0 animate-elementIn pt-[25px] pb-[25px] flex flex-row justify-between">
              <Button num={1} rating={rating} setRating={setRating} />
              <Button num={2} rating={rating} setRating={setRating} />
              <Button num={3} rating={rating} setRating={setRating} />
              <Button num={4} rating={rating} setRating={setRating} />
              <Button num={5} rating={rating} setRating={setRating} />
            </div>
            <button
              onClick={() => rating != 0 && setRated(!rated)}
              className="
              opacity-0 animate-elementIn
              text-[white] 
              mb-[5px] 
              rounded-3xl 
              bg-[#fb7413] 
              h-[45px]
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
          </>
      }
      {rated &&
        <button onClick={() => {
          setRated(!rated)
          setRating(0)
        }}
          className="
          opacity-0 animate-elementIn
              absolute
              bottom-[5vh]
              text-[black] 
              mb-[5px] 
              rounded-3xl 
              bg-[white] 
              py-[10px]
              px-[50px] 
              hover:bg-[#fb7413] 
              hover:text-[white]
              duration-300
              font-['Overpass']
              text-[14px]
              tracking-widest
              font-bold
              "> Rate again </button>}
    </div>
  )
}

export default Rate