---
permalink: /
title: "Jasper Zhang"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

My research focuses on mechanistic interpretability and methodological rigor in machine learning for the life sciences, using causal and information-theoretic tools to characterize what models learn and fail to learn, and rebuilding benchmarks and architectures on principled foundations. As a high school researcher at the Great Neck South Research Facility, I lead first/co-first authored work across six papers accepted to ICLR 2026 workshops and LION20, spanning mechanistic interpretability of genomic language models and in-context learning, information-theoretic foundations of multi-task learning, and more. Before my current ML work, I did research at Tufts University on lithium-ion battery chemistry (Leverick Group) and at Stony Brook University on small-molecule cancer therapeutics (Tonge Group).

The best way to reach me is by [email](mailto:jasperzhang1886@gmail.com).

## Publications

<div class="publications-list" markdown="0">
{% if site.publication_category %}
{% for category in site.publication_category %}
{% assign title_shown = false %}
{% for post in site.publications reversed %}
{% if post.category != category[0] %}{% continue %}{% endif %}
{% unless title_shown %}
<h3>{{ category[1].title }}</h3><hr />
{% assign title_shown = true %}
{% endunless %}
{% include archive-single.html %}
{% endfor %}
{% endfor %}
{% else %}
{% for post in site.publications reversed %}
{% include archive-single.html %}
{% endfor %}
{% endif %}
</div>

## CV

[Download CV as PDF]({{ base_path }}/files/Curriculum%20Vitae.pdf){: .btn .btn--primary}

### Education

**William A. Shine Great Neck South High School** — Great Neck, NY
*Sep. 2023 – Jun. 2027 (Class of 2027) · GPA: 100.5/100 (weighted)*

- **Coursework:** AP Calculus BC, AP Chemistry, AP Physics 2, AP US History, AP English Language.
- **Honors:** U.S. Earth Science Olympiad Top 45 National Finalist (2026); U.S. Presidential AI Challenge New York State Champion (2026); ASM International Special Research Award (2025); AIME Qualifier (2025); Long Island Young Mathematics Scholar Award (2024).

### Experience

**Machine Learning & Computational Biology Researcher** — *Great Neck South Research Facility, Great Neck, NY* · *2025 – Present*

- Lead first/second author across six research papers in machine learning for biology, on problems spanning mechanistic interpretability, multi-task learning theory, and molecular and genomic property prediction. Accepted to ICLR 2026 workshops with 16 total paper acceptances and 2 oral presentations (ICLR GEM Workshop, LION20).

**Electrochemistry Researcher** — *Tufts University, Leverick Group, Medford, MA* · *Summer 2025*

- Led an independent lithium-ion battery project under Prof. Leverick, designing cell chemistries and fabricating full cells from electrode preparation through assembly. Applied scanning electron microscopy (SEM) and related characterization techniques to analyze electrode/electrolyte microstructure and post-cycling degradation.

**Biochemistry Research Assistant** — *Stony Brook University, Tonge Group, Stony Brook, NY* · *Summer 2024*

- Contributed to ongoing development of small-molecule inhibitors targeting enzyme drug targets implicated in cancer pathways. Cultured E. coli for recombinant protein expression and gene extraction; performed spectrophotometry, plasmid isolation, column chromatography, and culture incubation.

### Technical Skills

- **Programming & ML:** Python, Java; PyTorch, NumPy, pandas, scikit-learn, Matplotlib, LaTeX; deep learning, GANs, CNNs, language models, multi-task learning, mechanistic interpretability.
- **Lab & Field Techniques:** SEM, spectrophotometry, plasmid isolation, column chromatography, cell culture, gene extraction, recombinant protein expression, lithium-ion battery fabrication.
- **Languages:** English (native), Mandarin Chinese.
