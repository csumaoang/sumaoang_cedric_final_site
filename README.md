# Portfolio Site Setup Guide

## Project Structure
```
sumaoang_cedric_final_site/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── Dockerfile
├── nginx.conf
├── package.json
└── README.md
```

## Prerequisites
- Node.js (v18 or later)
- npm (v8 or later)
- Docker Desktop

## Local Development Setup

1. **Initial Setup**
```bash
# Create project directory
mkdir sumaoang_cedric_final_site
cd sumaoang_cedric_final_site

# Initialize React app
npx create-react-app .

# Install required dependencies
npm install web-vitals
```

2. **Docker Setup and Run**

```bash

# Build Docker image
docker build -t sumaoang_cedric_coding_assignment14 .

# Run container in detached mode with specified name
docker run -d --name sumaoang_cedric_coding_assignment14 -p 5575:5575 sumaoang_cedric_coding_assignment14
```

3. **Access the Application**
- Open your browser
- Navigate to `http://localhost:5575`
