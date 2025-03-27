pipeline {
    // Define the Jenkins node to run the pipeline on
    // Useful when you want to test on different OS or configurations 
    // or just to distribute the load how you want
    agent any 

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/IanRobertsProgramming/Jenkins-Example-Project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Used pm2 (Process Manager) to make starting and stopping the app easier and more reliable
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
                bat 'npm test'  // Run test suite 
            }
        }
        stage('Stop App') {
            steps {
                bat 'pm2 stop my-app'  // Stop the app cleanly
                bat 'pm2 delete my-app'  // Remove it from the process list
            }
        }
        // Could add more stages here for deployment, notifications, etc.
    }
}
