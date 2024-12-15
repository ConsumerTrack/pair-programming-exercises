Welcome!

This repository hosts a collection of pair programming exercises used in our interviews. Your interview will likely focus on just one of these.

**Our Goals:**

* Assess your technical skills: We want to understand your coding abilities and problem-solving approach.
* Observe your collaborative style: We value a collaborative work environment and want to see how you interact with others.
* Focus on collaboration: We're more interested in your problem-solving process and teamwork than your knowledge of specific frameworks or obscure language features.

***Preparation is key:***
The instructions for getting each exercise up and running are in this README.
Carefully review the setup instructions in this README for your chosen exercise.
If you encounter any problems, inform your interviewer beforehand so we can address them efficiently.
Instructions for remote pairing sessions will be provided in advance of your interview.

The specific steps and requirements for the exercise will be discussed with you during the interview.

JavaScript: ad-click-tracker
===

In this exercise you'll Implement a simple AWS Lambda function
to track ad clicks in a DynamoDB table using JavaScript via NodeJS.

Packages included: express

Instructions
=====

Run `npm install` and you should be on your way.

```
$ cd nodejs/ad-click-tracker/
$ npm install
$ npm start

> ad-click-tracker@1.0.0 start
> node index.js

Server listening on port 3000
```

Endpoint can be found at `http://localhost:3000/click/{id}`

JavaScript: creative-api
===

In this exercise you'll create a simple Node.js Express API for managing ad creatives
using JavaScript via NodeJS.

Packages included: body-parser, cors, express

Instructions
=====

Run `npm install` and you should be on your way.

```
$ cd nodejs/creative-api/
$ npm install
$ npm start

> creative-api@1.0.0 start
> node index.js

Server listening on port 3000
```

Base endpoint for API can be found at `http://localhost:3000/api/creative`

React: asset-dashboard
===

In this exercise you'll build a React component that displays a list of
active assets in a table with minimal details using React.

Packages included: cra-template, react, react-dom, react-scripts

Instructions
=====

Run `npm install` and you should be on your way.

```
$ cd react/asset-dashboard/
$ npm install
$ npm start

> asset-dashboard@0.1.0 start
> react-scripts start

Starting the development server...
Compiled successfully!

You can now view test in the browser.

  Local:            http://localhost:3000
```

Python: campaign-allocation
===

In this exercise you'll write a Python script to allocate a budget across
multiple campaigns, ensuring high-priority campaigns receive a higher portion.

There are no libraries other than the Python standard library required.

Instructions
=====

Make sure you have Python 3.6+ available and you're good to go:

```
$ python3 --version
 Python 3.12.2
```

We appreciate you taking the time to review these exercises. We're excited
to learn more about you and your coding style during the interview!
