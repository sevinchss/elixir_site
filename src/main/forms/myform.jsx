
export const MyForm = () => {
    return (
        <section className="bg-[#2a3855]">
            <div className="container m-auto flex lg:flex-row flex-col lg:gap-5 gap-10 justify-around pt-20   mt-20">
                <div className="flex flex-col items-center text-center gap-5 border-2 border-yellow-500 rounded-md p-5 lg:w-1/3 w-full h-full lg:h-1/2">
                    <h3 className="font-bold text-xl text-white ">Request a call back</h3>
                    <p className="text-center lg:w-5/6 w-full text-white">Would you like to speak to one of our financial advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold font-mont text-lg text-white">I would like to discuss:</h3>
                <div className="grid grid-flow-row gap-10 lg:grid-cols-2 grid-col-1 items-center">
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-14 py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required/>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-14 py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required/>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-14 py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required/>
                    <button  class="bg-yellow-500 border-yellow-500  text-gray-900 text-sm rounded-lg lock w-full px-14 py-3 font-medium  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >Submit</button>

                </div>
                </div>
            </div>
        // </section>
    )
}
