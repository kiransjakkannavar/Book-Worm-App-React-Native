import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const BookCount = (props)=>{
  return (
    <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{fontSize:20}}>{props.title}</Text>
            <Text>{props.count}</Text>
          </View>
  )
}

BookCount.propTypes={
  title: PropTypes.string,
  count:PropTypes.number.isRequired
}

BookCount.defaultProps={
  title:'Title',
  count:0
}

export default BookCount
// const styles = StyleSheet.create({})
