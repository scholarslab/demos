---
layout: default
title: How to Make a StoryMap
---
# How to Make a StoryMap
by Eleanore Neumann

A storymap is exactly what is sounds like: a digital storytelling tool that pairs text with a map in a progressive narrative that often includes additional multimedia. If you would like to learn how to make one like "Mapping New Hampshire," follow the steps below. This tutorial is a work is process, so stay tune for more detailed technical information.

**1. Choose the right platform for your storymap**

Many different storymap tools are now available online, so it is impportant to choose one that is right for your project. You may want to consider whether you want your storymap to be closed source or open source? What functions should the storymap perform? Do you have the programming skills required by some of the more advanced tools (and if not, then you could always learn!)? 

Here are a few tools to get you started along with detail how-to guides:

* [ArcGIS StoryMap](https://storymaps.arcgis.com/en/)
    * [“Resources - Tips, Training and Community.” Esri StoryMaps. Accessed April 28, 2019.](https://storymaps.arcgis.com/en/resources/)]
    * [“Story Map Basic Tutorial.” Esri StoryMaps. Accessed April 29, 2019.](https://storymaps.arcgis.com/en/app-list/basic/tutorial/)
* [Neatline from Scholars’ Lab @ UVA](https://neatline.org/)
    * [Kirby, J. “Neatline 101: Getting Started.” Commons Knowledge - University of Illinois at Urbana-Champaign (blog). Accessed April 29, 2019.](https://publish.illinois.edu/commonsknowledge/2017/07/05/neatline-101-getting-started/)
    * [“Neatline.” Intro to Digital Humanities, UCLA Center for Digital Humanities (blog). Accessed April 29, 2019](http://dh101.humanities.ucla.edu/?page_id=198)
* [Storymap.org](http://storymap.org/)
    * [“How to Guides.” StoryMap.org. Accessed April 29, 2019.](http://storymap.org/index.aspx#howto)
* [StorymapJS from Knightlab @ Northwestern](https://storymap.knightlab.com/)
    * [Introduction to StoryMap. JMU Digital Communication Consulting. Accessed April 29, 2019.](https://www.youtube.com/watch?v=b_hKGk6sn5E)
    * [“StoryMap JS Tutorial.” Open Media Lab, SUNY. Accessed April 28, 2019.](9https://commons.suny.edu/openmedialab/distribute/storymap-js/)
    * [“StoryMap JS Tutorial.” Hacking the Humanities. Accessed April 28, 2019.](http://medhieval.com/hackinghumanities2015/blog/storymap-js-tutorial/)
    * [“StoryMapJS for Technical Users.” StoryMap. Accessed April 29, 2019.](https://storymap.knightlab.com)
* [TimeMapper](http://timemapper.okfnlabs.org/)
    * [“Create Your TimeMap.” Open Knowledge Labs. Accessed April 29, 2019](http://timemapper.okfnlabs.org/create)
    * [“Introducing TimeMapper - Create Elegant TimeMaps in Seconds.” Open Knowledge Labs. Accessed April 29, 2019.](http://okfnlabs.org)
    * [Using the TimeMapper Template. LMU Library. Accessed April 29, 2019.](https://www.youtube.com/watch?v=VPJ3iMkpBZk)

I had initially planned to use StorymapJS from Kightlab at Nortwestern University because it is open source, easy to use, and had the basic functionality I needed for this particular project. However, as the project developed, I realized that I needed additional functionality that StorymapJS did not offer, such as the ability to span to many locations and sometimes multiple locations within the same paragraph. So I decided to develop my own. If none of those tools suit your needs, then take a look at "Mapping New Hampshire" below! <br><br>

## Mapping New Hampshire

**2. Download the files from GitHub** 

You can find the JavaScript file [here](https://github.com/scholarslab/demos/blob/gh-pages/assets/js/storymap/storymap.js), which is based on a storymap jQuery-plugin created by Atle Frenvik Sveen and shared [here](https://github.com/atlefren/storymap) on GitHub. The html file can be found [here](https://github.com/scholarslab/demos/blob/gh-pages/_texts/storymap.html).<br>

The JavaScript uses [Leaflet](https://leafletjs.com/), an open-source JavaScript library for interactive maps. There are a number of helpful tutorials for getting started[here](https://leafletjs.com/examples.html), but they required some technical knowledge.

**3. Set up GitHub Pages**

Follow this guide for setting up your GitHub pages so you can host storymap: 
[“Getting Started with GitHub Pages.” GitHub. Accessed April 29, 2019.](https://guides.github.com/features/pages/)

**4. Add text to you storymap**

Next, you can begin to add text. Here are some [tips for effective storytelling](https://storymaps.arcgis.com/en/five-principles/).

**5. Add locations to your storymap**

You can add markers on the map by modifying the html file. Scroll to line 141 to file the variable "path." To replace a marker or added a new one, simply copy one of the lines starting with "L.marker" and replace the information. The coordinates must be decimal coordinates, which can be found very easily by googling or going to the location's Wikipedia page and clicking on the coordinates in the upper-right-hand corner of the page. The ".bindToolTip" function assigns a popover with a name to each location, so add the name of your location in quotations marks. <br>

To create locations that will be assigned to specific text, scroll down to the variable "views" on line 200. To replace or add a view, copy one of the lines and replace the information again. Give the view a name that will be easy to associate with that location, insert decimal coordinates, and finally set the zoom level. The lower the number for the zoom level, the more zoomed out; and the higher the zoom level the more zoomed in on the location. For instance, zoom level 4 for the United States shows the entire country, whereas zoom level 10 shows the small town of Brighton, New Hampshire.<br><br>

## Resources

[Kirby, J. “Scholarly Smackdown: StoryMap JS vs. Story Maps.” Commons Knowledge, University of Illinois at Urbana-Champaign (blog). Accessed April 28, 2019.](http://publish.illinois.edu/commonsknowledge/2017/03/02/scholarly-smackdown-storymap-js-vs-story-maps/)

[“Mapping Indigenous LA.” UCLA American Indian Studies Center. Accessed April 28, 2019.](https://mila.ss.ucla.edu/)

[“Mapping the Republic of Letters.” National Endowment for the Humanities (NEH). Accessed April 28, 2019.](https://www.neh.gov/humanities/2013/novemberdecember/feature/mapping-the-republic-letters)

Presner, Todd Samuel, David Shepard, and Yoh Kawano. *HyperCities: Thick Mapping in the Digital Humanities. MetaLABprojects*. Cambridge, Massachusett: Harvard University Press, 2014.

[Presner, Todd, David Shepard, and Yoh Kawano. “HyperCities: Thick Mapping in the Digital Humanities.” Accessed April 28, 2019.](http://www.hypercities.com/)

[“Resources - Tips, Training and Community.” Esri StoryMaps. Accessed April 28, 2019.](https://storymaps.arcgis.com/en/resources/).

[Thomas, Mark. “LibGuides: Web-Based Mapping Applications.” Duke University Libraries. Accessed April 28, 2019.](https://guides.library.duke.edu/webmapping/overview)<br><br>


## Acknowledgments

Thank you to Shane Lin from the [Scholars' Lab](https://scholarslab.lib.virginia.edu/) at the University of Virginia for encouraging me to make my own storymap and for guiding me (holding my hand) through the process. I am grateful to Jeremy Boggs, Brandon Walsh, and Drew MacQueen, all from the Scholars' Lab, for their kind and patient help.

## License

"Mapping New Hampshire" is licensed under the MIT license. Please use it!