import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview';
import axios from 'axios'

export default function MoviesDetail({ navigation, route }) {
    const [movies, setMovies] = useState({
        genre: []
    })

    useEffect(() => {
        const itemId = route.params.id
        axios.get(`https://movie-api.igeargeek.com/movies/${itemId}`)
            .then(res => {
            const movies = res.data;
            setMovies(movies)
        })
      }, [])



    return (
        <ScrollView
        showsVerticalScrollIndicator = {false} 
        style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
            
            <WebView
                source={{uri: movies.youtubeUrl}}         
                style={{height: 200, flex:1}}/>

                <View style={{flex: 2, padding: 15}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={{ uri: movies.posterUrl }} 
                        style={{ flex: 1, height: 180 }}
                        resizeMode={'stretch'}></Image>
                        <View style={{flex:2, marginLeft: 15}}>
                            <Text style={{color: 'black' ,fontSize: 17}}>{movies.name}</Text>
                            <Text style={{ color: 'black' }}>ประเภท : {movies.genre.join(',')}</Text>
                            <Text style={{ color: 'black' }}>วันที่เข้าฉาย : {movies.showingAt}</Text>
                            <Text style={{ color: 'black' }}>ระยะเวลา : {movies.duration} นาที</Text>
                        </View>
                    </View>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginVertical: 6}}/>
                    <View style={{flex: 1}}>
                    <Text style={{ color: 'black' }}>เรื่องย่อ :</Text>
                    <Text style={{ color: 'black' , lineHeight: 30}}>{movies.description}</Text>
                    </View>
                </View>
                
                
               
               
        </ScrollView>
    )
}


