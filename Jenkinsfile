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
                bat 'npm install -g pm2'  // Install PM2 globally
                bat 'npm install'  // Install project dependencies
            }
        }
        stage('Run App') {
            steps {
                bat 'pm2 start index.js --name my-app'  // Start app with PM2
            }
        }
        stage('Run Tests') {  
            steps {
                bat 'npm test'  // Run your test suite if applicable
            }
        }
        stage('Stop App') {
            steps {
                bat 'pm2 stop my-app'  // Stop the app cleanly
                bat 'pm2 delete my-app'  // Remove it from the process list
            }
        }
    }
}
