export function Header() {
    return (
        <header className="header bg-gray-200">

            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/"
                   className="flex items-center">
                    <img
                        src="/images/logo.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"/>
                    <span className="self-center text-xl whitespace-nowrap dark:text-white">
                            Sinh hoạt Hội
                        </span>

                </a>

                <div>

                    <button className="bg-blue-500 text-white text-center w-32 h-10 m-2">
                        <a href="/login">
                            Đăng nhập
                        </a>
                    </button>
                    <button className="bg-blue-500 text-white text-center w-32 h-10 m-2">
                        <a href="/image">
                            Hình ảnh
                        </a>
                    </button>
                    <button className="bg-blue-500 text-white text-center w-32 h-10 m-2">
                        <a href="/quiz">
                            Trắc nghiệm
                        </a>
                    </button>
                </div>

            </div>

        </header>
    );
}