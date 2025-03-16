document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const faqContainer = document.querySelector(".faq-container");

  // Define FAQs for each category
  const faqData = {
    membership: [
      {
        question: "چگونه می‌توان در بیالـرن عضو شد؟",
        answer:
          "شما می‌تواند از طریق گزینه ورود در گوشه صفحه و با وارد کردن شماره تماس یا ایمیل خود در بیالـرن عضو شوید.",
      },
      {
        question: "چطور می‌توانم دوره آموزشی مورد نظر خود را تهیه کنم؟",
        answer: "Yes, you can cancel anytime.",
      },
      {
        question: "رمز عبورم را فراموش کردم، باید چکار کنم؟",
        answer:
          "می‌توانید از صفحه ورود به سایت، پس از وارد کردن شماره تلفن یا ایمیل گزینه رمز عبورم را فراموش کردن را بزنید تا با رمز یکبار مصرف وارد بشوید.",
      },
      {
        question:
          "چطور می‌توانم دوره آموزشی مورد نظر خود را تهیه کنم؟چگونه می‌توانم نام و اطلاعات اکانت خودم را تغییر دهم؟",
        answer:
          "شما با استفاده از گزینه پروفایل من می‌توانید به پروفایل خود  و اطلاعات اکانت دسترسی داشته باشید.",
      },
      {
        question:
          "چطور می‌توانم دوره آموزشی مورد نظر خود را تهیه کنم؟چگونه می‌توانم از تخفیف های بیالـرن با خبر شوم؟",
        answer:
          "اطلاع‌رسانی های مربوط به جشنواره ها و تخفیفات در صفحات اجتماعی بیالـرن انجام می‌شوند. می‌توانید برای باخبر شدن از تخفیفات، از بخش ارتباط با ما شبکه های اجتماعی بیالـرن را دنبال کنید. ",
      },
      {
        question:
          "چطور می‌توانم دوره آموزشی مورد نظر خود را تهیه کنم؟آیا می‌توان به صورت رایگان و بدون پرداخت هزینه در دوره ای شرکت کرد؟",
        answer:
          "شما میتوانید بدون پرداخت هزینه در دور های رایگان یا 100 درصد تخفیف بیالـرن شرکت کنید.",
      },
      {
        question: " چگونه می‌توانم کد تخفیفم را استفاده کنم؟",
        answer:
          "در صفحه پرداخت هزینه دوره، در فیلد کد تخفیف، کد را وارد کنید تا تخفیف اعمال شود.",
      },
    ],
    payment: [
      {
        question: "چگونه میتوانم به دوره هایم دسترسی داشته باشم؟",
        answer:
          "شما می‌توانید از طریق داشبورد خود به دوره های خریداری شده دسترسی داشته باشید.",
      },
      {
        question: "آیا حداقل یا حداکثر زمانی برای گذراندن دوره وجود دارد؟",
        answer:
          "خیر!! حداقل زمانی برای گذراندن دوره وجود ندارد و با پشتیبانی مادام العمر بیالرن شما  می‌توانید تا زمانی که دوره از طرف مدرس فعال باشد به محتوای آن دسترسی داشته باشید و از ویژگی های تصحیح پروژه ها و دریافت مدرک استفاده کنید.",
      },
      {
        question:
          "آیا حداقل یا حداکثر زمانی برای گذراندن دوره وجود دارد؟آیا همراه با دوره آموزشی میتوان مدرک هم دریافت کرد؟",
        answer:
          "بله همراه با دوره بسته به نوع آن مدرک خاص همان دوره به شما اعطا می‌شود.",
      },
      {
        question:
          "آیا حداقل یا حداکثر زمانی برای گذراندن دوره وجود دارد؟آیا مدارک دانشگاهی و سازمانی به طور  رسمی توسط آن دانشگاه یا سازمان صادر می‌شوند؟",
        answer:
          "بله مدارک دوره های رسمی توسط خود آن دانشگاه یا سازمان صادر می‌شوند و برای هر شخص به امضای رئیس دانشگاه یا مسئول مربوطه می‌رسند.",
      },
    ],
    shipping: [
      {
        question:
          "اگر مشکل یا سوالی داشتم چطور میتوانم با پشتیبانی در تماس باشم؟",
        answer:
          "شما می‌توانید با آیکون چت گوشه سمت چپ صفحه به صورت آنلاین پشتیبانی بگیرید.",
      },
      {
        question: "پس از خرید دوره چگونه میتوانم آنرا تماشا کنم؟",
        answer:
          "شما می‌توانید پس از خرید دوره از طریق پروفایل بخش دوره های من به دوره هایتان دسترسی داشته باشید",
      },
      {
        question: "اگر لینک پخش یا دانلود ویدیو مشکل داشت، چه باید بکنم؟",
        answer:
          "هر گونه مشکلی در مورد دوره ها را از گزینه پشتیبانی به ما اطلاع دهید تا ما سریعا مشکل را پیگیری و رفع نماییم.",
      },
      {
        question: "آیا ممکن است ویدئویی به طور ناقص ضبط شده باشد؟",
        answer:
          "تمامی ویدئو ها  قبل از بارگذاری بازبینی می‌شوند. با این حال اگر احساس میکنید ویدئویی ناقص ضبط شده از طریق پشتیبانی به ما اطلاع دهید.",
      },
      {
        question: "آموزش ها تا چه زمانی در حساب کاربری اعتبار دارند؟",
        answer: "پس از خرید دوره، مشاهده و دریافت مدرک دوره محدودیتی ندارد.",
      },
      {
        question: "آیا امکان دریافت مدرک فیزیکی برای دوره وجود دارد؟",
        answer:
          "خیر، در حال حاض مدارک صادر شده توسط بیالـرن همگی بصورت آنلاین هستند.",
      },
      {
        question: "اگر درباره محتویات دوره سوالی داشتم، باید چه کنم؟",
        answer:
          "شما میتوانید سوالاتتان را در صورت امکان از خود مدرس بپرسید یا در صفحه اجتماعی وبسایت قرار دهید و از دیگر کاربران پاسخ بگیرید.",
      },
    ],
  };

  // Function to update the FAQ section with a smooth fade-in effect
  function updateFAQ(category) {
    faqContainer.style.opacity = "0"; // Start fade-out

    setTimeout(() => {
      faqContainer.innerHTML = ""; // Clear existing FAQs

      faqData[category].forEach(({ question, answer }) => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item");

        faqItem.innerHTML = `
            <div class="faq-question" aria-expanded="false">
              ${question}
              <img
                src="./assets/Images/faq/down-arrow.svg"
                class="arrow"
                alt="arrow icon"
              />
            </div>
            <div class="faq-answer">${answer}</div>
          `;

        faqContainer.appendChild(faqItem);
      });

      faqContainer.style.opacity = "1"; // Fade-in effect
      addAccordionListeners(); // Re-attach event listeners for toggling FAQ answers
    }, 300);
  }

  // Function to toggle FAQ answers with animation
  function addAccordionListeners() {
    document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", function () {
        const isActive = this.classList.contains("active");
        document.querySelectorAll(".faq-question").forEach((q) => {
          q.classList.remove("active");
          q.setAttribute("aria-expanded", "false");
          q.nextElementSibling.style.maxHeight = "0"; // Collapse all
        });

        if (!isActive) {
          this.classList.add("active");
          this.setAttribute("aria-expanded", "true");
          const answer = this.nextElementSibling;
          answer.style.maxHeight = answer.scrollHeight + 20 + "px"; // Expand the answer
        }
      });
    });
  }

  // Add event listeners to category buttons
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryButtons.forEach((b) => b.classList.remove("active")); // Remove active class
      this.classList.add("active"); // Set active class
      updateFAQ(this.getAttribute("data-category")); // Update FAQ content
    });
  });

  // Initialize with the first category
  updateFAQ("membership");
});
