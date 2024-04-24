# How to make sticky navigation

![Screenshot 2024-04-24 152135](https://github.com/Arifurrex/javascript-simple-project-2024/assets/48369328/f5298f07-f186-442a-bdaf-bac360642c0b)

[Link to index.html](index.html)
[Link to style.html](style.css)
[Link to script.js](script.js)

## JavaScript Code Explanation

```javascript
const navElement = document.querySelector('nav');
const navLink = navElement.querySelectorAll('a');
const navPosition = navElement.getBoundingClientRect().top;

// Adding a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Getting the current scroll position
    const scrollPosition = window.scrollY;
    
    // Making the navigation menu fixed by updating its top position
    navElement.style.top = scrollPosition + 'px';

    // Iterating over each navigation link
    navLink.forEach(link => {
        // Setting an offset for accurate positioning
        const offset = 10;
        
        // Selecting the corresponding section element based on the link's hash value
        const sectionElement = document.querySelector(link.hash);

        // Checking if the current scroll position is within the range of each section
        if (scrollPosition + offset > sectionElement.offsetTop && scrollPosition + offset < sectionElement.offsetTop + sectionElement.offsetHeight) {
            // Adding the "active" class to the link if it corresponds to the currently viewed section
            link.classList.add("active");
        } else {
            // Removing the "active" class from the link if it doesn't correspond to the currently viewed section
            link.classList.remove("active");
        }
    });
});

### getBoundingClientRect()
[`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) is a JavaScript method that returns the size of an element and its position relative to the viewport.

### link.hash
URL একটি ওয়েবপেজের জন্য একটি রাস্তার ঠিকানা যেখানে `link.hash` হলো একটি বিশেষ instruction / নির্দেশিকা যা ওয়েবপেজের নির্দিষ্ট এক অংশে যাওয়ার জন্য ব্যবহৃত হয়। 

যেমন, ঠিকানা `https://example.com/page#section1`, `#section1` হ'ল বিশেষ নির্দেশিকা / instruction। এটা বলবে , "হে Browser, এই পৃষ্ঠাটি খোলার সময়, 'সেকশন ১' নামক অংশে scroll করুন।" 

সুতরাং, JavaScript-এ `link.hash` এমন বিশেষ নির্দেশিকা যা পড়া/read  এবং কাজ/work  করার সাহায্য করে। আমরা এটি ব্যবহার করতে পারি আমাদের ওয়েবপেজ সমৃদ্ধ করার জন্য, *** যেমন যখন কোনও লিঙ্ক ক্লিক করা হয়, স্মুথলি পৃষ্ঠার বিভিন্ন অংশে স্ক্রল করার মতো বিশেষ কিছু করা। ***
