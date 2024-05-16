FROM openresty/openresty:centos

COPY hide.js /usr/local/openresty/nginx/conf/
COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-http
