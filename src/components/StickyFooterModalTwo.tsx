import React from 'react'
import { Button, Text, Affix } from '@mantine/core'
import { modals } from '@mantine/modals'

type FormProps = {
    submitButton: React.ReactNode;
}
const Form = ({submitButton: SubmitButton}: FormProps)  => {
    return (
        <>
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
            {SubmitButton}
        </> 
    )
}


const StickyFooterModalTwo = () => {
    const StickyButton = (
        <Affix pos='sticky' withinPortal={false} position={{bottom: 0}} pb={16} pt={16} bg='white'>
            <Button fullWidth>Comfirm</Button>
        </Affix>
    )
        
    const openModal = () => modals.open({
        title: 'Test',
        children: (
            <>
                <Form submitButton={StickyButton}/>
            </> 
        ),
        styles: {
            body: {
                paddingBottom: 0
            }
        }
    })
    return (
        <Button onClick={openModal}>Open modal</Button>
    )
}

export default StickyFooterModalTwo