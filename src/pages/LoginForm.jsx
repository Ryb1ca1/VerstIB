import Button from '../components/UI/MyButton/button'
import InputForm from '../components/UI/InputF/inputForm'

export default function loginForm () {

    return (
        <section className="h-screen m-0 flex place-items-center justify-center bg-blue-950 bg-[url('./assets/images/Отпечаток.png')] bg-no-repeat bg-[right_bottom_0.9rem] ">
            <div className="container bg-white w-[43rem] h-[33rem] shadow-2xl shadow-black rounded-2xl p-[5.5rem]">
                <form className="text-center">
                    <h2 className="font-inter font-bold text-5xl">Авторизация</h2>
                    <div className="mt-[3rem]">
                        <InputForm type='text' className="bg-gray-55 w-[29rem] h-[3.5rem] border-none pl-[2.5rem] focus:outline-none" placeholder='Логин' />
                    </div>
                    <div className="mt-[1.25rem]">
                        <InputForm type='text' className="bg-gray-55 w-[29rem] h-[3.5rem] border-none pl-[2.5rem] focus:outline-none" placeholder='Пароль' />
                    </div>
                    <div>
                        <Button className="mt-[2.9rem] bg-blue-950 rounded-xl w-[13.4rem] h-[3.5rem] text-xl text-white font-inter font-bold hover:bg-blue-700">
                            Войти
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}