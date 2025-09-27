import Appearance from "../components/settings/Appearence";
import Notifications from "../components/settings/Notification";
import ProfileInformation from "../components/settings/ProfileInformation";
import Security from "../components/settings/Security";

const Settings = () => {
    return (
        <>
            <div className="p-8 mt-16 max-w-full md:max-w-2xl">
                <h1 className="text-2xl md:text-4xl font-bold">Profile & Settings</h1>
                <p className="text-gray-700 mt-2">Manage your account settings and preferences</p>
                <ProfileInformation />
                <Security />
                <Appearance />
                <Notifications />
            </div>
        </>
    )
}

export default Settings;