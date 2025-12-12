# Gatherly

**Connecting people based on shared interests and activities. Never go to an event alone again!**

##  Live URL
* (`https://gatherly-plum.vercel.app`)

---

##  Features

The Events & Activities Platform is a full-stack social platform designed to bridge the gap between online discovery and offline participation. It facilitates real-world social interactions by connecting individuals who want to participate in local events, sports, or hobbies but lack companions.

### Core Functionality
* **Event & Activity Management :** Hosts can create, manage, and track all details of their events, including type, date, location, required participants, and joining fees.
* **Advanced Search & Matching:** Users can easily find relevant events using filters for **Category/Type**, **Date**, and **Location**.
* **Secure Payment Integration:** Seamless handling of ticket/joining fees for paid events via integrated payment gateways.
* **User & Host Dashboards:** Personalized dashboards providing users with a view of upcoming/past joined events, and hosts with participant management, event tracking, and revenue data.
* **Robust Review & Rating System:** Users can rate and review hosts (1–5 stars) after event completion, ensuring quality and trust within the community.

### User System
* **Role-Based Authentication:** Distinct permissions and access levels for **User**, **Host**, and **Admin**.
* **Secure Authentication:** Utilizes **JWT (JSON Web Tokens)** for secure, sessionless authentication and secure password hashing.
* **Comprehensive Profile Management (CRUD):** Users and Hosts can create and edit profiles, including **Full Name**, **Bio**, **Location**, and **Interests**, which are visible to the community to facilitate compatibility.
* **Cloud-Based Image Hosting:** Integration for profile images and event banners.
s
---

## Technology Stack

This project requires a robust full-stack implementation. The suggested stack ensures a scalable, secure, and modern application.

### Frontend
| Technology | Description |
| :--- | :--- |
| **Framework** | Next.js |
| **Styling** | Tailwind CSS / shadcn 
| **Deployment** | Vercel |

### Backend
| Technology | Description |
| :--- | :--- |
| **Runtime** | Node.js  |
| **Framework** | Express.js / NestJS |
| **Database** |  PostgreSQL (SQL) |
| **Authentication** |  JWT, bcrypt |
| **File Storage** |  Cloudinary  |
| **Deployment** | Render |

### Payment Gateways
* Stripe 

---

##  Setup & Usage Instructions

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (version 18+)
* [PostgreSQL] installed or a cloud service account 

### 1. Clone the repository
```bash
git clone [https://github.com/mahdirahman356/Gatherly.git]
cd events-activities-platform