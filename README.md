# User API http-server

Simple http-server with a user API

## TODO

* Clone this repo and using [duplicating](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) create your own repository on GitHub or GitLab
* **Important!** Make your repository **PRIVATE**
* Find all the TODO comments and enrich this app
* If you have questions, ask me by email sergei@adaltas.com (link your private repo, if you have technical questions and invite me to you project)


## Functionality

* Start http-server
* Configure an environment
* Create a user (passing user parameters and storing it in the filesystem)
* Get a user by username

## Installation

```
git clone ...
npm install
```

## Usage

```
npm start
```

Go to `http://localhost:3000`

### Using [Postman app](https://www.postman.com/)

1. POST Create user:

```
http://localhost:3000/user/
```
Headers:
```
Content-Type: application/json
```

Body parameters (raw type):
```
{
  username: 'toto',
  firstname: 'toto-firstname',
  lastname: 'toto-lastname'
}
```

Test for Pull Request

## Developer

Run tests:
```
npm test
```

## Author

Sergei Kudinov   
sergei@adaltas.com
