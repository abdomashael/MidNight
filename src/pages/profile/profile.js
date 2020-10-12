import React, {createContext, useState} from "react";
import Login, {LOGIN_TYPE} from "../../components/login/login";
import UserCart from "../../components/user_cart/user_cart";
import styles from "./profile.module.css";
import cx from "classnames";
import ProfileList from "../../components/list/list";
import ProfileDetails from "../../components/profile-details/profile_details";


export const ProfileContext = createContext({})

export const SELECTOR = {
    profile: 1, wishlist: 2, lists: 3
}
const renderSwitch = (selector)=>{
    switch (selector) {
        case SELECTOR.profile:
            return <ProfileDetails/>;
        case SELECTOR.wishlist:
            return <ProfileList list={[1, 2, 4, 5, 6, 7]}/>
    }
}
const Profile = () => {
    const [selector, setSelector] = useState(SELECTOR.profile)

    return (
        <ProfileContext.Provider value={{selector, setSelector}}>
            <div className={cx(styles.page)}>

                <div className={cx(styles.side)}>
                    <UserCart/>
                </div>
                <div className={cx(styles.main)}>
                    {renderSwitch(selector)}

                </div>
            </div>
        </ProfileContext.Provider>
    );
};

export default Profile;
