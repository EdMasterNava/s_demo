import React, { useState } from 'react'
import { Badge, Button, Menu, ThemeIcon } from '@mantine/core'
import { ChevronDown, Checkmark } from '@emotion-icons/ionicons-outline'

const BADGE_OPTIONS = [
    {
        label: 'Draft',
        color: 'blue'
    },
    {
        label: 'Cost',
        color: 'green'
    },
    {
        label: 'Quoted',
        color: 'red'
    }
]

const BadgeSelector = () => {
    const [ currentBadge, setCurrentBadge ] = useState(BADGE_OPTIONS[2]);
    const handleBadgeSelect = (badge: typeof BADGE_OPTIONS[number]) => {
        setCurrentBadge(badge);
    };
    return (
        <Menu>
            <Menu.Target>
                <Button 
                    color={currentBadge.color}
                    style={{cursor: 'pointer'}}
                    size='compact-xs'
                    variant='light'
                    radius='lg'
                    rightSection={
                        <ThemeIcon size='xs' variant='transparent' color='currentColor'>
                            <ChevronDown/>    
                        </ThemeIcon>
                    }
                >
                    {currentBadge.label}
                </Button>    
            </Menu.Target>
            <Menu.Dropdown>
                {BADGE_OPTIONS.map(badge => {
                    return (
                        <Menu.Item 
                            key={badge.label}
                            onClick={() => handleBadgeSelect(badge)}
                            leftSection={ badge.label === currentBadge.label ? 
                                <ThemeIcon size="xs" variant="transparent" color="black">
                                    <Checkmark />
                                </ThemeIcon>
                                :
                                <ThemeIcon size="xs" variant="transparent" color="black"/>
                            }
                            rightSection={
                                <Badge color={badge.color} variant='light'>
                                    {badge.label}
                                </Badge> 
                            }
                        />
                    )
                })}
            </Menu.Dropdown>
        </Menu>
        
    )
}

export default BadgeSelector