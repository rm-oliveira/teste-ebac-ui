pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/rm-oliveira/teste-ebac-ui.git'
                bat 'npm install'
            }
        }
        stage('Teste') {
            steps {
                bat '''set NO_COLOR=1
                npx cypress run'''
            }
        }
    }
}