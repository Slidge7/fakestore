import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryList from './src/components/CategoriesList';
import ProductsList from './src/components/ProductsList';
import Loading from './src/components/Loading';

const App = () => {


  const handleSearch = (text) => {

    setSearchQuery(text);

    // add product that contain the search text value
    const filteredProducts = data.filter(product => product.title.toLowerCase().includes(text.toLowerCase()));

    //set product list state
    setFilteredData(filteredProducts);
  }

  const handleCategorySelection = (category) => {

    //check if the category selected or unselected
    if (selectedCategory === category) {
      setSelectedCategory(null);
      // if the category unselected = set product list to all products
      setFilteredData(data);

    } else {

      // add product that contain the selected category
      const filteredProducts = data.filter(
        (product) => product.category === category
      );

      // set product list
      setFilteredData(filteredProducts);

      // set selected category
      setSelectedCategory(category);
    }

  };


  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState();

  const [filteredData, setFilteredData] = useState([]);

  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetchProducts();
    console.log("excute fetching function")
  }, []);

  const fetchProducts = async () => {
    try {
      await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => { handleResponse(json) })
      console.log("data fetched")

    } catch (error) {
      console.log('Error fetching Products:', error);
    }
  }

  const handleResponse = (json) => {

    // set data as the main source for search and category filter
    setData(json)

    // set product list 
    setFilteredData(json);

    // set category list from data to make an array that contain each category one single time because is duplicated in the products
    const uniqueCategories = Array.from(new Set(json.map(product => product.category)));

    // set categories list
    setCategories(uniqueCategories);

    setLoading(false)
  }


  return (
    <View style={{ flex: 1, backgroundColor: "#D7FFFE", paddingTop: 30 }}>
      {loading ?

        <Loading />
        :

        <>
          <View>
            <Text style={styles.category}>Select Category</Text>

            {/* categories list horizontal scrolling   */}
            <CategoryList
              selectedCategory={selectedCategory}
              handleCategorySelection={handleCategorySelection}
              categories={categories} />
          </View>


          {/* search input */}
          <TextInput
            style={styles.searchInput}
            placeholder="serch in products"
            onChangeText={handleSearch}
            value={searchQuery}
          //    onSubmitEditing={handleSearch}
          />

          {/* product list view */}
          <ProductsList
            data={filteredData}
          />
        </>
      }
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
  }

});


