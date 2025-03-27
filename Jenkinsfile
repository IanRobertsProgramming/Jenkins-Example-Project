pipeline {
    agent any 
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/IanRobertsProgramming/Jenkins-Example-Project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run App') {
            steps {
                bat 'node index.js'
            }
        }
    }
}