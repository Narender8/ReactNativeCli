import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  ListRenderItem,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NewsCard from "../../components/NewsCard";
import { Article, NewsResponse } from "../types/news";

const API_KEY = "4b493442eaf645b09a8993c0e6bad4d6"; // 🔑 Replace with NewsAPI key
const PAGE_SIZE = 10;
const STORAGE_KEY = "cachedArticles";

const NewsReaderApp: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // 🔹 Fetch news articles
  const fetchNews = async (pageNum: number = 1, refresh: boolean = false) => {
    if (loading) return;
    setLoading(true);

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${PAGE_SIZE}&page=${pageNum}&apiKey=${API_KEY}`;
      const response = await axios.get<NewsResponse>(url);
      console.log("API response:", response);
      const newArticles = response.data.articles || [];
      if (newArticles.length === 0) setHasMore(false);

      const updatedArticles = refresh
        ? newArticles
        : [...articles, ...newArticles];

      setArticles(updatedArticles);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedArticles));
      setError(null);
    } catch (err: any) {
      console.log("API Error:", err.message);
      setError("Failed to load news. Showing cached data.");
      const cachedData = await AsyncStorage.getItem(STORAGE_KEY);
      if (cachedData) {
        setArticles(JSON.parse(cachedData) as Article[]);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // 🔹 Load cache on app start
  useEffect(() => {
    const loadCachedArticles = async () => {
      const cachedData = await AsyncStorage.getItem(STORAGE_KEY);
      if (cachedData) {
        setArticles(JSON.parse(cachedData) as Article[]);
      }
    };
    loadCachedArticles();
    fetchNews(page);
  }, []);

  // 🔹 Load next page
  const loadMore = () => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchNews(nextPage);
    }
  };

  // 🔹 Pull-to-refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    setHasMore(true);
    fetchNews(1, true);
  }, []);

  const renderItem: ListRenderItem<Article> = ({ item }) => (
    <NewsCard article={item} />
  );

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="blue" /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
});

export default NewsReaderApp;
