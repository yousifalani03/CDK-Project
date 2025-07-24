# AWS CDK VPC + EC2 + RDS Project (TypeScript)

This project demonstrates how to use the **AWS Cloud Development Kit (CDK)** with **TypeScript** to deploy a complete VPC architecture across two Availability Zones, including EC2 instances and an RDS database, all defined as code.

---

## 📦 Architecture Overview

This project provisions:

- A **VPC** spanning **2 Availability Zones**
- In each AZ:
  - A **Public Subnet**
  - A **Private Isolated Subnet** with an **EC2 instance**
  - A **separate Private Isolated Subnet** with a **MySQL RDS instance**
- An **Internet Gateway** for public subnets only
- Tagged, isolated, and secure resources

---

## 📁 Important Files

The key files for this project are inside the `bin/` and `lib/` folders:

- `bin/vpc-cdk-project.ts` — entry point that ties all stacks together
- `lib/vpc-cdk-project-stack.ts` — defines the VPC, subnets, and routing
- `lib/ec2-stack.ts` — deploys EC2 instances in private isolated subnets
- `lib/rds-stack.ts` — deploys a MySQL RDS instance in its own isolated subnet

---

## 📸 Screenshots

### Architecture Diagram
![VPC Diagram](./Screenshot%202025-07-24%20113627.png)

### VPC Resource Map
![Resource Map](./Screenshot%202025-07-24%20114957.png)

### CloudFormation Stacks
![Stacks](./Screenshot%202025-07-24%20114751.png)

### RDS Instance
![RDS Screenshot](./Screenshot%202025-07-24%20114724.png)

---

## 🚀 Deployment

```bash
npm install
cdk bootstrap
cdk deploy --all

## 🧠 What I Learned

- How to write infrastructure as code using **AWS CDK** and **TypeScript**
- How to structure a **multi-AZ architecture** with public and private subnets
- Deploying **EC2** and **RDS** into isolated, secure private subnets
- Connecting and reusing resources across multiple stacks using custom props
- Organizing a CDK project with clear, modular components
