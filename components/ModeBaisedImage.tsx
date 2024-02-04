'use client'
import { useAppSelector } from '@/app/GlobalRedux/store'
import React from 'react'

interface Props {
    className?: string;
    darkImage: string;
    lightImage: string;
}

function ModeBaisedImage({ className, darkImage, lightImage }: Props) {
    const mode = useAppSelector(state => state.modeReducer.mode)

    return (
        <img className={className} src={mode == 'light' ? lightImage : darkImage} alt='image' />
    )
}

export default ModeBaisedImage