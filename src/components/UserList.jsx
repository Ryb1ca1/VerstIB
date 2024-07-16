import React from 'react';

export default function UserList ({ users, onUserSelect }) {
    return (
        <div className="w-1/2">
            {users.map((user) => (
                <div key={user.id} className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
                    <span>{user.lastName} {user.firstName}</span>
                    <div>
                        <button className="text-blue-600 mr-2" onClick={() => onUserSelect(user)}>✏️</button>
                        <button className="text-red-600">🗑️</button>
                    </div>
                </div>
            ))}
        </div>
    )
}