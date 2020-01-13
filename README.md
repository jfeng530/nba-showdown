<p align="center"><img width=75% src="https://i.imgur.com/6Ky5MZE.png"></p>
<p>
  <img align="center" src="https://img.shields.io/badge/Postgresql-12.1-336791">
  <img align="center" src="https://img.shields.io/badge/React.JS-16.12.0-61DAFB">
  <img align="center" src="https://img.shields.io/badge/React Redux-7.1.3-764ABC">
  <img align="center" src="https://img.shields.io/badge/Ruby-2.6.1-CC342D">
  <img align="center" src="https://img.shields.io/badge/Ruby%20On%20Rails-6.0.1-cc0600">
</p>

# Contents
- [Introduction](#introduction)
  - [Description](#description)
  - [Key Features](#key-features)
  - [Goals](#goals)
  - [Challenges](#challenges)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [First Start](#first-start)
- [Summary Of Files](#summary-of-files)
  - [Internal File Structure](#internal-file-structure)
  - [External Dataset](#external-dataset)
- [Credits](#credits)

&nbsp;

# Introduction
  ### Description
  NBA Showdown is an NBA reference web application. View statistics of your favorite NBA players and teams from 1979 to the present. Compare players and teams from different eras. Simulate a game between your dream matchup to see who will come out on top.
  
  ### Key Features
  - 250 trivia questions to answer
  - 3 difficulty levels
  - 20 categories
  - Statisically generated user ratings
  - Login/Signup secured with bcrypt & JWT Auth
  - Easy to access API functionality using FastJSON API for derivated work
  - Access Restricted administrative panel featuring realtime page & element tracking & in-browser database editor
  - Vote/Comment on trivia questions after answering a question
  - Conditional rendering and keyframe animations  
  - Message other users (TBA)
  - Challenge other users to answer questions (TBA)
  - Custom Statisically Analytics Queries for Administrators/Developers (TBA)
  - Fun for the whole family
  
  ### Goals
  The two main goals of the project is to develop an application that was engaging to the end user, as well as explore potentialities to collect and curate user generated data in real time. 
  
  ### Challenges
  - Creating an effective workflow to get MVP and deliverables completed before a set deadline
  - Developing an application that is engaging enough for a user to generate enough traffic to collect on the administrative panel
  - Designing a gameplay loop that is easy to follow as well as a visual style that is legible and non intrusive
  - Refactoring large portions of the administrative panel to utilize as little communication between the frontend and backend as possible
  - Deployment
  
&nbsp;

## Languages and Frameworks
The Languages and Frameworks used are exclusively for the web application portion of the project. This repo only contains the **Front-End** (React) portion.

### Front-End
* Vanilla JavaScript
* [Semantic-UI](http://semantic-ui.com/)
* [React](http://reactjs.org/)
* [Redux](http://redux.js.org/)

### Back-End
* [Ruby](https://www.ruby-lang.org/tr/)
* [Ruby on Rails](http://rubyonrails.org/)

#### Link to Back-End
* [NBA Showdown Back-End](http://github.com/jfeng530/nba_backend)

## Installation
Clone or fork-clone this repo. Then use the package manager **npm** to install NBA Showdown's packages locally. From there, in your bash terminal, type the following lines to open the application on your browser.

> Make sure you are in the Project Path before typing the commands.

```bash
1. npm i or npm install
2. npm start
```
