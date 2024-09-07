'use client'
import React from 'react'
import { Group, Stack } from '@mantine/core'
import { Copy } from '@emotion-icons/ionicons-outline';
import DualFunctionButton from '@/components/DualFunctionButton';
import BadgeSelector from '@/components/BadgeSelector';
import StickyFooterModal from '@/components/StickyFooterModal';
import StickyFooterModalTwo from '@/components/StickyFooterModalTwo';
import RecentlyViewedCard from '@/components/RecentlyViewedCard';

function Dashboard() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex'
            }}
        >
            <Stack justify='center' align='center' w='100%' bg='dark' c='white'>
                <h1>Dashboard</h1>
                <Group>
                    <Stack bg='grey' p={10}style={{borderRadius: 10}}>
                        Dual Function Button
                        <DualFunctionButton 
                            label='Tooltip' 
                            size='compact-sm' 
                            fullWidth 
                            icon={Copy} 
                            color='gray' 
                            variant='default'
                            leftOnClick={() => true}
                            rightOnClick={() => true}
                        >
                            Function
                        </DualFunctionButton>
                    </Stack>
                    <Stack bg='grey' p={10}style={{borderRadius: 10}}>
                        Badge Selector
                        <BadgeSelector />
                    </Stack>
                    <Stack bg='grey' p={10}style={{borderRadius: 10}}>
                        Sticky Footer Modal
                        <StickyFooterModal />
                        <StickyFooterModalTwo />
                    </Stack>
                    
                </Group>
                <Stack bg='grey' p={10}style={{borderRadius: 10}}>
                        Recently Viewed Card
                        <RecentlyViewedCard 
                            badge={{
                                label: 'Quoted',
                                color: 'blue'
                            }} 
                            category='EXCESS'
                            title='Layton CCIP (New St.Vincent Hospital)'
                            avatar='EN'
                            lastViewedDate='1 day ago'
                        />
                </Stack>
            </Stack>
        </div>
    )
}

export default Dashboard;