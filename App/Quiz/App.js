import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

const styles = StyleSheet.create({
});

export default function App() {
  var point = 25;
  var bank = '255 000';
  var time = '00:00:01';
  var rait = 1250;
  var level = 10;
  return (
    <View>
        <View style = {{"position":"absolute","width":"375px","height":"207px","left":"0px","top":"0px","background":"#ED2D24"}}/>
        <Image style={{"position":"absolute","width":"26px","height":"12px","left":"35px","top":"18px"}} source={require('./template/Group 1.png')}/>
        <View style={{"position":"absolute","width":"347px","height":"81px","left":"14px","top":"218px","background":"#FFFFFF","border":"3px solid #FFFFFF","boxSizing":"border-box","borderRadius":"10px", "boxShadow":"0px 0px 10px rgba(0, 0, 0, 0.25)"}}>          
        </View>
        <Text style={{"position":"absolute","left":"37px","top":"245px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%","color":"#000000"}}> 
        Осталось вопросов
        </Text>
        <View style={{"position":"absolute","width":"347px","height":"81px","left":"14px","top":"311px","background":"#FFFFFF","border":"3px solid #FFFFFF","boxSizing":"border-box","borderRadius":"10px", "boxShadow":"0px 0px 10px rgba(0, 0, 0, 0.25)"}}>
        </View>
        <Text style={{"position":"absolute","width":"42px","height":"24px","left":"89px","top":"13px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"20px","lineHeight":"117.69%","color":"#FFFFFF"}}>
          Quiz
        </Text>
        <Text style={{"position":"absolute","width":"67px","height":"16px","left":"241px","top":"17px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"14px","lineHeight":"117.69%","color":"#FFFFFF"}}> 
        {point} баллов
        </Text>
        <Image style={{"position":"absolute","width":"24px","height":"24px","left":"318px","top":"11px"}} source={require('./template/image 1.png')}/>
        
        <Text style={{flex: 1, justifyContent: 'center',"position":"absolute","width":"85px","height":"42px","left":"144px","top":"51px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"36px","lineHeight":"117.69%","color":"#FFFFFF","shadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
          Банк
        </Text>
        <Text style={{flex: 1, justifyContent: 'center',"position":"absolute","left":"88px","top":"90px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"64px","lineHeight":"117.69%","color":"#FFFFFF"}}>
        {bank}
        </Text>
        <Text style ={{flex: 1, justifyContent: 'center',"position":"absolute","left":"125px","top":"165px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"14px","lineHeight":"117.69%","color":"#FFFFFF"}}>
        конец игры через
        </Text>
        <Text style = {{flex: 1, justifyContent: 'center',"position":"absolute","left":"160px","top":"181px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"14px","lineHeight":"117.69%","color":"#FFFFFF"}}>
        {time}
        </Text>
        <Image style={{"position":"absolute","width":"57px","height":"57px","left":"286px","top":"228px"}} source={require('./template/10.png')}/>
        <Text style={{"position":"absolute","left":"37px","top":"340px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"24px","lineHeight":"117.69%","color":"#000000"}}>
        Рейтинг 
        </Text>
        <Text style={{"position":"absolute","left":"287px","top":"340px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"24px","lineHeight":"117.69%","color":"#000000"}} >
        {rait}
        </Text>
        <Image style = {{"position":"absolute","width":"227px","height":"55px","left":"74px","top":"574px"}} source={require('./template/Group 4.png')}/>
    </View>
  );
}

