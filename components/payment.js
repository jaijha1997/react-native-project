import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,Button} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
export class payment extends Component {

    goto(){
        alert("you have successfully paid to the canteen owner , your token id is 'XBCFHN345376998' , please take a screenshot")
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
                <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:30,marginTop:0,backgroundColor:"white",color:"red"}}> Pay to 8826178910 Or scan the code and pay , after payment click on confirm payment</Text>  
                <Image
          source={require('../images/pyt.jpg')}
          style={{width: 400, height: 400,marginLeft:0,marginRight:0,marginTop:0}} />
          <Button style={{color:'red',width:50,height:60,marginBottom:50}}title='confirm payment'onPress={()=>this.goto()}/>
          <Text style={{marginBottom:60}}></Text>
              
        
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

export default payment
