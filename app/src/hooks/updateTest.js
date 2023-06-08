import { firebase } from "../../firebase";

function updateTest(testKey, soundValue, durationValue, levelValue, testContent, isEnabled){
    firebase
        .firestore()
        .collection('tests')
        .doc(testKey)
        .update({
            sound: soundValue,
            duration: durationValue,
            level: levelValue,
            testContent: testContent,
            updateDate: firebase.firestore.FieldValue.serverTimestamp(),
            reachable: isEnabled
        });
        // .then(() => {
        //   navigateToTestEditListScreen();
        //   console.log('Test updated!');
        // });
}

export default updateTest;