const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function CentraNotification({text, datetime}) {
    return (
        <div className="flex justify-start gap-3 px-6 py-2">
            <img src="src/assets/notifications/sample_profile.svg" className="w-9 h-9"></img>
            <div className="flex flex-col gap-1 text-start">
                <p className="text-sm leading-5 font-medium">{text}</p>
                <div className="flex flex-row items-center">
                    <p className="text-septenary text-xs font-semibold flex-1">{monthNames[datetime.getMonth()]}, {datetime.toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
    )

}

export default CentraNotification;