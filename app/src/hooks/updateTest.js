import { firebase } from "../../firebase";

function updateTest(testKey, soundValue, durationValue, levelValue, testContent){
    firebase
        .firestore()
        .collection('tests')
        .doc(testKey)
        .update({
            sound: soundValue,
            duration: durationValue,
            level: levelValue,
            testContent: testContent,
            updateDate: firebase.firestore.FieldValue.serverTimestamp()
        });
        // .then(() => {
        //   navigateToTestEditListScreen();
        //   console.log('Test updated!');
        // });
}

export default updateTest;