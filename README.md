# Projet de Devops : username application
## Zammit Pierre / Descamps Alexandre

## Project Description :

This project is intended to teach us how to use many devops tools as well as how to create a simple web application. To do this we chose to create a user database management (following the course we were given).
For this you need to install on your computer :
- git (to clone and manage the project)
- docker (to build an image of your project and run it)
- postman (to post and get request to your database)

We have followed each of the steps to be taken on this project, only some points do not work. For example 2 of our tests do not pass and we cannot solve this problem. There are also some problems with the mangoo database. We manage to connect well but the data is not written in the database. We don't know how to fix these problems.

### Step 1
To clone and run the project and your computer use the following commandes :
```
git clone https://github.com/Alexdesc/ece-devops.git
cd ece-devops-course
npm install
npm run serve
```
Now you can access the project by typing in your browser bar :
```
http://http://localhost:3000/
```
### Step 2
To verify that the unary tests have been passed after the last commit of your project, you can use Travis CI. This software allows you to automatically check whether or not the tests were successful.

Travis : https://travis-ci.org/github/Alexdesc/ece-devops/jobs/679363207

You can also deploy your project automatically thanks to heroku.

Heroku : https://dashboard.heroku.com/apps/alex-ece-dev

For our database, we have chosen to use a Mangoo database, which is an online database.

Mangoo : https://cloud.mongodb.com/v2/5ea5a1934241b14c8fcac8b3#metrics/replicaSet/5ea5a3959944241685bd02e6/explorer

### Step 3
To build and run your docker image on your computer use the following commandes :
```
docker build -t alexdesc/devopsimg:1.0 .
docker run -p 3000:3000 alexdesc/devopsimg:1.0
```
Now you can access the project by typing in your browser bar :
```
http://http://localhost:3000/
```

## Task list :

- [x] 0. Describe your project in the README.md file

    List of all the work performed (briefly, describing features and bonus tasks)
    Installing / running / using / testing / deployment instructions (everyone is needed)
    All the necessary links with the tools integrated (Travis CI, Heroku, Docker Hub ... )
    List of collaborators
    Other additional info you want to include

- [x] 1. Create an application

    Enrich the draft application (at least finish all the TODO comments) on Node.js developed during the classes or create your own project using different language on your choice (like Java, Ruby, Python ...)
    Cover the app with unit tests (functional, integration, ...).

- [x] 2. Apply CI/CD pipeline (using Travis CI and Heroku or other tools like GitLab)

    Configure CI with Travis CI
    Configure CD with Heroku

- [x] 3. Build docker image out of your application

    Create a Dockerfile
    Push an image to your Docker Hub account

- [ ] 4. Make docker orchestration using Kubernetes

    Install a Kubernetes cluster (using Minikube)
    Create a Kubernetes Manifest yaml file that configures deployment, services, replicas etc.
    Configure a persistent storage with Volumes in a Manifest yaml file
