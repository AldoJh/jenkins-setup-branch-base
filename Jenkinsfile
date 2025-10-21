pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "express-ci-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${env.BRANCH_NAME}", url: 'git@github.com:AldoJh/jenkins-setup-branch-base.git'
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
                script {
                    if (env.BRANCH_NAME == 'main') {
                        sh 'docker-compose -f docker-compose.prod.yml up -d'
                    } else {
                        sh 'docker-compose -f docker-compose.dev.yml up -d'
                    }
                }
            }
        }
    }
}
