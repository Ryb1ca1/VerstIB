import React, {Component} from "react";
import InputForm from "../UI/InputF/inputForm.jsx";
import Button from "../UI/MyButton/button.jsx";
import IconProfile from "../../assets/images/Icon/IconProfile.png";
import IconMenuProfile from "../../assets/images/Icon/IconMenuProfile.png";
import IconLoginOut from "../../assets/images/Icon/IconLoginOut.png";
import IconClient from "../../assets/images/Icon/IconClient.png";

export default function Header () {
    return (
        <header className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
            <div
                className="contents lg:pointer-events-auto lg:block lg:w-72 shadow-2xl shadow-blue-300 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80">
                <div
                    className=" w-[12.1875rem] h-[2.8rem] mb-6 bg-[url('./assets/images/LogoIB.png')] bg-no-repeat bg-top"/>
                <div
                    className="fixed inset-x-0 top-0 z-50 flex h-[5.6875rem] items-center justify-between bg-blue-950 gap-12 ml-4 transition sm:ml-6 lg:left-72 lg:z-30 lg:ml-8 xl:left-80">
                    <div className="flex justify-between w-full px-[1.125rem] gap-[7.438rem] h-14">
                        <form className="flex w-[41.25rem] h-[3.0625rem] rounded-3xl bg-blue-400">
                            <InputForm
                                type="search"
                                className="px-[1.8125rem] w-[38.65rem] h-[3.0625rem] rounded-3xl
                                            bg-blue-400 focus:outline-none text-white placeholder-white"
                                placeholder="Поиск..."
                            />
                            <Button
                                className="w-[2.6rem] h-[3.0625rem] bg-[url('./assets/images/Icon/IconSearch.png')]
                                            bg-no-repeat bg-center rounded-r-3xl"
                            />
                        </form>
                        <div className=" flex items-center justify-between gap-[4.5rem]">
                            <div className="flex items-center gap-[0.813rem]">
                                <Button
                                    className=" w-[1.6rem] h-[1.6rem] bg-[url('./assets/images/Icon/IconSettings.png')] bg-no-repeat bg-center"/>
                                <Button
                                    className=" w-[1.6rem] h-[1.6rem] bg-[url('./assets/images/Icon/IconNotifications.png')] bg-no-repeat bg-center"/>
                            </div>
                            <div className=" flex items-center gap-[0.5rem]">
                                <img src={IconProfile} alt="Profile"/>
                                <span
                                    className=" flex w-[3.5rem] h-[1.875rem] text-white font-inter font-normal text-xs">
                                                Иван Данилин
                                            </span>
                                <Button>
                                    <img src={IconMenuProfile} alt="Menu Profile"/>
                                </Button>
                            </div>
                            <div>
                                <Button>
                                    <img src={IconLoginOut} alt="Exite"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="hidden lg:mt-10 lg:block">
                    <ul className="pl-2">
                        <li className="mb-4">
                            <Button
                                // className="w-[12.188rem] h-[2.125rem] bg-[url('./assets/images/Icon/IconClient.png')]
                                // bg-no-repeat bg-left text-left pl-[2.125rem]"
                                className="flex w-[12.188rem] h-[2.125rem] items-center "
                            >
                                <img  src={IconClient} className="mr-2" alt="icon"/>
                                Клиенты
                            </Button>
                        </li>
                        <li className="mb-4">
                            <Button
                                className="w-[12.188rem] h-[2.125rem] bg-[url('./assets/images/Icon/IconConfigSZI.png')]
                                            bg-no-repeat bg-left text-left pl-[2.125rem]"
                            >Конфигурации СЗИ
                            </Button>
                        </li>
                        <li className="mb-4">
                            <Button
                                className="w-[12.2rem] h-[2.125rem] bg-[url('./assets/images/Icon/IconAttestatSoft.png')]
                                            bg-no-repeat bg-left text-left pl-[2.125rem]"
                            >Аттестационный софт
                            </Button>
                        </li>
                        <li className="mb-4">
                            <Button
                                className="w-[12.188rem] h-[2.125rem] bg-[url('./assets/images/Icon/IconDistribut.png')]
                                            bg-no-repeat bg-left text-left pl-[2.125rem]"
                            >Дистрибутивы СЗИ
                            </Button>
                        </li>
                        <li className="mb-4">
                            <Button
                                className="w-[12.188rem] h-[2.125rem] bg-[url('./assets/images/Icon/IconBaseNormative.png')]
                                            bg-no-repeat bg-left text-left pl-[2.125rem]">Нормативная база</Button>
                        </li>
                        <li className="mb-4">
                            <Button
                                className="w-[12.188rem] h-[2.125rem] rounded-lg bg-[url('./assets/images/Icon/IconUser2.png')]
                                            bg-no-repeat bg-left hover:bg-blue-950 hover:text-white hover:bg-[url('./assets/images/Icon/IconUser.png')] text-left pl-[2.125rem]"
                            >Пользователи
                            </Button>
                        </li>
                    </ul>
                    <div className="absolute bottom-4 left-4 text-xs text-gray-500">
                        <p>[АСУБ]</p>
                        <p>Все права защищены ©</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </nav>
            </div>
        </header>
    )
}