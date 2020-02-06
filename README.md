# AWS Lambda Proxy

How an AWS LAMBDA can be used as a proxy for any external service.
* [Supporting article ](https://www.sundeepmachado.com/2020/02/using-aws-lambda-as-proxy-for-any.html) - How the architecture works?

## Getting Started
![Overall Architecture](aws-lambda-proxy-architecture.png?raw=true "AWS Lambda Proxy Architecture")


### Prerequisites

The following are the pre-requisties

```
A machine which has latest nodejs version (prefer nodejs > 6.0)
AWS account
```

### Installing

```
You can just copy the index.js from the proxyJS folder for the proxy lambda
You need to run npm install inside the externalJS folder. After that make a zip and upload to AWS lambda. This is required as AWS lambda does not have request-promise module

```
