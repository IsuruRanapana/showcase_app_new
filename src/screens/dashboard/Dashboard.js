// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 11:20 AM  *** //


import {FlatList, View} from 'react-native';
import {ListTile} from '../../components';
import gridViewItems from '../../mocks/gridViewMocks';
import styles from './Dashboard.styles'

export default function Dashboard({navigation}){

    const renderItem = ({item, index}) => {
        return (
            <ListTile item={item} navigation={navigation}/>
        );
    };
    return (
        <View>
            <View style={styles.flatList}>
                <FlatList
                    data={gridViewItems}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}
