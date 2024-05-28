// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import Home from './Home';
// import Welcom from './Welcom';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';




// const stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const BottomTabs = () => {
//     return(
//         <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen
//             name="Home"
//             component={Home} />
//         <Tab.Screen
//             name="SignIn"
//             component={SignIn} />
//         <Tab.Screen
//             name="SignUp"
//             component={SignUp} />
//         <Tab.Screen
//             name="Welcome"
//             component={Welcom} />

//     </Tab.Navigator>
//     )
// };
// const Main = () => {
//     return (
//         <NavigationContainer>
//             <stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
//                 <stack.Screen
//                     name="SignIn"
//                     component={SignIn} />
//                 <stack.Screen
//                     name="Home"
//                     component={BottomTabs} />
//             </stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default Main

// const styles = StyleSheet.create({})


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const nhanVien = [
    { maNV: "NV01", hoTen: "BÙI TRUNG NAM",phongBan:"it", heSo: 5},
    { maNV: "NV02", hoTen: "BÙI VĂN NAM", phongBan:"maketing", heSo: 4 },
    { maNV: "NV03", hoTen: "BÙI TRUNG VÂN", phongBan:"logitic", heSo: 2 },
    { maNV: "NV04", hoTen: "BÙI VĂN VÂN", phongBan:1, heSo: "it" },
    { maNV: "NV05", hoTen: "NGUYỄN VĂN CHÍNH",phongBan:3, heSo: "maketing"}]
function hienThi() {
    // sap xếp theo tên 
    nhanVien.sort((a, b) => a.hoTen.localeCompare(b.hoTen));
    
    // hiển thị list đã sort 
    console.log('Danh sách nhân viên theo thứ tự từ A-Z của hoTen:');
    nhanVien.forEach(employee => {
      console.log(`Mã NV: ${employee.maNV}, Họ Tên: ${employee.hoTen}, Phòng Ban: ${employee.phongBan}, Hệ Số: ${employee.heSo}`);
    });
  }
  hienThi();

const Main = () => {
  return (
    <View>
      <Text>Main</Text>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})


  
  // gọi hàm để hiện