import React, { useState } from "react";
import Button from "../components/UI/MyButton/button.jsx";
// import UserList from "../UserList.jsx";
// import UserInfo from "../UserInfo.jsx";
import Header from "../components/Header/Header.jsx";


export default function UserSection () {
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        { id: 1,
            firstName: 'Иванов',
            lastName: 'Иван',
            middleName: 'Иванович',
            phone: '+7 999 999 99 99',
            email: 'info@maksoft.ru',
            creationDate: '1 января 2024 г.',
            onlineDate: '2 января 2024 г.' },
    ];

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        // fixed inset-x-0 top-0 z-50 flex h-[5.6875rem] items-center justify-between bg-blue-950 gap-12 ml-4 transition sm:ml-6 lg:left-72 lg:z-30 lg:ml-8 xl:left-80
        <section className="flex min-h-full bg-white">
            <div className="w-full">
                <div className="h-screen lg:ml-72 xl:ml-80">
                    <Header />
                    <div className="relative flex h-full flex-col px-4 pt-[7rem] sm:px-6 lg:px-8">
                        <main className="flex-auto">
                            <div className="flex-auto prose [html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-3xl">
                                <h1 className="font-inter font-bold text-2xl">Пользователи</h1>
                                <Button className="w-[16.938rem] h-[3.5rem] bg-blue-950 text-white py-2 px-4 rounded-lg">
                                    <h2>Добавить пользователя</h2>
                                </Button>
                            </div>
                        </main>
                    </div>
                </div>


                {/*/!* Main Content *!/*/}
                {/*<div className="w-10/12 p-8">*/}
                {/*    <div className="flex justify-between items-center mb-6">*/}
                {/*        <div className="flex items-center">*/}
                {/*            <span className="mr-4">Иван Данилин</span>*/}
                {/*            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Добавить пользователя</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="flex">*/}
                {/*        <UserList users={users} onUserSelect={handleUserSelect}/>*/}
                {/*        {selectedUser && <UserInfo user={selectedUser}/>}*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </section>

    )
}