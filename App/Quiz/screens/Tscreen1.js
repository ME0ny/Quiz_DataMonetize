import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountdownBar from "react-native-countdown-bar";

const styles = StyleSheet.create({
});
export default function Tscreen1({ route, navigation: { navigate } }) {
  const {data} = route.params;
  const {level} = route.params;
  
  var imageUrl = data['questions'][data['client']['value_answer']]['url_image'];
  var coin = data['client']['point'];
  var timeLine = "320px";
  var question = data['questions'][data['client']['value_answer']]['text'];

  return (
    <View>
      <Image style={{"position":"absolute","width":"26px","height":"12px","left":"35px","top":"18px"}} source ={require('./template/head/Group 1 (1).png')} />

      <Image style={{"position":"absolute","width":"24px","height":"24px","left":"318px","top":"11px"}} source={require('./template/head/image 1.png')}/>

      <Text style={{"position":"absolute","height":"16px","left":"247px","top":"17px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"14px","lineHeight":"117.69%","color":"#008F32"}}>
        {coin} баллов
      </Text>

      <Text style={{"position":"absolute","width":"42px","height":"24px","left":"89px","top":"13px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"20px","lineHeight":"117.69%","color":"#EB1916"}}>
      Quiz
      </Text>

      <View style={{"position":"absolute","width":"375px","height":"0px","left":"-9px","top":"48px","border":"3px solid #C4C4C4"}}/>
    
      <View style={{"position":"absolute","width":timeLine,"height":"0px","left":"-9px","top":"48px","border":"3px solid #EB1916"}}/>
       <CountdownBar 
          time={5}
          BgColor="#EB1916"
          BgColorIn="#fff"
          complete={() => navigate('Tscreen2', {data:data,level:level,answer:1})}
        />
  
      <Image style={{"position":"absolute","width":"375px","height":"198px","left":"-10px","top":"54px"}} source={{uri:imageUrl}}/>
      <Text style={{"position":"absolute","width":"305px","height":"39px","left":"35px","top":"257px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"117.69%","color":"#000000"}}>
      {question}
      </Text>
       <TouchableOpacity style={styles.button}  onPress={() => navigate('Tscreen2', {data:data,level:level,answer:0})}>
      <View style={{"position":"absolute","width":"305px","height":"57px","left":"35px","top":"308px","background":"#E3D5BE","boxShadow":"0px 2px 4px rgba(0, 0, 0, 0.25)","borderRadius":"10px", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', "fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%"}}>
          {data['questions'][data['client']['value_answer']]['answers'][0]['title']}
          </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={() => navigate('Tscreen2', {data:data,level:level,answer:1})}>
      <View style={{"position":"absolute","width":"305px","height":"58px","left":"35px","top":"388px","background":"#E3D5BE","boxShadow":"0px 2px 4px rgba(0, 0, 0, 0.25)","borderRadius":"10px", flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={{textAlign: 'center', "fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%"}}>
          {data['questions'][data['client']['value_answer']]['answers'][1]['title']}
        </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate('Tscreen2', {data:data,level:level,answer:2})}
      >
   <View style={{"position":"absolute","width":"305px","height":"58px","left":"35px","top":"468px","background":"#E3D5BE","boxShadow":"0px 2px 4px rgba(0, 0, 0, 0.25)","borderRadius":"10px", flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={{textAlign: 'center', "fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%"}}>
          {data['questions'][data['client']['value_answer']]['answers'][2]['title']}
        </Text>       
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}  onPress={() => navigate('Tscreen2', {data:data,level:level,answer:3})}>
      <View style={{"position":"absolute","width":"305px","height":"58px","left":"35px","top":"549px","background":"#E3D5BE","boxShadow":"0px 2px 4px rgba(0, 0, 0, 0.25)","borderRadius":"10px", flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={{textAlign: 'center', "fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%"}}>
          {data['questions'][data['client']['value_answer']]['answers'][3]['title']}
        </Text>
      </View>
      </TouchableOpacity>
    </View>
    
  )
}