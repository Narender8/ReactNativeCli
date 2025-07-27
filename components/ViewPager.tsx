import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
// This is a simple ViewPager component that can be used in your app
// Make sure to install the package using `npm install @react-native-community/viewpager` or `yarn add @react-native-community/viewpager`

const MyViewPager = () => {

    const pagerRef = useRef<PagerView>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const { width } = Dimensions.get('window');
    const pages = ['Page 1', 'Page 2', 'Page 3'];

    const handlePageChange = (e: any) => {
        setCurrentPage(e.nativeEvent.position);
      };

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
          <PagerView 
              style={styles.viewPager}
              initialPage={0}
              onPageSelected={handlePageChange}
              ref={pagerRef}
              pageMargin={1}
              overScrollMode="always"
              orientation="horizontal"
              scrollEnabled={true}
              >
              {pages.map((page, index) => (
                  <View key={index} style={styles.page}>
                  <Text>{page}</Text>
                  </View>
              ))}
              
          </PagerView >
          <View style={styles.dotsContainer}>
              {pages.map((_, index) => (
                  <View
                      key={index}
                      style={[
                          styles.dot,
                          currentPage === index && styles.activeDot,
                      ]}
                  />
              ))}
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
        height: 400,
      },
  viewPager: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Full width of the screen
    backgroundColor: 'green', // Optional background color
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: 'green', // Optional background color for dots container
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: 'yellow', // Color for the active dot
  },
});
export default MyViewPager;
