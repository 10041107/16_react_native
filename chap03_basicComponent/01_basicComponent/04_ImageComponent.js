import { View, Image } from "react-native";

const ImageComponent = ({ isTrue, styles }) => {
    return (<>
            <Image
                style={styles}
                source={require("../image/썬다람쥐.png")}
            />
            {isTrue && (
                <Image
                    style={styles}
                    source={{
                        uri: "https://i.namu.wiki/i/f36ljNgJYxuOT2e0-4-YN-ZCit4a7gOhL6XZYj-2abqUsrWCp0ho7qnjgkkn1R5hripKAE5F-9FsMsTBA249VwjwOuohq2ilEKZqbNDGwimmKPNS0FFyuucKUpqeKTAXI8oNuxxnLOWj-2-3CsBD4A.webp"
                    }}
                />
            )}
            </>
    );
};

export default ImageComponent;
