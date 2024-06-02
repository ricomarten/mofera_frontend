import Sidebar from "./Sidebar";

const Dashboard = ()=>{
    return(
        <>
       <div class="flex">
        <Sidebar></Sidebar>

        <div class="w-4/5 p-8">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-bold text-gray-700">Hello Maimunah!</h2>
                <div class="flex items-center">
                    <button class="mr-4 text-gray-500">Select Centra</button>
                    <button class="text-gray-500">Filters</button>
                </div>
            </div>


            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
 
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-lg font-bold text-gray-700 mb-4">Wet Leaves Statistics</h3>
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-sm text-gray-500">Daily</span>
                    </div>
                    <div class="h-48">
                       
                        <div class="w-full h-full bg-gray-200"></div>
                    </div>
                </div>

              
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-lg font-bold text-gray-700 mb-4">Wet Leaves Trends</h3>
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-sm text-gray-500">February 2024</span>
                    </div>
                    <div class="h-48">
                       
                        <div class="w-full h-full bg-gray-200"></div>
                    </div>
                </div>
            </div>

           
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-8">
               
                <div class="bg-white p-6 rounded-lg shadow-md col-span-2">
                    <h3 class="text-lg font-bold text-gray-700 mb-4">Wet Leaves Data</h3>
                    <table class="w-full text-left">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 text-gray-500">Centra</th>
                                <th class="py-2 px-4 text-gray-500">Wet Leaves ID</th>
                                <th class="py-2 px-4 text-gray-500">Weight</th>
                                <th class="py-2 px-4 text-gray-500">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                            <tr>
                                <td class="py-2 px-4">Centra Unit 1</td>
                                <td class="py-2 px-4">WET#123</td>
                                <td class="py-2 px-4">30 kg</td>
                                <td class="py-2 px-4">31 Aug 2023</td>
                            </tr>
                         
                        </tbody>
                    </table>
                </div>

               
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-lg font-bold text-gray-700 mb-4">Recent Activity</h3>
                    <ul>
                       
                        <li class="mb-4 text-gray-600">Centra just added 30kg of wet leaves data into the system. <span class="text-sm text-gray-400">10 mins ago</span></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>

        </>
    );
}
export default Dashboard;