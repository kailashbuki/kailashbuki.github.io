---
layout: page
title: Kailash Budhathoki
---

## News
🕵 We’re hiring GPU Performance Engineers to accelerate AI inference at scale for Amazon Bedrock! If you’re passionate about optimizing GPU workloads, building high-performance distributed inference solutions and unlocking the efficiency of state-of-the-art foundation models, we should talk. Send your CV to kaibud [at] amazon [dot] com.

## Bio

I am currently a Team Lead (Sr. Applied Scientist) in the AWS Deep Science for Systems and Services team, where I work at the intersection of machine learning and systems. Our team’s goal is to optimize foundation models for inference in [Amazon Bedrock](https://aws.amazon.com/bedrock/)—driving higher hardware utilization, lower latency, and lower cost. We develop algorithms (e.g., for quantization, speculative decoding, structured sparsity, accelerating multi-LoRA inference) and optimize systems (e.g., inference engines like vLLM, kernel tuning, identifying inference perf bottlenecks) that power GenAI workloads in Amazon Bedrock without compromising model accuracy. Learn more about our team's recent public works: {% cite park:2024:kdd-tutorial --file about %}{% cite kuebler:2025:proximal --file about %}.

I joined [Amazon Research Lablet Tübingen](https://www.amazon.science/latest-news/amazons-fourth-r-d-center-in-germany-is-dedicated-to-open-ai-research) (part of AWS AI) in 2020, where I developed algorithms / tools to help businesses explain complex cause-effect relationships underlying their business problems, and led cross-org effort within Amazon to launch them in production {% cite budhathoki:2022:rca-outliers-blog --file about %}{% cite budhathoki:2021:rca-dist-change-blog --file about %}{% cite goetz:2022:gcm-announcement-aws --file about %}.
<!-- Typical business problems involved effect estimation, and root cause analysis of changes / outliers. Some solutions are still actively used in production by -->
Businesses like Amazon Supply Chain and Amazon Ads actively use those solutions for effect estimation and root cause analysis of changes / outliers.
Those algorithmic solutions were also open-sourced to the Python [DoWhy](https://github.com/py-why/dowhy) library under a new package called [`gcm`](https://www.pywhy.org/dowhy/v0.9.1/user_guide/gcm_based_inference/introduction.html) {% cite goetz:2022:gcm-announcement-aws --file about %}{% cite  bloebaum:2023:aws-rca-blog --file about %}{% cite kiciman:2022:gcm-announcement-msr --file about %}. This collaboration with Microsoft Research led to a new GitHub organization, [PyWhy](https://www.pywhy.org/), with the mission to build an open source ecosystem for causal machine learning {% cite goetz:2022:gcm-announcement-aws --file about %}{% cite kiciman:2022:gcm-announcement-msr --file about %}.
<!--  -->
Briefly, I also led the cross-org science effort within Amazon to deliver bias mitigation solutions for the first family of Amazon's in-house multimodal foundation models, called Titan Multimodal Embeddings model and Amazon Titan Image Generation model, towards their re:Invent 2023 release {% cite kleindessner:2025:fairness_on_the_fly --file about %}{% cite barth:2023:amzn-titan-vision-announcement --file about %}{% cite ali:2023:fairness-eval --file about %}.

In 2020, I received the Doctoral Degree in Computer Science from the [Saarland University](https://saarland-informatics-campus.de/), where I conducted my doctoral research at the [Max Planck Institute for Informatics](https://www.mpi-inf.mpg.de/home). During my PhD, I also interned at the [Amazon Research Lablet Tübingen](https://www.amazon.science/latest-news/amazons-fourth-r-d-center-in-germany-is-dedicated-to-open-ai-research) for 2.5 months in the spring of 2019. Earlier, in 2015, I completed my Master’s degree in Computer Science with honours from the [Saarland University](https://saarland-informatics-campus.de/). Prior to that I worked as a Software Developer at ImmuneSecurity A/S (now [LogPoint](https://www.logpoint.com/en/)) between 2011 and 2013.
I studied Bachelor's Degree in Computer Engineering at the [Institute of Engineering, Pulchowk Campus](https://pcampus.edu.np/) in Nepal (2006-2010).

## Research

I have been fortunate to collaborate with great colleagues across diverse research topics, but the common thread is a customer-centric approach to machine learning. Despite shifts in direction, my work consistently aims to create ML systems that deliver real value for customers. See up-to-date publications on [Google Scholar](https://scholar.google.com/citations?hl=en&user=O5yaQbgAAAAJ&view_op=list_works&sortby=pubdate).

<u>Selected artifacts</u>
- [Block-Diagonal LoRA for Eliminating Communication Overhead in Tensor Parallel LoRA Serving](https://www.arxiv.org/pdf/2510.23346), NeurIPS, 2025<br/>
®️ Patent pending.
- [Mitigating Bias in Multimodal Models via Query Transformation](https://patents.google.com/patent/US12229179B1/en), US Patent, 2025<br/>
🚀 Launched in production
- [Evaluating the Fairness of Discriminative Foundation Models in Computer Vision](https://arxiv.org/pdf/2310.11867), AIES, 2023<br/>
🚀 Launched in production
- [AWS contributes novel causal machine learning algorithms to DoWhy Python library](https://www.amazon.science/blog/aws-contributes-novel-causal-machine-learning-algorithms-to-dowhy), Amazon Science Blog, 2022<br/>
🚀 Official release of `gcm` package in DoWhy w/ major refactoring of DoWhy codebase
- [New method identifies the root causes of statistical outliers](https://www.amazon.science/blog/new-method-identifies-the-root-causes-of-statistical-outliers), Amazon Science Blog, 2022<br/>
🎉 [Top-10 blog posts of 2022 by Amazon Science](https://www.amazon.science/blog/top-10-blog-posts-of-2022)
- [Causal structure-based root cause analysis of outliers](https://proceedings.mlr.press/v162/budhathoki22a/budhathoki22a.pdf), ICML, 2022<br/>
🚀 Launched in production
- [Explaining the root causes of unit-level changes](https://arxiv.org/pdf/2206.12986), arXiv, 2022<br/>
🚀 Launched in production
- [Why did the distribution change?](https://proceedings.mlr.press/v130/budhathoki21a/budhathoki21a.pdf), AISTAT, 2021<br/>
🚀 Launched in production

## References

{% bibliography --cited --file about %}

<!-- <h1><b>Hot Topics</b></h1>
<div class="posts">
  <h3>Are you an <b>expert</b> in optimizing foundation models for inference?<br/><a>Share your CV to kaibud@ (append amazon.com)!</a></h3>
  <!-- <h3>Are you interested in optimizing foundation models for inference?<br/><a href="https://sites.google.com/view/kdd-2024-tutorial-inf-opt-/home" target="_blank">Check out our KDD'24 tutorial!</a></h3> -->
<!-- </div> -->

<!-- <h1><b>Research Internship</b></h1>
<div class="posts">
  <h3>Are you a PhD researcher working on optimizing foundation models for inference? <br/><a>Share your CV to kaibud@ (append amazon.com)!</a></h3>
</div>

<h1><b>Blog Posts</b></h1>
<div class="posts">
  {% for post in site.posts %}
  <div class="post">
    <h3 class="post-title">
      <a href="{{ post.url | absolute_url }}">
        {{ post.title }}
      </a>
    </h3>
    <span class="post-date">{{ post.date | date_to_string }}</span>
  </div>
  {% endfor %}
</div>

<div class="footer">
  <span class="disclaimer">Disclaimer: The opinions expressed here are my own and do not necessarily represent those of current or past employers.</span>
</div> -->