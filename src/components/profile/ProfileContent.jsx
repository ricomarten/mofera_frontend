import profile from '../../assets/profile/profile.svg'
import { CgAdd } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import reward from '../../assets/profile/reward.svg'
import collect from '../../assets/profile/collect.svg'
import trophy from '../../assets/profile/trophy.svg'
import NavigateTo from './NavigateTo';
import Account from './Account';
import SupportnAbout from './SupportnAbout';
import ConfirmNotification from '../ConfirmNotification';
import { useState } from "react";

function ProfileContent({role, name}) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [text, setText] = useState("");
    const [confirmationText, setConfirmationText] = useState("");
    const [confirmedText, setConfirmedText] = useState("");
    const [confirmedTitle, setConfirmedTitle] = useState("");
    const [cancelledText, setCancelledText] = useState("");

    function handleLogOut() {
        setShowConfirm(true);
        setText("You'll have to log in again if you want to use Mofera");
        setConfirmationText("Yes, log out!");
        setConfirmedText("Logged Out!");
        setConfirmedTitle("You have logged out from the app.");
        setCancelledText("You are still in the app :)");
    }

    function handleDelete() {
        setShowConfirm(true);
        setText(`Your account will be deleted permanently. This means you won't be able to access ${role} data and other personal details`);
        setConfirmationText("Yes, delete it!");
        setConfirmedText("Deleted!");
        setConfirmedTitle("Your account has been deleted");
        setCancelledText(`You still have access to the ${role} data :>`);
    }

    return (
        <div className='flex flex-col justify-center items-center py-10 w-5/6 mx-auto pb-36'>
            <img src={profile} className="w-screen relative z-40 w-44 h-44 mt-2"/>

            <div className='mt-3 flex justify-center'>
                <a href='/editprofile'>
                    <p className='text-primary font-medium flex gap-1 items-center text-base underline'><CgAdd />Edit Profile</p>
                </a>
            </div>

            <p className='text-primary text-3xl mt-1 font-medium'>{name}</p>

            <div className='mt-1 flex justify-center'>
                <p className='text-primary font-medium flex gap-1 items-center text-base'><IoLocationSharp />Ponchiki, Aroma Ketek</p>
            </div>

            <div className='flex mt-3 justify-between w-full gap-x-3'>
                <div className='px-3 py-5 rounded-lg bg-primary flex flex-col justify-center items-center gap-y-1 flex-1'>
                    <img src={trophy} className="text-white w-8 h-8"/>
                    <p className='text-xs text-white font-medium'>Achievements</p>
                    <p className='text-xxs text-white -mt-1'>8 achievements</p>
                </div>
                <div className='px-3 py-5 rounded-lg bg-primary flex flex-col justify-center items-center gap-y-1 flex-1'>
                    <img src={reward} className="text-white w-8 h-8"/>
                    <p className='text-xs text-white font-medium'>Rewards</p>
                    <p className='text-xxs text-white -mt-1'>10 rewards</p>
                </div>
                <div className='px-3 py-5 rounded-lg bg-primary flex flex-col justify-center items-center gap-y-1 flex-1'>
                    <img src={collect} className="text-white w-8 h-8"/>
                    <p className='text-xs text-white font-medium'>Collects</p>
                    <p className='text-xxs text-white -mt-1'>20 collects</p>
                </div>
            </div>

            <div className='my-2 text-left w-full'>
                <p className='text-primary font-bold ml-5'>Navigate To</p>
                <NavigateTo role={role}/>
            </div>

            <div className='my-2 text-left w-full'>
                <p className='text-primary font-bold ml-5'>Account</p>
                <Account handleLogOut={handleLogOut} handleDelete={handleDelete} />
            </div>

            <div className='my-2 text-left w-full'>
                <p className='text-primary font-bold ml-5'>Support & About</p>
                <SupportnAbout />
            </div>

            {showConfirm && <ConfirmNotification 
                onClose={() => setShowConfirm(false)} 
                text={text}
                confirmationText={confirmationText}
                confirmedText={confirmedText}
                confirmedTitle={confirmedTitle}
                cancelledText={cancelledText}
            />}
        </div>
    )
}

export default ProfileContent;