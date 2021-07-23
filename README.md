# Stuart-Smith-exercise

  

nodeJS testing framework

  

## TODO

  

TODO
1. Setup helper to return array of users to the test
2. Add test to Smoke suite to do simple search on email
3. Add tests Medium suite to search for:
		Valid user by email with and without wildcard
		Invalid user by email with and without wildcard

4. Add	tests to Full suite to:
		Search valid user by user_metadata
		Exceed rate and validate response
		Search with malformed query and validate response

5. User deletion handleRate() function to be completed. Need to find X-RateLimit-Reset value and/or investigate the superagent throttle function
6. Replace check local and store local functions with a cookie function built in to superagent

7. Ensure my own account isn't deleted = email !== [myemail]@hotmail.com or have a blacklist of user_id that can never be deleted.

8. Debug deletion 'Not Found' error

9. Move user class from setupHelper and export from userClass.js

10. Decompose helpers to smaller single responsibiliy functions to make extensible for example using strategy patten.

  

## Test project plan document

  

[PDF project plan](https://github.com/stuartvansmith/stuart-smith-exercise/blob/66d079776a5e1d3528cf42eb945e7faed41a0e4e/Documents/Search%20Engine%20Test%20Plan.pdf)

  
  
  

## License

[MIT](https://choosealicense.com/licenses/mit/)