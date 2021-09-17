import React from 'react'
import { BoxSizingProps } from '../../type/boxsizing'

type AlignType = 'stretch' | 'center' | 'start' | 'end'
type JustifyType = 'center' | 'start' | 'end' | 'between' | 'evenly' | 'around'
type DirectionType = 'column' | 'row'

interface FlexProps extends BoxSizingProps {
    children: React.ReactNode
    style?: object
    align?: AlignType
    justify?: JustifyType
    direction?: DirectionType
    spacing?: number
    bg?: string
}


const alignment = (setting: AlignType): string => {
    if (setting === 'start' || setting === 'end') return 'flex-' + setting
    else return setting
}

const justifyment = (setting: JustifyType): string => {
    if (setting === 'start' || setting === 'end') return 'flex-' + setting
    else if (setting === 'between' || setting === 'evenly' || setting === 'around')
        return 'space-' + setting
    else return setting
}

export const Center = ({
    children,
    style,
    align,
    justify,
    direction,
    h,
    w,
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    bg,
    ...rest
}: FlexProps) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: justifyment(justify || 'center'),
                alignItems: alignment(align || 'center'),
                flexDirection: direction || 'column',
                height: h,
                width: w,
                boxSizing:'border-box',
                paddingTop: pt || py || p || 0,
                paddingLeft: pl || px || p || 0,
                paddingRight: pr || px || p || 0,
                paddingBottom: pb || py || p || 0,
                marginTop: mt || my || m || 0,
                marginLeft: ml || mx || m || 0,
                marginRight: mr || mx || m || 0,
                marginBottom: mb || my || m || 0,
                backgroundColor: bg,
                ...style,
            }}
            {...rest}>
            {children}
        </div>
    )
}

export const HStack = ({
    children,
    style,
    align,
    justify,
    spacing,
    h,
    w,
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    bg,
    ...rest
}: FlexProps) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: justify ? justifyment(justify) : 'flex-start',
                alignItems: align ? alignment(align) : 'flex-start',
                gap: spacing,
                height: h,
                width: w,
                boxSizing:'border-box',
                paddingTop: pt || py || p || 0,
                paddingLeft: pl || px || p || 0,
                paddingRight: pr || px || p || 0,
                paddingBottom: pb || py || p || 0,
                marginTop: mt || my || m || 0,
                marginLeft: ml || mx || m || 0,
                marginRight: mr || mx || m || 0,
                marginBottom: mb || my || m || 0,
                backgroundColor: bg,

                ...style,
            }}
            {...rest}>
            {children}
        </div>
    )
}

export const VStack = ({
    children,
    style,
    align,
    justify,
    spacing,
    h,
    w,
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    bg,
    ...rest
}: FlexProps) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: justify ? justifyment(justify) : 'flex-start',
                alignItems: align ? alignment(align) : 'flex-start',
                gap: spacing ? spacing * 4 : 0,
                height: h,
                width: w,
                boxSizing:'border-box',
                paddingTop: pt || py || p || 0,
                paddingLeft: pl || px || p || 0,
                paddingRight: pr || px || p || 0,
                paddingBottom: pb || py || p || 0,
                marginTop: mt || my || m || 0,
                marginLeft: ml || mx || m || 0,
                marginRight: mr || mx || m || 0,
                marginBottom: mb || my || m || 0,
                backgroundColor: bg,
                ...style,
            }}
            {...rest}>
            {children}
        </div>
    )
}

export default {
    Center,
    VStack,
    HStack
}
