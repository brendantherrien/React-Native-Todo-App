import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  { FontAwesome5 } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <FontAwesome5 name="trash" size={18} color='#333' />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    text: {
        marginLeft: 10
    }
}); 