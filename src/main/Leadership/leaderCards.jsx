
export const LeaderCards = ({image, author, span, text}) => {
    return (
        <div className='flex flex-col text-center gap-3   bg-white rounded-md'>
            <img src={image} alt="" className='w-[800px] rounded-t-lg' />
            <h3 className='font-mont font-bold text-lg text-[#2a3855] px-3'>{author}</h3>
            <span className='text-[#6a6a6a] px-3'>{span}</span>
            <p className='text-[#6a6a6a] font-medium px-3 mb-4'>{text}</p>
        </div>
    )
}
