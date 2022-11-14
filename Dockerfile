
FROM maven:3.6.0-jdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn  /home/app/pom.xml clean install


FROM openjdk:8-jdk-alpine
COPY --from=build /usr/src/app/target/sarvodaya-inventory*.jar /usr/app/sarvodaya-inventory.jar  
EXPOSE 8080  
ENTRYPOINT ["java","-jar","/usr/app/sarvodaya-inventory.jar"]  


ENTRYPOINT ["java", "-jar" , "/tmp/sarvodaya-inventory.jar" ]
