'use client';

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAtom } from 'jotai/index';
import { isLoggedInAtom, nameAtom, unitAtom } from '@/app/atoms';


export function Header() {
    const [name, setName] = useAtom(nameAtom);
    const [unit, setUnit] = useAtom(unitAtom);
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        setIsLoggedIn(false);
        setName(null);
        setUnit(null);
        router.push('/');
    };

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
                            size="sm"
                        >
                            <img
                                src="/images/logo.png"
                                className="mr-3 h-8"
                            />
                            <div className="text-lg sm:text-2xl self-center">SINH HOẠT HỘI</div>
                        </Button>
                    </Navbar.Brand>
                    {isLoggedIn &&
                        <div className="flex md:order-2">
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar
                                        alt="User settings"
                                        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        rounded
                                    />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block">{name}</span>
                                    <span className="block truncate font-bold">{unit}</span>
                                </Dropdown.Header>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                            </Dropdown>
                        </div>
                    }
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link
                            as={Link}
                            href="/guide"
                            active={pathname == '/guide'}
                            className="md:text-xl"
                        >
                            Hướng dẫn
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            href="/introduction"
                            active={pathname == '/introduction'}
                            className="md:text-xl"
                        >
                            Giới thiệu
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
                </Navbar>
            </div>
        </header>
    );
}