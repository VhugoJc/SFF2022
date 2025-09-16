import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { Image, TextInput } from 'dripsy';
import { userAPI } from '../../api/UserApi';
import { PreliminarySaleData } from '../../interfaces/SalesInterface';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function ScanScreen() {
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [scanned, setScanned] = useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        askPermissions();
    }, [hasPermission]);

    const askPermissions = () => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status == "granted");
        })();
    };

    const handleBarCodeScanned = async ({ type, data }: any) => {
        setScanned(true);
        try {
            const preliminaryData = await userAPI.post<PreliminarySaleData>('/sale', {
                jwtSaleData: data
            });
            const {presale, user, totalAmount}=preliminaryData.data;
            navigation.navigate('Venta en Proceso',{
                presale,
                user,
                totalAmount
            });

        } catch (err: any) {
            if (err?.response.data.message) {
                return Alert.alert('Error en la venta', err?.response.data.message, [{
                    text: 'Ok'
                }])
            }
            Alert.alert('Error en la venta', 'Ocurrió un error inesperado', [{
                text: 'Ok'
            }])
        }

    };
    if (hasPermission && hasPermission) {
        return (
            <View>
                <CameraView
                    onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ minWidth: '100%', minHeight: '90%' }}
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr'],
                    }}
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
                    Necesitas aceptar los permisos de la cámara en la aplicación para poder escanear el código QR
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