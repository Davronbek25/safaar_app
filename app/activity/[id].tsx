import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const activities = [
  {
    id: '1',
    type: 'follow',
    user: 'starryskies23',
    action: 'Started following you',
    time: '1d',
    avatar: require('@/assets/images/avatar_1.png'),
  },
  {
    id: '2',
    type: 'like',
    user: 'nebulanomad',
    action: 'Liked your post',
    time: '1d',
    avatar: require('@/assets/images/avatar_2.jpg'),
    image: require('@/assets/images/post-1.png'),
  },
  {
    id: '3',
    type: 'comment',
    user: 'emberecho',
    action: 'Liked your comment',
    time: '2d',
    comment: 'Ishingizga omad!!!',
    avatar: require('@/assets/images/avatar_3.jpg'),
  },
  {
    id: '4',
    type: 'save',
    user: 'lunavoyager',
    action: 'Saved your post',
    time: '3d',
    avatar: require('@/assets/images/avatar_4.jpg'),
    image: require('@/assets/images/post-2.png'),
  },
  {
    id: '5',
    type: 'comment',
    user: 'shadowlynx',
    action: 'Commented on your post',
    time: '4d',
    comment: "I'm going in september. what about you?",
    avatar: require('@/assets/images/avatar_5.jpg'),
    image: require('@/assets/images/post-2.png'),
  },
  {
    id: '6',
    type: 'tour',
    user: 'nebulanomad',
    action: 'Wanted tour with you',
    time: '5d',
    avatar: require('@/assets/images/avatar_1.png'),
    image: require('@/assets/images/post-3.png'),
  },
  {
    id: '7',
    type: 'like',
    user: 'lunavoyager',
    action: 'Liked your comment',
    time: '5d',
    comment: 'This is so adorable!!!',
    avatar: require('@/assets/images/avatar_2.jpg'),
  },
];

const categories = ['Category', 'Category', 'Category', 'Category'];

export default function ActivityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
      </View>

      {/* Category Pills */}
      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.categoryPill, index === 0 && styles.activeCategoryPill]}
            >
              <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {activities.map((activity) => (
          <View key={activity.id} style={styles.activityItem}>
            <Image source={activity.avatar} style={styles.avatar} />
            <View style={styles.activityContent}>
              <View style={styles.activityHeader}>
                <Text style={styles.username}>{activity.user}</Text>
                <Text style={styles.time}>{activity.time}</Text>
                {activity.type === 'follow' && (
                  <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>Follow Back</Text>
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.action}>{activity.action}</Text>
              {activity.comment && (
                <Text style={styles.comment}>{activity.comment}</Text>
              )}
            </View>
            {activity.image && (
              <Image source={activity.image} style={styles.postImage} />
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  categoryContainer: {
    paddingVertical: 16,
    paddingLeft: 16,
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 12,
  },
  activeCategoryPill: {
    backgroundColor: '#000',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  activeCategoryText: {
    color: 'white',
  },
  content: {
    flex: 1,
  },
  activityItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginRight: 8,
  },
  time: {
    fontSize: 12,
    color: '#9CA3AF',
    marginRight: 8,
  },
  followButton: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 'auto',
  },
  followButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  action: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  comment: {
    fontSize: 14,
    color: '#374151',
    fontStyle: 'italic',
    backgroundColor: '#F9FAFB',
    padding: 8,
    borderRadius: 8,
    marginTop: 4,
  },
  postImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginLeft: 8,
  },
});

