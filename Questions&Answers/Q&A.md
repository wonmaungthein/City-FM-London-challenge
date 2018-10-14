# Global Radio Testing Role challenge

# Question 1
Using any language or framework that you feel more comfortable with; Write an automated test that asserts that Calvin Harris is either 'playing' or has 'recently played' on 'Capital FM London'.
You should test the Now Playing module (.now_playing_card)on the right side of the page of www.capitalfm.com. This module contains the currently playing track, the recently played tracks and how long ago the track was played.
Note: A fully working executable test suite is not necessarily required. We are interested in your 'use of selectors' and choice of 'logic'. A partial Class/Model or Pseudo Code would be sufficient for this task

# Answer 1: https://github.com/wonmaungthein/City-FM-London-challenge

————————————————

# Question 2
Please highlight what you think it is wrong in the following piece of HTML code and modify it in order to open the register page in a separate tab.

<ul id=user_status class="header-user-status">
<li class="header-user-status__item">
<a href="/members/register/"><strong>Register</strong></a>
</li> |
<li class=header-user-status__item>
<a rel="nofollow" href="/members/login/"><strong>Sign in</strong></a> </li> |
</li>

# Answer 2
In the first line of code, id=user_status need to have " ". eg. id="user_status".
There are no quotes around id (it won’t break it but not good code)
The page is not accessible. Links should have title for screen readers
No quotes around class for list item. Eg. class= “header-user-status_item”.
`ul` is not closed at the end. The last closing tag should be (</ul>) rather than (</li>).
Instead of using `strong`, we should use CSS to style (not good to use HTML for styling)
To open the link in new page, you need `<a target="_blank" href.....>` 

————————————————

# Question 3
What do you consider before deciding to automate a test?

# Answer 3
I would consider these points below before deciding to automate a test.
Is automation testing the only way to accomplish our team goal? 
Eg. performing tasks which are difficult to do manual testing such as Regression Testing, Smoke Testing, Static & Repetitive Tests, Data Driven Testing and Load & Performance Testing. 
What will be the benefits of automation test? 
Will it save more time, support the needs of my team, give faster feedback?
Will it improve productivity, test coverage and test accuracy?  
What will be the risks of not doing automation test? 
Do I need to test high traffic page, features that depend on security, and problematic areas?  
How often am I going to run this test again in the future? 
If we are going to test repeatedly for longer run, it will be better to do automation test. If we will be testing just for a few times, it’s better to do manual test. 

————————————————

# Question 4
How much testing do you think is enough?

# Answer 4
To decide how much testing is enough, I should check the result of testing. If I find a lot of faults within a set of planned tests, more testing is needed to assure that the required level of software quality is achieved. If I find just very few faults with the planned set of tests and which are not risky for the application, I can assume that the testing is enough. I should also think about the risks of not testing enough. I should definitely test all priority features (should not miss any priority features). By missing out important features to test, can have severe issues for the application which will also affect the business, can lead more work for developers, waste more time and money.   

————————————————

# Question 5
How would you test a 'responsive website' without being given any other instruction.

# Answer 5
By writing a test plan for different types of browsers and devices. 
By minimising and maximising the browser, changing the view port sizes and see the behaviour of the website. 
Check the website in different browsers and different devices to test if the website is responsive. 

————————————————

# Question 6 (Bonus)
Write a function in Python; that given a key/value pair it will return True if there's an occurrence in a list of dictionaries.

An example structure is given below as a https://docs.python.org/3.7/library/doctest.html
def find_key_value_pair(key, value, dicts): """
>>> data = [{'jim': 'is a fraud', 'jane': 'is alive'}, {'bob': 'is cool'}] >>> find_key_value_pair('bob', 'is cool', data)
True
>>> find_key_value_pair('jane', 'is dead', data)
False
>>> find_key_value_pair(None, 5, {'this is a': 'bonus case'}) False
"""
return False









