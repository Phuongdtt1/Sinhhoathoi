'use client';

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAtom } from 'jotai/index';
import { isLoggedInAtom, nameAtom, unitAtom } from '@/app/atoms';
import { HiLogout } from 'react-icons/hi';

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

    const navLinks = [
        { href: '/introduction', text: 'Giới thiệu' },
        { href: '/guide', text: 'Hướng dẫn' },
        { href: '/image', text: 'Hình ảnh' },
        { href: '/quiz', text: 'Trắc nghiệm' },
    ];

    return (
        <header className="bg-green-100">
            <div className="container relative">
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
                    {isLoggedIn && (
                        <div className="flex md:order-2">
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={<Avatar
                                    alt="User settings"
                                    img="https://accgroup.vn/wp-content/uploads/2022/12/logo-bo-doi-bien-phong-viet-nam.webp"
                                    rounded
                                />}
                                placement="bottom-end"
                            >
                                <Dropdown.Header>
                                    <span className="block text-lg">{name}</span>
                                    <span className="block truncate text-lg font-bold">{unit}</span>
                                </Dropdown.Header>
                                <Dropdown.Divider />
                                <Dropdown.Item
                                    icon={HiLogout}
                                    onClick={handleLogout}
                                >Đăng xuất</Dropdown.Item>
                            </Dropdown>
                        </div>
                    )}
                    {isLoggedIn && <Navbar.Toggle />}
                    {isLoggedIn && (
                        <Navbar.Collapse>
                            {navLinks.map((link, index) => (
                                <Navbar.Link
                                    key={index}
                                    as={Link}
                                    href={link.href}
                                    active={pathname == link.href}
                                    className="md:text-xl"
                                >
                                    {link.text}
                                </Navbar.Link>
                            ))}
                        </Navbar.Collapse>
                    )}
                </Navbar>
            </div>
        </header>
    );
}
