import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, View, Text, Image } from 'react-native'

export default (props) => {
    const [resume, setResume] = useState({ 
        name: '',
        nickname: '',
        age: '',
        skill: '',
     })

     useEffect(() => {
         const id = props.route.params.id
         axios.get('https://movie-api.igeargeek.com/users/profile/' + id)
         .then((res) => {
             console.log('res', res.data)
             setResume(res.data)
         }).catch((error) => {
             console.log('error', error)
         })

     }, [])

    return (
        <View style = {style.container}>
            <Image 
            style={style.avatar} 
            source={{uri: 'https://movie-api.igeargeek.com/' + resume.avatar}}>
            </Image>
            <View style = {style.textLine}>
                <Text>Full name: {resume.name}</Text>
            </View>
            <View style = {style.textLine}>
                <Text>Nickname: {resume.nickname}</Text>
            </View>
            <View style = {style.textLine}>
                <Text>Age: {resume.age}</Text>
            </View>
            <View style = {style.textLine}>
                <Text>Skill: {resume.skill}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: { padding: 30, backgroundColor: 'white', minHeight: '100%'},
    textLine: { marginBottom:20 },
    label: { fontWeight: 'bold' },
    avatar: { width: '100%', height: 360 , marginBottom: 20 }
})