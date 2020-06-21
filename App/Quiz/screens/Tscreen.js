import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert,InteractionManager } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
let count = 10, i = 0;


const timer = setInterval(() => {
if(i < count){
i++
// какое-нибудь действие
}else{
clearInterval(timer)
}
}, 1000)

const styles = StyleSheet.create({
});

export default function Tscreen({ navigation: { navigate }}) {
  var data = {"client":{"id":2,"point":250,"rate":1500,"value_answer":10},"questions":[{"id":0,"text":"Что изображено на картинке?\r\n","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/Ycgd3ME.jpg","fact":"Венерина мухоловка - Плотоядное растение\r\n","answers":[{"id":0,"question":0,"title":"Венерина мухоловка","flag":1,"data_prediction":50},{"id":1,"question":0,"title":"Пчелоед","flag":0,"data_prediction":10},{"id":2,"question":0,"title":"Фиалка","flag":0,"data_prediction":25},{"id":3,"question":0,"title":"Пожиратель","flag":0,"data_prediction":5}]},{"id":1,"text":"Пчёлы водятся на всех континентах мира, кроме одного. Какого?\r\n","type":1,"answers_qnt":0,"url_image":"https://s.ura.news/images/news/upload/articles/278/009/1036278009/180299_Klipart_Kino_zriteli_kinematograf_3d_imax_760x0_5616.3744.0.0.jpg","fact":"На Антарктиде существует много насекомых, но пчёл там нет\r\n","answers":[{"id":4,"question":1,"title":"Африка","flag":0,"data_prediction":0},{"id":5,"question":1,"title":"Северная америка","flag":0,"data_prediction":0},{"id":6,"question":1,"title":"Австралия","flag":0,"data_prediction":0},{"id":7,"question":1,"title":"Антарктида","flag":1,"data_prediction":0}]},{"id":2,"text":"Ваша любимая команда на хакатоне?\r\n","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/vKMnHew.png","fact":null,"answers":[{"id":8,"question":2,"title":"Почему","flag":0,"data_prediction":0},{"id":9,"question":2,"title":"Как","flag":0,"data_prediction":0},{"id":10,"question":2,"title":"За что","flag":0,"data_prediction":0},{"id":11,"question":2,"title":"Зачем","flag":1,"data_prediction":0}]},{"id":3,"text":"Как называется данный вид спорта?","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/vrHxtT6.jpg","fact":null,"answers":[{"id":12,"question":3,"title":"Поло","flag":0,"data_prediction":0},{"id":13,"question":3,"title":"Кёрлинг","flag":0,"data_prediction":0},{"id":14,"question":3,"title":"Крокет","flag":1,"data_prediction":0},{"id":15,"question":3,"title":"Баунсер","flag":0,"data_prediction":0}]},{"id":4,"text":"Что символизируют пять олимпийских колец?","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/MX0sUbT.jpg","fact":null,"answers":[{"id":16,"question":4,"title":"Виды спорта","flag":0,"data_prediction":0},{"id":17,"question":4,"title":"Расы людей","flag":0,"data_prediction":0},{"id":18,"question":4,"title":"Континенты","flag":1,"data_prediction":0},{"id":19,"question":4,"title":"Логотип Audi","flag":0,"data_prediction":0}]},{"id":5,"text":"Что это за логотип?","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/zSake1c.jpg","fact":null,"answers":[{"id":20,"question":5,"title":"Gilette","flag":0,"data_prediction":0},{"id":21,"question":5,"title":"Nutella","flag":0,"data_prediction":0},{"id":22,"question":5,"title":"Nestle","flag":1,"data_prediction":0},{"id":23,"question":5,"title":"Discovery","flag":0,"data_prediction":0}]},{"id":6,"text":"Этот российский сериал попал в книгу рекордов Гиннеса как самая длинная \"адаптация\".\r\n","type":1,"answers_qnt":0,"url_image":"https://s.ura.news/images/news/upload/articles/278/009/1036278009/180299_Klipart_Kino_zriteli_kinematograf_3d_imax_760x0_5616.3744.0.0.jpg","fact":null,"answers":[{"id":24,"question":6,"title":"Сваты","flag":0,"data_prediction":0},{"id":25,"question":6,"title":"Счастливы вместе","flag":0,"data_prediction":0},{"id":26,"question":6,"title":"Воронины","flag":1,"data_prediction":0},{"id":27,"question":6,"title":"Универ","flag":0,"data_prediction":0}]},{"id":7,"text":"Какой русский писатель за критику официального православия был отлучен от церкви ?","type":1,"answers_qnt":0,"url_image":'https://avatars.mds.yandex.net/get-pdb/1520606/bbeb727e-51f3-4912-abb7-2af090eb6bb4/s1200',"fact":"https://i.imgur.com/m144gsn.jpg","answers":[{"id":28,"question":7,"title":"А. Блок","flag":0,"data_prediction":0},{"id":29,"question":7,"title":"Л. Толстой","flag":1,"data_prediction":0},{"id":30,"question":7,"title":"А. Пушкин","flag":0,"data_prediction":0},{"id":31,"question":7,"title":"В. Маяковский","flag":0,"data_prediction":0}]},{"id":8,"text":"Что такое астрономическая единица?","type":1,"answers_qnt":0,"url_image":'https://sputnik.fm/files/2C4FC41F0FD2F17E.jpg',"fact":null,"answers":[{"id":32,"question":8,"title":"Количество полётов в космос","flag":0,"data_prediction":0},{"id":33,"question":8,"title":"Размер первого шага на луне","flag":0,"data_prediction":0},{"id":34,"question":8,"title":"Расстояние от земли до солнца","flag":1,"data_prediction":0},{"id":35,"question":8,"title":"Количество планет в солнечной системе","flag":0,"data_prediction":0}]},{"id":9,"text":"Какой древний язык называют языком богов?","type":1,"answers_qnt":0,"url_image":'https://i.middle-east-online.com/styles/social_image/s3/biga/_47777_language.jpg?2UtNHjzyylBJWkacD3b.7inIqu1IsPuV&amp;itok=YlGSefET',"fact":null,"answers":[{"id":36,"question":9,"title":"Греческий","flag":0,"data_prediction":0},{"id":37,"question":9,"title":"Римский","flag":0,"data_prediction":0},{"id":38,"question":9,"title":"Санскрит","flag":1,"data_prediction":0},{"id":39,"question":9,"title":"Украинский","flag":0,"data_prediction":0}]},{"id":10,"text":"Как называется граница чёрной дыры?","type":1,"answers_qnt":0,"url_image":'https://i.middle-east-online.com/styles/social_image/s3/biga/_47777_language.jpg?2UtNHjzyylBJWkacD3b.7inIqu1IsPuV&amp;itok=YlGSefET',"fact":"https://i.imgur.com/yh6bja6.jpg","answers":[{"id":40,"question":10,"title":"Сингулярность","flag":0,"data_prediction":0},{"id":41,"question":10,"title":"Окружность","flag":0,"data_prediction":0},{"id":42,"question":10,"title":"Чернь","flag":0,"data_prediction":0},{"id":43,"question":10,"title":"Горизонт событий","flag":1,"data_prediction":0}]},{"id":11,"text":"Сомелье - это?","type":1,"answers_qnt":0,"url_image":'https://avatars.mds.yandex.net/get-pdb/2507607/49c4652d-381d-48d1-a358-0fff56667e54/s1200?webp=false',"fact":null,"answers":[{"id":44,"question":11,"title":"Дегустатор вин","flag":0,"data_prediction":0},{"id":45,"question":11,"title":"Порода собаки","flag":0,"data_prediction":0},{"id":46,"question":11,"title":"Вид растения","flag":0,"data_prediction":0},{"id":47,"question":11,"title":"Кличка в тюрьме","flag":0,"data_prediction":0}]},{"id":12,"text":"Сколько лет длилась столетняя война ?","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/pOF3hRY.jpg","fact":null,"answers":[{"id":48,"question":12,"title":"108","flag":0,"data_prediction":0},{"id":49,"question":12,"title":"100","flag":0,"data_prediction":0},{"id":50,"question":12,"title":"99","flag":0,"data_prediction":0},{"id":51,"question":12,"title":"116","flag":1,"data_prediction":0}]},{"id":13,"text":"Назовите это чудо архитектуры","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/cRlEjU9.jpg","fact":null,"answers":[{"id":52,"question":13,"title":"Тадж-махал","flag":0,"data_prediction":0},{"id":53,"question":13,"title":"Рио-Де-Жанейро","flag":0,"data_prediction":0},{"id":54,"question":13,"title":"Мачу-Пикчу","flag":1,"data_prediction":0},{"id":55,"question":13,"title":"Эверест","flag":0,"data_prediction":0}]},{"id":14,"text":"Назовите первого президента СССР","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/92xOJJj.jpg","fact":null,"answers":[{"id":56,"question":14,"title":"Путин","flag":0,"data_prediction":0},{"id":57,"question":14,"title":"Горбачёв","flag":1,"data_prediction":0},{"id":58,"question":14,"title":"Высоцкий","flag":0,"data_prediction":0},{"id":59,"question":14,"title":"Брежнев","flag":0,"data_prediction":0}]},{"id":15,"text":"Кто изображен на картинке?","type":1,"answers_qnt":0,"url_image":"https://i.imgur.com/utmRlQz.jpg","fact":null,"answers":[{"id":60,"question":15,"title":"А. Пушкин","flag":0,"data_prediction":0},{"id":61,"question":15,"title":"Н. Гоголь","flag":0,"data_prediction":0},{"id":62,"question":15,"title":"С. Маршак","flag":0,"data_prediction":0},{"id":63,"question":15,"title":"А. Блок","flag":1,"data_prediction":0}]}]};
  var coin = data['client']['point'];
  var bank = '255 000';
  var time = '00:00:01';
  var rait = data['client']['rate'];
  var level = 20 - data['client']['value_answer'];
  var flag = true;
  var number=0;
  var images = [
    require('./template/start/Group 0.png'),
    require('./template/start/Group 1.png'),
    require('./template/start/Group 2.png'),
    require('./template/start/Group 3.png'),
    require('./template/start/Group 4.png'),
    require('./template/start/Group 5.png'),
    require('./template/start/Group 6.png'),
    require('./template/start/Group 7.png'),
    require('./template/start/Group 8.png'),
    require('./template/start/Group 9.png'),
    require('./template/start/Group 10.png'),
    require('./template/start/Group 11.png'),
    require('./template/start/Group 12.png'),
    require('./template/start/Group 13.png'),
    require('./template/start/Group 14.png'),
    require('./template/start/Group 15.png'),
    require('./template/start/Group 16.png'),
    require('./template/start/Group 17.png'),
    require('./template/start/Group 18.png'),
    require('./template/start/Group 19.png'),
    require('./template/start/Group 20.png'),
  ]
  return (
    <View>
        <View style = {{"position":"absolute","width":"375px","height":"207px","left":"0px","top":"0px","backgroundColor":"#ED2D24"}}/>
        <Image style={{"position":"absolute","width":"26px","height":"12px","left":"35px","top":"18px"}} source={require('./template/Group 1.png')}/>
        <View style={{"position":"absolute","width":"347px","height":"81px","left":"14px","top":"218px","backgroundColor":"#FFFFFF","boxSizing":"border-box","borderRadius":"10px", "boxShadow":"0px 0px 10px rgba(0, 0, 0, 0.25)"}}>
                  
        </View>
        <Text style={{"position":"absolute","left":"37px","top":"245px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"22px","lineHeight":"117.69%","color":"#000000"}}>
        Осталось вопросов
  </Text>
        <View style={{"position":"absolute","width":"347px","height":"81px","left":"14px","top":"311px","backgroundColor":"#FFFFFF","boxSizing":"border-box","borderRadius":"10px", "boxShadow":"0px 0px 10px rgba(0, 0, 0, 0.25)"}}>
        </View>
        <Text style={{"position":"absolute","width":"42px","height":"24px","left":"89px","top":"13px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"20px","lineHeight":"117.69%","color":"#FFFFFF"}}>
          Quiz
        </Text>
        <Text style={{"position":"absolute","height":"16px","left":"241px","top":"17px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"bold","fontSize":"14px","lineHeight":"117.69%","color":"#FFFFFF"}}> 
        {coin} баллов
        </Text>
        <Image style={{"position":"absolute","width":"24px","height":"24px","left":"318px","top":"11px"}} source={require('./template/image 1.png')}/>
        
        <Text style={{flex: 1, justifyContent: 'center',"position":"absolute","width":"85px","height":"42px","left":"144px","top":"51px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"36px","lineHeight":"117.69%","color":"#FFFFFF"}}>
          Банк
        </Text>
        <Text style={{flex: 1, justifyContent: 'center',"position":"absolute","left":"88px","top":"90px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"64px","lineHeight":"117.69%","color":"#FFFFFF"}}>
        {bank}
        </Text>
        <Text style ={{flex: 1, justifyContent: 'center',"position":"absolute","left":"125px","top":"165px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"14px","lineHeight":"117.69%","color":"#FFFFFF"}}>
        конец игры через
        </Text>
        <Text style = {{flex: 1, justifyContent: 'center',"position":"absolute","left":"160px","top":"181px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"14px","lineHeight":"117.69%","color":"#FFFFFF"}}>
        <CountDown
        until={10000000}
        onFinish={() => alert('finished')}
        onPress={() => alert('Hurry up!!')}
        size={10}
       digitStyle={{backgroundColor: '#ED2D24'}}
        digitTxtStyle={{color: 'white'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: 'white'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      /> 
        </Text>
        <Image style={{"position":"absolute","width":"57px","height":"57px","left":"286px","top":"228px"}} source={images[level]}/>
        <Text style={{"position":"absolute","left":"37px","top":"340px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"24px","lineHeight":"117.69%","color":"#000000"}}>
        Рейтинг 
        </Text>
        <Text style={{"position":"absolute","left":"287px","top":"340px","fontFamily":"Karma","fontStyle":"normal","fontWeight":"500","fontSize":"24px","lineHeight":"117.69%","color":"#000000"}} >
        {rait}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Ten',{data:data,level:data['client']['value_answer']})} >
        <Image style = {{"position":"absolute","width":"227px","height":"55px","left":"74px","top":"574px"}} source={require('./template/Group 4.png')}/>
        </TouchableOpacity>
  </View>
  );
}


