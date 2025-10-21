pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "express-ci-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'dev', url: 'git@github.com:AldoJh/jenkins-setup-branch-base.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
