# Repository Navigation

This repository contains the following files:

- [index.html](index.html)
- [style.css](style.css)
- [script.js](script.js)




### জাভাস্ক্রিপ্ট নেভিগেশন কার্যক্রমের ব্যাখ্যা

#### ধ্রুবক ইনিশিয়ালাইজেশন/Constants Initialization:
1. `const navList = document.querySelectorAll('a');`
   - document এর সব এ্যাঙ্কর (`<a>`) উপাদানগুলি নির্বাচিত এবং তাদেরকে `navList` ধ্রুবকে/const এ store করা হয়।

2. `const sectionElement = document.querySelectorAll('section');`
   - document এর সব `<section>` উপাদানগুলি নির্বাচিত এবং তাদেরকে `sectionElement` ধ্রুবকে/const সংরক্ষণ করা হয়।

#### ইভেন্ট লিস্টেনার সেটআপ / Event Listener Setup :
3. `navList.forEach(link=>{ ... });`
   - `forEach` পদ্ধতিটি ব্যবহার করে `navList` অ্যারের প্রতিটি এ্যাঙ্কর উপাদানের উপর পরিক্রমা করে।

4. `link.addEventListener('click',(e)=>{ ... });`
   - প্রতিটি এ্যাঙ্কর উপাদানের জন্য, এটি ক্লিক ইভেন্ট লিস্টেনার যুক্ত করে। যখন এ্যাঙ্করটি ক্লিক হয়, তখন লিসেনারের ভিতরে ফাংশনটি সম্পাদিত হয়।

#### ক্লিক ইভেন্ট হ্যান্ডলিং:
5. `const linkHash = document.querySelector(link.hash);`
   - ক্লিক করা এ্যাঙ্করের (`link`) হ্যাশ মানের অনুরূপ আইডি সংজ্ঞায়িত উপাদানটি নির্বাচন করে।

6. `removeBackgroundColorOnlink();`
   - এই ফাংশনটি নেভিগেশন লিঙ্কগুলির কোন সক্রিয় অবস্থা (পেছনের রং) সরাতে কল করা হয়।

7. `link.parentElement.classList.add("active");`
   - এই লাইনে ক্লিক করা এ্যাঙ্করের পিতা উপাদানে "active" ক্লাস যোগ করা হয়। এটি সংশ্লিষ্ট নেভিগেশন লিঙ্ক যে এক্টিভ হয়েছে তা ভিজুয়ালি ইন্ডিকেট করার জন্য ব্যবহৃত হতে পারে।

8. `hideSection();`
   - এই ফাংশনটি পৃষ্ঠায় সব সেকশনগুলি লুকানোর জন্য কল করা হয়।

9. `linkHash.classList.remove('hidden');`
   - এই লাইনে ক্লিক করা এ্যাঙ্করের সাথে সংশ্লিষ্ট সেকশনের "লুকানো" ক্লাসটি সরানো হয়, যাতে সেই সেকশন দেখানো হয়।

#### ইউটিলিটি ফাংশনগুলি:
10. `const removeBackgroundColorOnlink =()=>{ ... };`
    - এই ফাংশনটি প্রতিটি নেভিগেশন লিঙ্কের উপর পরিক্রমা করে এবং তাদের পিতা উপাদান থেকে "active" ক্লাসটি সরায়, প্রায় নেভিগেশনের ভিজুয়াল অবস্থানটি পুনঃস্থাপন করে।

11. `const hideSection =()=>{ ... };`
    - এই ফাংশনটি প্রতিটি `<section>` উপাদানের উপর পরিক্রমা করে এবং এগুলিতে "লুকানো" ক্লাসটি যোগ করে, পৃষ্ঠায়
