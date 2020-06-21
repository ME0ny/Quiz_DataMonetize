import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert,InteractionManager } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Finish({ navigation: { navigate } }) {
  var coin = 0;
  var point = 2500;
  var rait = 13;
  return (
    <View>
      <View style={{"position":"absolute","width":"375px","height":"45px","left":"0px","top":"0px","background":"#FFFFFF","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}/>
      <Image style={{"position":"absolute","width":"26px","height":"12px","left":"35px","top":"18px"}} source ={require('./template/head/Group 1 (1).png')} />

      <Image style={{"position":"absolute","width":"24px","height":"24px","left":"318px","top":"11px"}} source={require('./template/head/image 1.png')}/>

      <Text style={{"position":"absolute","width":"67px","height":"16px","left":"247px","top":"17px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"14px","lineHeight":"117.69%","color":"#008F32"}}>
        {coin} баллов
      </Text>
      <Text style={{"position":"absolute","width":"42px","height":"24px","left":"89px","top":"13px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"20px","lineHeight":"117.69%","color":"#EB1916"}}>
      Quiz
      </Text>
      <Image style={{"position":"absolute","width":"375px","height":"622px","left":"0px","top":"45px"}} source={require('./template/finish/Group 27.png')}/>
      <Text style={{"position":"absolute","width":"289px","height":"42px","left":"39px","top":"105px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"36px","lineHeight":"117.69%","textAlign":"center","color":"#FFFFFF","textShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
      Игра закончена
      </Text>
      <Text style={{"position":"absolute","height":"42px","left":"35px","top":"257px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"36px","lineHeight":"117.69%","color":"#FFFFFF","textShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        ваш счет
      </Text>
      <Text style={{"position":"absolute","height":"42px","left":"254px","top":"257px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"36px","lineHeight":"117.69%","color":"#FFFFFF","textShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
      {point}
      </Text>
      <Text style={{"position":"absolute","height":"42px","left":"35px","top":"314px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"36px","lineHeight":"117.69%","textAlign":"center","color":"#FFFFFF","textShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        рейтинг
      </Text>
      <Text style={{"position":"absolute","height":"42px","left":"254px","top":"314px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"36px","lineHeight":"117.69%","color":"#FFFFFF","textShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
      {rait}
      </Text>
      <Text style={{"position":"absolute","width":"295px","height":"52px","left":"40px","top":"463px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%","textAlign":"center","color":"#FFFFFF","textShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
      Хотите обновить результат 
      и сыграть заново?
      </Text>
      <Image style={{"position":"absolute","width":"138px","height":"40.7px","left":"35px","top":"560px"}} source = {require('./template/finish/Group 20.png')}/>
      <Image style={{"position":"absolute","width":"148px","height":"40.7px","left":"194px","top":"560px"}} source = {require('./template/finish/Group 17.png')}/>
    </View>
  );
}
