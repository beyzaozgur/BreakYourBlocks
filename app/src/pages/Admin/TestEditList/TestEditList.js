import React, { useState } from "react";
import { View, FlatList } from "react-native";

import test_data from '../../../test-data.json';
import TestEditCard from '../../../components/TestEditCard';
import SearchBar from '../../../components/SearchBar';
import styles from './TestEditList.style';


function TestEditList() {

    const [list, setList] = useState(test_data);

    const renderTest = ({ item }) => <TestEditCard test={item} />;

    const renderSeparator = () => <View style={styles.seperator}></View>

    const handleSearch = text => {
        const filteredList = test_data.filter(test => {
            const searchedText = text.toLowerCase();
            const currentTitle = test.content.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });

        setList(filteredList);
    }

    return (
        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <FlatList
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={item => item.id}
                data={list}
                renderItem={renderTest}>
            </FlatList>
        </View>
    )
}

export default TestEditList;