import React from 'react';

export default function UserInfo ({user}) {
    return (
        <div className="w-1/2 bg-white p-4 rounded-lg shadow ml-4">
            <h2 className="text-xl font-bold mb-4">Информация о пользователе</h2>
            <p><strong>Фамилия:</strong> {user.lastName}</p>
            <p><strong>Имя:</strong> {user.firstName}</p>
            <p><strong>Отчество:</strong> {user.middleName}</p>
            <p><strong>Телефон:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Дата создания:</strong> {user.creationDate}</p>
            <p><strong>Онлайн:</strong> {user.onlineDate}</p>
            <div className="mt-4">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2"/>
                    Админ?
                </label>
                <label className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2"/>
                    Актив?
                </label>
            </div>
        </div>
    )
}