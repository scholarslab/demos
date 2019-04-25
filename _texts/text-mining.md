---
layout: default
title: Mining the Second Enclosure Movement
---


# Mining the Second Enclosure Movement
by Zhiqiu (Cho) Jiang

While conceding that the paradigm of [Open Data](https://en.wikipedia.org/wiki/Open_data), coupled with other developments such as the [Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things), [Text Mining](https://en.wikipedia.org/wiki/Text_mining) and [Machine Learning](https://en.wikipedia.org/wiki/Machine_learning), indeed gives rise to changed sociotechnical formations, building on arguments made in connection with the proposal for a *Open Computing for Humanities* in the digital age. 

Text mining in the digital humanities usually refers to any process of analysis performed on a text dataset to extract information from it. Suppose you want to compare the frequency of the word “she” and “he” in the book *The New Hampshire*. Suppose you want to collocate these words with the phrases in which they were written and sort the results based on various factors—frequency, affective value, attribution and so on. Text mining is regarded as a technique which will lead into advanced NLP (Natural Language Processing) techniques, which implies a breakthrough for achieving a higher level of AI (Artificial Intelligence) that have machines which can process text data. There are quite a few tools that have been developed to perform analyses of unstructured texts. Text mining analyses include word counts, keyword density, frequency, and other methodologies to extract meaningful information in order to ask research questions. In this tutorial, we introduce the dataset structure, available tools, as well as two hands-on demonstrations of how we apply text mining into *The Second Enclosure Movement*.

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
 
Through different ways to explore the materials, this intervention seeks to provide tutorials for demonstrating the ways to mine the whole collection of *The New Hampshire* and the public domain legal documents corpus by using [Voyant Tools](https://voyant-tools.org/). These tutorials assume no prior knowledge or experience, but aim to empower the public to participate in the public domain and build projects for their own interests. 


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

For the whole poetry collection, it has 19,584 total words and 3,349 unique words. For the poem "New Hampshire", it has 3,241 total words and 1,094 unique words.


<br/>

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |



### **Word Trends**

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

### Sonny Bono Copyright Term Extension Act Corpus

Topic modeling result


*Add a description of what public domain corpus means

