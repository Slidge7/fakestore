import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

// single category component
const CategoryHolder = ({ category, onPress, selectedCategory }) => (
    <TouchableOpacity

        // switch style by comparing selected category with category name
        style={selectedCategory === category ? styles.selectedCategory : styles.categoryHolder}
        onPress={onPress}
    >
        <Text style={selectedCategory === category ? { fontSize: 18, color: "white" } : { fontSize: 18 }}>{category}</Text>
    </TouchableOpacity>
);



// categories horizontal flatlist component 
const CategoryList = ({ categories, handleCategorySelection, selectedCategory }) => {
    return (
        <View>
            <Text style={styles.category}>Select Category</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => (
                    <CategoryHolder
                        category={item}
                        onPress={() => handleCategorySelection(item)}

                        // selected category to switch style
                        selectedCategory={selectedCategory}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}


export default CategoryList;


const styles = StyleSheet.create({

    categoryHolder: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 2
    },
    selectedCategory: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: "#4fa9ff",
        paddingHorizontal: 20,
        paddingVertical: 2
    }, category: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16
    }
});