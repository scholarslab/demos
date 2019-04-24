---
layout: default
title: Mining the Second Enclosure Movement
---


# **Mining the Second Enclosure Movement**

Text mining in the digital humanities usually refers to any process of analysis performed on a text dataset to extract information from it. Suppose you want to compare the frequency of the word “she” and “he” in the book *The New Hampshire*. Suppose you want to collocate these words with the phrases in which they were written and sort the results based on various factors—frequency, affective value, attribution and so on. Text mining is regarded as a technique which will lead into advanced Natural Language Processing techniques, which implies a breakthrough for achieving a higher level of AI (Artificial Intelligence) that have machines which can process text data. There are quite a few tools that have been developed to perform analyses of unstructured texts. Text mining analyses include word counts, keyword density, frequency, and other methodologies to extract meaningful information in order to ask research questions. In this project, 

## **Unstructured Text Dataset**
It is noticeable that text dataset is usually unstructured, that is, the text data is in conventional format with written content that lacks metadata and cannot readily be indexed or mapped onto standard database fields. 

## **Tools**
Basically, tools for text mining are involved with three performing platforms: 1) *programming applications*, 2) *open-sourced applications*, and 3) *software*. 

### **Programming applications**
Programming applications refer to write code using programming languages such as [Python](https://www.python.org/), [R](https://www.r-project.org/about.html), and high level programming languages like [Java](https://www.java.com/en/) and [C++](http://www.cplusplus.com/). Among all of them, [Python](https://www.python.org/) is the most popular language for text mining in current days.  

### **Open-source applications**

### **Other software**


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

