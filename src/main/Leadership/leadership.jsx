import image from '../Leadership/leader images/img1.jpg';
import image2 from '../Leadership/leader images/img2.jpg';
import image3 from '../Leadership/leader images/img3.jpg';
import image4 from '../Leadership/leader images/img4.jpg';
import image5 from '../Leadership/leader images/img5.jpg';
import image6 from '../Leadership/leader images/img6.jpg';
import { LeaderCards } from './leaderCards';
export const Leadership = () => {
    return (
        <section className='bg-[#f8f9fa] pb-28 '>
            <div className='container m-auto flex flex-col items-center justify-around gap-5  '>
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-3xl font-extrabold text-[#2a3855] text-center font-sans mt-16">Global Leadership</h1>
                    <div className="w-[67px] h-[3px] bg-[#2a3855] rounded-full"></div>
                </div>
                <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-8 mt-8 '>

                    <LeaderCards image={image} h3='Reenal Scott' span='Advertising Consultant' text='Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.' />
                    <LeaderCards image={image2} h3='Lily Anderson' span='Activation Consultant' text='Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions ofr users.' />
                    <LeaderCards image={image3} h3='Thomas Anderson' span='Change Management Consultant' text='As the VP of People, Thomas’s focus lies in the development and optimization of talent retention.' />
                    <LeaderCards image={image4} h3='Legartha Mantana' span='Change Management Consultant' text='As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.' />
                    <LeaderCards image={image5} h3='John Snow' span='Business Analyst' text='John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.' />
                    <LeaderCards image={image6} h3='Ragner Lothbrok' span=' Business Consultant' text='Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.' />



                </div>
            </div>
        </section>
    )
}
