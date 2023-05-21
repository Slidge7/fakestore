import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const ProductsList = ({ data }) => {
    return (

        <FlatList
            data={data}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(product) => product.id.toString()}
        />
    );
}


export default ProductsList