import {
  Button,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useEffect, useState } from "react";

import lanForumData from "../data/lanForum.json";

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  img: string;
  author: {
    id: number;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
  tags: string[];
  likes: number;
  comments: Comment[];
}

const HomeScreen = () => {
  const [data, setData] = useState<Post[]>([]); // To store fetched data

  useEffect(() => {
    setData(lanForumData); // Directly set the imported data
    console.log(lanForumData); // Log the data to verify
  }, []);

  // this is for thr btn function
  const handlePress = () => {
    alert("Transparent Button Pressed!");
  };
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowComments = () => {
    setModalVisible(true);
  };

  const handleCloseComments = () => {
    setModalVisible(false);
  };
  const renderPost = ({ item }: { item: Post }) => (
    <View style={style.postContainer}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: item.img }} style={styles.profileImage} />
        <View>
          <Text style={style.title}>{item.title}</Text>
          <View style={styles.headerContainer}>
            <Text style={style.likes}>Likes: {item.likes}</Text>
            <View style={commentStyles.commentsRow}>
              <TouchableOpacity onPress={handleShowComments}>
                <Text style={commentStyles.totalComments}>
                  {item.comments.length > 0
                    ? ` ${item.comments.length} comments`
                    : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Modal for Showing All Comments */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseComments}
      >
        <View style={commentStyles.modalContainer}>
          <View style={commentStyles.modalContent}>
            <Text style={commentStyles.modalTitle}>Comments</Text>
            {item.comments.map((comment) => (
              <View key={comment.id}>
                <Text>{comment.author}:</Text>
                <Text>{comment.content}</Text>
              </View>
            ))}
            <TouchableOpacity
              onPress={handleCloseComments}
              style={commentStyles.closeButton}
            >
              <Text style={commentStyles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* <Text style={style.content}>{item.content}</Text>
      <Text style={style.author}>Author: {item.author.name}</Text>
      <Text style={style.date}>
        Created At: {new Date(item.createdAt).toDateString()}
      </Text>
      <Text style={style.tags}>Tags: {item.tags.join(", ")}</Text>
      <Text style={style.likes}>Likes: {item.likes}</Text>

      <Text style={style.commentsHeader}>Comments:</Text>
      {item.comments.map((comment) => (
        <View key={comment.id} style={style.commentContainer}>
          <Text style={style.commentAuthor}>{comment.author}:</Text>
          <Text style={style.commentContent}>{comment.content}</Text>
        </View>
      ))} */}
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.containerDiv}>
        <View style={styles.headerContainer}>
          <Text style={styles.textDiv}>LinguaLearner Forums</Text>
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>New</Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Followed</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data} // Pass the data to FlatList
          keyExtractor={(item) => item.id.toString()} // Unique key for each post
          renderItem={renderPost} // Render each post using renderPost
          scrollEnabled={false} // Let ScrollView handle the scrolling
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerDiv: {
    marginTop: 20,
    padding: 10,
  },
  postContainer: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  postContent: {
    fontSize: 16,
    color: "#555",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  textDiv: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  postContainer: {
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#FAE9E9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
  },
  tags: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  likes: {
    fontSize: 14,
    color: "#000",
    marginBottom: 12,
  },
});
const commentStyles = StyleSheet.create({
  commentsRow: {
    flexDirection: "row", // Align Likes and Comments in a row
    justifyContent: "space-between", // Space between items
    alignItems: "center",
    marginTop: 10,
  },
  commentText: {
    fontSize: 14,
    color: "#555",
  },
  totalComments: {
    fontSize: 14,
    color: "#007BFF", // Highlight the "View all comments" link
    textDecorationLine: "underline",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
