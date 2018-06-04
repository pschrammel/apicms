FROM 858049876441.dkr.ecr.eu-west-1.amazonaws.com/metoda_spa_nginx:201802060847
RUN apt-get install -y \
    procps 


ENV APP_DIR=/code
WORKDIR $APP_DIR

ADD package.json package.json
ADD yarn.lock yarn.lock

RUN yarn install

#ADD . $APP_DIR
#RUN yarn run build

#RUN cp -R ./dist/* /usr/share/nginx/html

# this is for our old angular stuff!
#RUN mkdir -p /usr/share/nginx/html/assets/ && \
#    cp -R ./old_widgets/* /usr/share/nginx/html/assets

#for testing
#ADD nginx.conf /etc/nginx/conf.d/default.conf
CMD ["./bin/run", "dev"]
