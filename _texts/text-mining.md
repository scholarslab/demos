---
layout: default
title: Mining the Second Enclosure Movement
---


# Mining the Second Enclosure Movement
by Zhiqiu (Cho) Jiang

While conceding that the paradigm of [Open Data](https://en.wikipedia.org/wiki/Open_data), coupled with other developments such as the [Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things), [Text Mining](https://en.wikipedia.org/wiki/Text_mining) and [Machine Learning](https://en.wikipedia.org/wiki/Machine_learning), indeed gives rise to changed sociotechnical formations, building on arguments made in connection with the proposal for a *Open Computing for Humanities* in the digital age. 

Text mining in the digital humanities usually refers to any process of analysis performed on a text dataset to extract information from it. Suppose you want to compare the frequency of the word “she” and “he” in the book *The New Hampshire*. Suppose you want to collocate these words with the phrases in which they were written and sort the results based on various factors — frequency, affective value, attribution and so on. Text mining is regarded as a technique which will lead into advanced NLP (Natural Language Processing) techniques, which implies a breakthrough for achieving a higher level of AI (Artificial Intelligence) that have machines which can process text data. There are quite a few tools that have been developed to perform analyses of unstructured texts. Text mining analyses include word counts, keyword density, frequency, and other methodologies to extract meaningful information in order to ask research questions. In this tutorial, we introduce the dataset structure, available tools, as well as two hands-on demonstrations of how we apply text mining into *The Second Enclosure Movement*.

<br/>


## **1. Unstructured Text Dataset**
It is noticeable that text dataset is usually unstructured, that is, the text data is in conventional format with written content that lacks metadata and cannot readily be indexed or mapped onto standard database fields. 

<br/>

## **2. Tools**
Basically, tools for text mining are involved with three performing platforms: 1) *programming applications*, 2) *open-sourced applications*, and 3) *other software*. 

### **2.1 Programming applications**
Programming applications refer to write code using programming languages such as [Python](https://www.python.org/), [R](https://www.r-project.org/about.html), and high level programming languages like [Java](https://www.java.com/en/) and [C++](http://www.cplusplus.com/). Among all of them, [Python](https://www.python.org/) is the most popular language for text mining in current days.  

### **2.2 Open-source applications**
Many open source text analytics applications have basic capabilities that are easy to learn and use. Thanks to the availability of information sharing in the open source arena, there are lots of open source text analytics tools to choose. It may take a little more time to approach text analytics in this manner, but users can still get valuable results. 

Here are some popular open-source applications for text mining. Each has its own set of features and capabilities, so consider each closely before making the commitment to rely on the tool. Fortunately, because they’re open source, there’s no cost to the user to try them.

#### **Voyant Tools**
[Voyant Tools](https://voyant-tools.org/) is an open-source, web-based application for performing text analysis. It supports scholarly reading and interpretation of texts or corpus, particularly by scholars in the digital humanities, but also by students and the general public. It can be used to analyze online texts or ones uploaded by users.

#### **Apache OpenNLP**
Natural language processing (NLP) is a way for computers to examine and understand human speech and speech patterns, which is critical to text analytics. [Apache OpenNLP](http://opennlp.apache.org/index.html) is a tool set for machine learning — a computational learning capability based on pattern recognition. Machine learning is an essential element of text analytics that often allows organizations to learn from unexpected results from data because the analysis is not constrained by preconceived notions of what will be found. Instead, the tool learns patters based on a volume of data.

It is noticeable that Apache OpenNLP is another open source application that was designed with ease-of-use in mind, but it doesn’t feature the graphical UI and so may require deeper programming capabilities to get up and running. As with other open source applications, however, there is a user community that’s always willing to help.

#### **OpenRefine**
[Openrefine](http://openrefine.org/) is a data manipulation tool which cleans, reshapes and intelligently edit batch messy, and unstructured data. Specifically, it can be used to “clean” messy data, transform data, and query APIs and return the results. For example, users can use Openrefine to text mine a historical textual document and extract data from an XML file. These 
unstructured" data can be transformed it into a clean,  simple, and easily ready (by humans and computers) format. OpenRefine will allow you to work with data with no computer programming skills in a user interface. Hands-on exercises are available at [Github Openrefine Tutorials](https://oudsl.github.io/openrefine-tutorial/).


### **2.3 Other software**

Commercial companies and sources also provide text mining computer programs. A list of software from WiKipedia can be found [here](https://en.wikipedia.org/wiki/List_of_text_mining_software).

<br/>

## **3 Tutorials using Voyant Tools**
 
Through different ways to explore the materials, this intervention seeks to provide tutorials for demonstrating the ways to mine the whole collection of *The New Hampshire* and the public domain legal documents corpus by using [Voyant Tools](https://voyant-tools.org/). Voyant Tools is a web-based reading and analysis environment for digital texts. You can paste or link to text and text corpora, and analyse and visualize the text in various ways. The following documentation give you an overview of the sorts of analysis and visualization you can do [Voyant Tools Guide Page](http://voyant-tools.org/docs/#!/guide/tools). These tutorials assume no prior knowledge or experience, but aim to empower the public to participate in the public domain and build projects for their own interests. 


<br/>

## **3.1 Mining _The New Hampshire_**
### **3.1.1 The New Hampshire corpora**
The New Hampshire corpora provide easy access to a collection of the book itself. The poetry collection raw file used for this tutorial is downloaded from [Project Gutenberg EBook of New Hampshire](https://www.gutenberg.org/files/58611/58611-0.txt). [Project Gutenberg](https://www.gutenberg.org/wiki/Main_Page) currently provides around 58,000 e-books for legal download in the public domain. The process is relatively simple, as you can search for book titles and authors on their site or browse the catalog by author, title, language and other categories. 

Since the raw file is a poetry collection with the long poem "New Hampshire" and other 45 poems, a series of analyses can be done corresponding to different text corpora. For example, we can create one corpus including all the texts of the 46 poems for analyzing the themes from the whole book. We also can create a single corpus for each poem for comparing the word count and word frequency of each poem.      

Analyses for the New Hampshire Corpora include word frequency lists, frequency distribution plots, and [KWIC (Key Word In Context)](https://en.wikipedia.org/wiki/Key_Word_in_Context) displays, etc. Through “reading” the individual poems, the analysis enables us to uncover the _untold stories_ of the literature.

### **3.1.2 Word Cloud**

The **left** word cloud plot displays the frequency of words appearing in the whole poetry collection while the **right** plot is only for the long poem "New Hampshire".

<div class="box"><iframe src='https://voyant-tools.org/?corpus=cb923928b3ec3cf00e6b8c13a4a96bc7&view=Cirrus'
    style='width: 50%; height: 400px' align="left"></iframe></div>
<div class="box"><iframe src='https://voyant-tools.org/?corpus=02af91d88d936b7e48213ebf3ad411c0&view=Cirrus'
    style='width: 50%; height: 400px' align="right"></iframe></div>

&nbsp;
<br />

For the whole poetry collection, it has 19,584 total words and 3,349 unique words. For the poem "New Hampshire", it has 3,241 total words and 1,094 unique words. The most frequent words for each corpus are shown in the table below.

<br/>

| Corpus                      | Word count | Avg words per sentence | Most frequent words                                                                                                                                                                                                  |
|-----------------------------|------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The whole poetry collection | 19,584     | 18.8                       | like (62); know (53); say (50);  said (49); new (43); don’t (40);  make (37); way (36); day (34); night (34); paul (33); house (32); having (31); came (30); man (30); tell (30); door (29); thought (29); tree (29);  good (28); left (28); let (28); old (28); come (27) |
| Poem "New Hampshire"        | 3,241      | 18.5                       | New (35); Hampshire (27); mountains (14);  say (14); said (13); like (10); people (10);  know (9); state (9); farm (8); choose (7); just (7); make (7); man (7); old (7); end (6); gold (6); little (6)              |



<br/>
### **3.1.3 Word Contexts**

We notice that the 14 appearances of word **mountains** in the long poem "New Hampshire". This seems like an important *image* in Frost's poems as his work exploring complex ideas through scenes and images of rural life. We can go further to look at the word contexts are around the word "mountains" by using *Contexts* tool. The [Contexts](https://voyant-tools.org/docs/#!/guide/contexts) (or Keywords in Context) tool shows each occurrence of a keyword with a bit of surrounding text (the context). It can be useful for studying more closely how terms are used in different contexts. 


<br/>
The chart below displays the occurrence of word "mountains" with poem "New Hampshire". You can also use contexts tool with your own corpus.
<br/>
<iframe src='https://voyant-tools.org/?corpus=f404ffaa01c94901f820cf22f0f7eaeb&view=Contexts&query=mountains&docIndex=0&context=8&expand=20' style='width: 100%; height: 520px'></iframe>


By default, contexts are shown for the most frequent in the term corpus, you can click on the plus icon to expand any given row to show more context.

<br/>
With reading the contexts of **mountains**, we could quickly capture a sense of the landscape grounded in the land and mountains of New England that Frost described in this poem. The farm of which he wrote in this poem is the property now known as the [Frost Place](https://en.wikipedia.org/wiki/The_Frost_Place) in Franconia, New Hampshire. 


### **3.1.4 Mentioned Locations**

Voyant Tools also provide an experimental exploration for the geospatial aspects of texts. Using the whole poetry collection corpus, the locations that mentioned in the texts are identified by the [Dreamscape](https://voyant-tools.org/docs/#!/guide/dreamscape) tool through reading city names, suggesting patterns of recurring connections between locations from the poems. 

The chart below displays a sequent occurrence of mentioned locations. 

<iframe src='https://voyant-tools.org/?corpus=c5f84e960a2443e4e04ea94826df9814&view=DreamScape'
    style='width: 100%; height: 500px'></iframe>

Generally, we could get an idea of overall geospatial context of this corpus. However, there is a primary weakness of Dreamscape tool is that current tool only can recognize about **75%** of locations. In order to make the representativeness of the geo-context more accurate, it is better to use other methods for linking the places in the texts with the maps. The [StoryMap](https://unclosure.scholarslab.org/texts/storymap/) intervention gives another example for this task.

### **3.1.5 Masculine and Feminine Words in these poems**

Masculine words such as "He", "Man", and feminine words such as "She", "Mother", and "Woman" mentioned in these poems are shown in the **left** plot by the poem order of the book. The contexts of word "He", which has been mentioned 179 times ("She" appeared 124 times), is displayed in the **right** plot. 
<div class="box"><iframe src='https://voyant-tools.org/?corpus=c5f84e960a2443e4e04ea94826df9814&query=he&query=she&query=man&query=woman&query=mother&view=Trends'
    style='width: 50%; height: 350px' align='left'></iframe></div>
<div class="box"><iframe src='https://voyant-tools.org/?corpus=3d4596987dac4e768de91f139072062c&query=He&view=Contexts'
    style='width: 50%; height: 350px' align='right'></iframe></div>

&nbsp;
<br/>

It is easy to find that the word "He" and the word "She" both have high relative frequencies in the poem *Place for a Third*. If we take a closer look at this particular poem, we will find the *link words* that are associated with these two gender words. *Link words* represents the collocation of terms in a corpus by depicting them in a network through the use of a force directed graph. The frequency of the word in the link graphs below is indicated by relative size of the term.
<div class="box"><iframe src='https://voyant-tools.org/?corpus=637fb9d4444967615fd01ba42f16afca&query=He&mode=corpus&view=CollocatesGraph'
    style='width: 50%; height: 250px' align='left'></iframe></div>
<div class="box"><iframe src='https://voyant-tools.org/?corpus=637fb9d4444967615fd01ba42f16afca&query=She&mode=corpus&view=CollocatesGraph'
    style='width: 50%; height: 250px' align='right'></iframe></div>
"He" is more likely linked with "thought" while "She" is associated with "felt". Both of them are linked with the character "Laban" and the verb "cared".


&nbsp;
<br/>
## **3.2 Mining the Documents relevant to _Copyright Term Extension Act_**
### **3.2.1 The Copyright Term Extension Act (CTEA) corpora**

The Copyright Term Extension Act corpora provide easy access to a collection of government documents that are associated with the [**S.505 - Sonny Bono Copyright Term Extension Act**](https://en.wikipedia.org/wiki/Copyright_Term_Extension_Act). This law, also known as the Copyright Term Extension Act (CTEA) of 1998, extended copyright terms in the United States. It effectively "froze" the advancement date of the public domain in the US. 

Specifically, this corpora include six single corpus, each corpus represents one type of these government documents. They are (1) Bills; (2) Hearing transcripts; (3) Journals; (4) Laws; (5) CRS (Congressional Research Service) Reports; and (6) Speeches. Raw data is downloaded from [congressional.proquest.com](https://congressional.proquest.com/congressional/result/pqpresultpage?accountid=14678&groupid=95633&pgId=4d14b2d4-c956-4058-ad4d-bcffcf955ab5&rsId=169067CA78A#scrollTo) by searching keywords "**Sonny Bono Copyright Term Extension Act**". Each corpus is prepared in plain text format based on the search results. Data used for this tutorial can be request through emailing us at **ScholarsLab@Virginia.edu**.

### **3.2.2 Topic Modeling for the CTEA Corpora**

This tutorial seeks to analyze the **Themes / Topics** that are associated with different types of government documents about CTEA through [**topic modeling**](https://en.wikipedia.org/wiki/Topic_model). Topic modeling algorithms scan a corpus of documents and automatically infer a set of topics that best characterize these documents. We choose [Latent Dirichlet Allocation (LDA)](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation) as our topic modeling algorithm because it is relatively straightforward, and results from other studies show it produces effective topic mixtures and coherent topics. 

### **3.2.3 Topic Modeling Results**

| Document Type | Total words | Unique words | Theme                | Representative Terms                                                                                         |
|---------------|-------------|--------------|----------------------|--------------------------------------------------------------------------------------------------------------|
| Bills         | 19,584      | 3,349        | Rights               | Title, Subsection, Striking, Rights, United States, Code, Performance, Society, Space                        |
| Hearings      | 1,879,692   | 131,720      | Program              | Program, Budget, Congress, Services, Law, Federal, Information, Support, Security, Provide                   |
| Journals      | 2,351,016   | 55,930       | Dissemination        | Committee, House, State, Secretary, Rule, Transmitting, Amendment, New, Public, Agency, Department, National |
| Laws          | 3,352       | 686          | Establishment        | Establishment, Copyright, Court, Amended, License, Effective, Extension, Act, Society                        |
| CRS Reports   | 21,738      | 2,914        | Protection           | Protection, Author, Database, Works, Right, Public, Period, License, Business                                |
| Speeches      | 125,572     | 7,473        | Action & Legislation | Shall, Enforcement, Commission, Legislation, Motion, Property, Trademark, Preservation                                    |

 Interestingly, our topic modeling findings reveal that different document types do have a variety of themes in general. For the **Hearing transcripts**, the main topic is about "Program", as a major concern towards Copyright Extension Act. Most of the **Speeches** talk about "Action & Legislation" issues, which are mainly about enforcement of copyright law and relevant practical problems. It is not surprising that **Bills** and **Laws** trend to overlap with each other since Bills is a larger collection than Laws for this case. 

<br/>

Following the main theme of the **Report** corpus — "Protection", we analyze the word links to this theme. The left word cloud plot shows the word frequency mentioned from **Report** corpus. The right plot represents the linked words of the word "copyright" (305 mentions), "protection" (147 mentions), and "database" (128 mentions) in the Report corpus.
 <div class="box"><iframe src='https://voyant-tools.org/?corpus=e0a86ba1531b668a62e410c9e7f43de2&view=Cirrus'
    style='width: 40%; height: 300px' align='left'></iframe></div>
<div class="box"><iframe src='https://voyant-tools.org/?corpus=e0a86ba1531b668a62e410c9e7f43de2&query=protection&query=copyright&query=database&mode=corpus&context=3&view=CollocatesGraph'
    style='width: 60%; height: 300px' align='right'></iframe></div>

&nbsp;
<br/>

## **4. Reflections**
Geoffrey Rockwell’s [“What is Text Analysis?”](https://academic.oup.com/dsh/article/18/2/209/927829) is an informational article focused specifically on text analysis as a methodology in the humanities. Text as a resource, can be seen as indicating a methodological turning-point, unfolding today. A primary purpose of this text mining intervention is to provide a new way to encourage the new ways of acquiring knowledge for the humanities with the digitalization and open data movements across the world. 

The increasing amount of digital data in the public domain, structured or unstructured, available for research in the Humanities, makes available in this sense having two sides: (1) making data accessible for scientists (e.g. digitization, retro-digitization); and (2) providing tools which allow to dig into the data, especially into huge amounts of data, for analytical purpose (Text Mining, Data Mining). So far, different kinds of tools can be used for textual analysis. A great part of them also allows the use of Text Mining-tools without necessarily requiring a deeper or any understanding of programming or computer sciences. However, it is crucial to choose the appropriate tools as well as to design appropriate analysis strategies that can answer the research questions. E.g., [Python Natural Languages Toolkit](http://www.nltk.org/) is a platform for working with Python and human language as a more advanced toolbox that can perform more complicated analyses than Voyant Tools. 

For some more information, introductory materials, and secondary literature on the practice of text analysis, please see:

- Natalie Houston, "[Text Analysis](https://digitalpedagogy.mla.hcommons.org/keywords/text-analysis/)" in Digital Pedagogy in the Humanities (MLA Commons)
- Temple University DH Center, "[What is Text Analysis?](http://guides.temple.edu/c.php?g=78518&p=505212)"
- Michael Wittmore, "[Text: A Massively Addressable Object](http://dhdebates.gc.cuny.edu/debates/text/28)," in Debates in the Digital Humanities, ed. Matthew Gold (U Minnesota Press, 2012)
- Jeffrey Binder, "[Alien Reading: Text Mining, Language Standardization, and the Humanities](http://dhdebates.gc.cuny.edu/debates/text/69)" from Debates in the Digital Humanities, ed. Matthew Gold (U Minnesota Press, 2016)
- [Text Analysis Resources](http://digitalhumanities.berkeley.edu/resources/text-analysis-resources) @ University of California Berkeley DH Lab
- Columbia's [Group for Experimental Methods in the Humanities](http://xpmethod.plaintext.in/about.html)