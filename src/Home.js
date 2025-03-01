
function Home() {
    return (
        <div className="home-page ">
            <img className="w-full" src="../images/StatusBar.png" alt="status"></img>
            <div class="w-9/10 mx-auto mt-3">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
                </div>
            </div>
            <div className="flex flex-row gap-[8px] mt-3">
                <img className='h-9 ml-3' src="../images/fake-btn1.png" alt="fake btn 1"></img>
                <img className='h-9' src="../images/fake-btn2.png" alt="fake btn 2"></img>
                <img className='h-9' src="../images/fake-btn3.png" alt="fake btn 3"></img>
                <img className='h-9' src="../images/fake-btn4.png" alt="fake btn 4"></img>
            </div>
            <div className="flex justify-center mt-4">
                <img className="w-9/10 " src="../images/banner.png" alt="banner"></img>
            </div>
            <div className="flex justify-center flex-col">
                <div className="w-9/10 flex mt-9 items-center mx-auto">
                    <div className="font-semibold text-[20px] leading-3">Discover Places Nearby</div>
                    <img className="ml-3" src="../images/right-arrow.svg" alt='arrow'></img>
                </div>
                <div className='w-9/10 ml-5 flex justify-evenly items-start mt-5'>
                    <img className="w-25 h-auto" src="../images/place1.png" alt='place'></img>
                    <img className="w-25 h-auto" src="../images/place2.png" alt='place'></img>
                    <img className="w-25 h-auto" src="../images/place3.png" alt='place'></img>

                </div>
                <div className="w-9/10 flex mt-9 items-center mx-auto">
                    <div className="font-semibold text-[20px] leading-3">Top Matches for You</div>
                    <a href="http://localhost:3000/top-match"><img className="ml-3" src="../images/right-arrow.svg" alt='arrow'></img></a>
                </div>
                <div className='w-9/10 ml-5 flex justify-evenly items-start mt-5 overflow-hidden'>
                    <img className="w-40 h-auto" src="../images/match1.png" alt='/'></img>
                    <img className="w-40 h-auto" src="../images/match2.png" alt='/'></img>

                </div>
                <div className="overflow-visible">
                <img className="w-full h-auto border-t-1 border-gray-200" src="../images/tabs.png" alt='/'></img>
                </div>


            </div>




        </div>
    );
}

export default Home;
