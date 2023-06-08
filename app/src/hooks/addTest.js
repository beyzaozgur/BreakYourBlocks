import { useState } from "react";
import { firebase } from "../../firebase";


function addTest(soundValue, durationValue, levelValue, testContent, isEnabled){
   var largestValue=1;
   const collectionRef= firebase.firestore().collection('tests');
    collectionRef.orderBy('testNo', 'desc').limit(1).get().then((querySnapshot) => {
    if (!querySnapshot.empty) {
      const largestDoc = querySnapshot.docs[0];
      largestValue = largestDoc.data().testNo;
      console.log("largest:" + largestValue)
    } else {
        console.log('No documents found.');
    }
  })
  .catch((error) => {
    console.error('Error retrieving documents:', error);
  }).then(()=>{
    collectionRef.add({
        sound: soundValue,
        duration: durationValue,
        level: levelValue,
        testContent: testContent,
        creationDate: firebase.firestore.FieldValue.serverTimestamp(),
        updateDate: firebase.firestore.FieldValue.serverTimestamp(),
        testNo: largestValue + 1,
        reachable: isEnabled,
    });
//     .then(() => {
//       navigateToTestEditListScreen();
//       console.log('Test added!');
// });

  }).catch((err) => {
    console.log(err)
  })


}

export default addTest;