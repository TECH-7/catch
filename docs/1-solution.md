
# HLA
(Please see image inside docs/assets/hla.png)

In the Frontend Application Layer, we would build a responsive web application using modern frontend frameworks such as React or Vue.js as this will also help with leveraging the base technology stack for the mobile app as it can be built with Native React. A CMS will need to be installed for easy editing for non-technical personnel, this could be Headless or otherwise provided that the CMS can provide content for both the website and the Mobile App in phase 2, with multilingual support. The website needs to be in compliance with WCAG 2.2AA standards for accessibility as well as implements structured schema data and social meta tags for SEO benefits. All the usual anti-spam and security controls will need to be there (e.g., reCAPTCHA, HTTPS, XSS protections). Live data feeds from a 3rd party system will also need to be incorporated securely. Mobile Experience needs to leverage device and OS accessibility features.

We will try to use shared services as much as possible in the backend service layer for both the Website and Mobile app using the above technologies. Here we will need to handle lead data submission and validation, and integrate 3rd party APIs for lead data routing when needed while ensuring lead data is stored in compliance with local data privacy laws. The system will also collect log and diagnostic data and metrics and to code a sensible alerting strategy. We will process a live data feed from a 3rd party system also.

At the data layer, relational databases (eg. MySQL, PostgreSQL) can be used. We can use encryption if storage compliance is required and make sure there is data redundancy and backup used.

As for the infrastructure layer, cloud platform is used here to maximise scalability and availability. CDN will be used for performance optimization and make sure security and compliance with industry standards to all local laws.

In the DevOps side of things, we will be using the Continuous Integration/Continuous Deployment (CI/CD) strategy to automated build, test, and deployment pipelines for rapid and reliable updates.


# Simple Explanation
We would deliver the solution using best practice architecture to ensure that content delivery is scalable as needed to ensure it can cater for increased content or traffic without downtime. We would also use modern web development frameworks to simplify the delivery of both the website and the subsequent mobile app. By delivering an easy to use CMS, this would allow clients to update the site content on their own with powerful tools, without needing time-consuming and expensive support requests.


# Initial threat modelling
## Identify Assets:
    
-   User data (leads, personal information)
-   Website functionality (lead capture forms, CMS)
-   Reputation and brand image
    

## Identify Threats:

-   Unauthorised access to sensitive data
-   Data breaches or leaks
-   Denial-of-service attacks
-   Integration failures with third-party services
-   Non-compliance with legal and regulatory requirements
    

## Assess Vulnerabilities:

-   Weaknesses in code (frontend and backend)
-   Insecure data storage or transmission practices
-   Lack of robust authentication and authorization mechanisms
-   Dependencies on external services without fallback plans
    

## Mitigation Strategies:
    
-   Implement secure coding practices and regular security assessments
-   Encrypt sensitive data and ensure secure transmission (HTTPS)
-   Implement access controls and least privilege principles
-   Monitor and audit third-party integrations
-   Conduct regular risk assessments and threat modelling reviews
    
By addressing these risks and conducting thorough threat modelling, you can better prepare your project for potential challenges and ensure the development of a secure, compliant, and performant Phase 1 solution. Regular updates and adaptation to emerging threats will also be essential throughout the project lifecycle.