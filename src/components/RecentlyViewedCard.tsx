import React from 'react';
import { Avatar, Badge, Box, Flex, Group, Stack, Text } from '@mantine/core';

type RecentlyViewedCardProps = {
    badge: {
        label: string;
        color: string;
    };
    category: string;
    title: string;
    avatar: string;
    lastViewedDate: string;
};

const RecentlyViewedCard: React.FC<RecentlyViewedCardProps> = ({ 
    badge,
    category,
    title,
    avatar,
    lastViewedDate 
}) => {
    return (
        <Box bg="white" p={10} maw={200} style={{ borderRadius: 10 }}>
            <Stack>
                <Flex justify="end">
                    <Badge variant="light" color={badge.color}>
                        {badge.label}
                    </Badge>
                </Flex>
                <Stack gap={0}>
                    <Text c="grey" size="xs">
                        {category}
                    </Text>
                    <Text c="black" size="md">
                        {title}
                    </Text>
                </Stack>
                <Group justify="space-between">
                    <Group gap={5}>
                        <Avatar size="sm">
                            {avatar}
                        </Avatar>
                        <Text c="grey" size="xs">
                            {lastViewedDate}
                        </Text>
                    </Group>
                    <Avatar />
                </Group>
            </Stack>
        </Box>
    );
};

export default RecentlyViewedCard;