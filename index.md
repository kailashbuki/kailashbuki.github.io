---
layout: page
title: Kailash Budhathoki
---
## News
🚀 We’re hiring CUDA Performance Engineers to accelerate AI inference at scale for Amazon Bedrock! If you’re passionate about optimizing GPU workloads, building high-performance distributed inference solutions and unlocking the efficiency of state-of-the-art foundation models, we should talk. Send your CV to kaibud [at] amazon [dot] com.

## Bio

I am currently a Team Lead (Sr. Applied Scientist) in the AWS Deep Science for Systems and Services team, where I work at the intersection of machine learning and systems. Our team’s goal is to optimize foundation models for inference in [Amazon Bedrock](https://aws.amazon.com/bedrock/)—driving higher hardware utilization, lower latency, and lower cost. We develop algorithms (e.g., for quantization, speculative decoding, structured sparsity) and optimize systems (e.g., inference engines like vLLM, kernel tuning, identifying performance bottlenecks during inference) that power GenAI workloads in Amazon Bedrock without compromising model accuracy. Learn more about our team's recent public works: {% cite park:2024:kdd-tutorial --file about %}{% cite kuebler:2025:proximal --file about %}.

I joined [Amazon Research Lablet Tübingen](https://www.amazon.science/latest-news/amazons-fourth-r-d-center-in-germany-is-dedicated-to-open-ai-research) (part of AWS AI) in 2020, where I developed algorithms / tools to help businesses explain complex cause-effect relationships underlying their business problems, and led cross-org effort within Amazon to launch them in production {% cite budhathoki:2022:rca-outliers-blog --file about %}{% cite budhathoki:2021:rca-dist-change-blog --file about %}{% cite goetz:2022:gcm-announcement-aws --file about %}.
<!-- Typical business problems involved effect estimation, and root cause analysis of changes / outliers. Some solutions are still actively used in production by -->
Businesses like Amazon Supply Chain and Amazon Ads actively use those solutions for effect estimation and root cause analysis of changes / outliers.
Those algorithmic solutions were also open-sourced to the Python [DoWhy](https://github.com/py-why/dowhy) library under a new package called [`gcm`](https://www.pywhy.org/dowhy/v0.9.1/user_guide/gcm_based_inference/introduction.html) {% cite goetz:2022:gcm-announcement-aws --file about %}{% cite  bloebaum:2023:aws-rca-blog --file about %}{% cite kiciman:2022:gcm-announcement-msr --file about %}. This collaboration with Microsoft Research led to a new GitHub organization, [PyWhy](https://www.pywhy.org/), with the mission to build an open source ecosystem for causal machine learning {% cite goetz:2022:gcm-announcement-aws --file about %}{% cite kiciman:2022:gcm-announcement-msr --file about %}.
<!--  -->
Briefly, I also led the cross-org science effort within Amazon to deliver bias mitigation solutions for the first family of Amazon's in-house multimodal foundation models, called Titan Multimodal Embeddings model and Amazon Titan Image Generation model, towards their re:Invent 2023 release {% cite kleindessner:2025:fairness_on_the_fly --file about %}{% cite barth:2023:amzn-titan-vision-announcement --file about %}{% cite ali:2023:fairness-eval --file about %}.

In 2020, I received the Doctoral Degree in Computer Science from the [Saarland University](https://saarland-informatics-campus.de/), where I conducted my doctoral research at the [Max Planck Institute for Informatics](https://www.mpi-inf.mpg.de/home). During my PhD, I also interned at the [Amazon Research Lablet Tübingen](https://www.amazon.science/latest-news/amazons-fourth-r-d-center-in-germany-is-dedicated-to-open-ai-research) for 2.5 months in the spring of 2019. Earlier, in 2015, I completed my Master’s degree in Computer Science with honours from the [Saarland University](https://saarland-informatics-campus.de/). Prior to that I worked as a Software Developer at ImmuneSecurity A/S (now [LogPoint](https://www.logpoint.com/en/)) between 2011 and 2013.
I studied Bachelor's Degree in Computer Engineering at the [Institute of Engineering, Pulchowk Campus](https://pcampus.edu.np/) in Nepal (2006-2010).

## Contact

kailash [dot] buki [at] gmail [dot] com

## Publications

See my up-to-date publications on [Google Scholar](https://scholar.google.com/citations?hl=en&user=O5yaQbgAAAAJ&view_op=list_works&sortby=pubdate).

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