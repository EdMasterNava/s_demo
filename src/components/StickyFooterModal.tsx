import React from 'react'
import { Button, Text } from '@mantine/core'
import { modals } from '@mantine/modals'

const StickyFooterModal = () => {
    const openModal = () => modals.openConfirmModal({
        title: 'Test',
        children: (
            <Text size="sm">
              This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.This action is so important that you are required to confirm it with a modal. Please click
              one of these buttons to proceed.
            </Text>
        ),
        groupProps: {
            bg: 'white',
            pos: 'sticky',
            bottom: 0,
            pt: 10,
            pb: 10
        },
        styles: {
            body: {
                paddingBottom: 0
            }
        },
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed')
    })
    return (
        <Button onClick={openModal}>Open confirm modal</Button>
    )
}

export default StickyFooterModal