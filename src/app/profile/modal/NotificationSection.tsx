import { FaBell } from 'react-icons/fa';

export default function NotificationSection() {
    return (
        <div>
            <h3 className="text-gray-400 font-medium mb-3">Notifications</h3>
            <ul className="space-y-3">
                <li className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-4">
                        <FaBell className="text-gray-600 text-lg" />
                        <span className="font-semibold">Notification Settings</span>
                    </div>
                    <span className="text-xl">{'>'}</span>
                </li>
            </ul>
        </div>
    );
}