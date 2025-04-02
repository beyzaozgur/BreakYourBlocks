# Break Your Blocks
### _Stuttering Detection Mobile Application Based on Machine Learning_

![Status](https://img.shields.io/badge/Status-Research%20Project-purple) [![BSD License](https://img.shields.io/badge/License-BSD%20License-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

**"Break Your Blocks"** is a mobile application that automates manual tests conducted by speech therapists to identify types of stuttering in a person's speech with the use of an artificial intelligence model. This project **ranked 2nd** in the **Young Minds New Ideas** (Genç Beyinler Yeni Fikirler) 2023 Competition's **Society and Health** category.

## Tech Stack & Implementation

- It is a cross-platform mobile application created using **React Native Expo**. **Firebase** was used for data storage / database operations. 

- **SEP-28k audio dataset** and its labels is used to train the CNN model created for stuttering detection. Each audio data in SEP-28k is divided into 3 seconds long clips. After noise removal, spectrograms are extracted for each clip. The spectrograms are analyzed based on the given labels. These operations are done using **Librosa** - a Python library that is specifically used for audio processing.

- A **Python Flask** API is created for the integration of the machine learning model to the mobile application. This API helps to divide user audio into 3-second-long clips, and extract spectrograms after the user completes the test. Then, it sends these spectrograms to the machine learning model as an input and returns the stuttering classification results. 

- The aforementioned machine learning model is a **Convolutional Neural Network (CNN)** constructed using the **Sequential model** from the **Keras** library in Python. It is specifically designed for the purpose of **multilabel classification** and encompasses 13 layers, featuring a total of 396 neurons. To improve performance assessment, the model incorporates **N-fold cross-validation** technique.

## License
BSD License

## Contribution and Questions
Please contact one of the contributors to get more details about the project.

In order to further advance and make the project available, we are in need of language and speech therapists, and domain experts. If you would like to support this project, please feel free to contact us. Your expertise and collaboration would be greatly appreciated.

### Contact
[Beyza Özgür](https://github.com/beyzaozgur) - beyzaozgur35@gmail.com (she/her)

[Yağmur Akbaba](https://github.com/YagmurAkbaba) -  yagmur.akbaba.business@gmail.com (she/her)

[Beyza Nur Gören](https://github.com/byzgrn) - beyzanurgoren61@gmail.com (she/her)
