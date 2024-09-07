'use client'
import React from 'react'

import { 
    Stack, 
    Button, 
    Group, 
    AppShellNavbar, 
    ThemeIcon, 
    Collapse, 
    Text,
    Box,
    Avatar,
    Tooltip,
    ActionIcon,
    Menu
} from '@mantine/core'
import { openModal } from '@mantine/modals'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

import {
    Home,
    ShieldCheckmark,
    DocumentText,
    Person,
    ChevronDown
} from '@emotion-icons/ionicons-outline'


// import LogRocket from 'logrocket';

// import { useLogout, useSession } from '../../hooks/useSession';
// import { useRecentlyViewed } from '../../utils/useRecentlyViewed';
// import { IS_PREVIEW, IS_PRODUCTION, IS_AUDIT } from '../../constants';
// import { usePolicyholdersNamesQuery } from '../../graphql/operations/policyholders.generated';

// import FullLogo from '../Logos/FullLogo';
// import UserForm from '../Forms/UserForm';
// import justinHead from '../../../public/images/justin-head.png';

interface NavLinksProps {
    icon: React.FC<any>;
    label: string;
    link?: string;
    subLinks?: { 
        label: string, 
        link: string, 
        hasExternalLink: boolean 
    }[];
}

const NAVBAR_DATA = [
    { label: 'Dashboard', icon: Home, link: '/u/dashboard' },
    { label: 'Policies', icon: ShieldCheckmark, link: '/u/policies' },
    { label: 'Audits', icon: DocumentText, link: '/u/audits' },
    {
        label: 'Admin',
        icon: Person,
        subLinks: [
            { label: 'Brokerages', link: '/u/brokerages', hasExternalLink: false },
            { label: 'Carriers', link: '/u/carriers', hasExternalLink: false },
            { label: 'Licenses', link: '/#', hasExternalLink: true },
            { label: 'Platform Defaults', link: '/u/platform-defaults', hasExternalLink: false },
            { label: 'Underwriting Warnings', link: '/u/underwriting-warnings', hasExternalLink: false },
            { label: 'Reports', link: '/u/reports', hasExternalLink: false },
            { label: 'Form Management', link: '/u/form-management', hasExternalLink: false },
            { label: 'Factor Management', link: '/u/factor-management', hasExternalLink: false },
        ],
    }
]

const NavLinks = ({ label, icon: Icon, subLinks, link }: NavLinksProps) => {
    const pathname = usePathname();
    const router = useRouter();
    // useMediaQuery sizes must be in em -- xs: 36  sm: 48  md: 62  lg: 75  xl: 88
    const breakpoint = useMediaQuery('(min-width: 62em)');
    const [isOpen, { toggle }] = useDisclosure(false);
    const hasSublinks = Array.isArray(subLinks);
    const subLinkElements = (hasSublinks ? subLinks : []).map(subLink => (
        breakpoint ?
            <Button 
                key={subLink.label}
                renderRoot={(props) => (
                    subLink.hasExternalLink ?
                        <a href={subLink.link} target='_blank' {...props} />
                        :
                        <Link href={subLink.link} {...props} />
                )}
                fullWidth
                variant={pathname === subLink.link ? 'light' : 'subtle'}
                color='#555555'
                justify='start'
                pl='41px'
                leftSection={
                    <Text
                        size='sm'
                        ta='left'
                    >
                        {subLink.label}
                    </Text>
                }
            />
            :
            <Menu.Item
                key={subLink.label}
                renderRoot={(props) => (
                    <Button
                        {...props} 
                        renderRoot={(props) => (
                            subLink.hasExternalLink ?
                                <a href={subLink.link} target='_blank' {...props} />
                                :
                                <Link href={subLink.link} {...props} />
                        )}
                        fullWidth
                        variant={pathname === subLink.link ? 'light' : 'subtle'}
                        color='#555555'
                    />
                )}
                leftSection={
                    <Text
                        size='sm'
                        ta='left'
                        c='#555555'
                    >
                        {subLink.label}
                    </Text>
                }
            />
    ))
    return (
        breakpoint ?
            (<>
                <Button 
                    onClick={hasSublinks ? toggle : () => { if (link) router.push(link) }}
                    variant={pathname === link ? 'light' : 'subtle'}  
                    fullWidth
                    color='#555555'
                    radius='sm'
                    justify='space-between'
                    style={{
                        padding: '5px 10px',
                    }}
                    leftSection={
                        <Group gap='xs'>
                            <ThemeIcon 
                                size='sm' 
                                variant='transparent' 
                                color='currentColor'
                            >
                                <Icon />
                            </ThemeIcon>    
                            <Text size='md'>
                                {label}
                            </Text>
                        </Group>
                    }
                    rightSection={
                        hasSublinks ? 
                            <ThemeIcon 
                                variant='transparent' 
                                color='currentColor'
                            >
                                <ChevronDown size={18}/>
                            </ThemeIcon> 
                            : 
                            <></>
                    }
                /> 
                {hasSublinks && (
                    <Collapse 
                        in={isOpen} 
                        w='100%'
                    >
                        <Stack gap={1}>
                            {subLinkElements}
                        </Stack>
                    </Collapse>
                )}
            </>)
            : 
            (hasSublinks ?
                (<Menu position='right-start' trigger='hover'>
                    <Menu.Target>
                        <ActionIcon
                            variant='subtle'
                            color='#555555'
                            size='lg'
                        >
                            <Icon style={{ width: '60%', height: '60%' }}/>
                        </ActionIcon>    
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Label>
                            Admin
                        </Menu.Label>
                        <Stack gap={1.5}>
                            {subLinkElements}
                        </Stack>
                    </Menu.Dropdown>
                </Menu>)
                :
                (<Tooltip 
                    label={label} 
                    position='right' 
                    color='white'
                    styles={{
                        tooltip: {
                            color: '#555555',
                            border: '0.5px solid #ededed'
                        }
                    }}
                >
                    <ActionIcon
                        onClick={() => { if (link) router.push(link) }}
                        variant={pathname === link ? 'light' : 'subtle'}
                        color='#555555'
                        size='lg'
                    >
                        <Icon style={{ width: '60%', height: '60%' }}/>
                    </ActionIcon>
                </Tooltip>)
            )
    )
}

const Sidebar = () => {
    // const { session } = useSession();
    const session = {
        user: {
            name: 'Esme',
            initials: 'EN',
            imageUrl: 'https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg',
        },
        organization: {
            name: 'Shephard'
        }
    }
    // const logout = useLogout();
    const logout = () => {}
    return (
        <>
            <AppShellNavbar bg='whitesmoke' p='20px 15px 20px 20px'>
                <Stack justify='space-between' h='100%'>
                    <Stack gap='sm'>
                        <Box pl='15px' style={{ overflow: 'hidden'}} >
                            <Image 
                                src="https://shepherdinsurance.com/_next/static/media/shepherd-logo.dda0088a.svg" 
                                loading='lazy'
                                alt="logo" 
                                width={110}
                                height={30}
                            />
                        </Box>
                        <Stack gap={10} align='center'>
                            {NAVBAR_DATA.map((item, index) => (
                                <NavLinks {...item} key={index}/>
                            ))}  
                        </Stack>
                    </Stack>
                    <Menu>
                        <Menu.Target>
                            <Button p="0" variant="transparent">
                                <Group gap='sm' align='center' justify='center'>
                                    <Avatar src={session?.user?.imageUrl} radius='xl' size='sm'>
                                        {session?.user?.initials}
                                    </Avatar>
                                    <Text c='#555555' visibleFrom='md'>
                                        {session?.user?.name}
                                    </Text>
                                </Group>     
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
                                        // children: <UserForm initialValues={session.user} />,
                                    })
                                }
                            >
                                Edit Profile
                            </Menu.Item>
                            <Menu.Item key="logout" onClick={logout}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Stack>
            </AppShellNavbar>
        </>
    )
}

export default Sidebar