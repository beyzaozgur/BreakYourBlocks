import { firebase } from "../../firebase";

function addTest(soundValue, durationValue, levelValue, testContent){
    firebase
        .firestore()
        .collection('tests')
        .add({
            sound: soundValue,
            duration: durationValue,
            level: levelValue,
            testContent: testContent,
            creationDate: firebase.firestore.FieldValue.serverTimestamp(),
            updateDate: firebase.firestore.FieldValue.serverTimestamp()
        });
    //     .then(() => {
    //       navigateToTestEditListScreen();
    //       console.log('Test added!');
    // });
}

export default addTest;