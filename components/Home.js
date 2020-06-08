import React, { Component } from 'react'
import MarqueeText from 'react-native-marquee'
import {View,Text,StyleSheet,TouchableOpacity,Button,Image} from 'react-native'
import Swiper from 'react-native-web-swiper'
import { ScrollView } from 'react-native-gesture-handler';

 class Home extends Component {
    constructor(props){
        super(props);
        }
        goto(){
            this.props.navigation.navigate('order')
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
                        <Text style={styles.logoText}>
                            
                        </Text>
                        <Image
          source={require('../Swito.jpg')}
          style={{width: 160, height: 60}} />
                    </View>
                </View>
                
                
                <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:30,marginTop:30,backgroundColor:"black",fontStyle:"italic",color:"white"}}> welcome to swito! </Text>
                    
                    <Image source={require("../images/portfolio/1.jpg")} style={styles.img}/>
                     
                 
                 <View>
                     <TouchableOpacity  onPress={() => navigate("aboutUs")}>
                        <Image source={require("../images/portfolio/2.jpg")} style={styles.cat}/>
                
                        
                          <Image source={require("../images/portfolio/3.jpg")} style={styles.cat2}/>
                          </TouchableOpacity>             
                </View>



                <View>
                <TouchableOpacity>
                    <Image source={require("../images/portfolio/4.jpg")} style={styles.cat}/>
                        
                        
                        <Image source={require("../images/5.jpg")} style={styles.cat2}/>
                        </TouchableOpacity>
                </View>

                <View style={styles.container}>
        <MarqueeText
          style={{ fontSize: 24 }}
          duration={10000}
          marqueeOnStart
          loop
          marqueeDelay={1000}
          marqueeResetDelay={1000}
        >
         <Text style={{textDecorationStyle:"solid",fontSize:30,backgroundColor:"black",color:"white",textAlign:"center"}}> hurry and order now , get best offers on snacks.... </Text>
        </MarqueeText>
      </View>






                 
                
                {/* <Text style={{textDecorationStyle:"solid",fontSize:30,backgroundColor:"black",color:"white",textAlign:"center"}}> only delicious snacks, served here! </Text> */}
                <Button style={{color:'blue',width:50,height:40,marginTop:40}}title='order now!'onPress={()=>this.goto()}/>
            
            



                <View>
                <TouchableOpacity><Image source={require("../images/portfolio/6.jpg")} style={styles.cat}/>
                        
                        
                       <Image source={require("../images/portfolio/7.jpg")} style={styles.cat2}/>
                       </TouchableOpacity>
                        </View>


                <View>
                <TouchableOpacity><Image source={require("../images/portfolio/8.jpg")} style={styles.cat}/>
                    
                        
                        <Image source={require("../images/portfolio/9.jpg")} style={styles.cat2}/>
                        </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity><Image source={require("../images/portfolio/14.jpg")} style={styles.cat}/>
                        
                        
                        <Image source={require("../images/portfolio/13.jpg")} style={styles.cat2}/>
                            </TouchableOpacity>               
                </View> 
                
               
                
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
    img:{
        height:180,
        width:"100%",
        marginBottom: 2.5,
    
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
    cat:{
        height:150,
        width:"49.5%",
        borderColor:"black",
    margin: 2.5,
    },
    cat2:{
        height:150,
        width:"49.5%",
       // position:"relative",
       position:"absolute",
        left:"50.5%",
        borderColor:"black",
      margin: 2.5,
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '100%',
        // marginLeft: '',
        backgroundColor: '#FFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
      },
   
})

export default Home
