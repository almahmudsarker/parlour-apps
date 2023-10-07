import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {
    const { user} = useContext(AuthContext);
    return (
        <div>
          <h1 className='text-2xl font-medium text-[#0C0C0C] bg-white p-5'>My Account</h1>
          {/* Branding & Profile Info */}
          <div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="">
                <h4 className="mx-2 mt-2 font-medium text-gray-800">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>
        </div>
    );
};

export default Profile;