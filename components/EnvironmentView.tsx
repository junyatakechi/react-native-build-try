import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Platform } from 'react-native';
import { API_URL, APP_ENV } from '@env';

export const EnvironmentView = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>.env変数表示</Text>
      
      <View style={styles.row}>
        <Text style={styles.key}>API_URL:</Text>
        <Text style={styles.value}>{API_URL || '未設定'}</Text>
      </View>
      
      <View style={styles.row}>
        <Text style={styles.key}>APP_ENV:</Text>
        <Text style={styles.value}>{APP_ENV || '未設定'}</Text>
      </View>
      
      <View style={styles.row}>
        <Text style={styles.key}>Platform:</Text>
        <Text style={styles.value}>{Platform.OS}</Text>
      </View>
      
      <Text style={styles.note}>
        .envファイルに設定されている環境変数が上記に表示されます。
        表示されない場合は、babel.config.jsの設定を確認してください。
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  key: {
    flex: 1,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    flex: 2,
    color: '#333',
  },
  note: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fffde7',
    borderRadius: 4,
    fontSize: 12,
    color: '#666',
  }
});
