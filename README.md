# NSN-Website
A website collecting details on my stories.
Repo link: https://github.com/NotReallyNobility/NSN-Website.git

The current website uses Bootstrap5 and Jquery. 
The current bootstrap features in use are the containers, navbar, cards, and flex.
The current Jquery features in use are fade in and the animate function(grows the logo)

All pages are finished with the exception of the setting specific pages.

The five new pages are the arc selection page, the arc page, the character selection page, the singular character page, and the character group page.
For the character pages a blank template is used with jquery filling out those segments with information. For example: "Name: BLANK" becomes "Name: Alex Green".
This is done by giving the links a class named after the character they're meant to send you to, and the shared javascript file seeing the class and setting the relevant local storage variable to that character's index. This will allow any mentions of a character or place to be able to link back to that character's page, though that will require a slight reformatting of the implementation process to affect the html rather than the text attribute of the elements.
