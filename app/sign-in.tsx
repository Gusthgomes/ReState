import { SafeAreaView, ScrollView, Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {

  const handleLogin = () => {};

  return (
    <SafeAreaView className='bg-white h-full mt-5'>
      <ScrollView contentContainerClassName='h-screen'>
        <Image source={ images.onboarding} className='w-full h-4/6' resizeMode='cover'/>

        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Bem vindo(a) ao ReState!</Text>

          <Text className="text-2xl font-rubik-bold text-black-300 text-center mt-2">
            vamos chegar mais perto da {"\n"}
            
            <Text className='text-primary-300'>
                Sua casa ideal!
            </Text>
          </Text>

          <Text className='text-lg font-rubik text-black-200 text-center mt-3'>Faça login com o Google</Text>

          <TouchableOpacity onPress={ handleLogin } className='bg-white shadow-md shadow-zinc-500 rounded-full w-full py-2 mt-2'>
            <View className='flex flex-row justify-center items-center'>
              <Image source={icons.google} className='w-5 h-5' resizeMode='contain'/>
              <Text className='text-lg text-black-300 font-rubik ml-3'>Continue com o Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn