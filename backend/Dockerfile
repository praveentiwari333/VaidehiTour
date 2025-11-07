# ======== Stage 1: Build the Spring Boot app ========
FROM eclipse-temurin:17-jdk-jammy AS build

WORKDIR /app

# Copy project files
COPY mvnw mvnw.cmd pom.xml ./
COPY .mvn .mvn
COPY src ./src

# Build the JAR
RUN chmod +x mvnw && ./mvnw clean package -DskipTests


# ======== Stage 2: Run the app ========
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Copy only the final JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the app port (Render provides PORT automatically)
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]


