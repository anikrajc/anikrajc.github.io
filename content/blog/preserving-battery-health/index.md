---
draft: false
date: '2025-01-19T01:10:32+05:30'
title: "Preserving Battery Health on Connected Devices"
description: "My Journey to Preserve Battery Health on my always connected devices"
tags: ["android", "device farm", "testing"]
cover:
    image: "cover.webp" # image path/url
    alt: "Description" # alt text
---

If you’re someone who frequently benchmarks app performance, you know how crucial it is to use a real device instead of an emulator. This means that for days, weeks, or even months, your phone’s battery is constantly at full charge, which can cause long-term damage if left unchecked. I ran into this issue when I started noticing physical changes in my Pixel 4a after using it for performance benchmarking purposes. This blog post shares my experience with this problem and how I found a solution to save my device's battery.

## The Beginning of the Battery Problem

As someone who works on performance optimizations and benchmarking, I always have a few devices plugged in 24/7 to run tests on them. This way, I can get real performance data, which is more reliable than using emulators. However, I quickly learned that this practice had some unintended consequences.

One day, I noticed my Pixel 4a wasn’t lying flat on the table like it usually did. The buttons became harder to press, and I shrugged it off at first. But soon after, the buttons became nearly unusable, and the screen began to separate from the body. I realized something was seriously wrong. It felt like a ticking time bomb, either ready to break the device or possibly even catch fire. After giving it some thought, I decided it was time to replace the battery before things got any worse.

![name](./thisisfine.webp#center)


## A Simple Battery Replacement, But More Concerns

Replacing the battery was surprisingly easy, but it left me wondering: *What if this happens again?* I couldn’t ignore the fact that I’d been overcharging my device for too long. So, I set out to find a way to protect my phone's new battery and prevent this from happening in the future.

## The Search for a Solution

I tried several methods to limit the charging, but most of them didn’t work as expected. That's when I discovered an app called **[Battery Charge Limit](https://github.com/sriharshaarangi/BatteryChargeLimit)**. It's a handy tool that requires root access, but it gives you the ability to set both low and high charging thresholds. This means your phone will charge up to the high threshold and discharge down to the low threshold, which prevents it from staying at 100% charge for too long — a common culprit behind battery degradation.

After testing a few different configurations, I landed on a 40/70 threshold, which seemed to work well for me. This setup keeps the battery from getting too close to 100% or discharging too low, maintaining it within an optimal range for longevity.

While the Battery Charge Limit app worked well, I found that I needed to do one more thing to get it running smoothly: adjusting [custom control file options](https://github.com/sriharshaarangi/BatteryChargeLimit/issues/204#issuecomment-922831806). These options can be found on the app’s GitHub page. Once I made this adjustment, the app worked flawlessly, automatically managing the charging and discharging between the thresholds.

## A Built-In Feature for Newer Pixels

For those with newer Pixel devices, like my Pixel 7, there’s good news. Google has introduced a native **[Battery Saver feature](https://www.gsmarena.com/google_pixels_got_80_battery_charge_limit_and_battery_bypass_with_the_latest_update-news-65708.php)** that can limit your phone's charging to 80%. This feature is part of the latest updates, and it’s a great option for users who want to protect their battery health without installing third-party apps.

With this feature, you won’t need to root your phone or install anything extra; you can simply enable the setting, and your phone will manage its charge automatically. This is a fantastic addition, especially for those who don’t want to dive into third-party solutions.

![name](./charging-optimisation.webp#center)

## A Disappointing Setback: F-Droid Link is showing 404 now

Recently, I noticed that the **Battery Charge Limit** app’s F-Droid link is returning a 404 error. I’m hoping this issue is due to crashes on specific devices and not due to any serious security concerns. Nevertheless, if you’re unable to find the app through F-Droid, you can still access it via [GitHub](https://github.com/sriharshaarangi/BatteryChargeLimit). But if you know of any alternative methods or apps to limit your phone's charging, I’d love to hear about them in the comments.

## Final Thoughts

Battery health is something we often overlook, especially when we’re in the habit of leaving devices plugged in all the time. But with the right tools and a little knowledge, we can extend the life of our devices and prevent potential damage. By using apps like **Battery Charge Limit** or taking advantage of built-in features like Google’s 80% battery cap for newer Pixels, you can ensure your phone’s battery stays healthy for much longer.

If you’ve been facing similar issues or have any tips on limiting battery charge, feel free to share them in the comments.
