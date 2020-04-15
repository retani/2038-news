###ENV
```
GIT_REMOTE no effect
SSH_KEY
GIT_AUTHOR_EMAIL
GIT_AUTHOR_NAME
TINA_CEE - This needs to be set to ensure that Tina knows that it is being run in a Cloud Editing Environment (?)
```

source: https://tinacms.org/blog/using-tinacms-on-gatsby-cloud


###docker

```
docker build --tag 2038-news:latest .
docker run -it --env GIT_REMOTE=git@github.com:retani/2038-news.git --env GIT_AUTHOR_EMAIL=hi@intergestalt.info --env SSH_KEY=$( cat ~/.ssh/id_rsa | base64)  --env GIT_AUTHOR_NAME=HH --env TINA_CEE=true --rm -p 8000:8000 2038-news:latest develop

docker run -it --rm -p 8000:8000 2038-news:latest serve

docker run -it --env GIT_REMOTE=git@github.com:retani/2038-news.git --env GIT_AUTHOR_EMAIL=hi@intergestalt.info --env SSH_KEY=$( cat ~/.ssh/id_rsa | base64)  --env GIT_AUTHOR_NAME=HH --env TINA_CEE=true --rm -p 8000:8000 -p 8001:8001 2038-news:latest both

```

Based on **Tina Grande** 