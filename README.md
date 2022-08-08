# movii-app
**Movie Searcher application**

A  React Movie searcher and recommendations application.
<br>
The app has 3 sections: Login, Discover and Favorites; and a Search feature.
<br>
Responsive design for mobile when screen width is less than 400px.

**Login**
It uses a custom hook 'useAxiosLogin' to _fake_ post to reqres.in using a predefined user and password.
The API call will return a token if login was successful.

**Discover**
Custom hook 'useAxiosDiscover' to fetch movies data from The Movie Database using their API.
Implemeneted infinite scroller using IntersectionObserver object.

**Favorites**
Saves your favorite movies using Redux persist and localStorage object.

**Searcher**
Custom hook 'useAxiosSearch' to fetch the data using a keyword.
Implemeneted infinite scroller using IntersectionObserver object.

**Technologies**

React
<br>
Redux, to manage user, favorites and mobile menu visibility states.
<br>
React Router for routing
<br>
Styled Components for styling
<br>
Framer Motion for animations
<br>
SweetAlert for notifications

**Demo**

https://movii-app.vercel.app/
