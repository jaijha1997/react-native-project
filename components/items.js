import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image,Button} from 'react-native'

export class items extends Component {
    goto(){
        this.props.navigation.navigate('payment')
    }
    render() {
        return (
            <View>
             <View >
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
                <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:50,marginTop:60,backgroundColor:"orange"}}>items list </Text>
                <View>
             
            


          {/* <View  style={{flex: 3, flexDirection: 'row'}}> */}
          </View>
          
          <Button style={{backgroundColor:'red'}}title='Samosa Price-10Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:60}}title='noodles Price-10Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='sandwich Price-25Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='momos Price-30Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='paneer paranthe Price-40Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='chicken soup Price-10Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='chowmein Price-110Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='biryani Price-120Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='chai Price-10Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='coffee Price-30Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='rice Price-90Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='pepsi Price-20Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='chilli potato Price-100Rs'onPress={()=>this.goto()}/>
          <Button style={{backgroundColor:'red',marginTop:20}}title='bread pakoda-20Rs'onPress={()=>this.goto()}/>
          <Text style={{textAlign:"center",color:"red",fontSize:20}}>click on the item to pay and order</Text>
          
          

          
          


          {/* <View  style={{flex: 3, flexDirection: 'row'}}> */}
          
         
        
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

export default items
