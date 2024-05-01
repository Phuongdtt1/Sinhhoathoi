'use client';

import {Button, Navbar} from 'flowbite-react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';


export function Header() {
    const pathname = usePathname();
    return (
        <header
            className="bg-green-100"
        >
            <div className="container">
                <Navbar
                    fluid
                    rounded
                    className="bg-green-100"
                    color="purple"
                >
                    <Navbar.Brand
                        as={Link}
                        href="/"
                    >
                        <Button
                            color="purple"
                        >
                            <img
                                src="/images/logo.png"
                                className="mr-3 h-9"
                            />
                            <div className="text-xl self-center">SINH HOẠT HỘI</div>
                        </Button>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Navbar.Link
                            as={Link}
                            href="/login"
                            active={pathname == '/login'}
                            className="md:text-xl"
                        >
                            Hướng dẫn
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            href="/login"
                            active={pathname == '/login'}
                            className="md:text-xl"
                        >
                            Đăng nhập
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            href="/image"
                            active={pathname == '/image'}
                            className="md:text-xl"
                        >
                            Hình ảnh
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            href="/activity"
                            active={pathname == '/activity'}
                            className="md:text-xl"
                        >
                            Hoạt động
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            href="/quiz"
                            active={pathname == '/quiz'}
                            className="md:text-xl"
                        >
                            Trắc nghiệm
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar></div>
        </header>
    );
}