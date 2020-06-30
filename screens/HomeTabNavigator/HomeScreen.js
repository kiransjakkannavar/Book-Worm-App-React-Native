import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  // TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import CustomActionButton from "../../components/CustomActionButton";
import { Ionicons } from "@expo/vector-icons";
import BookCount from "../../components/BookCount";
import colors from "../../assets/colors";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: "",
      books: [],
      booksReading: [],
      booksRead: []
    };
  }

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };

  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false });
  };

  addBook = (book) => {
    this.setState(
      (prevState, props) => {
        return {
          books: [...prevState.books, book],
          booksReading: [...prevState.books, book]
          // totalCount: prevState.totalCount + 1,
          // readingCount: prevState.readingCount + 1,
        };
      },
      () => {
        this.hideAddNewBook();
      }
    );
  };

  markAsRead = (selectedBook, index) => {
    let books = this.state.books.filter((book) => book !== selectedBook);
    let booksReading = this.state.booksReading.filter(bookReading => bookReading !== selectedBook)
    console.log(books);
    this.setState((prevState) => ({
      books: books,
      booksReading: booksReading,
      booksRead: [...prevState.booksRead, selectedBook]
      // readingCount: prevState.readingCount - 1,
      // readCount: prevState.readCount + 1,
    }));
  };

  renderItem = (item, index) => {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItem}>
          <Text>{item}</Text>
        </View>
        <CustomActionButton
          onPress={() => this.markAsRead(item, index)}
          style={styles.markAsReadButton}
        >
          <Text style={styles.markAsReadButtonText}>Mark as Read</Text>
        </CustomActionButton>

        {/* <TouchableOpacity onPress={() => this.markAsRead(item, index)}>
          <View
            style={{
              height: 50,
              width: 100,
              backgroundColor: "#38C327",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>
              Mark as Read
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Book Worm</Text>
        </View>
        <View style={{ flex: 1 }}>
          {this.state.isAddNewBookVisible && (
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Book Name"
                placeholderTextColor="grey"
                onChangeText={(text) => this.setState({ textInputData: text })}
              />

              <CustomActionButton
                onPress={() => this.addBook(this.state.textInputData)}
                style={styles.addBookButton}
              >
                <Ionicons name="ios-checkmark" size={40} color="#FFF" />
              </CustomActionButton>

              <CustomActionButton
                onPress={() => this.hideAddNewBook()}
                style={styles.hideBookButton}
              >
                <Ionicons name="ios-close" size={40} color="#FFF" />
              </CustomActionButton>

              {/* <TouchableOpacity
                onPress={() => this.addBook(this.state.textInputData)}
              >
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "#38C327",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="ios-checkmark" size={40} color="#FFF" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.hideAddNewBook}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "#EA1011",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="ios-close" size={40} color="#FFF" />
                </View>
              </TouchableOpacity> */}
            </View>
          )}

          <FlatList
            data={this.state.books}
            renderItem={({ item }, index) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View style={styles.listEmptyContainer}>
                <Text style={styles.listEmptyText}>Not Reading Any Books</Text>
              </View>
            }
          />

          <CustomActionButton
            onPress={this.showAddNewBook}
            style={styles.showAddBookButton}
            position="right"
          >
            <Text style={styles.showAddBookButtonText}>+</Text>
          </CustomActionButton>

          {/* <TouchableOpacity
            style={{ position: "absolute", bottom: 20, right: 20 }}
            onPress={this.showAddNewBook}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#AAD1E6",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 30 }}>+</Text>
            </View>
          </TouchableOpacity> */}
        </View>
        <View style={styles.footer}>
          <BookCount title="Total Books" count={this.state.books.length} />
          <BookCount title="Reading" count={this.state.booksReading.length} />
          <BookCount title="Read" count={this.state.booksRead.length} />
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: 70,
    borderBottomWidth: 0.5,
    borderColor: colors.borderColor,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 24, paddingTop: 5 },
  textInputContainer: { height: 50, flexDirection: "row" },
  textInput: { flex: 1, backgroundColor: colors.bgTextInput, paddingLeft: 10 },
  addBookButton: { backgroundColor: colors.bgSuccess },
  hideBookButton: { backgroundColor: colors.bgError },
  listItemContainer: { height: 50, flexDirection: "row" },
  listItem: { flex: 1, justifyContent: "center", paddingLeft: 5 },
  markAsReadButton: { width: 100, backgroundColor: colors.bgSuccess },
  markAsReadButtonText: { color: colors.white, fontWeight: "bold" },
  listEmptyContainer: { marginTop: 50, alignItems: "center" },
  listEmptyText: { fontSize: 22, fontWeight: "bold" },
  showAddBookButton: {
    backgroundColor: colors.bgPrimary,
    borderRadius: 25,
  },
  showAddBookButtonText: {
    backgroundColor: colors.bgPrimary,
    borderRadius: 25,
    color: colors.white
  },
  footer: {
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: colors.borderColor,
    flexDirection: "row",
  },
});
