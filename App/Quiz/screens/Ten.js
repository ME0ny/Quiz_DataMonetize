import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native'
const styles = StyleSheet.create({
});

export default function Ten ({ route, navigation: { navigate }}) {
  const {data} = route.params;
  const {level} = route.params;
  const {number} = route.params;
  var coin = data['client']['point'];
  var questionNumber = level;
  return (
    <View>
    <TouchableOpacity style={styles.button} onPress={() => navigate('Tscreen1',{data:data,level:level,number:number})}>
    <Image style={{"position":"absolute","width":"26px","height":"12px","left":"35px","top":"18px"}} source ={require('./template/head/Group 1 (1).png')} />

      <Image style={{"position":"absolute","width":"24px","height":"24px","left":"318px","top":"11px"}} source={require('./template/head/image 1.png')}/>

      <Text style={{"position":"absolute","height":"16px","left":"247px","top":"17px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"14px","lineHeight":"117.69%","color":"#008F32"}}>
        {coin} баллов
      </Text>

      <Text style={{"position":"absolute","width":"42px","height":"24px","left":"89px","top":"13px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"20px","lineHeight":"117.69%","color":"#EB1916"}}>
      Quiz
      </Text>
      <View style={{backgroundColor:"#EB1916", "position":"absolute","width":"375px","height":"622px","left":"0px","top":"45px", flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
      <Text style={{"fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"48px","lineHeight":"117.69%","textAlign":"center","color":"#FFFFFF"}}>
        Вопрос {questionNumber+1}
      </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};
