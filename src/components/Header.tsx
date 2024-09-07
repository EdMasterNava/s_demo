'use client'
import React, { useRef, useCallback } from 'react'
import { AppShellHeader, Group, Select, Loader, ActionIcon } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { Search, Settings } from '@emotion-icons/ionicons-outline'
import { isNil } from 'lodash'

const SearchBar = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { data, loading } = /*usePolicyholdersNamesQuery({})*/ {data: {policyholdersNames: [{name: 'test', id: '1', deletedAt: null}]}, loading: false};

    const recent = /*useRecentlyViewed()*/ [{label: 'search', url: '/'}];

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

const Header = () => {
  return (
    <AppShellHeader 
        bg='white'
        p='20px 20px 20px 50px'
        style={{ border: 'none'}}
    >
        <Group justify='space-between'>
            <SearchBar />
            <Group gap={5}>
                <ActionIcon variant='outline' color='#999999' size='md'>
                    <Settings style={{ width: '70%', height: '70%' }}/>
                </ActionIcon>
                <ActionIcon variant='outline' color='#999999' size='md'>
                    <Settings style={{ width: '70%', height: '70%' }}/>
                </ActionIcon>
            </Group>
        </Group>
    </AppShellHeader>
  )
}

export default Header