"""import os
import tensorflow as tf
import numpy as np
import pandas as pd
from firebase_admin import firestore

# prediction_data_dir = 'C:/Users/w/StutteringDetectionModel/MultiLabelClassification/multi-label-test-data/'

def load_model_and_predict(prediction_data_dir, testId, userId, testCompletitionTime):
    images_array = []  
    for i in os.listdir(prediction_data_dir):
        img = tf.keras.utils.load_img(prediction_data_dir + i, target_size=(200, 200, 3))
        print(i)
        img = tf.keras.utils.img_to_array(img)
        img = img/255.
        img = np.expand_dims(img, axis=0)
        images_array.append(img)
        
    images = np.array(images_array)

    df = pd.read_csv('C:/project/BreakYourBlocks/app/api/model/multilabel.csv')

    model = tf.keras.models.load_model("C:/project/BreakYourBlocks/app/api/model/multilabel_classification.h5", compile=False)

    classes = np.array(df.columns[6:]) #Get array of all classes
    proba = model.predict(np.vstack(images))  #Get probabilities for each class
    print("probaaa")
    print(proba)
    sorted_categories = np.argsort(proba[0])[:-11:-1]  #Get class names for top 10 categories

    #Print classes and corresponding probabilities
    for i in range(10):
        print("{}".format(classes[sorted_categories[i]])+" ({:.3})".format(proba[0][sorted_categories[i]]))

    ###################################################

    # _, acc = model.evaluate(model.X_test, model.y_test)
    # print("Accuracy = ", (acc * 100.0), "%")

    data = {
        'userID': userId,
        'testID': testId,
        'testDate': testCompletitionTime,
        str(classes[sorted_categories[0]]) : str(proba[0][sorted_categories[0]]),
        str(classes[sorted_categories[1]]) : str(proba[0][sorted_categories[1]]),
        str(classes[sorted_categories[2]]) : str(proba[0][sorted_categories[2]]),
        str(classes[sorted_categories[3]]) : str(proba[0][sorted_categories[3]]),
        str(classes[sorted_categories[4]]) : str(proba[0][sorted_categories[4]]),
        str(classes[sorted_categories[5]]) : str(proba[0][sorted_categories[5]]),
        str(classes[sorted_categories[6]]) : str(proba[0][sorted_categories[6]]),
        str(classes[sorted_categories[7]]) : str(proba[0][sorted_categories[7]]),
        str(classes[sorted_categories[8]]) : str(proba[0][sorted_categories[8]]),
        str(classes[sorted_categories[9]]) : str(proba[0][sorted_categories[9]])
    }

    db = firestore.client()
    # Add a new doc in collection 'cities' with ID 'LA'
    db.collection(u'userTestResults').add(data)

    print("COLLECTION ADDED...")"""

import os
import tensorflow as tf
import numpy as np
import pandas as pd
from firebase_admin import firestore
from PIL import Image
import json

# prediction_data_dir = 'C:/Users/w/StutteringDetectionModel/MultiLabelClassification/multi-label-test-data/'

def load_model_and_predict(prediction_data_dir, testId, userId, testCompletitionTime):
    images_array = []  
    for i in os.listdir(prediction_data_dir):
        img = Image.open(prediction_data_dir+i)
        img = img.resize((240, 180))
        img =np.array(img)
        images_array.append(img)
        
    images = np.array(images_array)

    config_path = os.path.join('.', 'app', 'config.json')
    with open(config_path) as file:
        config = json.load(file)
    model_path = config['modelPath']

    model = tf.keras.models.load_model(model_path)
    # classes and probabilities dictionary(map)
    classes_probabilities={"Unsure" : 0, "PoorAudioQuality":0, "Prolongation":0, "Block":0, "SoundRepetition":0, 
                           "WordRepetition":0, "DifficultToUnderstand":0, "Interjection":0, 
                           "NoStutteredWords":0, "NaturalPause":0, "Music":0, "NoSpeech":0}

    proba = model.predict(images)
    print(proba)

    
    #arithmetic mean of all 
    for i, row in enumerate(proba):
        for j, key in enumerate(classes_probabilities):
            classes_probabilities[key] = (classes_probabilities[key]*i + row[j])/(i+1)
            #print(classes_probabilities[key])

    # sort dictionary(map) in descending order
    # sorting has no effect on db, can be used for other purposes
    # limit with 3 digit 
    sorted_classes_probabilities = {k: '{:.3f}'.format(v) for k, v in sorted(classes_probabilities.items(), key=lambda item: item[1], reverse=True)}
    #list_sorted_classes_probabilities = list(sorted_classes_probabilities)
    ###################################################

    data = {
        'userID': userId,
        'testID': testId,
        'testDate': testCompletitionTime,
    }
    # concatenate with class - probability map
    data.update(sorted_classes_probabilities) 

    db = firestore.client()
    # Add a new doc in collection 'cities' with ID 'LA'
    db.collection(u'userTestResults').add(data)

    print("COLLECTION ADDED...")

