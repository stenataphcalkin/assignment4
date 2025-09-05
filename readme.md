#Reflection

Theming ideas
A looking for group / party (LFP/LFG) style website combined with ratemyprofessor.

RATE MY ADVENTURER
Name, age, species, class, level, location, text feedback box


## Goals
### Base levels
-   🎯 Ensure your HTML form is working and submitting data into the database as expected.
-   🎯 Confirm that your project is functional on multiple screen sizes: Responsive Design or  `media queries`.
-   🎯 Create a working GET API route in your server.
-   🎯 Create a working POST API route in your client.
-   🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.
### Stretch goals
-   🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
-   🏹 Style the page excellently, for example, by adding extra UX considerations or animations.
-   🏹 Add a delete button to each message and a DELETE route in the server.
-   🏹 Create an option for users to like others’ posts.


## Troubleshooting:

Had a few issues with general gremlins and some utterly unexplainable ones:
- When testing pulling existing data, Supabase threw hours of headaches with internal server errors, password authentication issues (despite being reset), and spending too much time changing things around only to change the path from: /suffix to full path to /suffix, and it all finally worked again.

- Similar when trying to define the style sheet, for some reason I had to copy and paste the code in as, no changes, and it decided it would work again. Have refreshed the colours several times to be sure it works.

- Vite decided it no longer wanted to be a thing on Friday after lunch, and had to reinstall.

- Supabase did not want to pull data after upgrading the table. Eventually resolved much later. 

- It took me four attempts to work with Render before it finally behaved.

- Supabase and Render are conspiring against me. 


## Resources:
https://www.w3schools.com/sql/
https://www.sqltutorial.org/sql-cheat-sheet/
https://expressjs.com/
https://neon.com/postgresql/tutorial
Stackedit Markdown editor
  

### Stretch goal resources:

  

### Extra resources:

Date stamping via sequel
https://www.influxdata.com/blog/sql-server-timestamps-introduction/