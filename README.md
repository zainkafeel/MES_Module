# MES Module Project

## Project Description
This project is a simplified Manufacturing Execution System (MES) comprising:
- **Dashboard**: Monitor production status, machine utilization, and defect rates.
- **Production Tracking**: Track the flow from raw materials to finished goods with CRUD operations.
- **Quality Control**: Schedule and manage quality inspections with CRUD operations.

## Technologies Used
- **Frontend**: Vue.js, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose (optional)

## Prerequisites
- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **PostgreSQL** (v12 or later)
- **Docker** and **Docker Compose** (optional, for containerization)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/mes_module.git
cd mes_module
```

### 2. Backend Setup

### a. Install Dependencies
```bash
cd backend
npm install
```
#### b. Configure Database
- Ensure PostgreSQL is installed and running.
- Create the `mes_module` database and the necessary tables as outlined in the **Database Setup** section below.
- Update the `backend/database/db.js` file with your PostgreSQL credentials.

#### c. Start the Backend Server
```bash
node server.js
```
- The backend server will run on http://localhost:3000.
### 4. Running with Docker (Optional)

#### a. Using Docker
Ensure Docker is installed on your machine.

1. **Build the Docker Image**  
In the root directory of your project (where the Dockerfile is located), run:
```bash
docker build -t mes-module-app .
````

2. **Run the Docker Container**
To run the container, use:

```bash
docker run -p 3000:3000 mes-module-app
```
3. **Access the Application**
The backend will be accessible at http://localhost:3000.

### b. Using Docker Compose (Optional)
If you want to run both the backend and PostgreSQL using Docker Compose, create a docker-compose.yml file in the root directory with the following contents:

```bash
version: '3.8'

services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: your_user
      POSTGRES_PASSWORD: your_password
      POSTGRES_DB: mes_module
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

  backend:
    build: .
    ports:
      - "3000:3000"
    environment:
      PGUSER: your_user
      PGPASSWORD: your_password
      PGHOST: db
      PGDATABASE: mes_module
      PGPORT: 5432
    depends_on:
      - db

volumes:
  db_data:
```
- Run with Docker Compose: To build and start both containers, use:

```bash
docker-compose up --build
```

- Stopping Containers To stop and remove containers, run:
```bash
docker-compose down
```

### 5. Usage
- **Dashboard**: View key metrics about production.
- **Production Tracking**: Add, view, update, and delete production records.
- **Quality Control**: Add, view, update, and delete quality control records.

### 6. API Endpoints

#### Production Records
- **GET** `/api/production` - Get all production records.
- **POST** `/api/production` - Create a new production record.
- **GET** `/api/production/:id` - Get a production record by ID.
- **PUT** `/api/production/:id` - Update a production record by ID.
- **DELETE** `/api/production/:id` - Delete a production record by ID.

#### Quality Control Records
- **GET** `/api/qualitycontrol` - Get all quality control records.
- **POST** `/api/qualitycontrol` - Create a new quality control record.
- **GET** `/api/qualitycontrol/:id` - Get a quality control record by ID.
- **PUT** `/api/qualitycontrol/:id` - Update a quality control record by ID.
- **DELETE** `/api/qualitycontrol/:id` - Delete a quality control record by ID.

### Contributing
Feel free to submit issues or pull requests for improvements.