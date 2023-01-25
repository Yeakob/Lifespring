import React, { useState } from "react";
import { AiFillTwitterCircle, AiOutlineClockCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiArrowBack, BiSliderAlt } from "react-icons/bi";
import Footer from "../Footer/Footer";
import { BsFilePlay } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
const SingleCourse = () => {
  const [accordion, setAccotdion] = useState(false);
  const btnHandle = (id) => {
    if (id === 1) {
      setAccotdion(!accordion);
    }

    if (id === 2) {
      setAccotdion(!accordion);
    }
    if (id === 3) {
      setAccotdion(!accordion);
    }
  };
  return (
    <>
      <div className="bg-green-700 w-full text-white text-left overflow-hidden">
        <div className="container mx-auto pt-14 pb-10 grid grid-cols-[35%_65%] w-full">
          <div className="mx-auto ">
            <div className="">
              <span className="mt-8 flex items-center">
                {" "}
                <BiArrowBack />
                Back to Course
              </span>
            </div>
            <p className="text-4xl mt-20 font-bold">Purify with Yahia Amin</p>
            <div className="flex gap-5">
              <p className="flex items-center">
                {" "}
                <span>
                  <BsFilePlay />
                </span>{" "}
                <span>37 lessons</span>
              </p>
              <p className="flex items-center">
                {" "}
                <AiOutlineClockCircle /> 15 hours
              </p>
              <p className="flex items-center">
                {" "}
                <BiSliderAlt /> All Levels
              </p>
            </div>
            <p className="mt-5">Share On</p>
            <div className="flex gap-3">
              <FaFacebook className="text-3xl bg-white rounded-full text-green-700" />
              <AiFillTwitterCircle className="text-3xl bg-white rounded-full text-green-700" />
              <AiFillTwitterCircle className="text-3xl bg-white rounded-full text-green-700" />
              <AiFillTwitterCircle className="text-3xl bg-white rounded-full text-green-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 grid grid-cols-[60%_40%] gap-x-10 relative">
        <div className="text-left pt-5 mx-auto">
          <p className="text-3xl font-bold text-blue-900 ml-10">
            About This course
          </p>
          <p className="ml-10 text-gray-500">
            <p>
              <b>এ থেকে মুক্তির উপায় কী তবে?&nbsp;</b>
            </p>
            <p>
              খারাপ অভ্যাসগুলো দূর করে নিজেকে ভালো মানুষ হিসেবে গড়ে তুলতে
              চাইবেন!
            </p>
            <p>
              চারপাশের নেগেটিভিটি থেকে মুক্তি নিয়ে জীবনে শান্তি খুঁজে পাবেন!
            </p>
            <p>
              শিখবেন কিভাবে স্পিরিচুয়ালিটির মাধ্যমে জীবনে স্ট্যাবিলিটি ফিরিয়ে
              আনা যায়।
            </p>
            <p>
              জীবনকে ছন্দ ফিরিয়ে, বেঁচে থাকার নতুন উদ্যমে নিজেকে নতুনভাবে গড়ে
              তুলতে পারবেন।
            </p>
            <p>
              খুঁজে পাবেন জীবনের লক্ষ্য এবং জীবনকে পুনরায় গড়ে তুলতে পারবেন
              সাইকোলজি এবং স্পিরিচুয়ালিটির মাধ্যমে।
            </p>
            <p>
              <span style={{ fontWeight: "400" }}>
                <br />
                🔳
              </span>{" "}
              <b>এই কোর্স থেকে যা শিখবেন-</b>
            </p>

            {/* copy */}
            <div className="tutor-course-content-content">
              <p>
                আপনার জীবনকে পুনরায় গড়ে তুলুন সাইকোলজি এবং স্পিরিচুয়ালিটির
                মাধ্যমে
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>জীবনকে </span>
                <b>মূল্যহীন </b>
                <span style={{ fontWeignt: "400" }}>লাগছে?&nbsp;</span>
                <br />
                <span style={{ fontWeignt: "400" }}>নিজেকে খুব </span>
                <b>তুচ্ছ </b>
                <span style={{ fontWeignt: "400" }}>মনে হয়?</span>
                <br />
                <span style={{ fontWeignt: "400" }}>চারপাশে </span>
                <b>টক্সিসিটি </b>
                <span style={{ fontWeignt: "400" }}>বেড়েই চলেছে?&nbsp;</span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  পরিবার ও বন্ধুদের সাথে দিনদিন
                </span>
                <b> সম্পর্কের অবনতি</b>
                <span style={{ fontWeignt: "400" }}> হচ্ছে?&nbsp;</span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  সব ছেড়ে দূরে কোথাও পালিয়ে যেতে ইচ্ছে করে?&nbsp;
                </span>
              </p>
              <p>
                <b>“বেঁচে থাকার কোনো মানেই নেই”&nbsp;</b>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  অনেকেই জীবনের প্রকৃত অর্থ খুঁজে পাননা, ভাবেন-
                </span>
              </p>
              <ul>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    “আমার জীবনের উদ্দেশ্য কী?”
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>“আমার লক্ষ্য কী?</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    “কেন সবাই আমাকে ব্যবহার করছে?”
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>“আমি এমন কেন?”</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    “কেউ আমার কেয়ার করে না!”
                  </span>
                </li>
              </ul>
              <p>
                <b>এমতাবস্থায় আপনাকে ঘিরে ধরে&nbsp;</b>
              </p>
              <ul>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>বিষণ্ণতা</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>হতাশা</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>ক্ষোভ</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>রাগ</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>বিরক্তি</span>
                </li>
              </ul>
              <p>
                <b>এ থেকে মুক্তির উপায় কী তবে?&nbsp;</b>
              </p>
              <p>
                এই সমস্যাগুলো থেকে দূরে না পালিয়ে, বরং সমাধান করে জীবনে শান্তি
                ফিরিয়ে আনতে আপনাদের জন্য লাইফস্প্রিংয়ের বিশেষ অনলাইন কোর্স{" "}
                <strong>“Purify with Yahia Amin”&nbsp; </strong>যার মাধ্যমে
                আপনি;
              </p>
              <p>
                খারাপ অভ্যাসগুলো দূর করে নিজেকে ভালো মানুষ হিসেবে গড়ে তুলতে
                চাইবেন!
              </p>
              <p>
                চারপাশের নেগেটিভিটি থেকে মুক্তি নিয়ে জীবনে শান্তি খুঁজে পাবেন!
              </p>
              <p>
                শিখবেন কিভাবে স্পিরিচুয়ালিটির মাধ্যমে জীবনে স্ট্যাবিলিটি ফিরিয়ে
                আনা যায়।
              </p>
              <p>
                জীবনকে ছন্দ ফিরিয়ে, বেঁচে থাকার নতুন উদ্যমে নিজেকে নতুনভাবে গড়ে
                তুলতে পারবেন।
              </p>
              <p>
                খুঁজে পাবেন জীবনের লক্ষ্য এবং জীবনকে পুনরায় গড়ে তুলতে পারবেন
                সাইকোলজি এবং স্পিরিচুয়ালিটির মাধ্যমে।
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  <br />
                  🔳
                </span>{" "}
                <b>এই কোর্স থেকে যা শিখবেন-</b>
              </p>
              <ul>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    স্পিরিচুয়ালিটি, এবং এটি কিভাবে জীবন আরও সুন্দর করে গড়ে তুলতে
                    পারে
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    স্পিরিচুয়ালিটির মাধ্যমে ট্রমা থেকে মুক্তিলাভ
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>শূন্যতা কাটিয়ে ওঠা</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    আত্ম-নিয়ন্ত্রণ এবং সেলফ-ওয়ার্থ বৃদ্ধি
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>কৃতজ্ঞতার অনুশীলন</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    বাবা-মায়ের সাথে সুন্দর সম্পর্ক গঠন
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    স্বামী/স্ত্রীর সাথে সুন্দর সম্পর্ক গঠন
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    সন্তানের সাথে সুন্দর সম্পর্ক গঠন
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    মন-মানসিকতার পরিশুদ্ধতা
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    হিংসা থেকে মুক্তিলাভ
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>ক্ষোভ ও রাগ দমন করা</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    নিজের প্রতি ভালোবাসা বৃদ্ধি ও নিজের দায়িত্ব নেয়া
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    নৈতিকতা ও স্পিরিচুয়ালিটির মাধ্যমে চরিত্র গঠন
                  </span>
                </li>
              </ul>
              <p>🔳 কোর্স ইন্সট্রাক্টর:</p>
              <p>
                লাইফস্প্রিং-এর লিড সাইকোলজিস্ট এবং চেয়ারম্যান{" "}
                <strong>
                  <a href="https://www.lifespringint.com/professional/psychologist/yahia-md-amin/">
                    ইয়াহিয়া মো. আমিন
                  </a>
                </strong>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>🔳 </span>
                <b>ইন্সট্রাক্টর প্রোফাইল:</b>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  Total Patients – 3500+
                </span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  Positive Patients Feedback – 84%
                </span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  Total YouTube Views – 2.1M&nbsp;
                </span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  Total Facebook followers – 206K
                </span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>🔳 </span>
                <b>দিন এবং সময়:</b>
                <br />
                ১৫+ ঘন্টায় ৩৪টি ভিডিও{" "}
                <span style={{ fontWeignt: "400" }}>
                  লেকচার (রেকর্ডেড), যেগুলো ২ মাস মেয়াদে যখন খুশি তখন এবং যতবার
                  খুশি ততবার দেখা যবে।
                </span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>&nbsp;🔳 </span>
                <b>“</b>Purify with Yahia Amin<b>” </b>
                <b>কোর্সে </b>
                <b></b>
                <b>কারা জয়েন করতে পারবেন?</b>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  – ১৩ বছর বা তার ঊর্ধ্বে কোনো বয়সের নারী এবং পুরুষ (উভয়)
                </span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  – দেশ বা দেশের বাইরের যেকোন প্রান্ত থেকে
                  <br />– যারা স্পিরিচুয়ালিটির, সাইকোলজি এবং ইসলামিক দর্শনের
                  সংমিশ্রণে নিজের জীবনকে আরও সুন্দর করে গড়ে তুলতে চান। কোর্সটি
                  তাদেরকে ভীষণভাবে উপকৃত করবে।{" "}
                </span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  &nbsp;🔳 <strong>কোর্সটি কাদের ক্ষেত্রে প্রযোজ্য নয়</strong>
                </span>
                <strong>?</strong>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  – যাদের স্পিরিচুয়ালিটির, সাইকোলজি এবং ইসলামিক দর্শনের প্রতি
                  আগ্রহ নেই অথবা কম, কোর্সটি তাদের জন্য প্রযোজ্য নয়।
                </span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>🔳 </span>
                <b>কোর্স ফি:</b>
                <span style={{ fontWeignt: "400" }}>&nbsp;</span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  ১০০০/- (মোট ১২ ঘন্টা, মেয়াদ ২ মাস)
                </span>
                <br />
                <span style={{ fontWeignt: "400" }}>✔️</span>
                <b> ১০০% ক্যাশব্যাক অফার!</b>
              </p>
              <p>
                <b>“</b>Purify with Yahia Amin<b>”&nbsp;</b>
                <span style={{ fontWeignt: "400" }}>
                  কোর্স সম্পন্ন করার পর যদি মনে করেন কোর্সটি থেকে আপনি উপকৃত
                  হননি, সেক্ষেত্রে আমাদের&nbsp; yahia@lifespringweb.com ইমেইলে
                  জানালে রয়েছে{" "}
                </span>
                <b>১০০% রিফান্ডের সুযোগ!</b>
              </p>
              <h5>
                <a
                  href="https://docs.google.com/document/d/1twrAmj4rBXekddgphTLZl3z7KIKGhO7354bA3-IlXGY/edit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Purify FAQ (কিছু সাধারণ প্রশ্ন-উত্তর)</b>
                </a>
              </h5>
              <p>&nbsp;</p>
              <h4>
                <a href="https://www.lifespringint.com/clients-review/">
                  Purify REVIEWS
                </a>
              </h4>
              <p>————————————————————————-</p>
              <p>
                Reshape your life using the power
                <br />
                of psychology and spirituality!
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  Do you feel like you are{" "}
                </span>
                <b>worthless</b>
                <span style={{ fontWeignt: "400" }}>?&nbsp;</span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  Are you surrounded by negative people?&nbsp;
                </span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  Are you struggling with your family?&nbsp;
                </span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  With your spouse? With your children?
                </span>
                <br />
                <span style={{ fontWeignt: "400" }}>
                  Do you feel like you just want to{" "}
                </span>
                <b>run away</b>
                <span style={{ fontWeignt: "400" }}> from all of these?</span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>“Life is </span>
                <b>completely meaningless</b>
                <span style={{ fontWeignt: "400" }}>!”</span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  Many of us struggle to find the{" "}
                </span>
                <b>true meaning of life.&nbsp;</b>
              </p>
              <ul>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    “Why am I even here?”
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    “What’s my purpose?”
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    “Why does everyone keep taking{" "}
                  </span>
                  <b>advantage</b>
                  <span style={{ fontWeignt: "400" }}> of me?”</span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    “Why am I like this?”&nbsp;
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>“No one </span>
                  <b>cares about me</b>
                  <span style={{ fontWeignt: "400" }}>!”</span>
                </li>
              </ul>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  When this happens, you get –&nbsp;
                </span>
              </p>
              <ul>
                <li>
                  <b>Annoyed</b>
                </li>
              </ul>
              <ul>
                <li>
                  <b>Angry</b>
                </li>
              </ul>
              <ul>
                <li>
                  <b>Frustrated</b>
                </li>
              </ul>
              <ul>
                <li>
                  <b>Depressed</b>
                </li>
              </ul>
              <p>
                <span style={{ fontWeignt: "400" }}>Does your life seem </span>
                <b>void </b>
                <span style={{ fontWeignt: "400" }}>and </span>
                <b>empty</b>
                <span style={{ fontWeignt: "400" }}>
                  ? You feel there is no one to take care of you, nobody loves
                  you, and relationships with people around you are
                  deteriorating day by day.
                </span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  Then it’s high time you should find the meaning of life and be
                  optimistic. But how?
                </span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  You are responsible for your own life.
                </span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>No one else.&nbsp;</span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>To help you </span>
                <b>master your life.</b>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>To help you </span>
                <b>be more productive.</b>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>To help you </span>
                <b>take control of your own mind.</b>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>To help you </span>
                <b>conquer at every step of your way.</b>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>To help you </span>
                <b>kick out all the negative energy from your life.&nbsp;</b>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>
                  We have introduced a course –{" "}
                </span>
                <b>“Purify with Yahia Amin.”</b>
                <span style={{ fontWeignt: "400" }}>&nbsp;</span>
              </p>
              <p>
                <span style={{ fontWeignt: "400" }}>The course is </span>
                <b>designed </b>
                <span style={{ fontWeignt: "400" }}>
                  especially for people like you who are struggling to find{" "}
                </span>
                <b>fulfillment in life</b>
                <span style={{ fontWeignt: "400" }}>.</span>
              </p>
              <p>
                🔳 <strong>Who can join “Purify with Yahia Amin”?</strong>
                <br />
                – Anyone who is 13 or above can join the course from anywhere in
                the world.
                <br />– The course is not recommended for those who are not or
                less interested in Spirituality, Psychology and Islamic
                Philosophy.
              </p>
              <p>
                <b>
                  <span style={{ fontWeignt: "400" }}>&nbsp;🔳 </span>What will
                  you learn from this (Purify with Yahia Amin) course?&nbsp;
                </b>
              </p>
              <ul>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Spirituality and how it can make life more soulful&nbsp;
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Spirituality for trauma recovery&nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Overcoming void and emptiness
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Increasing self-control and self-worth
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Practicing gratitude
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Improvement of relationships with parents
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Improvement of the relationship with spouse
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Improvement of relationships with children&nbsp;
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Purifying your mind and soul
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Getting rid of jealousy
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Overcoming grudge and anger
                  </span>
                </li>
                <li style={{ fontWeignt: "400" }}>
                  <span style={{ fontWeignt: "400" }}>
                    Practicing self-love and self-responsibility
                  </span>
                </li>
                <li>
                  <span style={{ fontWeignt: "400" }}>
                    Building character by practicing moral compass &amp;
                    spirituality
                    <br />
                  </span>
                </li>
              </ul>
              <h5>
                <a
                  href="https://docs.google.com/document/d/1twrAmj4rBXekddgphTLZl3z7KIKGhO7354bA3-IlXGY/edit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Purify FAQ (কিছু সাধারণ প্রশ্ন-উত্তর)</b>
                </a>
              </h5>
              <h4>
                <a href="https://www.lifespringint.com/clients-review/">
                  Purify REVIEWS
                </a>
              </h4>
            </div>
            {/* end */}
          </p>
          <div
            id="accordion-collapse"
            className="shadow p-5 overflow-hidden"
            data-accordion="collapse"
          >
            <h2 id="">
              <div
                type="button"
                onClick={() => btnHandle(1)}
                className="font-medium border-gray-200 rounded-t-xl"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Class 01</span>
                <span>
                  <svg
                    data-accordion-icon=""
                    className="float-right w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </h2>
            {accordion && (
              <div
                id="accordion-collapse-body-1"
                className=""
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="flex justify-between">
                  <p>Welcome to purify</p>
                  <div className="flex justify-between items-center">
                    <p>00:09:41</p>
                    <button className="pl-5 pr-5 pt-2 pb-2 bg-green-700 text-white font-bold">
                      preview
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            id="accordion-collapse"
            className="shadow p-5 overflow-hidden"
            data-accordion="collapse"
          >
            <h2 id="">
              <div
                type="button"
                onClick={() => btnHandle(2)}
                className="font-medium border-gray-200 rounded-t-xl"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Class 01</span>
                <span>
                  <svg
                    data-accordion-icon=""
                    className="float-right w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </h2>
            {accordion && (
              <div
                id="accordion-collapse-body-1"
                className=""
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="flex justify-between">
                  <p>Welcome to purify</p>
                  <div className="flex justify-between items-center">
                    <p>00:09:41</p>
                    <button className="pl-5 pr-5 pt-2 pb-2 bg-green-700 text-white font-bold">
                      preview
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            id="accordion-collapse"
            className="shadow p-5 overflow-hidden"
            data-accordion="collapse"
          >
            <h2 id="">
              <div
                type="button"
                onClick={() => btnHandle(3)}
                className="font-medium border-gray-200 rounded-t-xl"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Class 01</span>
                <span>
                  <svg
                    data-accordion-icon=""
                    className="float-right w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </h2>
            {accordion && (
              <div
                id="accordion-collapse-body-1"
                className=""
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="flex justify-between">
                  <p>Welcome to purify</p>
                  <div className="flex justify-between items-center">
                    <p>00:09:41</p>
                    <button className="pl-5 pr-5 pt-2 pb-2 bg-green-700 text-white font-bold">
                      preview
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          {/* card */}
          <div className="w-[400px]">
            <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-[-140px] sticky">
              <a href="#!" className="w-[400px]">
                <iframe
                  className="w-[100%]"
                  height="200"
                  src="https://www.youtube.com/embed/YZyM94ARGKU"
                  title="Spirituality for Wellbeing | Purify with Yahia Amin"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </a>
              <div className="p-5">
                {/* <a href="#!"></a> */}
                <div className="flex justify-between font-bold text-xl">
                  <p>Enrollment fee</p>
                  <p>৳ 1000</p>
                </div>
                <div className="flex justify-between text-xl">
                  <p className="text-green-500 ">Category</p>
                  <p>Spirituality</p>
                </div>
                <div className="flex justify-between text-xl">
                  <p className="text-green-500">Enrollment Validity</p>
                  <p>60 days</p>
                </div>
                <div className="flex justify-between pt-2 pb-3 font-bold">
                  <button className="bg-green-500 w-2/3 text-white  rounded pt-5 pb-5 text-xl">
                    Enroll now
                  </button>
                  <button className="bg-green-500 text-white  rounded pt-2 pb-2 pl-3 pr-3">
                    {" "}
                    <MdFavoriteBorder />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleCourse;
