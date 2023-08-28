# EduSphere: Advanced Learning Platform

## Introduction
EduSphere is a holistic educational management platform meticulously crafted to enhance the learning journey for students, instructors, and administrators alike. With a focus on optimized course management, efficient assignment submission, and seamless communication, EduSphere is further augmented by the integration of advanced AI technologies.

<br/>

## Deployed App
[NA]()

<br/>

## Video Walkthrough
[NA]()

<br/>

## Features
- User Profile Management for Students and Instructors
- Comprehensive Course Creation and Enrollment System
- Assignment Submission and Grading Platform
- Effective Communication through Announcements
- Integration of an AI-Powered Academic Advisor Chatbot
- Innovative Gen AI Assignment Generator Functionality
- Streamlined Enrollment Management for Courses
- Dashboard with Analytics for Enhanced Insights
- Data Storage and Efficient Database Management
- Automated Notifications for Important Updates
- Robust Security Measures for Privacy Protection
- User Feedback and Support Mechanisms
- Performance Optimization for Smooth User Experience
- Dynamic Front-end UI Components for Engaging Interfaces
- Well-Defined API Endpoint Management
- Rigorous Testing and Quality Assurance Procedures
- Seamless Deployment and Reliable Hosting
- Continuous User Experience Enhancement Strategies
- Integration of Collaboration Tools for Efficient Workflows

<br/>

## Design Decisions and Assumptions
### Design Decisions
- Engineered with scalability in mind to support future expansion.
- Implemented responsive front-end design for seamless user experience on various devices.
- Integrated robust security measures to safeguard user data and sensitive information.
- Employed database indexing for optimized query performance and data retrieval.
- Utilized asynchronous communication for real-time notifications and updates.
- Employed a modular code structure to facilitate maintainability and codebase organization.
- Implemented user-friendly interfaces and intuitive navigation for enhanced usability.

#### Assumptions
- User authentication is carried out using email and password credentials.
- Course enrollments are limited to a set number per student.
- Instructors have the authority to grade submissions and provide feedback.
- Users have access to reliable internet connections for uninterrupted interactions.
- Users can reset their passwords through email verification for account recovery.

<br/>

## Installation & Getting Started
```shell
# Clone the repository
$ git clone https://github.com/narender24681/Advanced-Learning-Platform.git
$ cd Advanced-Learning-Platform

# Install Backend dependencies
$ cd Backend
$ pip install -r requirements.txt
$ cd ..

# Install Frontend dependencies
$ cd Frontend
$ npm install
$ cd ..

# Start Backend Server(Open in new terminal)
$ cd Backend
$ python manage.py runserver

# Start Frontend Server(Open in new terminal)
$ cd Frontend
$ ng serve
```

<br/>

## Usage
1. Authenticate by logging in using your credentials.
2. Browse and select from the list of available courses to enroll in.
3. Submit assignments and receive valuable feedback from instructors.
4. Engage with the personalized advice of the Academic Advisor Chatbot.
5. Employ the Gen AI Assignment Generator to craft dynamic and thought-provoking assignments.
6. Stay informed by interacting with announcements from your departments and courses.
7. Access your dashboard to monitor enrolled courses, upcoming assignments, and important updates.
8. Manage your profile information and preferences for a tailored experience.

<br/>

## API Endpoints
### Students
- `GET /api/students`: Get a list of all students.
- `GET /api/students/{student_id}`: Get details of a specific student.
- `POST /api/students`: Create a new student.
- `PUT /api/students/{student_id}`: Update details of a specific student.
- `DELETE /api/students/{student_id}`: Delete a specific student.

### Instructors
- `GET /api/instructors`: Get a list of all instructors.
- `GET /api/instructors/{instructor_id}`: Get details of a specific instructor.
- `POST /api/instructors`: Create a new instructor.
- `PUT /api/instructors/{instructor_id}`: Update details of a specific instructor.
- `DELETE /api/instructors/{instructor_id}`: Delete a specific instructor.

### Courses
- `GET /api/courses`: Get a list of all courses.
- `GET /api/courses/{course_id}`: Get details of a specific course.
- `POST /api/courses`: Create a new course.
- `PUT /api/courses/{course_id}`: Update details of a specific course.
- `DELETE /api/courses/{course_id}`: Delete a specific course.

### Enrollments
- `GET /api/enrollments`: Get a list of all enrollments.
- `GET /api/enrollments/{enrollment_id}`: Get details of a specific enrollment.
- `POST /api/enrollments`: Create a new enrollment.
- `PUT /api/enrollments/{enrollment_id}`: Update details of a specific enrollment.
- `DELETE /api/enrollments/{enrollment_id}`: Delete a specific enrollment.

### Assignments
- `GET /api/assignments`: Get a list of all assignments.
- `GET /api/assignments/{assignment_id}`: Get details of a specific assignment.
- `POST /api/assignments`: Create a new assignment.
- `PUT /api/assignments/{assignment_id}`: Update details of a specific assignment.
- `DELETE /api/assignments/{assignment_id}`: Delete a specific assignment.

### Submissions
- `GET /api/submissions`: Get a list of all submissions.
- `GET /api/submissions/{submission_id}`: Get details of a specific submission.
- `POST /api/submissions`: Create a new submission.
- `PUT /api/submissions/{submission_id}`: Update details of a specific submission.
- `DELETE /api/submissions/{submission_id}`: Delete a specific submission.

### Departments
- `GET /api/departments`: Get a list of all departments.
- `GET /api/departments/{department_id}`: Get details of a specific department.
- `POST /api/departments`: Create a new department.
- `PUT /api/departments/{department_id}`: Update details of a specific department.
- `DELETE /api/departments/{department_id}`: Delete a specific department.

### Announcements
- `GET /api/announcements`: Get a list of all announcements.
- `GET /api/announcements/{announcement_id}`: Get details of a specific announcement.
- `POST /api/announcements`: Create a new announcement.
- `PUT /api/announcements/{announcement_id}`: Update details of a specific announcement.
- `DELETE /api/announcements/{announcement_id}`: Delete a specific announcement.

<br/>

## Technology Stack
- Front-end: Angular
- Back-end: Django
- Database: MySQL
- AI Chatbot: Dialogflow API
- Gen AI Assignment Generator: OpenAI GPT-3
