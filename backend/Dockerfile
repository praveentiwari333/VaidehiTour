# Use OpenJDK 17 for Spring Boot
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Give permission to mvnw
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

# Expose the port Spring Boot runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/*.jar"]
