import React from 'react';
import { Text, View } from 'dripsy';

const CopyrightFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <View
      sx={{
        paddingVertical: 32,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Text
        sx={{
          fontSize: 12,
          color: '$light',
          textAlign: 'center',
          lineHeight: 18,
        }}
      >
        © {currentYear} Sales Force Fest. Todos los derechos reservados.
      </Text>
      <Text
        sx={{
          fontSize: 11,
          color: '$secondary',
          textAlign: 'center',
          marginTop: 0,
        }}
      >
        Desarrollado con ❤️ por Hugo Jimenez ITI 2018
      </Text>
    </View>
  );
};

export default CopyrightFooter;
