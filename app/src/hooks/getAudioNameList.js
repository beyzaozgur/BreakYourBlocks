import {useEffect} from 'react';
import {firebase} from '../../firebase';

const getAudioNameList = () => {
    const storageRef = firebase.storage().ref();
    const testAudioNameList = ['No Sound'];

    useEffect(() => {
        
        const audioRef = storageRef.child(`testAudios`);
                
        audioRef.listAll()
        .then((audio) => {
            audio.items.forEach((itemRef) => {
                testAudioNameList.push(itemRef.name);
              });
            
        })
        .catch((error) => {
            console.error('Error getting audio files list:', error);
        });

    }, [testAudioNameList]);


  return testAudioNameList;
};

export default getAudioNameList;