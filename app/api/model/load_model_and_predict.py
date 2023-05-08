import os
import tensorflow as tf
import numpy as np
import pandas as pd

# prediction_data_dir = 'C:/Users/w/StutteringDetectionModel/MultiLabelClassification/multi-label-test-data/'

def load_model_and_predict(prediction_data_dir):
    images_array = []  
    for i in os.listdir(prediction_data_dir):
        img = tf.keras.utils.load_img(prediction_data_dir + i, target_size=(200, 200, 3))
        print(i)
        img = tf.keras.utils.img_to_array(img)
        img = img/255.
        img = np.expand_dims(img, axis=0)
        images_array.append(img)
        
    images = np.array(images_array)

    df = pd.read_csv('C:/Users/w/BreakYourBlocks/app/api/model/multilabel.csv')

    model = tf.keras.models.load_model("C:/Users/w/BreakYourBlocks/app/api/model/multilabel_classification.h5", compile=False)

    classes = np.array(df.columns[6:]) #Get array of all classes
    proba = model.predict(np.vstack(images))  #Get probabilities for each class
    sorted_categories = np.argsort(proba[0])[:-11:-1]  #Get class names for top 10 categories

    #Print classes and corresponding probabilities
    for i in range(10):
        print("{}".format(classes[sorted_categories[i]])+" ({:.3})".format(proba[0][sorted_categories[i]]))

    ###################################################

    # _, acc = model.evaluate(model.X_test, model.y_test)
    # print("Accuracy = ", (acc * 100.0), "%")