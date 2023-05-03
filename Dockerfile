#
# Build stage
#
#FROM maven:3.9.0-eclipse-temurin-17 AS build
#COPY . .
#RUN mvn clean package -DskipTests

#
# Package stage
#
FROM openjdk:19
COPY ./sovellusprojekti-0.0.1-SNAPSHOT.jar sovellusprojekti.jar
ENTRYPOINT ["java","-jar","sovellusprojekti.jar"]