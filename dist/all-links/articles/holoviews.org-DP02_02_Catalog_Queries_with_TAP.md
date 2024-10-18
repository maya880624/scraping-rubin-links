Installation — HoloViews v1.19.1
Skip to main content
Back to top
Ctrl+K
Getting Started
User Guide
Gallery
Reference Gallery
Developer Guide
More
Releases
API
FAQ Roadmap
About
GitHub
Twitter
Discourse
Discord
Getting Started
User Guide
Gallery
Reference Gallery
Developer Guide
Releases
API
FAQ Roadmap
About
GitHub
Twitter
Discourse
Discord
Getting Started
Introduction
Customization
Tabular Datasets
Gridded Datasets
Live Data
User Guide
Annotating your Data
Composing Elements
Applying Customizations
Style Mapping
Dimensioned Containers
Building Composite Objects
Live Data
Tabular Datasets
Gridded Datasets
Geometry Data
Indexing and Selecting Data
Transforming Elements
Responding to Events
Custom Interactivity
Data Processing Pipelines
Creating interactive network graphs
Working with large data
Working with streaming data
Creating interactive dashboards
Customizing Plots
Colormaps
Plotting with Bokeh
Deploying Bokeh Apps
Linking Bokeh plots
Plotting with matplotlib
Working with Plot and Renderers
Linked Brushing
Annotators
Exporting and Archiving
Continuous Coordinates
Notebook Magics
Gallery
Applications
Bokeh
Crossfilter
Game Of Life
Gapminder
Mandelbrot
Nytaxi Hover
Streaming Psutil
Demos
Bokeh
Area Chart
Autompg Histogram
Autompg Violins
Bachelors Degrees By Gender
Bars Economic
Box Draw Roi Editor
Boxplot Chart
Choropleth Data Link
Directed Airline Routes
Dot Example
Dragon Curve
Dropdown Economic
Emoji Tsne
Energy Sankey
Hextile Movie Ratings
Histogram Example
Html Hover Tooltips
Image Range Tool
Iris Density Grid
Iris Example
Iris Grouped Grid
Iris Splom Example
Irregular Quadmesh
Legend Example
Lesmis Example
Life Expectancy Split Violin
Lorenz Attractor Example
Mandelbrot Section
Measles Example
Multichannel Timeseries Viewer
Network Graph
Nyc Airport Connections
Nyc Radial Heatmap
Point Draw Triangulate
Quiver Demo
Route Chord
Scatter Economic
Square Limit
Step Chart
Stocks Example
Texas Choropleth Example
Timeseries Range Tool
Topographic Hillshading
Us Unemployment
Verhulst Mandelbrot
Matplotlib
Area Chart
Autompg Histogram
Autompg Violins
Bachelors Degrees By Gender
Bars Economic
Boxplot Chart
Directed Airline Routes
Dragon Curve
Dropdown Economic
Energy Sankey
Hextile Movie Ratings
Histogram Example
Iris Density Grid
Iris Example
Iris Grouped Grid
Iris Splom Example
Irregular Quadmesh
Legend Example
Lorenz Attractor Example
Mandelbrot Section
Measles Example
Network Graph
Nyc Airport Connections
Nyc Radial Heatmap
Polar Scatter Demo
Quiver Demo
Route Chord
Scatter Economic
Square Limit
Step Chart
Stocks Example
Surface 3d
Texas Choropleth Example
Topographic Hillshading
Trisurf3d Demo
Us Unemployment
Verhulst Mandelbrot
Plotly
Surface 3d
Trisurf3d Demo
Reference Gallery
Elements
Bokeh
Area
Arrow
Bars
Bivariate
Bounds
Box
BoxWhisker
Chord
Contours
Curve
Distribution
Div
Ellipse
ErrorBars
Graph
HLine
HLines
HSV
HSpan
HSpans
HeatMap
HexTiles
Histogram
Image
ImageStack
ItemTable
Labels
Path
Points
Polygons
QuadMesh
RGB
RadialHeatMap
Raster
Rectangles
Sankey
Scatter
Segments
Slope
Spikes
Spline
Spread
Table
Text
Tiles
TriMesh
VLine
VLines
VSpan
VSpans
VectorField
Violin
Matplotlib
Area
Arrow
Bars
Bivariate
Bounds
Box
BoxWhisker
Chord
Contours
Curve
Distribution
Ellipse
ErrorBars
Graph
HLine
HLines
HSV
HSpan
HSpans
HeatMap
HexTiles
Histogram
Image
ImageStack
ItemTable
Labels
Path
Path3D
Points
Polygons
QuadMesh
RGB
RadialHeatMap
Raster
Rectangles
Sankey
Scatter
Scatter3D
Segments
Slope
Spikes
Spline
Spread
Surface
Table
Text
TriMesh
TriSurface
VLine
VLines
VSpan
VSpans
VectorField
Violin
Plotly
Area
Bars
Bounds
Box
BoxWhisker
Curve
Distribution
Ellipse
ErrorBars
HLine
HSpan
HeatMap
Histogram
Image
ImageStack
ItemTable
Path3D
Points
RGB
Raster
Scatter
Scatter3D
Spread
Surface
Table
Tiles
TriSurface
VLine
VSpan
Violin
Containers
Bokeh
DynamicMap
GridSpace
HoloMap
Layout
NdLayout
NdOverlay
Overlay
Matplotlib
DynamicMap
GridSpace
HoloMap
Layout
NdLayout
NdOverlay
Overlay
Plotly
DynamicMap
GridSpace
HoloMap
Layout
NdLayout
NdOverlay
Overlay
Streams
Bokeh
Bounds
BoundsX
BoundsY
BoxEdit
CurveEdit
FreehandDraw
PointDraw
PointerX
PointerXY
PolyDraw
PolyEdit
RangeXY
Selection1D
Selection1D Paired
Selection1D Points
Selection1D Tap
Tap
Plotly
Bounds
BoundsX
BoundsY
RangeXY
Selection1D Paired
Selection1D Points
Apps
Bokeh
Player
Selection Stream
Sine
Features
Bokeh
Scalebar
Developer Guide
Releases
API
annotators
core
holoviews.data Package
core.data
element
ipython
operation
plotting
holoviews.bokeh Package
holoviews.mpl Package
holoviews.plotly Package
plotting.bokeh
plotting.plotly
selection
streams
util
FAQ Roadmap
About
Stop plotting your data - annotate your data and let it visualize
itself.
HoloViews is an open-source
Python library designed to make data analysis and visualization seamless
and simple. With HoloViews, you can usually express what you want to do
in very few lines of code, letting you focus on what you are trying to
explore and convey, not on the process of plotting.
For examples, check out the thumbnails below and the other items in the
Gallery of demos and apps and the Reference Gallery
that shows every HoloViews component. Be sure to
look at the code, not just the pictures, to appreciate how easy it is to
create such plots yourself!
The Getting-Started guide explains the basic concepts
and how to start using HoloViews, and is the recommended way to
understand how everything works.
The User Guide goes more deeply into key concepts from
HoloViews, when you are ready for further study.
The API is the definitive guide to each HoloViews
object, but the same information is available more conveniently via the
hv.help() command and tab completion in the Jupyter notebook.
If you have any issues or
wish to contribute code, you can
visit our GitHub site, file a
topic on the HoloViz Discourse, or ask a quick question
on Holoviz Discord.
Installation#
HoloViews works with Python 3 on Linux, Windows, or Mac, and works
seamlessly with Jupyter Notebook and JupyterLab.
You can install HoloViews either with conda or pip, for more information see the install guide.
conda install holoviews
pip install holoviews
Usage#
Once you’ve installed HoloViews, you can get a copy of all the examples
shown on this website:
holoviews --install-examples
cd holoviews-examples
Now you can launch Jupyter Notebook or JupyterLab to explore them:
jupyter notebook
jupyter lab
After you have successfully installed and configured HoloViews, please
see Getting Started.
next
Welcome to HoloViews!
On this page
Installation
Usage
Show Source
© Copyright 2005 HoloViz developers.
Created using Sphinx 7.3.7.
Built with the PyData Sphinx Theme 0.15.4.