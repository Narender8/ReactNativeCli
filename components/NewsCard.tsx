import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Article } from "../screens/types/news"; // Adjust the import path as necessary

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <TouchableOpacity style={styles.card}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {article.title}
        </Text>
        <Text style={styles.source}>{article.source?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    marginBottom: 12,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  source: {
    fontSize: 12,
    color: "gray",
  },
});

export default NewsCard;
