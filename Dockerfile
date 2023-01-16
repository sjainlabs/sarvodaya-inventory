
FROM maven:3.6.0-jdk-11-slim AS build

#RUN mkdir -p /tmp
#WORKDIR /tmp
#
#
#COPY src ./
#COPY pom.xml ./
#RUN mvn   clean install

COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package
FROM openjdk:8-jdk-alpine
COPY --from=build /usr/src/app/target/sarvodaya-inventory*.jar /usr/app/sarvodaya-inventory.jar  
EXPOSE 8080  
ENTRYPOINT ["java","-jar","/usr/app/sarvodaya-inventory.jar"]  


#ENTRYPOINT ["java", "-jar" , "/tmp/sarvodaya-inventory.jar" ]
