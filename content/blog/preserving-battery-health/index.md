---
draft: false
date: '2025-01-19T01:10:32+05:30'
title: "Preserving Battery Health on Connected Devices"
description: "How I Preserve Battery Health on my devices with Battery Charge Limit"
tags: ["android", "device farm", "testing"]
cover:
    image: "cover.png" # image path/url
    alt: "Description" # alt text
    caption: "Caption" # display caption under cover
    relative: true # when using page bundles set this to true
    hidden: false # only hide on current single page
---

You want to be using the latest JDK for development. 
[Don't use Gradle toolchains](/gradle-toolchains-are-rarely-a-good-idea/), they'll needlessly force you to use old JDKs.
You can still [target and test on old JVM versions](/build-on-latest-java-test-through-lowest-java/) but develop with the latest and greatest.
Java and the JDK are literally built for this.

Locally this hasn't been a problem.
Homebrew (or your favorite equivalent) will keep your default JDK at the latest.
Keeping my GitHub actions up-to-date, however, frequently slips my mind.