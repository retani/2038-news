FROM node:12

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# RUN apt-get install autoconf automake libtool bash g++ libc6-compat libjpeg-turbo-dev libpng-dev

# install and cache app dependencies using yarn
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile
RUN gatsby telemetry --disable

# Copy all frontend stuff to new "app" folder
COPY . /app/

#ENV PATH="/usr/local/bin:/app/node_modules/.bin:${PATH}"

EXPOSE 8000

ENTRYPOINT ["./entry.sh"]