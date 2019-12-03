import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import BookCount from './components/BookCount'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      totalCount:0,
      readingCount:0,
      readCount:0,
      isAddNewBookVisible:false,
      textInputData:"",
      books:[]
    }
  }

  showAddNewBook = ()=>{
    this.setState({isAddNewBookVisible:true})
  }

  hideAddNewBook = ()=>{
    this.setState({isAddNewBookVisible:false})
  }

  addBook = (book)=>{
    this.setState((prevState, props)=>{
      return {
        books:[...prevState.books, book],
        totalCount:prevState.totalCount+1,
        readingCount:prevState.readingCount+1
      }
    }, ()=>{
      console.log(this.state.books)
    })
  }

  markAsRead =(selectedBook, index)=>{
    let newList = this.state.books.filter(book=> book !== selectedBook)
    console.log(newList)
    this.setState((prevState)=> ({
      books:newList,
      readingCount:prevState.readingCount -1 ,
      readCount:prevState.readCount +1
    }))
  }


  renderItem =(item,index)=>{
    return(
      <View style={{height:50,flexDirection:'row'}}>
<View style={{flex:1, justifyContent:'center', paddingLeft:5}}>
<Text >{item}</Text>
</View>
<TouchableOpacity onPress={()=>this.markAsRead(item, index)}>
          <View style={{height:50, width:100, backgroundColor:'#38C327', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#FFF',fontWeight:'bold'}}>Mark as Read</Text>
          </View>
          </TouchableOpacity>
      </View>
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View
          style={{
            height: 70,
            borderBottomWidth: 0.5,
            borderColor: "#E9E9E9",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 24, paddingTop:5 }}>Book Worm</Text>
        </View>
        <View style={{ flex: 1 }}>
        {this.state.isAddNewBookVisible && (<View style={{height:50, flexDirection:'row'}}>
          <TextInput style={{flex:1, backgroundColor:'#ececec', paddingLeft:10 }}
            placeholder="Enter Book Name"
            placeholderTextColor="grey"
            onChangeText={(text)=> this.setState({textInputData:text})}  
          />
          <TouchableOpacity onPress={()=>this.addBook(this.state.textInputData)}>
          <View style={{height:50, width:50, backgroundColor:'#38C327', alignItems:'center', justifyContent:'center'}}>
          <Ionicons name='ios-checkmark' size={40} color='#FFF'/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.hideAddNewBook}>
          <View style={{height:50, width:50, backgroundColor:'#EA1011', alignItems:'center', justifyContent:'center'}}>
          <Ionicons name='ios-close' size={40} color='#FFF'/>
          </View>
          </TouchableOpacity>

        </View>)}

        <FlatList
  data={this.state.books}
  renderItem={({item}, index)=> this.renderItem(item,index)}
  keyExtractor={(item,index)=> index.toString()}
  ListEmptyComponent={
  <View style={{marginTop:50, alignItems:'center'}}>
<Text style={{fontSize:22, fontWeight:'bold'}}>Not Reading Any Books</Text>
  </View>
  }
/>


          <TouchableOpacity style={{position:'absolute', bottom:20, right:20}}
          onPress={this.showAddNewBook }
          >
          <View
          style={{width:50, height:50, borderRadius:25, backgroundColor:'#AAD1E6', justifyContent:'center', alignItems:'center'}}
          >
            <Text style={{color:'#FFF', fontSize:30}}>+</Text>
          </View>
          </TouchableOpacity>


        </View>
        <View
          style={{
            height: 70,
            borderTopWidth: 0.5,
            borderTopColor: "#E9E9E9",
            flexDirection: "row"
          }}
        >
          <BookCount title="Total" count={this.state.totalCount}/>
          <BookCount title="Reading" count={this.state.readingCount}/>
          <BookCount title="Read" count={this.state.readCount}/>
          
        </View>
        <SafeAreaView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
})
