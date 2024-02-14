import clock from '../welcome/welcome images/clock.png';
import headphone from '../welcome/welcome images/headphones.png';
import lamp from '../welcome/welcome images/lamp.png';
import stage from '../welcome/welcome images/stage.png';
import { WelcomeCard } from './welcomeCard';

export const Welcome = () => {
    return (
        <section className="flex flex-col items-center justify-around font-mont gap-9 mt-16">
            <div className="flex flex-col items-center gap-5">
                <h3 className="text-[#2a3855] text-4xl font-extrabold  text-center">Welcome to the Elixir</h3>
                <p className=" pl-7 pr-7 lg:w-3/4 w-full text-[#6a6a6a]  text-sm text-center">Get expert consultancy and support with Elixir, an advisory firm that stand by your side always.</p>
                <div className="w-[67px] h-[3px] bg-[#2a3855] rounded-full"></div>
            </div>

            <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 justify-around container items-center">
                <WelcomeCard image={stage} h3='Business Consulting' text='Solution for every business related problems, readily
'/>
                <WelcomeCard image={clock} h3='Risk Management
' text='Calculate every possible risk in your business, take
control over them.
'/>
                <WelcomeCard image={lamp} h3='Market Research
' text='Know the market before taking any step, reduce
risks before you go.
'/>
         <WelcomeCard image={headphone} h3='Quality Services
' text='Experience unparalleled service, from beginning
to final construction.
'/>
            </div>

        </section>
    )
}
