import React from "react";

const Blogs = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold p-4 rounded-t-lg">
        Context API কি?
      </h3>
      <p>
        <span className="font-semibold">উত্তর:</span> কনটেক্সট এপিআই হল একটি
        রিঅ্যাক্ট স্ট্রাকচার যা আমাদেরকে অনন্য বিবরণ আদান-প্রদান করতে সক্ষম করে
        এবং আমাদের অ্যাপ্লিকেশনের সমস্ত স্তর থেকে প্রপ-ড্রিলিং সমাধানে সহায়তা
        করে। রিঅ্যাক্ট কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট অ্যাপের জন্য কার্যকরভাবে
        গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস করা যেতে পারে। এটি
        "প্রপ ড্রিলিং" বা দাদা-দাদি থেকে শিশু থেকে পিতা-মাতার কাছে প্রপস সরানোর
        বিকল্প। কনটেক্সট এপিআই হল রিঅ্যাক্টের 16.3 সংস্করণে যোগ করা একটি (ধরনের)
        নতুন বৈশিষ্ট্য যা একজনকে পুরো অ্যাপ জুড়ে (বা এটির অংশ) হালকাভাবে এবং
        স্বাচ্ছন্দ্যে স্থিতি ভাগ করতে দেয়।
      </p>
      <h3 className="text-2xl font-semibold p-4 rounded-t-lg">
        Semantic Tag কি?
      </h3>
      <p>
        <span className="font-semibold">উত্তর:</span> শব্দার্থিক এইচটিএমএল
        ট্যাগগুলি সেই ট্যাগের বিষয়বস্তু সম্পর্কে তথ্য প্রদান করে যা একটি
        পৃষ্ঠায় তারা যেভাবে দেখায় তার বাইরে যায়৷ ট্যাগে আবদ্ধ পাঠ্যটি
        অবিলম্বে ব্রাউজার দ্বারা কিছু ধরণের কোডিং ভাষা হিসাবে স্বীকৃত হয়। সেই
        কোডটি রেন্ডার করার চেষ্টা করার পরিবর্তে, ব্রাউজার বুঝতে পারে যে আপনি
        একটি নিবন্ধ বা অনলাইন টিউটোরিয়ালের উদ্দেশ্যে কোডের উদাহরণ হিসাবে সেই
        পাঠ্যটি ব্যবহার করছেন৷
      </p>
      <h3 className="text-2xl font-semibold p-4 rounded-t-lg">
        Inline Elements and inline block elements difference?
      </h3>
      <p>
        <span className="font-semibold">Inline Elements:</span> Inline elements
        don’t start on a new line, they appear on the same line as the content
        and tags beside them. When it comes to margins and padding, browsers
        treat inline elements differently. We can add space to the left and
        right on an inline element, but we cannot add height to the top or
        bottom padding or margin of an inline element. Inline elements can
        actually appear within block elements.
      </p>

      <p>
        <span className="font-semibold">Inline-Block Elements:</span>{" "}
        Inline-block elements are similar to inline elements, except they can
        have padding and margins added on all four sides. We’ll have to declare
        display: inline-block in your CSS code. One common use for using
        inline-block is for creating navigation links horizontally.
      </p>
    </div>
  );
};

export default Blogs;
