# WebRemoteDesktop

Control desktop using websocket.

### Dependencies
```
pip3 freeze > requirements.txt
```

## Deploy

```
git push heroku master
```

## Addons

```
heroku addons:create papertrail:choklad
heroku addons:create scheduler:standard
heroku addons:create heroku-postgresql:hobby-dev
```