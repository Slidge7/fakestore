import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

const Loading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    );
};


export default Loading

const styles = StyleSheet.create({
loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
