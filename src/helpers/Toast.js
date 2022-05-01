import { Toast } from 'react-native-toast-message/lib/src/Toast';


export class ToastHOC{
    static errorAlert(text1,text2){
        Toast.show({
            type:"error",
            position:"top",
            text1:text1,
            text2:text2,
            autoHide:true,
            visibilityTime:1000
        })
    }

    static successAlert(text1,text2){
        Toast.show({
            type:"success",
            position:"top",
            text1:text1 || "Success",
            text2:text2,
            autoHide:true
        })
    }

    static infoAlert(text1 ,text2) {
        Toast.show({
            type: 'info',
            position: 'top',
            text1: text1 || 'Info',
            text2: text2,
            autoHide: true,
        });
    }
}