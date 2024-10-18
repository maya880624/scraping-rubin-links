Bokeh
Documentation
Community
Tutorials
Demos
Blog
GitHub
Donate
Bokeh at a Glance
Flexible
Bokeh makes it simple to create common plots, but also can handle custom or specialized use-cases.
Interactive
Tools and widgets let you and your audience probe “what if” scenarios or drill-down into the details of your data.
Shareable
Plots, dashboards, and apps can be published in web pages or Jupyter notebooks.
Productive
Work in Python close to all the PyData tools you are already familiar with.
Powerful
You can always add custom JavaScript to support advanced or specialized cases.
Open Source
Everything, including the Bokeh server, is BSD licensed and available on GitHub.
Common Scenarios
Applications
Dashboards
Exploration
Streaming
Websites
Build Powerful Data Applications
Python has an incredible ecosystem of powerful analytics tools:
NumPy,
Scipy,
Pandas,
Dask,
Scikit-Learn,
OpenCV,
and more.
With a wide array of widgets, plot tools, and UI events that can trigger real Python callbacks, the Bokeh server is the bridge that lets you connect these tools to rich, interactive visualizations in the browser.
Publish Sophisticated Dashboards
Data scientists and developers appreciate Bokeh’s powerful APIs. But when publishing results for a wider audiences, what matters is the ability to generate clean, easy-to-understand presentations.
Bokeh offers its own basic grid and row/column layouts that make getting started a snap.
When you need slick, reponsive dashboards, it’s also possible to embed Bokeh plots and widgets into popular templates.
Interactively Explore Data in Notebooks
Bokeh works in both JupyterLab as well as classic notebooks.
Sophisticated interactive visualizations to use alongside your notebook explorations are only a call to output_notebook away—and that includes full embedded Bokeh server applications.
Try things out right now with the live tutorial notebooks hosted generously by MyBinder.
Visualize Streaming Data
Whether you are streaming data from financial markets, IOT telemetry, or physical sensors, Bokeh has efficient streaming APIs to help you keep on top of things. In a Bokeh server application, it is as simple as passing your new data values to a stream method:
source.stream({'x': new_xs, 'y': new_ys})
But standalone Bokeh output can handle streaming data too, using either the AjaxDataSource or the ServerSentDataSource.
Add Content to Web Pages
Maybe you’ve created a Flask or Django web app that needs to include reporting charts.
Or maybe you’ve written an article for a Jekyll blog that needs some infographics to illustrate your point.
Bokeh offers a variety of methods to embed its content in web pages: server_document for deployed Bokeh server applications, or json_items and components for standalone Bokeh output.
User Showcase
Dask
Dask is a tool for scaling out PyData projects like
NumPy,
Pandas,
Scikit-Learn,
and RAPIDS. It is supported by Nvidia, Quansight, and Anaconda.
The Dask Dashboard is a diagnostic tool that helps you monitor and debug live cluster performance.
Microscopium
Microscopium is a project maintained by researchers at Monash University.
It allows researchers to discover new gene or drug functions by exploring large image datasets with Bokeh’s interactive tools.
Panel
Panel is a tool for polished data presentation that utilizes the Bokeh server.
It is created and supported by Anaconda.
Panel makes it simple to create custom interactive web apps and dashboards by connecting
user-defined widgets to plots, images, tables, or text.
Chartify
Chartify is an opinionated high-level charting API built on top of Bokeh, created by Spotify.
With smart default styles, consistent tidy data format, and a simple API, it’s easy for you to concentrate on your work.
Mistic
Mistic
is a software package written in Python and uses the visualization library Bokeh.
Mistic can be used to simultaneously view multiple multiplexed 2D images using pre-defined coordinates (e.g. t-SNE or UMAP), randomly generated coordinates, or as vertical grids to provide an overall visual preview of the entire multiplexed image dataset.
ArviZ
ArviZ is a community-led package for exploratory analysis of Bayesian models in Python.
It Includes functions for posterior analysis, data storage, sample diagnostics, model checking, and comparison. The goal is to provide backend-agnostic tools for diagnostics and visualizations of Bayesian inference.
Where to Connect
Discourse
Join community discussions
Github
See source code and
issues
Project
Roadmap
Team
Branding
Documentation
User Guide
Gallery
Reference Guide
Hands On
Tutorials
Demos
Support
Contribute
GitHub
Contributor Guide
Sponsor
Bokeh is a fiscally sponsored project of NumFOCUS, a nonprofit dedicated to supporting the open-source scientific computing community.
Donations help pay for cloud hosting costs, travel, and other project needs.
©2024 Bokeh contributors.
The website content uses the BSD License and is covered by the Bokeh Code of Conduct.
Donate