import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({
});

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function Tscreen2({ route, navigation: { navigate } }) {
  var {data} = route.params;
  var {level} = route.params;
  var {answer} = route.params;
  var coin = data['client']['point'];
  var question = data['questions'][data['client']['value_answer']]['text'];
  var answer_text = data['questions'][data['client']['value_answer']]['fact'];
  var percent = [
    data['questions'][data['client']['value_answer']]['answers'][0]['data_prediction']+'%',
    data['questions'][data['client']['value_answer']]['answers'][1]['data_prediction']+'%',
    data['questions'][data['client']['value_answer']]['answers'][2]['data_prediction']+'%',
    data['questions'][data['client']['value_answer']]['answers'][3]['data_prediction']+'%'
    ];
  var answerTrue;
  for(let i=0;i<4;i++){
    if(1==data['questions'][data['client']['value_answer']]['answers'][i]['flag']){
        answerTrue = i;
        break;
    }
  }
  var answerUser = answer;
  var blockRender = [0,0,0,0];
  var colorBackData = '#E3D5BE';
  var colorBackTrue = '#7DE929';
  var colorBackFalse = '#F99E9E';
  var colorData ='#B7AC9B';
  var colorTrue='#56A816'
  var colorFalse = '#ED2D24';
blockRender[0]=[percent[0],colorData,colorBackData];
blockRender[1]=[percent[1],colorData,colorBackData];
blockRender[2]=[percent[2],colorData,colorBackData];
blockRender[3]=[percent[3],colorData,colorBackData];

  if(answerUser==answerTrue){
    blockRender[answerTrue]=[percent[answerTrue],colorTrue,colorBackTrue];
  }
  else{
    blockRender[answerTrue]=[percent[answerTrue],colorTrue,colorBackTrue];
    blockRender[answerUser]=[percent[answerUser],colorFalse,colorBackFalse];
  }
  data['client']['value_answer'] = level+1;
  level+=1;
  return (
    <View>
     <View style={{"position":"absolute","width":"375px","height":"45px","left":"0px","top":"0px","background":"#FFFFFF","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}/>
      <Image style={{"position":"absolute","width":"26px","height":"12px","left":"35px","top":"18px"}} source ={require('./template/head/Group 1 (1).png')} />

      <Image style={{"position":"absolute","width":"24px","height":"24px","left":"318px","top":"11px"}} source={require('./template/head/image 1.png')}/>

      <Text style={{"position":"absolute","height":"16px","left":"247px","top":"17px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"14px","lineHeight":"117.69%","color":"#008F32"}}>
        {coin} баллов
      </Text>
      <Text style={{"position":"absolute","width":"42px","height":"24px","left":"89px","top":"13px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"20px","lineHeight":"117.69%","color":"#EB1916"}}>
      Quiz
      </Text>
      <Text style={{"position":"absolute","width":"305px","height":"39px","left":"35px","top":"60px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"117.69%","color":"#000000"}}>
      {question}
      </Text>
      <View style={{"position":"absolute","width":"305px","height":"58px","left":"35px","top":"111px","background":blockRender[0][2],"boxShadow":"0px 2px 4px rgba(0, 0, 0, 0.25)","borderRadius":"10px"}}>
      <View style={{"position":"absolute","width":blockRender[0][0],"height":"58px","background":blockRender[0][1],"borderRadius":"10px"}}/>
        <View style={{flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={{textAlign: 'center', "fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%"}}>
          {data['questions'][data['client']['value_answer']-1]['answers'][0]['title']}
        </Text>
        </View>
      </View>

      <View style={{"position":"absolute","width":"305px","height":"58px","left":"35px","top":"191px","background":blockRender[1][2],"boxShadow":"0px 2px 4px rgba(0, 0, 0, 0.25)","borderRadius":"10px"}}>
      <View style={{"position":"absolute","width":blockRender[1][0],"height":"58px","background":blockRender[1][1],"borderRadius":"10px"}}/>
        <View style={{flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={{textAlign: 'center', "fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%"}}>
          {data['questions'][data['client']['value_answer']-1]['answers'][1]['title']}
        </Text>
        </View>
      </View>
      <View style={{"position":"absolute","width":"305px","height":"58px","left":"35px","top":"271px","background":blockRender[2][2],"boxShadow":"0px 2px 4px rgba(0, 0, 0, 0.25)","borderRadius":"10px"}}>
      <View style={{"position":"absolute","width":blockRender[2][0],"height":"58px","background":blockRender[2][1],"borderRadius":"10px"}}/>
        <View style={{flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={{textAlign: 'center', "fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%"}}>
          {data['questions'][data['client']['value_answer']-1]['answers'][2]['title']}
        </Text>
        </View>
      </View>
      <View style={{"position":"absolute","width":"305px","height":"58px","left":"35px","top":"352px","background":blockRender[3][2],"boxShadow":"0px 2px 4px rgba(0, 0, 0, 0.25)","borderRadius":"10px"}}>
      <View style={{"position":"absolute","width":blockRender[3][0],"height":"58px","background":blockRender[3][1],"borderRadius":"10px"}}/>
        <View style={{flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={{textAlign: 'center', "fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%"}}>
          {data['questions'][data['client']['value_answer']-1]['answers'][3]['title']}
        </Text>
        </View>
      </View>
      <Text style={{"position":"absolute","width":"291px","height":"160px","left":"38px","top":"435px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"14px","lineHeight":"117.69%","color":"#000000"}}>
      {answer_text}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {if(level==16){navigate('Finish',{data:data,level:level})} else{ navigate('Ten',{data:data,level:level})}}}>
      <Image style={{"position":"absolute","width":"168px","height":"40.7px","left":"104px","top":"613px"}} source={require('./template/question/Group 11.png')}/>
      </TouchableOpacity>
    </View>
  );
}



