import React from "react";
import { Text } from "react-native";
import styles from '../../style'

export default function () { //Component padrão a ser exportado | import MultiComponent from './.../MultiComponent';
  return <Text style={styles.fontG}>Component Oficial</Text>;
}

function Component1() { 
    return <Text style={styles.fontG}>Component nominal 1</Text>
}
 
export function Component2() { //Forma de exportar um component nominalmente | import { Component2 } from './.../MultiComponent';
    return <Text style={styles.fontG}>Component nominal 2</Text>
}

export { Component1 } //Forma de exportar um component nominalmente | import { Component1 } from './.../MultiComponent';