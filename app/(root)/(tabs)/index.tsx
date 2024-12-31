import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View className="flex justify-center items-center w-full h-screen" >

      <Text className='text-red-600 font-bold'>welcome to ReState</Text>
      
      <Link href="/sign-in" className='text-red-500'>Sign-In</Link>
      <Link href="/(root)/(tabs)/explore" className='text-green-500'>Explore</Link>
      <Link href="/(root)/(tabs)/profile">Profile</Link>
    </View>
  )
}
