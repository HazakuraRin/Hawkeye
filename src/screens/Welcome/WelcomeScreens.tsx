import React, {useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import R from '../../resources/R';
import {NextButton} from '../../components/SVG/NextButton';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Container} from '../../components/Container';
import {Spacing} from '../../components/Spacing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLaunchDispatch} from '../../context/launchContext';

interface WelcomeScreensProps {}

export const WelcomeScreens: React.FC<WelcomeScreensProps> = () => {
  const launchDispatch = useLaunchDispatch();
  let slider: any = useRef<AppIntroSlider>();
  const slides = [
    {
      key: 'one',
      title: R.strings.welcome.title1,
      text: R.strings.welcome.subtitle1,
      image: R.images.welcomeSlide1,
    },
    {
      key: 'two',
      title: R.strings.welcome.title2,
      text: R.strings.welcome.subtitle2,
      image: R.images.welcomeSlide2,
    },
    {
      key: 'three',
      title: R.strings.welcome.title3,
      text: R.strings.welcome.subtitle3,
      image: R.images.welcomeSlide3,
    },
  ];

  const goToGeneral = async () => {
    launchDispatch({type: 'setSecondLaunch', isSecondLaunch: true});
    await AsyncStorage.setItem('second_launch', JSON.stringify(true));
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={{marginHorizontal: 20, flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{alignItems: 'center', justifyContent: 'space-around', marginTop: '10%'}}>
          <Image source={item.image} />
          <Spacing size={20} vertical />
          <Text style={{fontFamily: R.fonts.poppinsSemiBold, fontSize: 28, color: R.colors.black, textAlign: 'center'}}>
            {item.title}
          </Text>
          <Spacing size={20} vertical />
          <Text style={{fontFamily: R.fonts.poppinsRegular, fontSize: 18, textAlign: 'center', color: R.colors.silver}}>
            {item.text}
          </Text>
          <Spacing size={20} vertical />
        </View>
      </View>
    );
  };
  return (
    <Container>
      <AppIntroSlider
        ref={(ref) => (slider = ref)}
        data={slides}
        renderItem={renderItem}
        showNextButton={true}
        showDoneButton={false}
        renderPagination={(slideNumber) => (
          <View style={{alignItems: 'center', marginBottom: '10%'}}>
            <TouchableOpacity
              onPress={() =>
                slideNumber === slides.length - 1 ? goToGeneral() : slider?.goToSlide(slideNumber + 1, true)
              }
              activeOpacity={0.7}>
              <NextButton />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
        <Image source={R.images.zaps} />
        <Text>{R.strings.welcome.sponsor}</Text>
      </View>
    </Container>
  );
};
