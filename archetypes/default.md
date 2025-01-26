---
draft: true
date: '{{ .Date }}'
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
description: "Desc Text."
tags: ["first"]
# weight: 1
cover:
    image: "/dp.jpg" # image path/url
    alt: "Description" # alt text
    caption: "Caption" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
---
