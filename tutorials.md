---
layout: page
title: Tutorials
order: 2
---
# **About this website**

This site was designed using [minimal computing](http://go-dh.github.io/mincomp/) principles. 

# **Typeface Reconstruction Tutorial**
by Catherine Addington

[![alt text](https://raw.githubusercontent.com/caddington11/praxis/master/Font%20Project/Font%20download%20graphic.jpg "Click to download the New Hampshire Font.")](https://github.com/caddington11/praxis/blob/master/Font%20Project/NewHampshire-Regular.otf?raw=true)

In pursuing this project, each Praxis team member was asked what they would want to do with public domain materials. I wasn’t sure if I was allowed to do what I wanted to do, which was harvest the fabulous barbed typeface from Robert Frost’s _New Hampshire_ (1923) and use it in all my design projects for the rest of time. After all, the book is not just text—it’s art, too, thanks to J.J. Lankes’s original woodcuts. The typeface is only used on the four title pages in the book: the one for the [collection][1] itself, and for each of the three major sections ([_New Hampshire_][2], [_Notes_][3], and [_Grace Notes_][4]). Even so, it makes a strong visual impact. I wanted to know: when the book [came into the public domain](https://www.smithsonianmag.com/arts-culture/first-time-20-years-copyrighted-works-enter-public-domain-180971016/) this year, did its typographical design come with it? (Spoiler alert: nope…because it was already in the public domain!)

But just because something’s free to use doesn’t mean it is actually available to use—that’s where Unclosure comes in. In the hopes of empowering other typography enthusiasts, bibliography scholars, and digital tinkerers to pursue their own font reconstruction projects, this tutorial will:
- summarize the relationship between typefaces, fonts, and the public domain,
- demonstrate how I reconstructed the _New Hampshire_ typeface,
- and explain why I am making it available to use freely.

## Fonts and Typefaces in the Public Domain
Though often used interchangeably, these two terms have meaningful differences in printing, digital, and legal contexts.
- In **printing** technology, the term _[typeface][5]_ refers to a particular design of type and the term _[font][6]_ refers to that design in a particular size and weight. In other words, one typeface can contain many fonts.
- In **digital** technology, the terms are generally used interchangeably. However, a _typeface_ refers to a design, a _font_ to a particular file containing that design, and a _font family_ to a collection of font files containing different variations on the design.
- In **legal** terms in the United States, a _typeface_ is a design for the appearance of a given character set while a _font_ is the program that tells a computer, browser, or printer how to display that design. A _typeface_ (the design itself) cannot be copyrighted, while a _font_ (the program file) can be. {<a name="anchor1"><sup>[1](#fn1)</sup></a>} (Check out this [Font and Typeface Legal Tip Sheet][7] for more information.)

Since this project deals with exploring the legal parameters of the public domain, this tutorial will use the terms _typeface_ and _font_ in their legal senses, to refer to the design and the program file respectively.

## Reconstructing the _New Hampshire_ Typeface
The first step was to try and identify the typeface, in order to avoid any duplication of effort. [IdentiFont][8], [FontSpring Matcherator][9], and [WhatFontIs][10] all came up empty, so then I started looking at other books published by Henry Holt & Company around the same time. No matches.

According to [Sue Donovan][11], Conservator for Special Collections at the University of Virginia, it is unlikely that this typeface was cut as moveable type to be reused in multiple places. Rather, it is more likely that the publisher contracted with the collection’s illustrator, J.J. Lankes, to cut these title pages individually. For instance, she noted, observe how all the S letters on the initial title page—and in the three following it—are unique:

![alt text](https://raw.githubusercontent.com/caddington11/praxis/master/Font%20Project/S%20comparison.jpg "Compare S letters on the four title pages.")

As such, the typeface would need to be built out from scratch. Here are the steps I followed:

1. I downloaded a high-resolution [image][12] of the collection’s title page from HathiTrust.
2. I isolated individual characters, creating a JPG file for each character using my computer’s screenshot tool.
3. I then used Adobe Photoshop to clean up each character, removing any printing blemishes or traces of adjacent characters as well as introducing a transparent background. (A free, open-source, multi-platform alternative to Photoshop is [GIMP][13].)
4. Since the typeface was only used on a few pages of _New Hampshire_, the sample size was too limited to produce a complete character set. {<a name="anchor2"><sup>[2](#fn2)</sup></a>} I used Photoshop to draw the missing characters that were most essential to make the typeface functional:

   ![alt text](https://raw.githubusercontent.com/caddington11/praxis/master/Font%20Project/Q%20construction.jpg "The missing Q was constructed from the O and the R.")
5. I customized and [completed a template](https://github.com/caddington11/praxis/blob/master/Font%20Project/Calligraphr%20Templates/Template-Merged.pdf) from the font-creation tool [Calligraphr][14] {<a name="anchor3"><sup>[3](#fn3)</sup></a>}, placing each character image into the template using Photoshop. I filled out the lowercase template with the uppercase letters, producing a “[small caps][18]” effect, rather than drawing lowercase letters fresh.
6. After uploading the template to [Calligraphr][19], the website returned both [OpenType and TrueType][20] font files, which I then installed on my computer to test them out in a text editor. Everything looked good, so the next step was to make them usable on the web.
7. Using FontSquirrel’s [Webfont Generator][21], I downloaded a [Web Font Kit with sample stylesheets](https://github.com/caddington11/praxis/tree/master/Font%20Project/Web%20Font%20Kit), which I passed along to our stellar web team for use on the website.

## Releasing the _New Hampshire_ Font and Typeface
As mentioned above, the _New Hampshire_ typeface is already in the public domain by virtue of typefaces being uncopyrightable. (It’s also much easier to access now that the poetry collection it decorates is itself in the public domain.) But the _New Hampshire_ font produced in this tutorial—the digital instantiation of the typeface—is a slightly different story.

In the tutorial above, I used the tool [Calligraphr][22] to produce the New Hampshire font used on this website. According to [Calligraphr’s terms of use][23], any font created using Calligraphr is the user’s sole property, with no requirements regarding use or attribution. That gave me the opportunity to become the font’s copyright owner. Instead, I am choosing to release it into the public domain here. More precisely, I’m using the [Creative Commons “CC0” tool (“No Rights Reserved”)][24] to waive all my copyright and related rights in this work to the fullest extent allowed by law, “so that others may freely build upon, enhance and reuse the work for any purposes without restriction.”

> Click here to download the New Hampshire Font: [OpenType Font (.otf)](https://github.com/caddington11/praxis/blob/master/Font%20Project/NewHampshire-Regular.otf?raw=true) or [TrueType Font (.ttf)](https://github.com/caddington11/praxis/blob/master/Font%20Project/NewHampshire-Regular.ttf?raw=true). You can also get the [Web Font Kit here](https://github.com/caddington11/praxis/tree/master/Font%20Project/Web%20Font%20Kit).

> [![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
> To the extent possible under law, [<span property="dct:title">Catherine Addington</span>](http://catherineaddington.com) has waived all copyright and related or neighboring rights to <span property="dct:title">New Hampshire Font</span>. This work is published from: <span property="vcard:Country" datatype="dct:ISO3166" content="US" about="http://catherineaddington.com">United States</span>.

I chose this license not just because our entire project seeks to enrich the public domain, but because my doing so serves as a demonstration of the complex dynamic at play here. Through a series of strange legal events, I ended up with a claim to own something I barely put any effort into: J.J. Lankes created the typeface design, Calligraphr produced the font programming, and I did some quick screenshot cleanup in between. I could charge oblivious online typography buffs for the use of the New Hampshire font, and arguably that’s my prerogative, but then I would be depriving the public of free access to something that was theirs to begin with. Instead, this release aims to educate. It is only by educating ourselves about this issue that we can both engage the public-domain designs that are rightfully ours and understand the value added by programmers who copyright the code that makes them available to us online.

## Acknowledgments
Special thanks to [Brandon Butler][25], [Jeremy Boggs][26], and [Sue Donovan][27] for consulting on this project.

<a name="fn1"><sup>[1](#anchor1)</sup></a> For an example of a recent case where the reproduction of a typeface was held up as legal, check out [_Dr. Seuss Enterprises, L.P._ v. _ComicMix LLC_](http://boothsweet.com/wp-content/uploads/2019/03/DSE-v-ComicMix-Summary-Judgment-Order.pdf): "Here, Defendants are alleged to have reproduced Plaintiff’s typefaces; they are not alleged to have replicated Plaintiff’s underlying “code” or font" (footnote 10).

<a name="fn2"><sup>[2](#anchor2)</sup></a> Many of the characters on a modern keyboard—that is, all numbers and most punctuation—are absent from the New Hampshire typeface. Since these characters did not appear in the original sample, I opted to create a minimally functional character set rather than try to extend my approximation of the original style. However, that decision was based on the project’s needs (we didn’t need an at-sign if we intended just to use this font in our headings), rather than on any limitations imposed by copyright.

<a name="fn3"><sup>[3](#anchor3)</sup></a> [Calligraphr][15] is free to use for your first font, but beyond that it is a paid service. There are free, open-source alternatives if you are looking to reconstruct or create more fonts, but they are much more labor intensive. To start, you need to be working from **vector** graphics (which are resolution-independent, scaling up or down without losing quality) rather than **raster** graphics (which contain a specific number of pixels, so they have limited resolution). In this tutorial, I worked from JPGs and Photoshop files (PSDs)—both raster graphics formats—rather than a vector graphics format, such as SVG. The free, open-source [Inkscape][16] is one example of a vector graphics editor that could be used as a basis for a font. Next, you could use a free, open-source font editor like [FontForge][17] to build out the font itself. For this project, I chose to stay with Calligraphr not only because it was easy but because it was the most compatible with typeface **reconstruction** rather than **creation**. Font editors generally assume that the user is working from scratch rather than converting existing images into a digital font.

[1]:	https://babel.hathitrust.org/cgi/imgsrv/image?id=uc1.32106002108873;seq=9;width=510
[2]:	https://babel.hathitrust.org/cgi/imgsrv/image?id=uc1.32106002108873;seq=15;width=680
[3]:	https://babel.hathitrust.org/cgi/imgsrv/image?id=uc1.32106002108873;seq=33;width=680
[4]:	https://babel.hathitrust.org/cgi/imgsrv/image?id=uc1.32106002108873;seq=91;width=680
[5]:	https://www.merriam-webster.com/dictionary/typeface
[6]:	https://www.merriam-webster.com/dictionary/font
[7]:	https://glarts.org/font-and-typeface-legal-tip-sheet/
[8]:	http://www.identifont.com/
[9]:	https://www.fontspring.com/matcherator
[10]:	https://www.whatfontis.com/
[11]:	https://www.library.virginia.edu/staff/sd3gz
[12]:	https://babel.hathitrust.org/cgi/imgsrv/image?id=uc1.32106002108873;seq=9;width=510
[13]:	https://www.gimp.org/
[14]:	https://calligraphr.com
[15]:	https://calligraphr.com
[16]:	https://inkscape.org/
[17]:	https://fontforge.github.io/en-US/
[18]:	https://en.wikipedia.org/wiki/Small_caps
[19]:	https://www.calligraphr.com
[20]:	https://www.fonts.com/support/faq/font-formats
[21]:	https://www.fontsquirrel.com/tools/webfont-generator
[22]:	https://www.calligraphr.com/
[23]:	https://www.calligraphr.com/en/docs/faq
[24]:	https://creativecommons.org/share-your-work/public-domain/cc0/
[25]:	https://www.library.virginia.edu/staff/bcb4y
[26]:	https://scholarslab.lib.virginia.edu/people/jeremy-boggs/
[27]:	https://www.library.virginia.edu/staff/sd3gz

# **Mining the Second Enclosure Movement**

Through different ways to explore the materials, this data mining intervention seeks a better understanding about *The New Hampshire* as well as public domain legal documents by using text mining tools. 

## **Text mining**

While conceding that the paradigm of ‘open data’, coupled with other developments such as the Internet of Things, data mining and deep learning, indeed gives rise to changed sociotechnical formations, building on arguments made in connection with the proposal for a ‘open computing’ for humanities in the digital age. 

The term data mining refers to any process of analysis performed on a dataset to extract information from it.

## **The New Hampshire corpus**
The New Hampshire corpus provides easy access to a collection of the book. Through “reading” the individual poems, the analysis enables us to uncover the untold stories of the literature. 

### **The New Hampshire**
#### Word Trends using The New Hampshire corpus

The tool below was created using Voyant Tools and the document added to the corpus in April 2019.
<iframe src='https://voyant-tools.org/tool/Trends/?corpus=f404ffaa01c94901f820cf22f0f7eaeb'
    style='width: 100%; height: 600px'></iframe>

#### Word Contexts

The Contexts (or Keywords in Context) tool shows each occurrence of a keyword with a bit of surrounding text (the context). It can be useful for studying more closely how terms are used in different contexts.

Use it with poem *The New Hampshire* to look at the occurence of word 'mountains':

<iframe src='https://voyant-tools.org/?corpus=f404ffaa01c94901f820cf22f0f7eaeb&query=mountains&docIndex=0&view=Contexts'
    style='width: 100%; height: 600px'></iframe>

### **Other poems collection**
#### Document Terms
Document Terms is a table view of term frequencies for each document.

The table view shows the following five data columns by default:

#: this is the document number (the position of the term's document in the corpus)
Term: this is the document term
Count: this is the raw frequency of the term in the document
Relative: this is the relative frequency (per 10 million words) of the term in the document
Trends: this is a sparkline graph that shows the distribution of the term within the segments of the document; you can hover over the sparkline to see finer-grained results

<iframe src='https://voyant-tools.org/?corpus=afaa03f057331131baa97fa4a50dd3a8&view=DocumentTerms'
    style='width: 100%; height: 600px'></iframe>

#### Gender difference?
If the keyword is 'man', the Contexts is like:
<iframe src='https://voyant-tools.org/?corpus=afaa03f057331131baa97fa4a50dd3a8&query=man&view=Contexts'
    style='width: 100%; height: 600px'></iframe>

If the keyword is 'woman (women)', the Contexts shrinks:
<iframe src='https://voyant-tools.org/?query=women&query=wom*&corpus=afaa03f057331131baa97fa4a50dd3a8&view=Contexts'
    style='width: 100%; height: 600px'></iframe>

However, we found 'mother' is mentioned 20 times:
<iframe src='https://voyant-tools.org/?corpus=afaa03f057331131baa97fa4a50dd3a8&query=mother*&view=Contexts'
    style='width: 100%; height: 600px'></iframe>


#### Topics
The Topics tool provides a rudimentary way of generating term clusters from a document or corpus and then seeing how each topic (term cluster) is distributed across the document or corpus.


## **Government Documents corpus**
The Government Documents corpus provides easy access to a collection of public domain relevant government documents, including a variety of document types, such as speeches, testimonies, laws, and hearing transcripts.

As an example, we give an analysis of the themes in different types of documents in 1998 Copyright Term Extension Act. By using word frequency or topic modeling tools for analyzing the dominant themes in each type of document. The expected outcomes are, for example, in *speeches*, maybe the **fair** and **unfair** are mentioned many times, while in *hearing transcripts*, maybe the **professional** this adjective is mentioned many times, ect.

Data source: congressional records online

### **S.505 - Sonny Bono Copyright Term Extension Act**

#### Cirrus
Cirrus is a word cloud that visualizes the top frequency words of a corpus or document. The word cloud positions the words such that the terms that occur the most frequently are positioned centrally and are sized the largest. As the algorithm goes through the list and continues to attempt to draw words as close as possible to the center of the visualization it will also include small words within spaces left by larger words that do not fit together snugly. It's important to understand that the colour of words and their absolute position are not significant (if you resize the window or reload the page, words may appear in a different location).

<iframe src='https://voyant-tools.org/?corpus=915af298b348043b995335cc5d61b299&view=Cirrus'
    style='width: 100%; height: 600px'></iframe>

#### Links

<iframe src='https://voyant-tools.org/?corpus=915af298b348043b995335cc5d61b299&query=copyright&query=inserting&query=title&mode=corpus&view=CollocatesGraph'
    style='width: 100%; height: 600px'></iframe>

### Topic modeling

### Public Domain Corpus

*Add a description of what public domain corpus means

# **Mapping**

Eleanore's text here.

# **Translation and the Public Domain**

<br/>
Project Table of Contents<br/>
&nbsp;&nbsp;&nbsp;&nbsp;I. Alnôbaiwi, "In the Abenaki way, particularly in the Abenaki language"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;II. Nd’awighonanob lintowôganiz, "We wrote it/ the little song (poem)"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;III. In Italiano<br/>
&nbsp;&nbsp;&nbsp;&nbsp;IV. Emily's reflections on language and translation<br/>
&nbsp;&nbsp;&nbsp;&nbsp;V. Teaching translation<br/>

<br/>
<br/>
## I. Alnôbaiwi, "In the Abenaki way, particularly in the Abenaki language"<br/>
Translated by Eric Brier & Chris Whitehead<br/>

**Nodkazôwadjik**<br/>
People whose profession or specialty is cutting and throwing earth<br/>
Plowmen<br/>
_"Plowmen"_

**Ôzokak w'kizawakakto lakazôwôgan waji kizi lakazôwôd wazôlia**<br/>
They say/ she can use something/ a plow/ in order to/ can/ plow/ snow<br/>
They say that one can use a plow to plow snow.<br/>
_A plow, they say, to plow the snow._<br/>

**Adagidahômgwad gadawidamodit nôdkikamek wji wazôlia**<br/>
It is thought doubtful/ that they want to say/ one goes to work the earth/ for/ snow<br/>
It's doubtful they want to say that one goes and plants snow.<br/>
_They cannot mean to plant it, no—_<br/>

**Aiaga adoji mamessanimôhôditji wji alitta**<br/>
Otherwise/ then/ they will mock her/ for/ because<br/>
Otherwise then they will mock her, for<br/>
_Unless in bitterness to mock_<br/>

**Wibiwi w'meskamenji adalôkad senika**<br/>
Only/ she will find/ while she digs/ there are many rocks<br/>
All she will find when she digs is that the rocks are more.<br/>
_At having cultivated rock._<br/>

<br/>
<br/>
## II. Nd’awighonanob lintowôganiz, "We wrote it/ the little song (poem)"<br/>

First, Chris attempted translating “Plowmen” into Western Abenaki:<br/>

**nodkazôwadjik**<br/>	
people whose profession or specialty is cutting and throwing earth<br/>
_Plowmen_<br/>

**wd’idambok/ wd’awakakto/ lakazôwôgan/ waji/ ‘lakazôwa/ wazôlia.**<br/>
they say something/ she uses something/ a plow/ in order to/ she plows (cuts and throws) someone/ snow<br/>
_A plow, they say, to plow the snow._<br/>

**adagigen/ wd’idamenô/ wd’akika/ wazôlia**<br/>
it is doubtful/ that they say/ she plants someone/ snow<br/>
_They cannot mean to plant it, no—_<br/>

**aiaga/ w’mamesanôbdalemôwô**<br/> 
unless/ they laugh at her with scorn<br/>
_Unless in bitterness to mock_<br/>

**wzômi/ ‘lakahoji/ senal**<br/>
because/ she will dig something, hoe something/ stones<br/>
_At having cultivated rock._<br/>

<br/>
Next, Chris posted his initial translation to the Western Abenaki-Abénaquis de l'Ouest Facebook group, soliciting feedback:<br/>

>Kwai nidôbak (Hello/ friends)! I was wondering if any of you would like to help with a project that I am working on with some colleagues at the University of Virginia. We are making a website to demonstrate the ways that people can use materials in the public domain, using Robert Frost’s 1923 book New Hampshire as a case study. Among the many things people can do with materials in the public domain is translate them and post them online for others to enjoy free of charge. Since Frost’s New Hampshire takes place in Abenaki country, I thought I would put my own learning to the test and try translating one of his poems into Abenaki. I selected the poem “Plowmen” because I thought it illuminates the fundamentally different worldview the Abenaki language reveals about working the earth than the sort of farming Frost describes. It was a challenge and a lot of fun. That said, I am at the beginning of my journey learning Abenaki and am sure I made many, many mistakes. Would any of you like to help? I’d appreciate feedback of any variety: edits, suggestions for alternative words, corrections to conjugations, different ways of breaking down the original poem…or telling me I’m flat-out wrong! Of course, anyone who wishes to participate will be credited on the website once the project is finished.

<br/>
Eric Brier replied, offering a much more nuanced translation. Eric is an experienced speaker, and was generous in sharing his time and knowledge:

>I might offer this as an alternative while we wait for the others, I tried to keep to your general structure as I don't know enough about the poem to know what is going on. I also tried to get it to have kind of rhyming scheme in both languages. Taking a few liberties with English. This isn't a proper reflection of poetry in Abenaki, that is something I am very bad at and currently trying to learn more about. It is important to note that because our ancestors had a great way with these words, and one that I have yet to attain, and I will not paint a picture as an expert in that regard.

**Ôzokak w'kizawakakto lakahigan waji kizi lakahôd wazôlia**<br/> 
They say/she can use something/a hoe/in order to/hoe/snow<br/>
They say that one can use a hoe to hoe snow<br/>
_A plow, they say, to plow the snow._<br/>

**Adagidahômgwad gadawidamodit nôdkikamek wji wazôlia**<br/>
It is thought doubtful/that they want to say/one plants/for/snow<br/>
It's doubtful they want to say that one goes and tills for snow<br/>
_They cannot mean to plant it, no—_<br/>

**Aiaga adoji mamessanimogôhôditji wji alitta**<br/>
Otherwise/then/they will mock her/because<br/>
Otherwise then they will mock her, for<br/>
_Unless in bitterness to mock_<br/>

**wibiwi w'meskamenji adalôkad senika**<br/>
only/she will find/while she digs/there are many rocks<br/>
All she will find when she digs is that the rocks are more.<br/>
_At having cultivated rock._<br/>
<br/>
<br/>
Chris worked through Eric's suggestions, breaking down each word to understand its meaning:

**Ôzokak w'kizawakakto lakahigan waji kizi lakahôd wazôlia**<br/>
They say/she can use something/a hoe/in order to/hoe/snow<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ôzakak = they say<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ôzaka = said, it is said, it is told<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w’kizawakakto = she can use something<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kiz- = can, able to<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wd’awakakto = she uses something<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lakahigan = a hoe<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;waji = in order to {introduces subordinate clause}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kizi = can, able to<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lakahôd = hoe<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wazôlia = snow<br/>
They say that one can use a hoe to hoe snow<br/>
_A plow, they say, to plow the snow._<br/>

**Adagidahômgwad gadawidamodit nôdkikamek wji wazôlia**<br/>
It is thought doubtful/that they want to say/one plants/for/snow<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adagidahômgwad = it is thought doubtful<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adagidahômômek = one suspects someone<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-gwad = Inanimate Intransitive Singular Tri-Part Adjective Ending<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gadawidamodit = that they want to say<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kadaw- = want to<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idamodit = that they say<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nôdkikamek = goes to work the earth or soil<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nôd- = be about to, going to, in process<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kikamek = one plants, one works the earth or soil<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wji = for<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wazôlia = snow<br/>
It's doubtful they want to say that one goes and tills for snow<br/>
_They cannot mean to plant it, no—_<br/>

**Aiaga adoji mamessanimogôhôditji wji alitta**<br/>
Otherwise/then/they will mock her/because<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aiga = unless, if not<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adoji = then, there, so much {introduces subordinate clause}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mamessanimogôhôditji = they will mock her<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mamessanimômek = one ridicules or rails on someone<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wji =for<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alitta = because<br/>
Otherwise then they will mock her, for<br/>
_Unless in bitterness to mock_<br/>

**wibiwi w'meskamenji adalôkad senika**<br/>
only/she will find/while she digs/there are many rocks<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wibiwi = only, just<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w’meskamenji = she will find it<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adalôkad = while she digs<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;senika = there are many rocks<br/>				
All she will find when she digs is that the rocks are more.<br/>
_At having cultivated rock._<br/>

<br/>
Chris followed up with Eric, asking clarifying questions about his translations:<br/>

>Wliwni mina (thank you/ again), Eric! I worked through the translations you offered - they were very helpful! Could I ask a few questions about some of the conjugations, to make sure I am learning from this exercise? No rush in answering these questions -- you have already been very generous with your time!

1. In the first line, why do you include the "w' " before "kizawakakto"? As I understand it, the verb is Transitive Inanimate with a corresponding Indefinite Object. From the pattern I can discern from Laurent's example conjugations, the Transitive Inanimate with Indefinite Object does not take a "w' " at the beginning (unless the verb begins with a vowel, in which case it takes "wd' "). Is that correct? If so, does the prefix "kiz-" change something?

2. In the first line, could you please explain the conjugation of "lakahôd," specifically the ending "ôd"? Looking at the Gordon Day dictionary, I've seen that other words with similar endings are designated as "TA pt," Transitive Animate participles. Is that correct? Would the TA pt form be necessary because it follows "kizi," rendering "kizi lakahôd" a compound verb?

3. Could you please explain the formation of mamessanimogôhôditji in the third line? I see that "mamessanim" comes from the verb mamessanimômek, "one ridicules someone." I believe that the ending "ji" renders the verb into future tense. However, I haven't been able to figure out the significance of "ogôhôdit."

<br/>
Eric answered Chris's questions, explaining in detail how the Western Abenaki language works:
>Sure, no problem.

1. So when you don't have w(d)'- it's because there is no relation between the doer and anything else. It just is "s/he  ...s in general" nodam = s/he hears; liwizo = she is called, etc. Here "awakakto lakahigan" sounds more like a command: "You, use a hoe!" Wd'awakakto = s/he uses something; awakakto = s/he uses (in general)/"use it!". kiz- as a preverb just means "able to". "W'kizawakakto lakahigan" = s/he is able to use something: a hoe. 

2. Sure, I've never seen (but this doesn't mean it doesn't/can't happen) where the construction of "waji kizi" (in order to, to be able to) doesn't take a conjunct verb after it. "Waji kizi laka-hô-d" = in order that he(central)-hoes-him(obviate) (Wazôli-a being na/nihi and taking animate verbs). So you will see -ô-d = "that-he-VERBS-him."

3. I'm pretty sure I said that I am not 100% certain on this one, however, allow me to explain it anyways:Mamessanim-egw-ôhôdit is: Ridicule-obivate.acts.on.central-him-them. "That they ridicule him". The -ôhôdit is often a "That they (3rd pers.plural) VERB him/them". Perhaps -egw- isn't needed, and you can just skip right to mamessanimôhôdit, which might be a safer, although potentially more ambiguous, construction. Some speakers will write the intervocalic -h-, to wit an -h- between any two consecutive vowels a-h-a, ô-h-ô, i-h-i, etc; some speakers will not write these h’s (aa, ôô, ii). It doesn't make a difference really if you write it or not, as it is pronounced therewith (from what I've heard). Therefore, ôôdit and ôhôdit are the same suffix.

<br/>
Using Eric's explanations, Chris made minor edits to the final version of the translation, presented above in section I.

<br/>
<br/>
## III. In Italiano
Translated by Emily Mellen

**Aratori**<br/>
_Plowmen_<br/>

**Un aratro, dicono, per la neve arar**<br/>
_A plow, they say, to plow the snow_<br/>

**Ma non è possibile che la intendano piantar--**<br/>
_They cannot mean to plant it, though—_<br/>

**Se non per deridere in amarezza**<br/>
_Unless in bitterness to mock_<br/>

**L’aver coltivato la pietra grezza**<br/>
_At having cultivated rock._<br/>

<br/>
<br/>
## III. Emily's reflections on language and translation<br/>
Emily Melen

My first obstacle in making this translation was the poem’s premise. Frost builds his poem of off the name of the machine we call a snow plow. The poem is a joke about the relationship of a snow plow to the regular work of plowing in New England. In Italian a snow plow is called a spazzaneve or “snow sweeper,” rather than using the word plow, or “aratro.” I decided, however, to use only words related to plowing in order to make clear the meaning of the poem if one knows the concept and how it relates to English. This maintains the poem’s relationship to its original language and to the context in which it was born, while (I hope) rendering it legible to an Italian-speaking reader. 

My next task, to literally translate each of the words of the poem, was not very difficult because of the relationship between English and Italian. That is to say, that most English words have a direct Italian equivalent. For example, the word bitterness is used in a metaphorical sense in English. Bitterness refers directly to a taste of food, but it also refers to a feeling of resentment and sadness at the conclusion of a situation. In this case, I believe that the bitterness Frost refers to is the bitterness of a New Hampshire farmer who has to contend with constantly rocky soil. This double sense of bitterness is shared in Italian, as is the knowledge of frustration with rocky soil, which is also a reality of the farmer in less fertile parts of Italy. The most important shared concept in the poem is the idea of plowing the land itself, which relies on a tradition of European agriculture that would presumably not exist in languages that do not use this particular tool or method.

After a literal translation of the poem, I went back in order to try to make the poem rhyme and to sound like a poem in Italian. I should add a very very very large caveat that I know next to nothing about Italian poetry or poetry in general. I do know, however, from reading Italian poetry and songs, that they tend to drop the final “-e” on verbs, especially when they fall at the end of phrases. So, “arare” becomes “arar” and “piantare” becomes “piantar.” I also know that there is flexibility in the order of verb and object, so in order to find a rhyme, I made the line “Un aratro, dicono, per arare la neve” (A plow, they say, for plowing the snow) into “Un aratro, dicono, per la neve arar” (A plow, they say, for the snow to plow) and the line “Non è possibile che intendono piantarla peró” (It’s not possible that they mean to plant it, though) into “Ma non è possibile che la intendono piantar” (But it’s not possible that they mean it to plant). 

The second couplet was a little trickier. I understand the joke of the final couplet to be that farming in New England is like plowing rock. So, I took it as important that the final word was “rock,” which serves as a sort of punchline, and gives a comical, bitter tone to the entire poem. My original literal translation of the entire couplet was:

> Se non per amarezza deridere<br/>
> L’aver coltivato la pietra<br/>

This is pretty literal. The only word I waffled on was using “per amarezza” (for bitterness) or “in amarezza” (in bitterness). Although “in” was more literal, I thought “per” was necessary to communicate the sense of “in order to” that the “to” in “to mock” gets across. 

Because I didn’t want to move the word “pietra” around, I first tried to find all the other words I could think of that could also mean rock. There are a lot, but this didn’t work, because none of them contained an ending that rhymed with deridere. In fact, this would be unlikely because this kind of ending is almost always for verbs. Also, as a note, I intuitively decided not to change “deridere” to “derider” because of the emphasis. Whereas “arare” and “piantare” both hold their emphasis on the penultimate syllable (aRAre, pianTARe) and dropping the final “e” has no effect, I feel that with deridere, in which the emphasis is on the antipenultimate syllable (deRIdere), dropping the final “e” would make it seem like “deriDER,” which is confusing and incorrect. Again, I’m not an expert and I have no idea if this intuition is correct or what grammatical rules it’s based on, but that was my reasoning.

After trying my list of rock names and realizing they wouldn’t work, I started thinking of synonyms for the word “mock,” but before I got very far into this, it occured to me that I could also move “amarezza” to the end by changing the line to “Se non per deridere in amarezza,” which left me with the very common word ending “-ezza” (roughly, -ness) to rhyme. Then, I realized I could add the adjective “grezza” (course, rough) to the end of my final line, which keeps the placement of the word “pietra” and only deepens the meaning slightly, in a way that I feel is consistent with the mood of the poem.

The last part of my translation was to try to think about the meter of the poem. Again, I know nothing about poetic meter, so I asked for help from my brilliant colleague Catherine Addington, who advised that English use of stress probably does not have an easy equivalent in Italian. As long as none of my lines were awkwardly long, the poem’s sense of meter was probably fine, she advised. Through reading the translation out loud several times, I determined that I could easily read it in a way in which all the lines lasted equivalently long, which I, as a music scholar, of course measure in 4/4 time. This is almost certainly an imperfect method for incorporating meter and could doubtlessly be improved upon by someone who knows more about poetry, but I hope it will be helpful.

The very last part of my translation was to reach out to Italian professors at UVA for approval and correction. Thank you to Hiromi Kaneda and Stella Mattioli for reading over and providing feedback on my translation. Stella Mattioli kindly pointed out that I had forgotten to pluralize the title to "Aratori" instead of "Aratore" and that I needed to change the grammatical form of the word "intendono" (present indicative) to "intendano" (present subjunctive) because of the sentence structure.
 

<br/>
<br/>
## V. Teaching Translation<br/>
Catherine Addington<br/>
WORK IN PROGRESS<br/>

Empower others to do the same task

Teaching translation not as a way to produce good Spanish/lo que sea translations but rather as a point to demonstrate what is lost in translation, what you have to prioritize, teaching students how to isolate elements of rhetorical style (rhyming, puns, diction) and consider them in two languages. What is specific to each language, what works in both, what is most important to preserve, what are you willing to sacrifice?

Using a short poem that has simple diction (easy to translate) but difficult structure (rhyme, iambic tetrameter, pun: plowing the earth, snow-plowing are not the same in other languages) is a good way to teach students about the difficulties of translation, the priorities you need to set. Rhyme, meter, and wordplay are the primary challenges when it comes to translation and depending on the poem they may have varying levels of importance to the poem’s meaning.

First you have to understand / analyze the poem.

Meaning: it’s a joke based on the shared use of “plow” for plowing the earth (digging deep and planting) and plowing snow (clearing it away). New Hampshire soil is rocky, so you wouldn’t plant snow in it except as a joke.

Rhyme: consonant (i.e. both vowels and consonant endings rhyme)

Meter: iambic tetrameter

Wordplay: plow (the earth) / (snow)plow

Then you rank your priorities. Which elements are essential for the translation? Given that it’s a short joke poem about rocky New Hampshire soil, to what extent are we comfortable preserving a certain foreignness/localness in our translations?

End product = lesson plan, some annotated translation variants



