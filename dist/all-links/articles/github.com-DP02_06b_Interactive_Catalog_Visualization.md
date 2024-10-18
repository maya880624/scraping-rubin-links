"Models must be owned by only a single document" when reusing server port · Issue #8579 · bokeh/bokeh · GitHub
Skip to content
Navigation Menu
Toggle navigation
Sign in
Product
Actions
Automate any workflow
Packages
Host and manage packages
Security
Find and fix vulnerabilities
Codespaces
Instant dev environments
GitHub Copilot
Write better code with AI
Code review
Manage code changes
Issues
Plan and track work
Discussions
Collaborate outside of code
Explore
All features
Documentation
GitHub Skills
Blog
Solutions
By size
Enterprise
Teams
Startups
By industry
Healthcare
Financial services
Manufacturing
By use case
CI/CD & Automation
DevOps
DevSecOps
Resources
Topics
AI
DevOps
Security
Software Development
Explore
Learning Pathways
White papers, Ebooks, Webinars
Customer Stories
Partners
Open Source
GitHub Sponsors
Fund open source developers
The ReadME Project
GitHub community articles
Repositories
Topics
Trending
Collections
Enterprise
Enterprise platform
AI-powered developer platform
Available add-ons
Advanced Security
Enterprise-grade security features
GitHub Copilot
Enterprise-grade AI features
Premium Support
Enterprise-grade 24/7 support
Pricing
Search or jump to...
Search code, repositories, users, issues, pull requests...
Search
Clear
Search syntax tips
Provide feedback
We read every piece of feedback, and take your input very seriously.
Include my email address so I can be contacted
Cancel
Submit feedback
Saved searches
Use saved searches to filter your results more quickly
Name
Query
To see all available qualifiers, see our documentation.
Cancel
Create saved search
Sign in
Sign up
Reseting focus
You signed in with another tab or window. Reload to refresh your session.
You signed out in another tab or window. Reload to refresh your session.
You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert
bokeh
/
bokeh
Public
Notifications
You must be signed in to change notification settings
Fork
4.2k
Star
19.2k
Code
Issues
724
Pull requests
32
Discussions
Actions
Projects
6
Wiki
Security
Insights
Additional navigation options
Code
Issues
Pull requests
Discussions
Actions
Projects
Wiki
Security
Insights
New issue
Have a question about this project? Sign up for a free GitHub account to open an issue and contact its maintainers and the community.
Sign up for GitHub
By clicking “Sign up for GitHub”, you agree to our terms of service and
privacy statement. We’ll occasionally send you account related emails.
Already on GitHub?
Sign in
to your account
Jump to bottom
"Models must be owned by only a single document" when reusing server port
#8579
Closed
tete1030
opened this issue
Jan 21, 2019
· 10 comments
Closed
"Models must be owned by only a single document" when reusing server port
#8579
tete1030
opened this issue
Jan 21, 2019
· 10 comments
Labels
reso: working as intended
type: discussion
Comments
Copy link
tete1030
commented
Jan 21, 2019
ALL software version info (bokeh, python, notebook, OS, browser, any other relevant packages)
Bokeh 1.0.4
Python 3.6.8 :: Anaconda custom (64-bit)
Jupyter notebook 5.7.4
macOS 10.14.2, Ubuntu 16.04
Chrome 71.0.3578.98
Description of expected behavior and the observed behavior
Copy the following codes into a jupyter notebook (at least version 5.1.0).
When firstly execute In[2], there is only one "Handler called" printed and the Button rendered normally. Then run In[2] again, two lines of "Handler called" are printed, Button is still normal. However at the third time and followers, one "Handler called" is printed and the server side reported error "Models must be owned by only a single document".
If then I wait for at least 5 minutes (I didn't measure exactly how long) and execute In[2] again, it just works normally again with only one "Handler called" printed.
P.S. Notebook needs to be at least 5.1.0, otherwise re-running of notebook cell will not trigger a clear_output event, thus the destroy_server will not be called at bokeh server side. In this case you need to manually clear output to release the port as in #7466 (comment).
If the port is set to random choosing, this problem is gone.
Complete, minimal, self-contained example code that reproduces the issue
In[1]:
from bokeh.plotting import output_notebook
output_notebook()
def test():
from bokeh.models.widgets import Button
from bokeh.layouts import layout
from bokeh.io.state import curstate
from bokeh.io.notebook import show_app
test_btn = Button(label="Test")
mylayout = layout([test_btn])
def modify_doc(doc):
print("Handler called")
doc.add_root(mylayout)
show_app(
modify_doc,
curstate(),
notebook_url="http://localhost:8888",
port=12345) # port=0 is okay
In[2]:
test()
Stack traceback and/or browser JavaScript console output
ERROR:tornado.application:Uncaught exception GET /autoload.js?bokeh-autoload-element=1019&bokeh-absolute-url=http://localhost:12345&resources=none (::1)
HTTPServerRequest(protocol='http', host='localhost:12345', method='GET', uri='/autoload.js?bokeh-autoload-element=1019&bokeh-absolute-url=http://localhost:12345&resources=none', version='HTTP/1.1', remote_ip='::1')
Traceback (most recent call last):
File "/Users/texot/anaconda3/lib/python3.6/site-packages/tornado/web.py", line 1592, in _execute
result = yield result
File "/Users/texot/anaconda3/lib/python3.6/site-packages/tornado/gen.py", line 1133, in run
value = future.result()
File "/Users/texot/anaconda3/lib/python3.6/site-packages/tornado/gen.py", line 1141, in run
yielded = self.gen.throw(*exc_info)
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/server/views/autoload_js_handler.py", line 60, in get
session = yield self.get_session()
File "/Users/texot/anaconda3/lib/python3.6/site-packages/tornado/gen.py", line 1133, in run
value = future.result()
File "/Users/texot/anaconda3/lib/python3.6/site-packages/tornado/gen.py", line 1141, in run
yielded = self.gen.throw(*exc_info)
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/server/views/session_handler.py", line 77, in get_session
session = yield self.application_context.create_session_if_needed(session_id, self.request)
File "/Users/texot/anaconda3/lib/python3.6/site-packages/tornado/gen.py", line 1133, in run
value = future.result()
File "/Users/texot/anaconda3/lib/python3.6/site-packages/tornado/gen.py", line 1147, in run
yielded = self.gen.send(value)
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/server/contexts.py", line 215, in create_session_if_needed
self._application.initialize_document(doc)
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/application/application.py", line 178, in initialize_document
h.modify_document(doc)
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/application/handlers/function.py", line 133, in modify_document
self._func(doc)
File "<ipython-input-1-dfd207c7ef75>", line 14, in modify_doc
doc.add_root(mylayout)
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/document/document.py", line 304, in add_root
self._pop_all_models_freeze()
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/document/document.py", line 1018, in _pop_all_models_freeze
self._recompute_all_models()
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/document/document.py", line 1041, in _recompute_all_models
a._attach_document(self)
File "/Users/texot/anaconda3/lib/python3.6/site-packages/bokeh/model.py", line 609, in _attach_document
raise RuntimeError("Models must be owned by only a single document, %r is already in a doc" % (self))
RuntimeError: Models must be owned by only a single document, Column(id='1004', ...) is already in a doc
ERROR:tornado.access:500 GET /autoload.js?bokeh-autoload-element=1019&bokeh-absolute-url=http://localhost:12345&resources=none (::1) 19.38ms
Screenshots or screencasts of the bug in action
First time run:
Second time:
Third time:
The text was updated successfully, but these errors were encountered:
All reactions
Copy link
Member
bryevdv
commented
Jan 21, 2019
•
edited
Loading
This is a usage error, and the resulting error is expected and intended. Every Bokeh model for the embedded app (in a notebook) must be generated fresh every time by the modify_doc function, so that every invocation of the show_app function creates a completely new and self-contained app document, with its own unique set of Bokeh objects. I.e you cannot have global Bokeh objects "outside" the function that is passed to show_app.
The reason for this is simply that having a mixture of automatically synchronizing dual-runtime (Python/JS) objects smeared across notebooks cells that can executed repeatedly and out of order, is impossible to reason about effectively. You should closely emulate the existing notebook app examples, e.g.
https://github.com/bokeh/bokeh/blob/master/examples/howto/server_embed/notebook_embed.ipynb
All reactions
Sorry, something went wrong.
bryevdv
closed this as completed
Jan 21, 2019
bryevdv
added
type: discussion
reso: working as intended
labels
Jan 21, 2019
Copy link
Member
bryevdv
commented
Jan 21, 2019
•
edited
Loading
Another way to state this: Bokeh apps
are actually more like recipes that create collections of Bokeh objects that get automatically synced between Python/JS. Every time the recipe is used (here, modify_doc) it must create a brand new collection of objects.
This is not an issue in bokeh serve usage, since the
bokeh server executes the app script on your behalf in a clean namespace on every connection. But the possibility for out-of-order cell execution in notebooks (which, IMO, is the notebooks absolute worst mis-feature) means that code like you have above cannot be supported.
All reactions
Sorry, something went wrong.
Copy link
Author
tete1030
commented
Jan 21, 2019
Thank you for your explanation. But I'm still a little confused. I cannot see anything except the port number is not new. I think mylayout as well as its children that will be passed to add_root are new objects every time I call test(), isn't it?
I'm not sure if modify_doc itself is a brand new function object each time test() gets called, but the reference to mylayout inside modify_doc should have been updated (maybe in modify_doc.__code__.co_freevars, I'm not sure). When the modify_doc function gets called in a new server, it should execute doc.add_root with new mylayout.
All reactions
Sorry, something went wrong.
Copy link
Author
tete1030
commented
Jan 21, 2019
I probably see your points. Do you mean modify_doc could be called multiple times with only one show_app called? In my code the Model objects are generated only for every show_app call, but it should be for every modify_doc call, is that correct?
All reactions
Sorry, something went wrong.
Copy link
Member
bryevdv
commented
Jan 21, 2019
Yes that's exactly it, I could (and should) have stated things as succinctly as that.
All reactions
Sorry, something went wrong.
Copy link
Author
tete1030
commented
Jan 21, 2019
Thanks!
All reactions
Sorry, something went wrong.
Copy link
drpeterfoster
commented
Jun 6, 2019
FYI, I stumbled into a "solution" for this when working in a jupyter notebook...
import bokeh.plotting as bop
bop.output_notebook()
p = bop.figure(some plot)
bop.show(p)
# happily plots inline in notebook
bop.output_file('foo.html')
bop.save(p)
# joyfully packages the plot and saves it as expected
try:
bop.reset_output()
bop.output_notebook()
bop.show(p)
# angrily yells at me about single ownership
except:
bop.output_notebook()
bop.show(p)
# ...aaaaaaand we're back to happy inline plotting.
¯_(ツ)_/¯
All reactions
Sorry, something went wrong.
Copy link
Member
bryevdv
commented
Jun 7, 2019
•
edited
Loading
@drpeterfoster that would be an unrelated issue, since it does not involve the situation with emedded Bokeh server apps discussed above. That said, I can't reproduce anything like you describe:
However, if you can supply a notebook that reproduces a problem (with the latest release only—we only have the resources for a single line of development) then please open a new separate issue.
All reactions
Sorry, something went wrong.
Copy link
misterjoa
commented
Oct 23, 2019
Same problem when refreshing page using self-contained server/app : #8265 (comment)
All reactions
Sorry, something went wrong.
Copy link
Member
bryevdv
commented
Oct 23, 2019
@misterjoa please do not cross-post like this. I have replied describing your usage error in the other issue.
All reactions
Sorry, something went wrong.
bokeh
locked as resolved and limited conversation to collaborators
Oct 23, 2019
Sign up for free
to subscribe to this conversation on GitHub.
Already have an account?
Sign in.
Assignees
No one assigned
Labels
reso: working as intended
type: discussion
Projects
None yet
Milestone
No milestone
Development
No branches or pull requests
4 participants
Footer
© 2024 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
You can’t perform that action at this time.