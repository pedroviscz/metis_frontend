import React from 'react'
import { TouchableOpacity } from 'react-native'
import { colors } from '../constants/colors'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const BackButton = ({ circleColor, fill }: { circleColor?: string; fill?: string; }) => {
    return (
        <TouchableOpacity onPress={router.back} style={{ position: 'absolute', backgroundColor: circleColor || colors.offwhite, top: '10%', left: '8%', borderRadius: '50%', padding: '1%' }}>
            <Ionicons name="chevron-back" size={32} color={fill || "#000"} />
        </TouchableOpacity>
    )
}

export default BackButton