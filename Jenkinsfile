pipeline {
    environment {
      registry = 'https://registry.thecodeworkers.com'
      tag = 'registry.thecodeworkers.com/expomorro-api'
      registryCredential = 'DockerRegistry'
      dockerImage = ''
    }
    agent any
    stages {
      stage('Sonar Scanner') {
        steps {
          withSonarQubeEnv('Sonarqube TCW') {
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=expomorro-api"
          }
          timeout(time: 1, unit: 'HOURS') {
            waitForQualityGate abortPipeline: true
          }
        }
      }
      stage('Build Test') {
        steps {
          yarn 'install'
          yarn 'build'
        }
      }
      stage('Docker Build') {
        when {
          anyOf {
            expression {env.GIT_BRANCH == 'origin/main'}
            expression {env.GIT_BRANCH == 'origin/dev'}
          }
        }
        steps {
          script {
            docker.withRegistry(registry, registryCredential ) {
              docker.build("expomorro-api:$BUILD_NUMBER", '-f Dockerfile.test ./').push()
              docker.build("expomorro-api:latest", '-f Dockerfile.test ./').push()
            }
          }
          sh "docker rmi $tag:$BUILD_NUMBER"
        }
      }
    }
}
