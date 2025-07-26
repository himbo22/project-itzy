import { FaSignOutAlt } from 'react-icons/fa';

export default function LogoutSection() {
    return (
        <ul>
            <li className="flex items-center gap-4 text-red-500 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
                <FaSignOutAlt className="text-lg" />
                <span className="font-semibold">Logout</span>
            </li>
        </ul>
    );
}