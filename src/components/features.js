import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/chatgptIcon.png')} style={{height: hp(4), width: hp(4)}} />
            <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">ChatGPT</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
            O ChatGPT pode fornecer respostas instantâneas e bem informadas, ajudá-lo com ideias criativas sobre uma ampla gama de tópicos.
        </Text>
      </View>

      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/dalleIcon.png')} style={{height: hp(4), width: hp(4)}} />
            <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">DALL-E</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
            O DALL-E pode gerar imagens imaginativas e diversas a partir de descrições textuais, expandindo os limites da criatividade visual.        </Text>
      </View>

      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/smartaiIcon.png')} style={{height: hp(4), width: hp(4)}} />
            <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">Smart AI</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
            Um poderoso assistente de voz com as habilidades do ChatGPT e Dall-E, oferecendo a você o melhor dos dois mundos.
        </Text>
      </View>
    </View>
  )
}