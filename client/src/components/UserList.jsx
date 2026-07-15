import React from 'react';
import { Trash2, Edit, User as UserIcon } from 'lucide-react';

const UserList = ({ users, onDelete, onEdit }) => {
    if (!users || users.length === 0) {
        return (
            <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
                <UserIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">No users found. Add one to get started!</p>
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
                <div key={user._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <UserIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(user)}
                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit User"
                            >
                                <Edit className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => onDelete(user._id)}
                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete User"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{user.jobTitle || 'No Job Title'}</p>

                    <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="truncate">{user.email}</span>
                        </div>
                        <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {user.gender}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
