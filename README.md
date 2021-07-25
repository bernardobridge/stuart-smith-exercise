# Stuart-Smith-exercise

nodeJS testing framework

 The documentation for this framework can be found here [Documentation](https://stuartvansmith.github.io/stuart-smith-exercise/)
  

## Notes

  

TODO
1. Setup helper to return array of users to the test -- DONE
2. Add test to Smoke suite to do simple search on name -- DONE 
3. Add tests Medium suite to search for: Valid user by email with and without wildcard. Invalid user by email with and without wildcard
4. Add	tests to Full suite to: Search valid user by user_metadata. Exceed rate and validate response. Search with malformed query and validate response.
5. User deletion handleRate() function to be completed. Need to find X-RateLimit-Reset value and/or investigate the superagent throttle function -- DEPRECATED
6. Replace check local and store local functions with a cookie function built in to superagent -- DEPRECATED

7. Ensure my own account isn't deleted = email !== [myemail]@hotmail.com or have a blacklist of user_id that can never be deleted. -- NO LONGER REQUIRED

8. Debug deletion 'Not Found' error -- DONE

9. Move user class from setupHelper and export from userClass.js -- NO LONGER REQUIRED

10. Decompose helpers to smaller single responsibiliy functions to make extensible for example using strategy patten. -- NOT RELEVANT
11. Implement auth0 SDK -- DONE
12. Implement jsdocs -- IN PROGRESS
13. Tests that would be included if time allowed

# Basic search
search for a valid user  with and without wildcard. For each of these fields:
name
nickname
email
email_verified
given_name
family_name


# Query syntax and operators
search using  NOT AND 
For inclusive ranges use square brackets: [min TO max].
For exclusive ranges use curly brackets: {min TO max}.
Curly and square brackets can be combined in the same range expression: logins_count:[100 TO 200}.
Use ranges in combination with wildcards. For example, to find all users with more than 100 logins, use q=logins_count:{100 TO *].

Repeat with a user that does not exist with and without wildcard
# Metadata searches
Search valid user by user_metadata fields. 
Search Invalid user by user_metadata fields. 


# Performance & Load
Exceed rate limit and validate response. 
Search with malformed query and validate response.
search with a malform URL and validate response.

# Stability & availablility
SQL query injection
Brute force attack

  

## Test project plan document

  

[PDF project plan](https://github.com/stuartvansmith/stuart-smith-exercise/blob/66d079776a5e1d3528cf42eb945e7faed41a0e4e/Documents/Search%20Engine%20Test%20Plan.pdf)

  
  
  

## License

[MIT](https://choosealicense.com/licenses/mit/)