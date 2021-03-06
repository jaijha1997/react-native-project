import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image } from 'react-native'

export class aboutUs extends Component {
    render() {
        return (
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
                        <Text style={styles.logoText}>
                        
                        </Text>
                        <Image
          source={require('../Swito.jpg')}
          style={{width: 120, height: 60}} />
                    </View>
                </View>
                <View>
             <Text style={{marginTop:30,textAlign:"justify"}}>
             Swito is a canteen management  website which is made by Rahul Ranjan and Jai jha. Both are the pursuing BCA from Institute of Innovation in Techology and management which is affiliated to Guru Gobind Singh Indraprashtha University.
As we have traditional canteen management system,so this website aim to provide digital way to eliminate problems of traditional canteen sysytem.
The problems we face in canteen are standing in queues and it takes lot of time to give orders and thus canteen management also requires a lot of more human resource to run it.

This application has two interfaces: one for client side and the other for server side. The client side mainly focuses on customers who can place their orders and doesn’t require any credentials and thus can make payment through their phones on the spot. Once an order is placed a token is generated automatically.

On the server side, we provide a user interface for admin or the owners of the canteen who can log in to this application and create their menu and add payment methods. This application supports multiple canteens and a lot of canteens can register. Admins are responsible to update, verify tokens and accept or to reject orders.
             </Text>
             </View>
             <View  style={{flex: 3.5, flexDirection:'row'}}>
                <Image
          source={require('../images/team1.jpg')}
          style={{ width:197,height: 170}} />
          
          


          {/* <View  style={{flex: 3, flexDirection: 'row'}}> */}
          
                <Image
          source={require('../images/team2.jpg')}
          style={{ width:197,height: 170}} />
          
          </View>
        
            </View>
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

export default aboutUs
