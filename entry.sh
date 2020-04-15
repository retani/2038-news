#!/bin/bash
set -e
export GATSBY_DIR="/app"

#ln -s /save/node_modules/* ./node_modules/.

# Decide what to do
if  [ "$1" == "develop" ]
then
  gatsby clean
  gatsby develop --host 0.0.0.0 --port 80

elif  [ "$1" == "build" ]
then
  gatsby clean
  gatsby build

elif  [ "$1" == "serve" ]
then
  gatsby clean
  gatsby build
  gatsby serve --host 0.0.0.0 --port 80

# elif  [ "$1" == "both" ]
# then
#   gatsby clean
#   gatsby build
#   gatsby serve --host 0.0.0.0 --port 8001 &
#   gatsby develop --host 0.0.0.0 --port 8000


else
  exec $@

fi



