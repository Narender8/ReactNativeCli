// ✅ alertHelper.js — (you can create this in a separate file too)
import { Alert } from 'react-native';

export const showConfirmationAlert = (
  message: string,
  onConfirm: any,
  onCancel: any,
) => {
  Alert.alert(
    'Confirm Action',
    message,
    [
      {
        text: 'Cancel',
        onPress: onCancel,
        style: 'cancel',
      },
      {
        text: 'Submit',
        onPress: onConfirm,
        style: 'default',
      },
    ],
    { cancelable: true },
  );
};
