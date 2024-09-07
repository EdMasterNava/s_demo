import { 
    Button, 
    Tooltip, 
    ButtonGroup, 
    ButtonProps, 
    TooltipProps,
    ThemeIcon
} from '@mantine/core'
import React from 'react'

type DualFunctionButtonProps = ButtonProps & TooltipProps & {
    icon: React.FC<any>;
    leftOnClick: () => boolean ;
    rightOnClick: () => boolean ;
};

const DualFunctionButton = ({
    children,
    size,
    icon: Icon,
    label,
    fullWidth,
    color,
    variant,
    leftOnClick,
    rightOnClick
}: DualFunctionButtonProps) => {
    return (
        <ButtonGroup>
            {fullWidth ? 
                <Button flex={1} size={size} color={color} variant={variant} onClick={leftOnClick}>
                    {children}
                </Button>
                :
                <Button size={size} color={color} variant={variant} >
                    {children}
                </Button>
            }
            <Tooltip label={label}>
                <Button size={size} color={color} variant={variant} onClick={rightOnClick}>
                    <ThemeIcon size='xs' variant='transparent' color='currentColor'>
                        <Icon />
                    </ThemeIcon>
                </Button>    
            </Tooltip>
        </ButtonGroup>
    )
}

export default DualFunctionButton