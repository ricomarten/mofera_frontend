import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";

function WashWetLeaves(){
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(new Date());
    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 600);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleBack = () => navigate("/dashboard");

    const handleAdd = () => navigate("/addwetleaves");

    const handleDry = () => navigate("/drywetleaves");
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
                <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl">Wet Leaves </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-24 rounded-full p-1" onClick={handleAdd}> Add </p>
                        <p className="w-24 bg-octonary text-white rounded-full p-1"> Wash </p>
                        <p className="w-24 rounded-full p-1" onClick={handleDry}> Dry </p>
                    </div>
                </div>

                <br></br>
                
                <p className="text-lg text-primary font-semibold"> Wet Leaves - WET#123 </p>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <p className="text-xxs pl-20 text-red-600 font-semibold">10m00s until done washing</p>
                        <label htmlFor="weight" className="font-medium text-sm pr-44 mb-1">Weight:</label>
                        <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-4">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <br></br>
                    <button className="bg-secondary pl-4 pr-4 pt-2 pb-2 rounded-full text-white font-semibold -mt-2"> WASHING.. </button>
                </div>

                <br></br>

                <p className="text-lg text-primary font-semibold z-20"> Wet Leaves - WET#124 </p>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5">
                        <label htmlFor="weight" className="font-medium text-sm pr-44 mb-1">Weight:</label>
                        <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-4">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <br></br>

                    <button className="bg-secondary pl-10 pr-10 pt-2 pb-2 rounded-full text-white font-semibold -mt-2 "> WASH </button>
                </div>                
            </div>
            
            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}
  
export default WashWetLeaves;