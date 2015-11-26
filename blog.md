---
layout: page
title: Blog
permalink: /blog/
---

<ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="blog-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        <a class="blog-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
    {% endfor %}
</ul>