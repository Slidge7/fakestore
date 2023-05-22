import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ProductPage from '../screens/ProductPage';




// product card component
const ProductCard = ({ product  }) => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (

        <>
        <ProductPage
            product={product}
            toggleModal={toggleModal}
            isModalVisible={isModalVisible}
        />
    <View style={styles.container}>
        <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>
            <Image
                resizeMode='contain'
                style={{ height: 300, width: "100%", marginTop: 10 }}
                source={{ uri: product.image }}
            />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price} $</Text>
        </View>

        <TouchableOpacity
        onPress={()=>{
               //     navigation.navigate('ProductPage', { 'product' : product });
               toggleModal();
        }}
        >
            <Text>Show Product</Text>
        </TouchableOpacity>
    </View>
                </>
);

    }

export default ProductCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        paddingHorizontal: 10,
        borderRadius: 25,
        elevation: 8,
        backgroundColor: "white",
        overflow: "hidden",
        marginVertical: 10
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
    },
    price: {
        //  textAlign: "right",
        color: "white",
        fontWeight: '700'
    },
    priceContainer: {
        borderRadius: 10,
        backgroundColor: "green",
        marginRight: 10,
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal: 20,
        paddingVertical: 2,
        alignSelf: "flex-start",
        textAlign: "right",
        marginLeft: "auto",
    },
    category: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16
    }

});


