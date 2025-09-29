import React from 'react';
import { Text, View } from 'dripsy';

interface Props {
  lightBackground?: boolean;
}

const CopyrightFooter = ({ lightBackground = false }: Props) => {
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
          color: lightBackground ? '$primary' : '$light',
          textAlign: 'center',
          lineHeight: 18,
          fontWeight: 'bold'
        }}
      >
        © {currentYear} Sales Force Fest. Todos los derechos reservados.
      </Text>
      <Text
        sx={{
          fontSize: 11,
          color: lightBackground ? '$primary' : '$secondary',
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
