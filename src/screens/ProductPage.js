import {
    View, Image, Text, ScrollView, Pressable, StyleSheet
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Modal from 'react-native-modal';


const ProductPage = ({ toggleModal, product, isModalVisible }) => {

    // const route = useRoute();
    // const product = route.params.product;



    return (
        <Modal style={{ backgroundColor: "white", borderRadius: 15 }} isVisible={isModalVisible} onBackdropPress={toggleModal}>
            {/* Modal content goes here */}
            <View style={{ flex: 1 }}>

                <ScrollView style={{ marginBottom: 100, paddingTop: 10 }}>

                    <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Image
                            resizeMode='contain'
                            style={{ height: 300, width: "100%", marginTop: 10 }}
                            source={{ uri: product.image }}
                        />
                    </View>
                    <View style={{ padding: 20 }}>
                        {/* Title */}
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.category}>{product.category}</Text>
                        <View style={styles.infoContainer}>

                            <View style={styles.rating}>
                                <Text style={styles.rateCount}>{product.rating.count}</Text>
                                <Text style={styles.rate}>{product.rating.rate}</Text>
                            </View>
                            <View style={styles.priceContainer}>
                                <Text style={styles.price}>{product.price} $</Text>
                            </View>
                        </View>
                        {/* Description */}
                        <Text style={styles.description}>{product.description}</Text>
                    </View>
                </ScrollView>

                {/* Add to cart button */}
                <Pressable
                    //onPress={addToCart} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                </Pressable>

                {/* Navigation icon */}
            </View>
        </Modal>

    );
};

export default ProductPage;


const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 18,
    //    marginLeft: 10,
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
        paddingHorizontal: 20,
        paddingVertical: 2,
     //   alignSelf: "flex-start",
        textAlign: "right",
        marginLeft: "auto",
    },
    rating:{
        borderRadius: 5,
        backgroundColor: "green",
        paddingHorizontal: 20,
        paddingVertical: 2,
        //   alignSelf: "flex-start",
      //  textAlign: "right",
      //  marginLeft: "auto",
        flexDirection: "row",
     //   alignItems: "center"
    },
    category: {
      //  marginLeft: 10,
        marginTop: 5,
        fontSize: 16
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300',
    },

    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      //  borderWidth:1
    }, 
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    rate:{
        marginHorizontal:5,
        color:"white"
    },
    rateCount: {
        marginHorizontal: 5,
        color: "white"
    }
});
