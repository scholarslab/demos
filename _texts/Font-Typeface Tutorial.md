#Font Reconstruction Tutorial
by Catherine Addington

[![alt text](https://raw.githubusercontent.com/caddington11/praxis/master/Font%20Project/Font%20download%20graphic.jpg "Click to download the New Hampshire Font.")](https://github.com/caddington11/praxis/blob/master/Font%20Project/NewHampshire-Regular.otf?raw=true)

In pursuing this project, each Praxis team member was asked what they would want to do with public domain materials. I wasn’t sure if I was allowed to do what I wanted to do, which was harvest the fabulous barbed typeface from Robert Frost’s _New Hampshire_ (1923) and use it in all my design projects for the rest of time. After all, the book is not just text—it’s art, too, thanks to J.J. Lankes’s original woodcuts. The typeface is only used on the four title pages in the book: the one for the [collection][1] itself, and for each of the three major sections ([_New Hampshire_][2], [_Notes_][3], and [_Grace Notes_][4]). Even so, it makes a strong visual impact. I wanted to know: when the book [came into the public domain](https://www.smithsonianmag.com/arts-culture/first-time-20-years-copyrighted-works-enter-public-domain-180971016/) this year, did its typographical design come with it? (Spoiler alert: nope…because it was already in the public domain!)

But just because something’s free to use doesn’t mean it is actually available to use—that’s where PRAXIS PROJECT NAME comes in. In the hopes of empowering other typography enthusiasts, bibliography scholars, and digital tinkerers to pursue their own font reconstruction projects, this tutorial will:
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
