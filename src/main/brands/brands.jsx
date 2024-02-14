import image from '../brands/brands images/logo.png';
import image2 from '../brands/brands images/logo2.png';
import image3 from '../brands/brands images/logo3.png';
import image4 from '../brands/brands images/logo4.png';
import image5 from '../brands/brands images/logo5.png';
import image6 from '../brands/brands images/logo6.png';
export const Brands = () => {
  return (
<section className='bg-[#f2f2f2]'>
    <div className='container m-auto flex justify-around mt-10 '>
<div className='grid grid-flow-row grid-cols-6 mt-16 mb-5 px-5 gap-8 '>
    <img src={image} alt="" className='bg-none'/>
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    
    <img src={image4} alt="" />
    <img src={image5} alt="" />
    <img src={image6} alt="" />
</div>
    </div>
</section>
    )
}
