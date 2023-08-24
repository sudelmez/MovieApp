/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './movie_card.style';

const MovieCard = (props) => {
    useEffect(() => {
        console.log(props);
    }, [props]);
    return (
        <View style={styles.movieItem}>
            <Image source={{ uri: props.url }} style={styles.image} />
            <Text style={styles.movieName}>{props.name}</Text>
        </View>
    );
};

export default MovieCard;
