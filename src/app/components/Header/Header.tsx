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
        { href: '/guide', text: 'Cách thức sinh hoạt Hội' },
        { href: '/introduction', text: 'Giới thiệu' },
        { href: '/image', text: 'Tin tức - Sự kiện' },
        { href: '/quiz', text: 'Trắc nghiệm' },
    ];

    return (
        <header className="bg-blue-800">
            <div className="container sm:px-3 relative">
                <Navbar
                    fluid
                    rounded
                    className="bg-blue-800"
                >
                    <Navbar.Brand
                        as={Link}
                        href="/"
                        className="shrink"
                    >
                        <Button
                            size="sm"
                            className="bg-blue-800"
                        >
                            <img
                                src="/images/logo.png"
                                className="mr-3 h-12 sm:h-16"
                            />
                            <div className="text-sm sm:text-2xl text-left">
                                HỘI PHỤ NỮ
                                <br />
                                BỘ ĐỘI BIÊN PHÒNG {' '}
                                <br className="sm:hidden" />
                                TỈNH NGHỆ AN
                            </div>
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
                                    className="text-white md:text-xl"
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
