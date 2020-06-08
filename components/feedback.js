import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,Button} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
export class feedback extends Component {

    goto(){
        alert("thank you for the feedback");
        this.props.navigation.navigate('Home')
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
                <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:30,marginTop:30,backgroundColor:"black",color:"white"}}> welcome to swito! </Text>
                <Text style={{textAlign:"center",fontSize:20,marginTop:0,backgroundColor:"white",color:"black"}}> give your valuable feedback </Text>  
                <Text style={{textAlign:"left",fontSize:20,margintop:20}}>Enter your name</Text>
                <TextInput style={{marginBottom:15,height:40,borderColor: '#7a42f4',backgroundColor:"white",borderWidth: 1}}/>

                <Text style={{textAlign:"left",fontSize:20,margintop:20}}>Enter your email</Text>
                <TextInput style={{marginBottom:15,height:40,borderColor: '#7a42f4',backgroundColor:"white",borderWidth: 1}}/>

                <Text style={{textAlign:"left",fontSize:20,margintop:20}}>Enter your phone number</Text>
                <TextInput style={{marginBottom:15,height:40,borderColor: '#7a42f4',backgroundColor:"white",borderWidth: 1}}/>

                <Text style={{textAlign:"left",fontSize:20,margintop:20}}>feedback</Text>
                <TextInput style={{marginBottom:15,height:80,marginBottom:50,borderColor: '#7a42f4',backgroundColor:"white",borderWidth: 1}}/>
                <Button style={{color:'grey',width:50,height:40}}title='submit'onPress={()=>this.goto()}/>
          
        
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

export default feedback
