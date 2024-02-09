import React, { useEffect, useState } from "react";
import "./UserProfileCard.css"; // Import custom CSS file

const UserProfileCard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
            .then(response => response.json())
            .then(data => {
                setUser(data.results[0]);
            })
            .catch(error => {
                console.error("Error occurred while fetching data ", error);
            });
    }, []);

    return (
        <div className="align-middle max-w-sm bg-indigo-100 overflow-hidden rounded-2xl overflow-hidden shadow-xl mx-auto mt-10 p-5 user-profile-card ">
            {
                user && (
                    <div className=" flex flex-row z-100">
                        <img src={user.picture.large} alt="Profile" className="w-24 h-24 mt-2 border-slate-400 rounded-full border-8 profile-image" />
                        <div className="px-6 py-4 profile-info">
                            <div className="font-bold text-xl profile-name">
                                {user.name.first} {user.name.last}
                            </div>
                            <p className="text-gray-700 text-base capitalize pt-4 profile-details">
                                {user.gender}
                            </p>
                            <p className="text-gray-700 profile-details">
                                {user.phone}
                            </p>
                        </div>
                    </div>
                )
            }
            <div className="absolute z-0 inset-0 bg-indigo-100 blob"></div>
        </div >
    );
};

export default UserProfileCard;
