import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default class CreatePost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        previewImage: "image_1",
        dropdownHeight: 40,
      };
    }
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }

    render() {
        if (this.state.fontsLoaded) {
          SplashScreen.hideAsync();
          let preview_images = {
            image_1: require("../assets/post_image_1.jpg"),
            image_2: require("../assets/post_image_2.jpg"),
            image_3: require("../assets/post_image_3.jpg"),
            image_4: require("../assets/post_image_4.jpg"),
            image_5: require("../assets/post_image_5.jpg"),
            image_6: require("../assets/post_image_6.jpg"),
            image_7: require("../assets/post_image_7.jpg"),
          };
          console.log(this.state.previewImage);

          return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                        source={require('../assets/logo.png')}
                        style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>New Post</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image
                        source={preview_images[this.state.previewImage]}
                        style={styles.previewImage}
                        ></Image>
                        <View style={{ height:
                        RFValue(this.state.dropdownHeight)}}>
                            <DropDownPicker
                            item={[
                                {label:'image 1',value:'image_1'},
                                {label:'image 2',value:'image_2'},
                                {label:'image 3',value:'image_3'},
                                {label:'image 4',value:'image_4'},
                                {label:'image 5',value:'image_5'},
                                {label:'image 6',value:'image_6'},
                                {label:'image 7',value:'image_7'},
                            ]}
                            defaultValue={this.state.previewImage}
                            containerStyle={{
                                height:40,
                                borrderRadius:20,
                                marginBottom:10
                            }}
                            onOpen={() => {
                                this.setState({dropdownHeight:170});
                            }}
                            onClose={() => {
                                this.setState({dropdownHeight:40});
                            }}
                            style={{backgroundColor:'transparent'}}
                            itemStyle={{
                                justifyContent:'flex-start'
                            }}
                            dropDownStyle={{backgroundColor:'#2a2a2a'}}
                            labelStyle={{
                                color:'white'
                            }}
                            arrowStyle={{
                                color:'white'
                            }}
                            onChangeItem={item =>
                            this.setState({
                                previewimages:item.value
                            })
                        }
                        />
                        </View>
                        <TextInput
                        style={styles.inputFont}
                        onChangeText={caption => this.setState({caption})}
                        placeholder={'Caption'}
                        placeholderTextColor='white'
                        />
                    </ScrollView>
                </View>
                <View style={{flex:0.08}}/>
            </View>
          )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row",
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center",
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
    },
    fieldsContainer: {
      flex: 0.85,
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain",
    },
    inputFont: {
      height: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      marginTop: RFValue(10),
    },
    inputFontExtra: {
      marginTop: RFValue(15),
    },
    inputTextBig: {
      textAlignVertical: "top",
      padding: RFValue(5),
    },
  });
  