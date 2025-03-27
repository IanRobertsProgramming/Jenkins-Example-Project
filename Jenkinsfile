pipeline {
    agent any 
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/IanRobertsProgramming/Jenkins-Example-Project.git'
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