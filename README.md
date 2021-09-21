# TastyTV App project

---

## The Client brief

Our company, “TastyTV” i s l aunching online soon. We are a movie and tv show live-streaming service, every day with a 12-hour repeating stream. And, we can't wait t o help people discover amazing movies and t v shows. We need to raise awareness about the company and its offerings. To that end, we want to launch a SPA that allows its visitors to maintain a list of movies and tv shows they want to watch later. The SPA should allow people to add, edit, or remove movies or tv shows from their watch later list. They should also be able to mark an item as watched. Though we want to get them started with a few recommendations from our API, which you can find on this link that will change from time to time. We're also open to any creative ideas you might have for t he website if you have additional time.

Deliverables
A functional React SPA without any backend built by you, hosted somewhere on the
internet that delivers on t he following scope of work derived f rom t he client brief:
○ Add a new item
○ Edit an i tem
○ Mark i tem as watched
○ Remove an i tem
○ Remove all i tems
○ Remove all watched items
○ Fetch data from client API to populate an initial list of items t o get people
started

---

## User stories

- As a user, he/she to get recommendation from client's API to have idea on what to watch
- As a user, he/she to be able to maintain list of movies to watch later
- as a user to be able to remove single movie from watchlist and to clear whole watchlist
- As a user, he/she to be able mark movie as watched so they can filter them out
- As a user, he/she to be able to see whole collection of movies

---

## Wireframes

## ![Wireframes](<http://tomasadamcik.com/Bootcamp/2.%20Project%20-%20TastyTV2%20(React)/TastyTV2_wireframes.JPG>)

## Used technologies

- Axios
- CSS
- React

---

## Taken approach

1.  Based on project brief I created user stories with specific user requirements
2.  Based on user stories I created wireframe for visual design
3.  After creating visual design wireframe, I created a diagram of react components for the App. Diagram contains where are components going to be placed within the application
4.  Prepare components as designed in wireframes
5.  Added pseudo code to include functions that customer requested
6.  Started to implement funtionality: created MovieCard to render movies, then API connection to load from customers API.
7.  Got stuck in process of adding films to watch and needed to change approach. Rebuilt whole code.
8.  Implemented add to watchlist functionality
9.  Added recommendation section and loaded one random film into the section based on random pick from movies object
10. Added Reusable headings
11. Partially implemented Edit functionality, missing save-edit toggle function
12. Partially added Watched tickboxes, I struggle with passing data into props in App.js
13. Added Header and footer
14. Added CSS from TastyTV1 project to retain TastyTV design

---

## Next development

Implement remaining functionality requested by customer.
Then it would be useful to save data about state of the application into pc memory or server to load and load it when user opens the application next time.
Create user's account to log in and log out.

---

### Links

See my project on GitHub [here.](https://github.com/TomasAdamcik-dotcom/TastyTV2)

See my Miro board [here.](https://miro.com/app/board/o9J_l9fwBok=/) for the following information:

- Project brief
- User stories
- Wireframes

---

## List of known issues

- functionality of marking film as watched was not correctly implemented and is not saving watched status.
- functionality of edit message has not been correctly implemented and user cannot click on edit message
