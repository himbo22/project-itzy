import { FaLock, FaStar, FaHeart } from 'react-icons/fa';

export default function AccountSection() {
    return (
        <div>
            <h3 className="text-gray-400 font-medium mb-3">Account</h3>
            <ul className="space-y-3">
                <li className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-4">
                        <FaLock className="text-gray-600 text-lg" />
                        <span className="font-semibold">Change Password</span>
                    </div>
                    <span className="text-xl">{'>'}</span>
                </li>
                <li className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-4">
                        <FaStar className="text-gray-600 text-lg" />
                        <span className="font-semibold">Manage Event Submissions</span>
                    </div>
                    <span className="text-xl">{'>'}</span>
                </li>
                <li className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-4">
                        <FaHeart className="text-gray-600 text-lg" />
                        <span className="font-semibold">Manage Follows</span>
                    </div>
                    <span className="text-xl">{'>'}</span>
                </li>
            </ul>
        </div>
    );
}