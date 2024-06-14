import { IoLeafOutline } from "react-icons/io5";
import { RiShipLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPackage } from "react-icons/pi";
import { LuLeaf } from "react-icons/lu";
import { PiTeaBagBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

function NavigateTo({role}) {
    return (
        <>
            {role === "centra" && (
                <div className="w-full bg-denary mt-2 rounded-2xl px-5 py-5 flex flex-col">
                    <div className="flex items-center justify-start gap-x-8 mb-4">
                        <LuLayoutDashboard className="text-primary w-6 h-6" />
                        <Link to="/centradashboard">
                            <button className="font-medium text-primary">Centra Dashboard</button>
                        </Link>
                    </div>
                    <div className="flex mb-4 items-center justify-start gap-x-8">
                        <IoLeafOutline className="text-primary w-6 h-6" />
                        <Link to="/wetleaves">
                            <button className="font-medium text-primary">Wet Leaves</button>
                        </Link>
                    </div>
                    <div className="flex mb-4 items-center justify-start gap-x-8">
                        <LuLeaf className="text-primary w-6 h-6" />
                        <Link to="/dryleaves">
                            <button className="font-medium text-primary">Dry Leaves</button>
                        </Link>
                    </div>
                    <div className="flex mb-4 items-center justify-start gap-x-8">
                        <PiTeaBagBold className="text-primary w-6 h-6" />
                        <Link to="/powder">
                            <button className="font-medium text-primary">Powder</button>
                        </Link>
                    </div>
                    <div className="flex items-center mb-4 justify-start gap-x-8">
                        <RiShipLine className="text-primary w-6 h-6" />
                        <Link to="/shippinginfo">
                            <button className="font-medium text-primary">Shipping Info</button>
                        </Link>
                    </div>
                    <div className="flex items-center mb-4 justify-start gap-x-8">
                        <LiaShippingFastSolid className="text-primary w-6 h-6" />
                        <Link to="/trackshipping">
                            <button className="font-medium text-primary">Track Shipping</button>
                        </Link>
                    </div>
                    <div className="flex mb-4 items-center justify-start gap-x-8">
                        <PiPackage className="text-primary w-6 h-6" />
                        <Link to="/package">
                            <button className="font-medium text-primary">Package</button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-start gap-x-8">
                        <IoNotificationsOutline className="text-primary w-6 h-6" />
                        <Link to="/notify">
                            <button className="font-medium text-primary">Notification</button>
                        </Link>
                    </div>
                </div>
            )}
            {role === "guardHarbour" && (
                <div className="w-full bg-denary mt-2 rounded-2xl px-5 py-5 flex flex-col">
                    <div className="flex items-center justify-start gap-x-8 mb-4">
                        <LuLayoutDashboard className="text-primary w-6 h-6" />
                        <Link to="/ghdashboard">
                            <button className="font-medium text-primary">Guard Harbour Dashboard</button>
                        </Link>
                    </div>
                    <div className="flex mb-4 items-center justify-start gap-x-8">
                        <PiPackage className="text-primary w-6 h-6" />
                        <Link to="/addcheckpoint">
                            <button className="font-medium text-primary">Checkpoint</button>
                        </Link>
                    </div>
                    <div className="flex mb-4 items-center justify-start gap-x-8">
                        <IoNotificationsOutline className="text-primary w-6 h-6" />
                        <Link to="/shipmentnotification">
                            <button className="font-medium text-primary">Shipment Notification</button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-start gap-x-8">
                        <LiaShippingFastSolid className="text-primary w-6 h-6" />
                        <Link to="/trackshipping/1">
                            <button className="font-medium text-primary">Track Shipping</button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )

}

export default NavigateTo;