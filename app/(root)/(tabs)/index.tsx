import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View className="w-10 h-10 bg-blue-500" >

      <Text className='text-red-600 font-bold'>welcome to ReState</Text>
      
      <Link href="/sign-in" className='text-red-500'>Sign-In</Link>
      <Link href="/(root)/(tabs)/explore">Explore</Link>
      <Link href="/(root)/(tabs)/profile">Profile</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})