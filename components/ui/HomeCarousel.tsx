import * as React from "react";
import {Dimensions, Image, Text, View, StyleSheet} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

function HomeCarousel() {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                ref={ref}
                width={width}
                height={width / 2.5}
                data={data}
                onProgressChange={progress}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={require('@/assets/images/uzb_travel_logo_white.jpg')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                )}
            />

            <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={{
                    width: 7,           // set to your desired small size
                    height: 7,          // set to your desired small size
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderRadius: '50%'     // half of width/height for a perfect circle
                }}
                containerStyle={{ gap: 5 }}
                onPress={onPressPagination}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 344,
        height: 136,
    },
})

export default HomeCarousel;