import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import queryString from 'query-string';
import {
    Container,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
} from 'native-base';

export default class ContactScreen extends Component {
    state = {
        isLoading: true,
        isLoadingMore: false,
        page: 1,
        countItem: 0,
        items: [],
    };

    onEndReachedCalledDuringMomentum = true;

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async (page = 1) => {
        try {
            this.setState({ isLoading: true });

            const qs = queryString.stringify({
                q: 'bitcoin',
                sortBy: 'publishedAt',
                apiKey: '8843805772054183ac730209bfdf156a',
                page,
            });

            const uri = `http://newsapi.org/v2/everything?${qs}`;

            const object = await fetch(uri).then(response => response.json());

            this.setState(prevState => {
                return {
                    isLoading: false,
                    isLoadingMore: false,
                    countItem: object.totalResults,
                    items:
                        page === 1
                            ? object.articles
                            : [...prevState.items, ...object.articles],
                };
            });
        } catch (error) {
            // TODO handle error

            this.setState({ isLoading: false });
        }
    };

    handleLoadMore = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.onEndReachedCalledDuringMomentum = true;
            const { page } = this.state;
            const addPage = page + 1;
            this.setState({ isLoadingMore: true, page: addPage });
            this.fetchData(addPage);
        }
    };

    render() {
        const { isLoading, isLoadingMore, items } = this.state;

        if (isLoading && !isLoadingMore) {
            return (
                <View style={styles.spinnerLoad}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <Container>
                <FlatList
                    style={{ flex: 1 }}
                    data={items}
                    extraData={this.state}
                    renderItem={({ item }) => (
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={{ uri: 'https://minotar.net/avatar/user' }}
                                    />
                                    <Body>
                                        <Text>{item.author}</Text>
                                        <Text note>{item.publishedAt}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <TouchableOpacity>
                                    <Body>
                                        <Image
                                            source={{
                                                uri: item.urlToImage || 'https://via.placeholder.com/500',
                                            }}
                                            style={{ height: 200, width: '100%', flex: 1 }}
                                        />
                                        <Text>
                                            {item.title}
                                        </Text>
                                    </Body>
                                </TouchableOpacity>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="thumbs-up" />
                                        <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Right>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 Comments</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    )}
                    ListFooterComponent={isLoadingMore && (
                        <View style={styles.spinnerLoadMore}>
                            <ActivityIndicator />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0.4}
                    onEndReached={this.handleLoadMore}
                    onMomentumScrollBegin={() => {
                        this.onEndReachedCalledDuringMomentum = false;
                    }}
                />

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerLoad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerLoadMore: {
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
