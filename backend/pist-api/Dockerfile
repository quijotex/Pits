# Build context debe ser esta carpeta (backend/pist-api). En Render: Docker Build Context = backend/pist-api
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app

COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn
RUN chmod +x mvnw

RUN ./mvnw dependency:go-offline -B || true
COPY src ./src

RUN ./mvnw -DskipTests clean package -B

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Render inyecta PORT=10000 en runtime; EXPOSE 10000 para que el escáner de Render compruebe el puerto correcto
ENV PORT=10000
EXPOSE 10000
ENTRYPOINT ["sh", "-c", "java -Dserver.port=${PORT} -Dserver.address=0.0.0.0 -Dspring.jpa.defer-datasource-initialization=true -jar app.jar"]
