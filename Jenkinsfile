pipeline {
    agent any
    stages {
      stage('Sonar Scanner') {
        steps {
          withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
          }
          timeout(time: 1, unit: 'HOURS') {
            waitForQualityGate abortPipeline: true
          }
        }
      }
    }
    stages {
      stage('Build Test') {
        steps {
          yarn 'install'
          yarn 'build'
        }
      }
    }
}
