FROM mongo:3.3

RUN mongod --fork --syslog && \
echo "use admin;\ndb.createUser({user:'iulian',pwd:'xxxxxxx', roles: ['userAdminAnyDatabase', 'readWriteAnyDatabase']});" | mongo && \
echo "use admin;\ndb.auth('iulian', 'xxxxxxx');\ndb.shutdownServer();\n" | mongo

CMD ["--auth"]
