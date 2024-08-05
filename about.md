---
layout: page
title: Kailash Budhathoki
permalink: /about/
---

## Contact

- Work: `kaibud@`       (append amazon.com)
- Home: `kailash.buki@` (append gmail.com)


## Bio

Kailash currently leads a science team on optimizing foundation models for inference at Amazon Web Services (AWS) {% cite park:2024:kdd-tutorial --file about %}.

He joined [Amazon Research Lablet Tübingen](https://www.amazon.science/latest-news/amazons-fourth-r-d-center-in-germany-is-dedicated-to-open-ai-research) (part of AWS AI) in 2020, where he developed algorithms / tools to help businesses explain complex cause-effect relationships underlying their business problems, and led cross-org effort within Amazon to launch them in production {% cite budhathoki:2022:rca-outliers-blog budhathoki:2021:rca-dist-change-blog goetz:2022:gcm-announcement-aws --file about %}.
<!-- Typical business problems involved effect estimation, and root cause analysis of changes / outliers. Some solutions are still actively used in production by -->
Businesses like Amazon Supply Chain and Amazon Ads actively use those solutions for effect estimation and root cause analysis of changes / outliers.
Those algorithmic solutions were also open-sourced to the Python [DoWhy](https://github.com/py-why/dowhy) library under a new package called [`gcm`](https://www.pywhy.org/dowhy/v0.9.1/user_guide/gcm_based_inference/introduction.html) {% cite goetz:2022:gcm-announcement-aws bloebaum:2023:aws-rca-blog kiciman:2022:gcm-announcement-msr --file about %}. This collaboration with Microsoft Research led to a new GitHub organization, [PyWhy](https://www.pywhy.org/), with the mission to build an open source ecosystem for causal machine learning {% cite goetz:2022:gcm-announcement-aws kiciman:2022:gcm-announcement-msr --file about %}.
<!--  -->
Briefly he also led the cross-org science effort within Amazon to deliver bias mitigation solutions for Amazon's in-house multimodal foundation models, called Titan Multimodal Embeddings model and Amazon Titan Image Generation model, towards their re:Invent 2023 release {% cite barth:2023:amzn-titan-vision-announcement ali:2023:fairness-eval --file about %}.

He has a PhD in Computer Science from the [Max Planck Institute for Informatics](https://www.mpi-inf.mpg.de/home) and a Master of Computer Science with honours from the [Saarland University](https://saarland-informatics-campus.de/).


## References

{% bibliography --cited --file about %}
