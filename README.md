# Craft Collective

## Table of contents
* [General info](#general-info)
* [Intro Animation](#intro-animation)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
Craft Collective is a space for creative people to keep track of the projects in their life.

## Preview Animations
![GIF](LoginAndProfile.gif)
![GIF](Create.gif)

## Intro Video
[Craft Collective on YouTube]

## Technologies
* React.js
* Ruby on Rails
* CSS/Sass

## Setup
To run this project, install it locally by cloning the GitHub repository and typing: 
``` 
bundle install
npm start
```
## Code Example
```js
    <NavBar setUser={setUser} />
      {user.username
        ? <ScallopedHeader user={user} setUser={setUser} />
        : <EnterForms setUser={setUser} login={login} signUp={signUp} error={error} user={user} />
      }
    <Footer />
```
``` 
  .nav-bar
  position: -webkit-sticky
  position: sticky
  top: 0
  color: $mineral-green
  padding-top: 10
  font-size: 35px
  display: flex
  justify-content: space-between
  align-items: center
  font-family: 'dk_pisangregular'
  background-color: $cashmere
  z-index: 2
```
 
## Features
* Authenticated login for users
* User can create and save projects to their profile
* User sees projects as cards with slide out details

## Status
Project is: finished with option to expand functionality and DRY out code.

## Inspiration
I love having multiple projects going at once and this is a great place to organize that! Seeing my past projects in one space was a motovation to create this app.

## Contact
Created by [Meagan Ritchie](https://www.linkedin.com/in/meagan-ritchie-164921204/)

## License 
[Click to view](https://www.gnu.org/licenses/gpl-3.0.en.html)