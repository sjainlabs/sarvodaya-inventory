FROM openjdk:8-jdk-alpine
RUN mkdir -p /tmp
WORKDIR /tmp


ENTRYPOINT ["java", "-jar" , "/tmp/sarvodaya-inventory*.jar" ]
