import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { Image, TextInput } from 'dripsy';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");

    useEffect(() => {
        askPermissions();
    }, [hasPermission]);

    const askPermissions = () => {
        (async () => {
            console.log("Asking for permissions");
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == "granted");
        })();
    };

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    if (hasPermission && hasPermission) {
        console.log("Camera opened, permission true");
        return (
            <View>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ minWidth:'100%', minHeight:'90%' }}
                />
                {scanned && <Button title={'Escanear otra vez'} onPress={() => setScanned(false)} />}
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <View
                style={{
                    padding: 100,
                }}
            >
                <Text>
                    Escaneando...
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});