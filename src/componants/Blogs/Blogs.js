import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h2 className='blogs-Ques'>Ques-1: What is difference between Javascript and nodejs ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> জাভাস্ক্রিপ্ট হল একটি হালকা ওজনের, ক্রস-প্ল্যাটফর্ম, ব্যাখ্যা করা স্ক্রিপ্টিং প্রোগ্রামিং ভাষা যা প্রাথমিকভাবে ক্লায়েন্ট-সাইড স্ক্রিপ্টিংয়ের জন্য ব্যবহৃত হয়। এটি জাভা এবং এইচটিএমএল উভয়ের মধ্যেই তৈরি। অন্যদিকে, নোড। js হল Google Chrome V8 ইঞ্জিনের উপর ভিত্তি করে একটি সার্ভার-সাইড স্ক্রিপ্টিং ভাষা, জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারেই চালানো যেতে পারে কিন্তু আমরা নোডজেএস-এর সাহায্যে ব্রাউজারের বাইরে জাভাস্ক্রিপ্ট চালাতে পারি, কিছু জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক হল RamdaJS, TypedJS, ইত্যাদি,
                কিন্তু কিছু Nodejs মডিউল হল Lodash, express ইত্যাদি। এই মডিউলগুলি npm থেকে আমদানি করা হয়, Javascript ব্যবহার করা হয় ফ্রন্টএন্ড ডেভেলপমেন্টে কিন্তু Nodejs ব্যবহার করা হয় সার্ভার-সাইড ডেভেলপমেন্টে, এটি ECMA স্ক্রিপ্টের আপগ্রেড সংস্করণ যা Chrome-এর V8 ইঞ্জিন ব্যবহার করে। C++ এ লেখা কিন্তু Nodejs C, C++ এবং Javascript এ লেখা।
            </h2>
            <h2 className='blogs-Ques'>Ques-2: When should we use nodejs and mongodb ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> নোড। js প্রাথমিকভাবে নন-ব্লকিং, ইভেন্ট-চালিত সার্ভারগুলির জন্য ব্যবহৃত হয়, এর একক-থ্রেড প্রকৃতির কারণে। এটি প্রথাগত ওয়েব সাইট এবং ব্যাক-এন্ড API পরিষেবাগুলির জন্য ব্যবহৃত হয়, তবে এটি রিয়েল-টাইম, পুশ-ভিত্তিক আর্কিটেকচারের কথা মাথায় রেখে ডিজাইন করা হয়েছিল এবং আমাদের মঙ্গোডবি ব্যবহার করা উচিত যখন আমাদের সংগ্রহের মধ্যে আলাদা নথি হিসাবে ডেটা অবজেক্ট সংরক্ষণের প্রয়োজন হয়। একটি ঐতিহ্যগত রিলেশনাল ডাটাবেসের কলাম এবং সারিগুলিতে ডেটা</h2>
            <h2 className='blogs-Ques'>Ques-3 : What is difference between SQL and NoSQL ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> sql এবং nosql-এর মধ্যে কিছু পার্থক্য রয়েছে যেমন: SQL হল রিলেশনাল ডেটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS) কিন্তু NoSQL হল অ-রিলেশনাল বা ডিস্ট্রিবিউটেড ডাটাবেস সিস্টেম, SQL ডাটাবেস স্থির বা স্ট্যাটিক বা পূর্বনির্ধারিত স্কিমা আছে কিন্তু NoSQL-এর গতিশীল ডেটাবেস স্কিমা নেই, অনুক্রমিক ডেটা সঞ্চয়স্থানের জন্য উপযুক্ত কিন্তু NoSQL ডাটাবেসগুলি অনুক্রমিক ডেটা সঞ্চয়ের জন্য সবচেয়ে উপযুক্ত,SQL ডেটাবেসগুলি জটিল প্রশ্নের জন্য সবচেয়ে উপযুক্ত কিন্তু NoSQL ডেটাবেসগুলি জটিল প্রশ্নের জন্য এতটা ভাল নয়, SQL উল্লম্বভাবে স্কেলযোগ্য কিন্তু NoSQL অনুভূমিকভাবে স্কেলযোগ্য এবং SQL ACQL-এর বৈশিষ্ট্য অনুসরণ করে CAP (সঙ্গতি, প্রাপ্যতা, পার্টিশন সহনশীলতা)</h2>
            <h2 className='blogs-Ques'>Ques-4 : What is the purpose of JWT and how does it work ?</h2>
            <h2 className='blogs-Ans'> <p><span>Ans:</span>JWT (JSON ওয়েব টোকেন) এর উদ্দেশ্য হল একটি ওপেন স্ট্যান্ডার্ড যা দুটি পক্ষের মধ্যে নিরাপত্তা তথ্য ভাগ করে নেওয়ার জন্য ব্যবহৃত হয় একটি ক্লায়েন্ট এবং অন্যটি একটি সার্ভার। প্রতিটি JWT-এ এনকোড করা JSON অবজেক্ট রয়েছে, যার মধ্যে দাবির সেট রয়েছে। টোকেন ইস্যু করার পরে দাবিগুলি পরিবর্তন করা যাবে না তা নিশ্চিত করার জন্য একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে JWTs স্বাক্ষরিত হয়।</p>

               <p> এটি একটি JSON স্ট্রিং হিসাবে প্রদর্শিত হয়, সাধারণত JWT কমপ্যাক্ট রাখার জন্য এক ডজনের বেশি ক্ষেত্র থাকে না। এই তথ্যটি সাধারণত সার্ভার দ্বারা যাচাই করার জন্য ব্যবহার করা হয় যে ব্যবহারকারীর কাছে তাদের অনুরোধ করা ক্রিয়া সম্পাদনের অনুমতি রয়েছে।</p>

                <p>JWT-এর জন্য কোনও বাধ্যতামূলক দাবি নেই, তবে ওভারলেয়িং মান দাবিগুলিকে বাধ্যতামূলক করে তুলতে পারে। উদাহরণস্বরূপ, OAuth2.0-এর অধীনে বাহক অ্যাক্সেস টোকেন হিসাবে JWT ব্যবহার করার সময়, iss, sub, aud, এবং exp উপস্থিত থাকতে হবে। কিছু অন্যদের চেয়ে বেশি সাধারণ।</p>

                <p> স্বাক্ষর নিশ্চিত করে যে টোকেন পরিবর্তন করা হয়নি। যে পক্ষ JWT তৈরি করে তারা শিরোনাম এবং পেলোডকে একটি গোপনীয়তার সাথে স্বাক্ষর করে যা ইস্যুকারী এবং প্রাপক উভয়ের কাছেই পরিচিত, অথবা শুধুমাত্র প্রেরকের কাছে পরিচিত একটি ব্যক্তিগত কী দিয়ে। যখন টোকেন ব্যবহার করা হয়, তখন গ্রহীতা পক্ষ যাচাই করে যে শিরোনাম এবং পেলোড স্বাক্ষরের সাথে মেলে।</p>
               
            </h2>
        </div>
    );
};

export default Blogs;