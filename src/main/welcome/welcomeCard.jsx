
export const WelcomeCard = ({image,h3,text}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-1">
    <img src={image} alt="" className="w-[200px] h-[150px]" />
    <h3 className="text-xl font-extrabold text-[#2a3855] text-center">{h3}</h3>
    <p className=" text-[#6a6a6a] text-center text-md  font-sans tracking-normal">{text}
        and skillfully.</p>
</div>
  )
}
