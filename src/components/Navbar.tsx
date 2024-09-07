"use client"
// React Library
import React, { useCallback, useRef } from 'react';

// Third Party Libraries
import {
    Box,
    Button,
    Group,
    AppShellHeader,
    Menu,
    Select,
    Tooltip,
    Container,
    Avatar,
    Loader,
    Badge,
} from '@mantine/core';
import { openModal } from '@mantine/modals';
import { useClipboard, useHotkeys } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { isNil } from 'lodash';
// import LogRocket from 'logrocket';
import { Search } from '@emotion-icons/ionicons-outline/Search';

// Utilities 
// import { useLogout, useSession } from '../../hooks/useSession';
// import { useRecentlyViewed } from '../../utils/useRecentlyViewed';
// import { IS_PREVIEW, IS_PRODUCTION, IS_AUDIT } from '../../constants';
// import { usePolicyholdersNamesQuery } from '../../graphql/operations/policyholders.generated';

// Components
// import FullLogo from '../Logos/FullLogo';
// import UserForm from '../Forms/UserForm';
// import justinHead from '../../../public/images/justin-head.png';

// Styles

const ADMIN_PATHS = [
    '/u/brokerages',
    '/u/carriers',
    '/u/form-management',
    '/u/factor-management',
    '/u/platform-defaults',
    '/u/underwriting-warnings',
    '/u/reports',
];


const getNavButtonColor = (expectedPaths: string[], pathname: string | null) => {
    return !isNil(pathname) && expectedPaths.includes(pathname) ? 'black' : 'gray';
};


const SearchBar = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { data, loading } = /*usePolicyholdersNamesQuery({})*/ {data: ['test', 'data'], loading: false};

    const recent = /*useRecentlyViewed()*/ [];

    const onSearchChange = useCallback(
        (searchValue: any) => {
            if (!isNil(searchValue)) {
                router.push(searchValue);
            }
        },
        [router]
    );

    useHotkeys([['mod+K', () => searchRef.current?.focus()]]);

    const recentlyViewed =
        recent.map((item) => ({
            label: item.label,
            value: item.url,
        })) ?? [];


    const searchResults =
        data?.policyholdersNames?.map((policyholder) => ({
            label: `${policyholder.name}${policyholder.deletedAt ? ' (archived)' : ''}`,
            value: `/u/policyholders/${policyholder.id}`,
        })) ?? [];


    return (
        <Select
            style={{ flex: '1' }}
            maw="480"
            disabled={loading}
            ref={searchRef}
            searchable
            onChange={onSearchChange}
            placeholder="Search"
            size="xs"
            radius="xl"
            limit={10}
            leftSection={loading ? <Loader size="xs" /> : <Search size={14} />}
            rightSection={<span />}
            data={[
                { group: 'Recently Viewed', items: recentlyViewed },
                { group: 'Search Results', items: searchResults },
            ]}
        />
    );
};


const AdminNavLinks = () => {
    const pathname = usePathname();

    return (
        <Menu trigger="hover">
            <Menu.Target>
                <Button
                    variant="transparent"
                    size="compact-sm"
                    color={getNavButtonColor(ADMIN_PATHS, pathname)}
                >
                    Admin
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item component={Link} href="/u/brokerages">
                    Brokerages
                </Menu.Item>
                <Menu.Item component={Link} href="/u/carriers">
                    Carriers
                </Menu.Item>
                <Menu.Item
                    component="a"
                    href="https://docs.google.com/spreadsheets/d/10FV1ZubRNO15NRHv14ETKTCK2z7G_MT-Y7zqv5S2Qzc/edit#gid=0"
                    target="_blank"
                >
                    Licenses
                </Menu.Item>
                <Menu.Item component={Link} href="/u/platform-defaults">
                    Platform Defaults
                </Menu.Item>
                <Menu.Item component={Link} href="/u/underwriting-warnings">
                    Underwriting Warnings
                </Menu.Item>
                <Menu.Item component={Link} href="/u/reports">
                    Reports
                </Menu.Item>
                <Menu.Item component={Link} href="/u/form-management">
                    Form Management
                </Menu.Item>
                <Menu.Item component={Link} href="/u/factor-management">
                    Factor Management
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};


const getNavColor = () => {
    if (true) {
        return 'green.1';
    }
    if (true) {
        return 'white';
    }

    return 'cyan.1';
};
const Navbar = ({ forInsured = false }: { forInsured?: boolean }) => {
    // const { session } = useSession();
    const session  = true
    const pathname = usePathname();
    // const logout = useLogout();
    const clipboard = useClipboard({ timeout: 500 });

    // const orgLogoUrl = session?.organization?.logoUrl;

    return (
        <AppShellHeader bg={getNavColor()} p="sm" zIndex={100}>
            <Container maw="2040" style={{ zIndex: 101 }}>
                <Group align="center" justify="space-between">
                    <Link legacyBehavior href={'/u'} passHref>
                        <a
                            className="logo"
                            style={{
                                float: 'left',
                                display: 'flex',
                                justifyContent: 'center',
                                height: '100%',
                                flexDirection: 'column',
                                paddingRight: 12,
                            }}
                        >
                            {/* !IS_AUDIT */ true &&
                                (process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL_ENV) === 'preview' ? (
                                    <>
                                        <Tooltip label="Hype Hype Hype" position="right">
                                            <Box className="d-flex align-items-center">
                                            <Image alt="alt" src={justinHead} height={30} width={24} />
                                            <Image alt="alt" src={justinHead} height={30} width={24} />
                                            <Image alt="alt" src={justinHead} height={30} width={24} />
                                            </Box>
                                        </Tooltip>
                                    </>
                                ) 
                                : 
                                (
                                    <>
                                        {/* <FullLogo /> */}
                                    </>
                                )
                            }
                            {/* orgLogoUrl */ true ? (
                                <div
                                    style={{
                                        height: 64,
                                        padding: '16px 0px',
                                    }}
                                    className="d-flex align-items-center"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={/* orgLogoUrl */ 'https://shepherdinsurance.com/_next/static/media/shepherd-logo.dda0088a.svg'} height="100%" alt="Organization logo" />
                                </div>
                            ) 
                            : 
                            null
                            }
                        </a>
                    </Link>
                    {/* session?.user?.id */ true && <SearchBar />}
                    {/* forInsured */ false ? (
                        <div
                            style={{ flex: '1', justifyContent: 'end', alignItems: 'center', display: 'flex' }}
                        >
                            <Button component="a" href="mailto:support@withshepherd.com">
                                Need help?
                            </Button>
                        </div>
                    ) 
                    : 
                    (
                        /* session?.user?.id */ true && (
                            <Group gap={8}>
                                {/* IS_PRODUCTION */ true && (
                                    <Tooltip label="Record your session">
                                        <Button
                                            variant="transparent"
                                            size="compact-sm"
                                            onClick={() => {
                                                // LogRocket.getSessionURL((sessionURL) => {
                                                //     clipboard.copy(sessionURL);
                                                //     showNotification({
                                                //         message: 'Logrocket Session Copied',
                                                //     });
                                                // });
                                            }}
                                            color={getNavButtonColor(['/u/dashboard'], pathname)}
                                        >
                                            <Badge size="sm" color="red">
                                                Record
                                            </Badge>
                                        </Button>
                                    </Tooltip>
                                )}
                                <Button
                                    variant="transparent"
                                    size="compact-sm"
                                    component={Link}
                                    href="/u/dashboard"
                                    color={getNavButtonColor(['/u/dashboard'], pathname)}
                                >
                                    Dashboard
                                </Button>
                                <Button
                                    variant="transparent"
                                    size="compact-sm"
                                    component={Link}
                                    href="/u/policyholders"
                                    color={getNavButtonColor(['/u/policyholders'], pathname)}
                                >
                                    Policyholders
                                </Button>
                                <AdminNavLinks />
                                <Menu>
                                    <Menu.Target>
                                        <Button p="0" variant="transparent">
                                            <Avatar src={session?.user?.imageUrl} radius="xl" size="sm">
                                                {session?.user?.initials}
                                            </Avatar>
                                        </Button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Label>
                                            {session?.user?.name}
                                            {session?.organization?.name ? ` (${session?.organization?.name})` : ''}
                                        </Menu.Label>
                                        <Menu.Divider />
                                        <Menu.Item
                                            key="edit"
                                            onClick={() =>
                                                openModal({
                                                    modalId: 'editUserForm',
                                                    title: 'Edit Profile',
                                                    children: <UserForm initialValues={session.user} />,
                                                })
                                            }
                                        >
                                            Edit Profile
                                        </Menu.Item>
                                        <Menu.Item key="logout" onClick={() => {}}>
                                            Logout
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        )
                    )}
                </Group>
            </Container>
        </AppShellHeader>
    );
};


export default Navbar;