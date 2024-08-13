# Java-bookmarker
Spring Boot - Postgres - Next.js - Flyway - Github Actions - Kubernetes - Kvm - Libvirt

# Spring Boot
Spring Boot is a powerful Java framework designed to simplify the development of web applications and microservices. With its auto-configuration system, it enhances developer productivity by providing default configurations for various built-in dependencies.

This framework allows you to build enterprise applications in a modular way, brick by brick, using ready-to-use dependencies. Each component is preconfigured, offering a solid foundation to quickly start developing robust applications.

One of Spring Boot's key advantages is the ease of deployment. It enables the generation of executable JARs, known as "fat JARs," which include an embedded application server, making the deployment process straightforward.

In summary, Spring Boot addresses all the challenges that enterprise applications face, making development faster, simpler, and more efficient.

# Postgresql
PostgreSQL, often referred to as Postgres, is a powerful, open-source relational database management system (RDBMS). It is known for its robustness, extensibility, and compliance with SQL standards, making it a popular choice for developers and organizations to manage large volumes of data and complex queries.

# Flyway
Flyway is a powerful database migration tool. It simplifies and automates the process of managing database schema changes. Flyway follows the simple principle of versioning the database schema using SQL scripts. These scripts are organized in a specific folder structure and executed in a sequential order.

# Next.js
Next.js is a popular open-source React framework that provides a powerful set of features for building modern web applications. Developed by Vercel, Next.js enables developers to create fast, SEO-friendly, and highly scalable applications with ease.

# Kubernetes
Kubernetes is an open-source platform designed to automate the deployment, scaling, and operation of containerized applications. Originally developed by Google, Kubernetes is now maintained by the Cloud Native Computing Foundation (CNCF).

# Kvm
KVM (Kernel-based Virtual Machine) is an open-source virtualization technology built into the Linux kernel. It allows a Linux system to act as a hypervisor, enabling it to run multiple virtual machines (VMs) on a single physical host. Each VM operates like a separate computer, complete with its own operating system and hardware resources.

# Deployment Kubernetes
The project is hosted on my own server with KVM hypervisor.
Configuration: i7 2.9 ghz
               32 GB RAM
               1TB SSD

Vm name      : bookmarker-cluster
Vm Cpu       : 4
Vm Ram       : 4096
Vm ip        : 192.168.1.100
Vm ssh port  : 4100

After create Vm :
1/ Install docker
2/ Install Kind
3/ Install Kubectl

4/ tranfert folder k8s and kind on the VM.
5/ create kubernetes cluster with kind => run script ./create-cluster.sh

