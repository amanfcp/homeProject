import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import { connect, useDispatch } from 'react-redux'
import { itemsFetchData } from './actions/items'

import Axios from 'axios'

function App() {

  const dispatch = useDispatch()

  const mapStateToProps = (state) => {
    return {
      items: state.item,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(itemsFetchData(url))
    };
  };

  const [items, setItems] = useState([])

  const [hasErrored, setHasErrored] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }, [])

  const fetchData = (url) => {
    setIsLoading(true);

    Axios.get(url)
      .then(response => {
        setHasErrored(false)
        items.push(...response.data)
        setIsLoading(false)
      })
      .catch(() => setHasErrored(true))
  }


  if (hasErrored) { return <Text>Sorry, there was an error loading the items</Text> }
  if (isLoading) { return <Text>Loading...</Text> }

  return (
    <View
      style={styles.main}
    >
      <FlatList
        keyExtractor={item => item.id}
        data={items}
        initialNumToRender={10}
        renderItem={({ item }) => {
          return <Text>{`${item.id}.  ${item.label}`}</Text>
        }}
      />
    </View>
  )
  // < View
  //   style={styles.main}
  // >
  //   )
  // <FlatList
  //     contentContainerStyle={styles.main}
  //     data={items}
  //     renderItem={({ item }) => (
  //       <Text>{`${item.id}. ${item.label}`}</Text>
  //     )}
  //   />
  // </View >
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect(mapDispatchToProps,mapStateToProps)(App);