/* All following exams please using Javascript only 20220922 */
1.
/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
**/
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/
function sortUserName(user) {
  const sortedUser = user.sort((a, b) => {
    const weightA = a.firstName + a.lastName + a.customerID.toString();
    const weightB = b.firstName + b.lastName + b.customerID.toString();
    return weightA.localeCompare(weightB);
  });
  sortedUser.forEach((user) => {
    console.log(JSON.stringify(user));
  });
  return sortedUser;
}
/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/
function sortByType(user) {
  const professionWeight = ['systemAnalytics', 'engineer', 'productOwner', 'freelancer', 'student'];
  return user.sort((a, b) => {
    const weightA = professionWeight.indexOf(a.profession);
    const weightB = professionWeight.indexOf(b.profession);
    return weightA - weightB;
  });
}
2.
/** HTML
<div class="container">
<div class="header">5/8 外出確認表</div>
<div class="content">
<ol class="shop-list">
<li class="item">麵包</li>
<li class="item">短袖衣服</li>
<li class="item">飲用水</li>
<li class="item">帳篷</li>
</ol>
<ul class="shop-list">
<li class="item">暈車藥</li>
<li class="item">感冒藥</li>
<li class="item">丹木斯</li>
<li class="item">咳嗽糖漿</li>
</ul>
</div>
<div class="footer">以上僅共參考</div>
</div>
**/
/** CSS
.container {
font-size: 14px;
}
.container .header {
font-size: 18px;
}
.container .shop-list {
list-style: none;
margin-left: -15px;
}
.container .shop-list li.item {
color: green;
}
.container .shop-list .item {
Q1. Explain why does this color not works, and how to fix make it work on 1st list
color: blue;
}
Q2. Write styling make every other line give background color to next one
**/
Q1. because the first selector is more specific than the second one
Q2. change the second selector to ".container ol.shop-list .item"
3.
/**
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
**/
function getUniqueNumber (items) {
  return [...new Set(items)];
}
4.
/** What is different between <section> and <article>, can you make an example how you will be using it? **/
The <section> element represents a generic section of a document or application. It can be used together with the <h1> to <h6> elements to indicate the document structure.
The <article> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable.

I would use <section> for grouping related content together, such as a blog post with its comments, while I would use <article> for a blog post itself.
5. /** Please explain about what is CSS boxing model and the layout components that it consists of.**/
CSS boxing model is a box that wraps around every HTML element. It consists of the content, padding, border, and margin.
The content is the actual content of the box, the padding is the space between the content and the border, the border is the line around the padding, and the margin is the space outside the border.
6.
/** Can you explain CSS priority, and what principle are your used to writing CSS stylesheet. **/
CSS priority is the order in which CSS rules are applied to an element. Inline styles have the highest priority, followed by IDs, classes, and elements.
I usually use BEM (Block Element Modifier) methodology to write my CSS stylesheet. It helps me organize my code and make it more maintainable and scalable.
7.
/** Can you introducing some of Semantic HTML elements that you already know and how you used it ever, please make some example. **/
<article>
  self-contained composition in a document
<aside>
  content aside from the content it is placed in
<figure>
  content like illustrations, diagrams, photos, code listings, etc.
<figcaption>
  caption for a <figure> element
<footer>
  footer for a section or a page
<header>
  header for a section or a page
<main>
  main content of a document
<mark>
  highlighted text
<nav>
  navigation links
<section>
  generic section of a document
<time>
  date or time

8.
/** Can you explain about Interface and Enum in Typescript, and where will you be using, please make some examples. **/
Interface is a way to define a contract in TypeScript. It describes the structure of an object and enforces it in the code.
Enum is a way to define a set of named constants in TypeScript. It allows you to create a group of related values that can be used throughout your code.
9.
/** The photo below is a page structural layer, please according to SEO friendly rules write down HTML base structure. Note. Mobile friendly first. **/
<body>
  <header>
    <figure><Logo/></figure> 
    <nav><Menu/></nav>
  </header>
  <main>
    <section>
      <figure><ItemPhotos1/></figure>
      <figure><ItemPhotos2/></figure>
      ...
    </section>
    <section>
      <h1><ItemDetail/></h1>
      <article>
        <h2><ItemDescList/></h2>
        <p><ItemDesc1/></p>
        <p><ItemDesc2/></p>
        <p><ItemDesc3/></p>
        ...
      </article>
    </section>
  </main>
  <footer>
    <Footer/>
  </footer>
</body>