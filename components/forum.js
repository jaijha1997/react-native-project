import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,Button} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { whileStatement } from '@babel/types';
export class forum extends Component {

    goto(){
        this.props.navigation.navigate('items')
    }
    render() {
        return (
            <ScrollView>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                    </TouchableOpacity >
                    <View style={styles.logoMain}>
                        <Text style={styles.logoText}> </Text>
                        <Image
          source={require('../Swito.jpg')}
          style={{width: 120, height: 60}} />
                    </View>
                </View>
                <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:30,marginTop:30,backgroundColor:"white",color:"black"}}> frequently asked questions </Text>  
                
                <Text style={{marginTop:30,backgroundColor:"white",color:"black"}}>Q.Is SWITO a food delivery app? </Text>
                <Text style={{marginTop:0,backgroundColor:"white",color:"black"}}>no  swito is not a food delivery app, here you can only place your order and get it by yourself by going to the canteen counter.</Text>
        

                <Text style={{marginTop:30,backgroundColor:"white",color:"black"}}>Q.how to place order? </Text>
                <Text style={{marginTop:0,backgroundColor:"white",color:"black"}}>go to order page from the main menu , and then navigate to order now and select canteen and food items and pay using paytm.</Text>
        

                <Text style={{marginTop:30,backgroundColor:"white",color:"black"}}>Q.why there is no login for customers? </Text>
                <Text style={{marginTop:0,backgroundColor:"white",color:"black"}}>for hassle free order for our customers we don't have login and register for customers as this app is used for daily snacks order.</Text>
        

                <Text style={{marginTop:30,backgroundColor:"white",color:"black"}}>Q.do swito have a website? </Text>
                <Text style={{marginTop:0,backgroundColor:"white",color:"black"}}>yes swito have website for its customers as well as third party cients who want to register on swito for better customers experience.</Text>
        

                <Text style={{marginTop:30,backgroundColor:"white",color:"black"}}>Q.what are the credentials required to place order? </Text>
                <Text style={{marginTop:0,backgroundColor:"white",color:"black"}}>while placing order only mobile number is required as it serves as primary customer data.</Text>
        

                <Text style={{marginTop:30,backgroundColor:"white",color:"black"}}>Q.currently how many canteens are registered on swito? </Text>
                <Text style={{marginTop:0,backgroundColor:"white",color:"black"}}>there are around 10 canteens registered with swito and soon the number will increase.</Text>
        

                <Text style={{marginTop:30,backgroundColor:"white",color:"black"}}>Q.is ordering from swito is safe? </Text>
                <Text style={{marginTop:0,backgroundColor:"white",color:"black",marginBottom:30}}>swito not only provides hassle free ordering but also the only data of the customer which is the phone number is kept very confidential by our qualified backend team.</Text>
        
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        // backgroundColor:"#FFF",
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
        flex: 1,
        color: '#FFF',
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // right:10
    },
    hamburgerOdd: {
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '100%',
        // marginLeft: '',
        backgroundColor: '#FFF'
    },
})

export default forum
