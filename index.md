---
layout: default
title: Home
---

<h2>Hi, I'm Savir!</h2>
<div style="display: flex">
<div style="width: 60%">
<p>I'm a Canadian high school student interested in computer science, engineering, and related concepts. Until April 2024, I was working as a student researcher and software engineering intern at the University of Waterloo. Prior to that, I worked as a backend engineer intern at American Inn Ozark.</p>
<p>In my free time, you will find me developing software, creating new technologies, participating in competitive programming competitions, doing math, or reading. My skillset includes C/C++, Python, Java, web development, SQL, Git, Docker, and Linux. For more information, please view <a href="/resume">my résumé</a>.</p>

<p>I sometimes build custom web/desktop applications for individuals and companies. Please contact me at <a href="mailto:savirsinghwork@gmail.com">savirsinghwork@gmail.com</a> to get started with this.</p>

<p>This is my personal website. I use it to share my projects, public contact information, résumé, and blog posts with the world.</p>

<p>Some quick links that might be of interest to you are listed below:</p>
<ul style="font-size: 18px">
<li><a href="/resume">My résumé</a></li>
<li><a href="https://github.com/savirsingh">My GitHub</a></li>
<li><a href="https://mathcontestrepository.pythonanywhere.com/user/savir">My Math Contest Repository (MCR) profile</a></li>
</ul>
</div>
<div style="width: 32%">
<imagebox>
<img style="width: 100%" src="cubed.jpg">
<caption>My favourite image - an AI-generated artwork of an impossible design that initially appears to be plausible.</caption>
</imagebox>
</div>
</div>

<h2>My Latest Posts</h2>

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts limit:3 %}
<div>
  <h3 style="padding-bottom: 0; margin-bottom: 0; border-bottom: none"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <small>{{ post.content | number_of_words | divided_by: 200 | round }} minute read</small><br>
  <small>{{ post.excerpt }}</small>
</div><br><br>
{% endfor %}
