---
title: Blog setup
date: August 05, 2018
layout: Post
tags: [vue, meta]
---

This website way took too long and was unequivocally frustrating to set-up. But as with any experience, I think the process has taught me a lot about what I expect of myself when writing down my thoughts and how to present them. 

I've gone through several iterations of blogging-capable frameworks, and ultimately I have decided to build off Vuepress. My reasons are as follows:
* Offers Markdown support with extensions, which allowed me to embed Javascript animations/demos in between text. 
* The layout of the site is built in Vue, so I can easily leverage the Vue ecosystem, and promises flexibility for how the website can be customized.
* The default theme is simple, which reduces time I spend removing unwanted customizations. (A word about reducing vs increasing customization later) 
* SEO optimization from pre-rendered HTML.

You'll notice this post is divided into sections, one for each blog framework I explored. Each section includes a bit of history on the progress I made, and how it influenced the design of my current website.

I may change the prose of this post, depending on how concisely I can write about my experiences.

[[toc]]

## Hugo

Among other reasons to start writing, I looked up to my friend [Justin's blog](https://www.jkleong.com) as reference point. Justin had originally used Jekyll to help scaffold his website, then switched over to Hugo. He seemed pretty happy with it, noting a speedup in site building. So I too looked into Hugo. However, I have an ego and didn't want my website to appear an exact copy, so I set off looking for a theme I liked. 

I had a personal problem with this. There were themes that stood out to me, but at the same time, I wanted to call some theme my own. So I kept trying to modify the theme without breaking the core design/layout of it. This proved extremely difficult and tenuous for me; I always had some small issue, and I couldn't get the theme to show _exactly_ as I liked. I also didn't know CSS very well - enough to poke around and figure out gets toggled, but not enough to feel confident about refactoring entire layouts. So I was hung up on the details, and never really focused on the content itself. The consequence was that I became disinterested in finishing the blog.

Another important bit is that I wanted the flexibility to include JS in my posts. Around the time I started this endeavor I was learning about [VueJS](https://www.vuejs.org). I wanted to take advantage of a modern JS ecosystem such as Vue, with its component-focused design, in combination with Webpack, modern interface, what have you. So naturally I hated the idea of including dirty `<script>` tags, importing Vue libaries from CDNs, and the like in my simple-to-use Markdown file.

I find that Hugo is still a great resource, because it has a lot of tooling already built, and so the writer (if they are not nitpicky about the look) can prioritize content and not presentation, and has fast build times. That turned out not to be the case for me, but I liked how everything was well-structured, and you could easily find posts categorized by tag and date. 

## Vue blog demo

My desire to learn more about web design led me to search for existing work done with VueJS. I found [one such example](https://snipcart.com/blog/vuejs-blog-demo), created by Snipcart, that I thought really appealed to my aesthetics. The blog's theme felt clean, and the staggered animations of each rendered post was dynamic and responsive. It was striking because of these contrasting ideas, and so I set to to work modifying it to my taste.

For this project, my primary challenge was how to make small tweaks without breaking the remainder of the site's functionality. Each component, as it turns out, depends delicately on a coupled framework of Vue, SCSS, and HTML, and often was the case that multiple warnings would suddenly appear in the console. I'd like to think I perservered through that; I believed it was mostly due to lack of experience, though my frustrations kept my progress at bay.

The other major pain point came from the way the site designed communication between the front and back ends. As Snipcart writes in their post, an intentional feature was to adapt data to the application, rather than the converse. For the demo, the data came in the form of raw HTML strings in a static file. I said okay, let's try to not reinvent the wheel and build on top of this stack. But in order for me to replicate any modicum of markdown editing that I had with Hugo, I had to build a `gulp` pipeline which would watch for any changes in markdown files, parse it, and then send it off the frontend for display. So instead, it felt like building a data-processing layer on top of the already existing one, which seemed extraneous. Even then, it still didn't feel seamless; there was no watcher on the data source to hot-reload the page, meaning I'd still have to manually refresh the browser page each time I changed the post.


<mermaid>
graph LR
  A[post/*.md] -->|parse as YAML| B(JSON object)
  A -.->|Gulp watch| A
  subgraph data source
    B
  end
  B -->|extract JSON| C[display]
  subgraph frontend
    C[display]
  end
</mermaid>

This drew me to a fundamental question: to what end was I working towards? When the site didn't perform as I expected, I felt a nagging desire to figure out why; after all, this would be my own site, and I'd feel stupid if I didn't know my own project worked. On the other hand, I could just working and working on the theme, and the site would probably never get published with any actual content.

_Small digression: I'm sure many would agree that at this point taking a middle-ground would be a good resolution, and achieving that has always been my greatest struggle. Everyone has a different definition of where this middle-ground is, but I don't know where my own is. I hate the idea of giving things up. Nevertheless, it seems to be the case that I have to ask myself these meta-related questions to get myself out of this overthinking rut._

I think trying to answer that question helped me realize my own shortcomings. Not everyone is both a computer and design whiz, and I neither the energy nor the vision to build what I wanted. So instead I focused less on the big picture, and found myself enjoying building more when I was only making minimally-necessary changes that were immediately useful. I find that one really effective starting point is to start with as simple of a theme as possible; this way doesn't clutter the mind with preconceived notions about the design of the site, lowers the expectation for completeness, and makes the words the hero of the page (as it should be).

## Vuepress

Sometime later as I was browsing the Vue ecosystem I happened to stumble upon Vuepress. I think the timing was really close; Vuepress was created sometime in April 2018 and I started building off the Snipcart demo around May. I immediately saw that Vuepress resolved some of the issues I ran into with earlier technologies. 

On customization: I think working on the design of a product, whether it's cutting down existing or adding new fancy animations, is equally taxing and requires a vision for how the result should _eventually_ look. The difference is that, for an already-customized project, you are biased to its design, and that inevitably affects the satisfaction you achieve when customizing it to yourself. You will be happy with minimal changes (good), or you will be forever stuck trying to perfect a biased image (bad), or you will completely change it (in which case, you might as well start from scratch, so also bad). 

I liken it to painting a picture of a cat wielding Thor's hammer; you can draw the image yourself, which allows you to control shape, pose, and the size of the hammer. Or, you could take an existing image of a cat sleeping, which constrains where to place the hammer (there is no lack of creativity here, but it's hard to change the fact that the cat has its eyes closed).

I think Vuepress is not entirely an ideal case, either. I find that the development of the theme is very new, and I'm not sure how blog support will eventually look like. I do think it'll be worthwhile to figure out what happens to it, and I suspect I will want to use some of the to-be-built features. I plan to keep two different branches, `production`, which will be for modifying my own theme, `master`, which makes no deviations to the default theme and builds in userland as often as possible.
