FROM openresty/openresty:centos

COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-http